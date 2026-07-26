"use client";

import { useEffect, useState } from "react";

const messages = [
  { subject: "digital products", outcome: "built to perform." },
  { subject: "SaaS platforms", outcome: "designed to scale." },
  { subject: "AI workflows", outcome: "built around people." },
  { subject: "commerce systems", outcome: "engineered for growth." },
  { subject: "product dashboards", outcome: "made for clarity." },
];

export function RotatingHeadline() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) return;

    const interval = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % messages.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, []);

  const message = messages[messageIndex];

  return (
    <h1 aria-label="Engineering digital products built to perform.">
      <span aria-hidden="true" className="headline-static">
        Engineering
      </span>
      <span
        aria-hidden="true"
        className="headline-subject headline-swap"
        key={`subject-${messageIndex}`}
      >
        {message.subject}
      </span>
      <span
        aria-hidden="true"
        className="headline-outcome headline-swap"
        key={`outcome-${messageIndex}`}
      >
        {message.outcome}
      </span>
    </h1>
  );
}
