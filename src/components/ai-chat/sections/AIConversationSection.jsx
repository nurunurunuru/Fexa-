import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import PhoneMockup from "../components/PhoneMockup";

export default function AIConversationSection() {
  return (
    <section className="ai-conversation-section">

      <div className="ai-section-orb ai-orb-left" />
      <div className="ai-section-orb ai-orb-right" />

      <div className="ai-chat-container ai-two-column">

        <div className="ai-copy-block">

          <div className="ai-chat-eyebrow">
            <span>
              <Sparkles size={11} />
            </span>
            AI-powered conversations
          </div>

          <h2>
            Every message gets an
            <span> intelligent response.</span>
          </h2>

          <p>
            Fexa understands customer intent, keeps the
            conversation in context and responds naturally
            across the channels your customers already use.
          </p>

          <div className="ai-benefit-list">

            <div>
              <span>⚡</span>
              <strong>Instant Responses</strong>
              <small>
                Respond without making customers wait.
              </small>
            </div>

            <div>
              <span>💬</span>
              <strong>Context Awareness</strong>
              <small>
                Understand what customers mean, not just what they type.
              </small>
            </div>

            <div>
              <span>●</span>
              <strong>Smart Conversations</strong>
              <small>
                Guide customers toward the right next step.
              </small>
            </div>

            <div>
              <span>💛</span>
              <strong>Human Handoff</strong>
              <small>
                Bring your team into the conversation when needed.
              </small>
            </div>

          </div>

          <button className="ai-primary-button">
            See how AI Chat works
            <ArrowRight size={14} />
          </button>

        </div>

        <PhoneMockup />

      </div>

    </section>
  );
}