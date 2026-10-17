"use client";

import { useRef } from "react";

/** A card that tilts slightly toward the pointer, like a menu panel in a headset. */
export default function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  function onMove(e: React.PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1400px) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg)`;
  }

  function onLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <article ref={ref} className={className} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </article>
  );
}
