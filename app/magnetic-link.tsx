"use client";

import type { PointerEvent, ReactNode } from "react";

type MagneticLinkProps = {
  children: ReactNode;
  className: string;
  href: string;
};

export function MagneticLink({ children, className, href }: MagneticLinkProps) {
  const moveContent = (event: PointerEvent<HTMLAnchorElement>) => {
    if (
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const link = event.currentTarget;
    const content = link.firstElementChild as HTMLElement | null;
    if (!content) return;

    const bounds = link.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
    content.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const resetContent = (event: PointerEvent<HTMLAnchorElement>) => {
    const content = event.currentTarget.firstElementChild as HTMLElement | null;
    if (content) content.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <a
      className={`${className} magnetic-link`}
      href={href}
      onPointerMove={moveContent}
      onPointerLeave={resetContent}
    >
      <span className="magnetic-content">{children}</span>
    </a>
  );
}
