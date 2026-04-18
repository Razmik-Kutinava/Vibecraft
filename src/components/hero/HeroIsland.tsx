import { lazy, Suspense, useEffect, useState } from "react";

const HeroScene = lazy(() => import("./HeroScene"));

const DESKTOP = "(min-width: 1024px)";

/**
 * Десктоп: лениво тянем Three.js только при ширине ≥1024px.
 * Мобилка: null, без загрузки R3F-чанка.
 */
export default function HeroIsland() {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP);
    const apply = () => setDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  if (!desktop) {
    return null;
  }

  return (
    <Suspense
      fallback={
        <div
          className="hero-canvas-root hero-canvas-root--placeholder"
          aria-hidden="true"
        />
      }
    >
      <HeroScene />
    </Suspense>
  );
}
