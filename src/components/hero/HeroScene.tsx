import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";

const NEON = "#a3f559";
const NEON_DIM = "#1aff6e";

function useMotionFactor() {
  if (typeof window === "undefined") return 1;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0.25 : 1;
}

function motionFactor() {
  if (typeof window === "undefined") return 1;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0.25 : 1;
}

function NeonRing({
  radius,
  tube,
  rotationX,
  rotationY,
  speed,
}: {
  radius: number;
  tube: number;
  rotationX: number;
  rotationY: number;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const motion = useMotionFactor();
  useFrame((_, delta) => {
    if (!ref.current) return;
    const d = delta * motion;
    ref.current.rotation.z += d * speed;
    ref.current.rotation.x += d * speed * 0.3;
  });
  return (
    <mesh ref={ref} rotation={[rotationX, rotationY, 0]}>
      <torusGeometry args={[radius, tube, 2, 64]} />
      <meshBasicMaterial color={NEON} wireframe />
    </mesh>
  );
}

function CoreCrystal() {
  const meshRef = useRef<THREE.Mesh>(null);
  const motion = useMotionFactor();

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const d = delta * motion;
    meshRef.current.rotation.y += d * 0.42;
    meshRef.current.rotation.x += d * 0.14;
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1.4, 2]} />
      <meshStandardMaterial
        color={NEON}
        emissive={NEON_DIM}
        emissiveIntensity={0.45}
        metalness={0.5}
        roughness={0.25}
      />
    </mesh>
  );
}

function WireOctahedron() {
  const ref = useRef<THREE.Mesh>(null);
  const motion = useMotionFactor();
  useFrame((_, delta) => {
    if (!ref.current) return;
    const d = delta * motion;
    ref.current.rotation.y -= d * 0.25;
    ref.current.rotation.z += d * 0.1;
  });
  return (
    <mesh ref={ref} scale={2.1}>
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color={NEON} wireframe opacity={0.2} transparent />
    </mesh>
  );
}

function FloatingDots() {
  const ref = useRef<THREE.Points>(null);
  const motion = useMotionFactor();

  const dotGeometry = useMemo(() => {
    const count = 48;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.8 + Math.random() * 1.2;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.08 * motion;
  });

  return (
    <points ref={ref} geometry={dotGeometry}>
      <pointsMaterial color={NEON} size={0.045} transparent opacity={0.6} />
    </points>
  );
}

function ScrollTilt({ children }: { children: ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const motion = useMotionFactor();
  useFrame(() => {
    if (!group.current) return;
    const y = typeof window !== "undefined" ? window.scrollY : 0;
    group.current.rotation.z = y * 0.00006 * motion;
  });
  return <group ref={group}>{children}</group>;
}

const DRAG_SENS = 0.0055;
const AUTO_SPEED = 0.22;

function DragRotation({ children }: { children: ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  const { gl } = useThree();
  const motion = useMotionFactor();
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const euler = useRef({ x: 0, y: 0 });
  const autoY = useRef(0);

  useEffect(() => {
    const el = gl.domElement;
    const root = el.parentElement;

    const setDragging = (on: boolean) => {
      dragging.current = on;
      root?.classList.toggle("is-dragging", on);
    };

    const onDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      setDragging(true);
      last.current = { x: e.clientX, y: e.clientY };
      el.setPointerCapture(e.pointerId);
    };

    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      const dx = e.clientX - last.current.x;
      const dy = e.clientY - last.current.y;
      last.current = { x: e.clientX, y: e.clientY };
      const m = motionFactor();
      euler.current.y += dx * DRAG_SENS * m;
      euler.current.x += dy * DRAG_SENS * m;
      const limit = Math.PI * 0.45;
      euler.current.x = Math.max(-limit, Math.min(limit, euler.current.x));
    };

    const onUp = (e: PointerEvent) => {
      if (!dragging.current) return;
      setDragging(false);
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        /* already released */
      }
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("lostpointercapture", onUp);

    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("lostpointercapture", onUp);
      root?.classList.remove("is-dragging");
    };
  }, [gl]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const d = delta * motion;
    if (!dragging.current) {
      autoY.current += d * AUTO_SPEED;
    }
    groupRef.current.rotation.y = euler.current.y + autoY.current;
    groupRef.current.rotation.x = euler.current.x;
  });

  return <group ref={groupRef}>{children}</group>;
}

function Scene() {
  return (
    <ScrollTilt>
      <DragRotation>
        <ambientLight intensity={0.55} />
        <pointLight position={[4, 4, 4]} intensity={8} color={NEON} />
        <pointLight position={[-4, -3, -2]} intensity={4} color={NEON_DIM} />
        <pointLight position={[0, 2, 6]} intensity={2.5} color="#ffffff" />

        <CoreCrystal />
        <WireOctahedron />
        <FloatingDots />
        <NeonRing radius={2.4} tube={0.006} rotationX={Math.PI / 3} rotationY={0} speed={0.55} />
        <NeonRing
          radius={2.4}
          tube={0.006}
          rotationX={-Math.PI / 4}
          rotationY={Math.PI / 2}
          speed={-0.38}
        />
        <NeonRing
          radius={2.4}
          tube={0.006}
          rotationX={Math.PI / 6}
          rotationY={Math.PI / 3}
          speed={0.48}
        />
      </DragRotation>
    </ScrollTilt>
  );
}

export default function HeroScene() {
  return (
    <div className="hero-canvas-root">
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 42 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "default",
        }}
        style={{ width: "100%", height: "100%", display: "block" }}
        dpr={[1, 1.75]}
        onCreated={({ gl }) => {
          const el = gl.domElement;
          el.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
          });
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
