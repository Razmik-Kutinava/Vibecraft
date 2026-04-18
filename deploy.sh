#!/usr/bin/env bash
set -e

HOST="31.31.196.214"
USER="u3484780"
REMOTE_PATH="/www/vibecraft.su/public_html/"

echo "==> Building..."
npm run build

echo "==> Uploading to $HOST..."
rsync -avz --delete --progress \
  -e "ssh -o StrictHostKeyChecking=no" \
  dist/ \
  "$USER@$HOST:$REMOTE_PATH"

echo "==> Done! https://vibecraft.su"
