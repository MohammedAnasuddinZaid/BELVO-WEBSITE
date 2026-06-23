"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { serviceCategories } from "@/lib/services";

const orbitCategories = serviceCategories.slice(0, 8);

export function ServiceGalaxy() {
  const [active, setActive] = useState(orbitCategories[0]);

  return (
    <section className="section service-galaxy-section" id="services">
      <div className="section-heading section-heading--split">
        <div>
          <span className="eyebrow">Service Galaxy</span>
          <h2>One growth core. Every orbit connected.</h2>
        </div>
        <p>
          BELVO maps creative, media, AI, data, and technology as one system so campaigns do not fragment when scale begins.
        </p>
      </div>
      <div className="galaxy-layout">
        <div className="galaxy-stage" data-cursor>
          <div className="galaxy-core">
            <span>B</span>
          </div>
          <div className="orbit orbit--one" />
          <div className="orbit orbit--two" />
          <div className="orbit orbit--three" />
          {orbitCategories.map((category, index) => {
            const Icon = category.icon;
            const angle = (index / orbitCategories.length) * 360;
            return (
              <button
                key={category.category}
                className={`planet planet--${index + 1} ${active.category === category.category ? "is-active" : ""}`}
                style={{ "--angle": `${angle}deg`, "--accent": category.accent } as React.CSSProperties}
                onClick={() => setActive(category)}
              >
                <Icon size={20} />
                <span>{category.category}</span>
              </button>
            );
          })}
        </div>
        <aside className="galaxy-panel">
          <span className="eyebrow">{active.category}</span>
          <h3>{active.narrative}</h3>
          <div className="mini-service-grid">
            {active.items.slice(0, 8).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <a href={`/services?category=${encodeURIComponent(active.category)}`} className="text-link">
            Explore category <ArrowUpRight size={16} />
          </a>
        </aside>
      </div>
    </section>
  );
}
