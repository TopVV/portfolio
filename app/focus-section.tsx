"use client";

import { useEffect, useRef } from "react";
import type { PointerEvent, ReactNode } from "react";

type FocusSectionProps = {
  children: ReactNode;
  className: string;
  id?: string;
};

export function FocusSection({ children, className, id }: FocusSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => section.classList.toggle("is-section-active", entry.isIntersecting),
      { rootMargin: "-24% 0px -24% 0px", threshold: 0.16 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const moveGlow = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;

    const section = event.currentTarget;
    const bounds = section.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    section.style.setProperty("--focus-x", `${x}%`);
    section.style.setProperty("--focus-y", `${y}%`);
  };

  const resetGlow = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--focus-x", "32%");
    event.currentTarget.style.setProperty("--focus-y", "44%");
  };

  return (
    <section
      ref={sectionRef}
      className={`${className} focus-section`}
      id={id}
      onPointerMove={moveGlow}
      onPointerLeave={resetGlow}
    >
      {children}
    </section>
  );
}
