import SftpClient from "ssh2-sftp-client";
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Загружаем .env.deploy если есть
const envFile = new URL(".env.deploy", import.meta.url).pathname.slice(1);
if (fs.existsSync(envFile)) {
  fs.readFileSync(envFile, "utf8").split("\n").forEach(line => {
    const [k, v] = line.split("=");
    if (k && v) process.env[k.trim()] = v.trim();
  });
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const CONFIG = {
  host: "31.31.196.214",
  port: 22,
  username: "u3484780",
  password: process.env.DEPLOY_PASS,
  localPath: path.join(__dirname, "dist"),
};

if (!CONFIG.password) {
  console.error("Нужен пароль: DEPLOY_PASS=xxx node deploy.mjs");
  process.exit(1);
}

async function uploadDir(sftp, localDir, remoteDir, isRoot = false) {
  if (!isRoot) {
    const exists = await sftp.exists(remoteDir);
    if (!exists) await sftp.mkdir(remoteDir);
  }
  const entries = fs.readdirSync(localDir, { withFileTypes: true });
  for (const entry of entries) {
    const localPath = path.join(localDir, entry.name);
    const remotePath = `${remoteDir}/${entry.name}`;
    if (entry.isDirectory()) {
      await uploadDir(sftp, localPath, remotePath);
    } else {
      await sftp.put(localPath, remotePath);
      process.stdout.write(`  ✓ ${entry.name}\n`);
    }
  }
}

console.log("==> Building...");
execSync("npm run build", { stdio: "inherit" });

console.log("\n==> Connecting to server...");
const sftp = new SftpClient();
await sftp.connect({ host: CONFIG.host, port: CONFIG.port, username: CONFIG.username, password: CONFIG.password });

// Определяем реальный путь к public_html
const candidates = [
  "/www/vibecraft.su/public_html",
  `/home/${CONFIG.username}/www/vibecraft.su/public_html`,
  `/var/www/${CONFIG.username}/data/www/vibecraft.su`,
  `/home/${CONFIG.username}/public_html`,
];
let remotePath = null;
for (const p of candidates) {
  if (await sftp.exists(p)) { remotePath = p; break; }
}
if (!remotePath) {
  // Показываем что есть в home
  const home = await sftp.list(".");
  console.error("Не найден public_html. Содержимое home:", home.map(f => f.name));
  await sftp.end();
  process.exit(1);
}
console.log(`==> Remote path: ${remotePath}`);

console.log("==> Uploading dist/ ...");
await uploadDir(sftp, CONFIG.localPath, remotePath, true);
await sftp.end();

console.log("\n==> Done! https://vibecraft.su");
