import { lazy, Suspense, useEffect, useRef, useState } from "react";

const HeroScene = lazy(() => import("./HeroScene"));

const DESKTOP = "(min-width: 1024px)";

function defer(callback: () => void) {
  const ric =
    typeof window !== "undefined" && "requestIdleCallback" in window
      ? (
          window as Window & {
            requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number;
          }
        ).requestIdleCallback
      : undefined;
  if (typeof ric === "function") {
    ric(callback, { timeout: 2600 });
  } else {
    setTimeout(callback, 1);
  }
}

/**
 * Десктоп: Three.js только при ширине ≥1024px, после того как блок героя
 * попадает в зону окна (+ отступ) и в idle — меньше конкуренции с LCP/интерактивом.
 */
export default function HeroIsland() {
  const [desktop, setDesktop] = useState(false);
  const [hydrateCanvas, setHydrateCanvas] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP);
    const apply = () => setDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!desktop) {
      setHydrateCanvas(false);
      return;
    }
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        defer(() => setHydrateCanvas(true));
      },
      { rootMargin: "180px 0px", threshold: 0.01 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [desktop]);

  if (!desktop) {
    return null;
  }

  return (
    <div ref={sentinelRef} className="hero-island-mount">
      {hydrateCanvas ? (
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
      ) : (
        <div className="hero-canvas-root hero-canvas-root--placeholder" aria-hidden="true" />
      )}
    </div>
  );
}
