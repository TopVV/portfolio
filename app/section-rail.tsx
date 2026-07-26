"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "work", label: "Selected work", number: "01" },
  { id: "expertise", label: "Engineering strengths", number: "02" },
  { id: "experience", label: "Experience", number: "03" },
  { id: "about", label: "About", number: "04" },
  { id: "contact", label: "Contact", number: "05" },
];

export function SectionRail() {
  const [activeSection, setActiveSection] = useState("work");

  useEffect(() => {
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      const closest = elements
        .map((element) => {
          const bounds = element.getBoundingClientRect();
          const sectionCenter = bounds.top + bounds.height / 2;
          return { id: element.id, distance: Math.abs(sectionCenter - viewportCenter) };
        })
        .sort((a, b) => a.distance - b.distance)[0];

      if (closest?.id) setActiveSection(closest.id);
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <nav className="section-rail" aria-label="Page sections">
      {sections.map((section) => (
        <a
          aria-current={activeSection === section.id ? "location" : undefined}
          aria-label={section.label}
          href={`#${section.id}`}
          key={section.id}
        >
          <span>{section.number}</span>
          <i aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
