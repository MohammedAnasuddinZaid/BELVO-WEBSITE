"use client";

import { useState } from "react";
import { Bot, Zap } from "lucide-react";
import { aiNodes } from "@/lib/site";

export function AIEngine() {
  const [active, setActive] = useState(aiNodes[0]);

  return (
    <section className="section ai-engine-section">
      <div className="section-heading">
        <span className="eyebrow">BELVO AI Engine</span>
        <h2>Signals become action before the market notices.</h2>
        <p>
          A production-ready AI layer is planned for lead scoring, service recommendations, campaign prediction, and operational automation.
        </p>
      </div>
      <div className="ai-engine-grid">
        <div className="neural-stage" data-cursor>
          <div className="neural-core">
            <Bot size={44} />
            <span>{active}</span>
          </div>
          {aiNodes.map((node, index) => (
            <button
              key={node}
              className={`neural-node neural-node--${index + 1} ${active === node ? "is-active" : ""}`}
              onClick={() => setActive(node)}
            >
              <Zap size={15} />
              <span>{node}</span>
            </button>
          ))}
          <svg className="neural-lines" viewBox="0 0 600 420" aria-hidden="true">
            <path d="M300 210 C180 80 120 120 92 82" />
            <path d="M300 210 C420 70 510 86 522 130" />
            <path d="M300 210 C145 230 110 300 82 320" />
            <path d="M300 210 C460 235 510 280 520 340" />
            <path d="M300 210 C235 80 358 60 360 42" />
            <path d="M300 210 C330 340 270 375 300 390" />
          </svg>
        </div>
        <div className="ai-copy-panel">
          <span className="eyebrow">Active Node</span>
          <h3>{active}</h3>
          <p>
            BELVO can route inquiries into qualification, recommend the strongest service bundle, and surface risks in the sales or campaign cycle.
          </p>
          <div className="ai-signal-list">
            <span>Budget fit</span>
            <span>Industry urgency</span>
            <span>Campaign complexity</span>
            <span>Projected conversion lift</span>
          </div>
        </div>
      </div>
    </section>
  );
}
