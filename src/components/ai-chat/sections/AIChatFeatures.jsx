import { useEffect, useState } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

import { FEATURES } from "../data/aiChatData";

export default function AIChatFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((current) => {
        return (current + 1) % FEATURES.length;
      });
    }, 2300);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="ai-opportunity-section">

      {/* BACKGROUND ENERGY */}
      <div className="ai-section-glow" />

      <div className="ai-feature-bg-orb feature-orb-one" />
      <div className="ai-feature-bg-orb feature-orb-two" />

      <div className="ai-chat-container">

        {/* HEADING */}
        <div className="ai-centered-heading ai-features-heading">

          <div className="ai-chat-eyebrow feature-eyebrow">
            <span>
              <Sparkles size={11} />
            </span>

            Smarter conversations

            <i />
          </div>

          <h2>
            <span className="feature-heading-line">
              Every message becomes
            </span>

            <span className="feature-heading-highlight">
              an opportunity.
            </span>
          </h2>

          <p>
            Fexa AI understands what your customers need and
            turns every conversation into a meaningful business
            opportunity.
          </p>

        </div>

        {/* FEATURE GRID */}
        <div className="ai-feature-grid">

          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const active = index === activeFeature;

            return (
              <div
                key={feature.title}
                className={
                  "ai-feature-card " +
                  (active ? "ai-feature-active" : "")
                }
                onMouseEnter={() => setActiveFeature(index)}
              >

                {/* MOVING BORDER */}
                <div className="feature-card-border" />

                {/* CARD LIGHT */}
                <div className="feature-card-light" />

                {/* NUMBER */}
                <div className="ai-feature-number">
                  0{index + 1}
                </div>

                {/* ICON */}
                <div className="ai-feature-icon">
                  <Icon size={17} />

                  <span className="feature-icon-ring" />
                </div>

                {/* CONTENT */}
                <div className="ai-feature-content">

                  <h3>
                    {feature.title}
                  </h3>

                  <p>
                    {feature.desc}
                  </p>

                </div>

                {/* ARROW */}
                <div className="feature-arrow">
                  <ArrowUpRight size={14} />
                </div>

                {/* BOTTOM LINE */}
                <div className="ai-feature-line" />

                {/* ACTIVE INDICATOR */}
                <div className="feature-active-indicator">
                  <span />
                  AI active
                </div>

              </div>
            );
          })}

        </div>

        {/* BOTTOM STATUS */}
        <div className="ai-feature-status">

          <span className="feature-status-dot" />

          <span>
            AI intelligence layer active
          </span>

          <span className="feature-status-line" />

          <strong>
            {String(activeFeature + 1).padStart(2, "0")}
            <small>/06</small>
          </strong>

        </div>

      </div>

    </section>
  );
}
