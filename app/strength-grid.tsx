"use client";

import type { CSSProperties, PointerEvent } from "react";

type Strength = {
  n: string;
  title: string;
  text: string;
};

type SpotlightStyle = CSSProperties & {
  "--spotlight-x": string;
  "--spotlight-y": string;
};

export function StrengthGrid({ strengths }: { strengths: Strength[] }) {
  const moveSpotlight = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;

    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <div className="strength-grid">
      {strengths.map((item) => (
        <article
          key={item.title}
          onPointerMove={moveSpotlight}
          style={
            {
              "--spotlight-x": "50%",
              "--spotlight-y": "50%",
            } as SpotlightStyle
          }
        >
          <span>{item.n}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}
