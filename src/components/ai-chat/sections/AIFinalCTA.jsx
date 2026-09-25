import {
  ArrowRight,
  Sparkles,
  Brain,
  Zap,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

export default function AIFinalCTA() {
  return (
    <section className="ai-chat-final">

      {/* Ambient background */}
      <div className="final-bg-grid" />

      <div className="ai-final-glow final-glow-one" />
      <div className="ai-final-glow final-glow-two" />
      <div className="ai-final-glow final-glow-three" />

      {/* Floating particles */}
      <span className="final-particle final-particle-1" />
      <span className="final-particle final-particle-2" />
      <span className="final-particle final-particle-3" />
      <span className="final-particle final-particle-4" />
      <span className="final-particle final-particle-5" />
      <span className="final-particle final-particle-6" />
      <span className="final-particle final-particle-7" />

      <div className="ai-chat-container">

        <div className="ai-final-card">

          {/* =================================================
              ORBIT SYSTEM
          ================================================= */}

          <div className="ai-final-orbit orbit-final-one" />
          <div className="ai-final-orbit orbit-final-two" />
          <div className="ai-final-orbit orbit-final-three" />

          {/* Orbit particles */}
          <span className="final-orbit-dot final-dot-one" />
          <span className="final-orbit-dot final-dot-two" />
          <span className="final-orbit-dot final-dot-three" />

          {/* =================================================
              AI CORE
          ================================================= */}

          <div className="final-ai-core mt-24">

            <div className="final-core-pulse"/>

            <div className="final-core-inner">
              <Brain size={22} />
            </div>

            <div className="final-core-ring core-ring-a" />
            <div className="final-core-ring core-ring-b" />

          </div>

          {/* =================================================
              EYEBROW
          ================================================= */}

          <div className="ai-chat-eyebrow final-eyebrow">

            <span>
              <Sparkles size={11} />
            </span>

            Start a conversation

            <i />

          </div>

          {/* =================================================
              TITLE
          ================================================= */}

          <h2 className="final-title mb-2">

            <span className="final-title-line">
              Let AI handle the
            </span>

            <strong>
              conversations.
            </strong>

          </h2>

          <p className="final-description">
            Give your customers instant answers while your team
            focuses on the work that actually moves the business forward.
          </p>

          {/* =================================================
              AI STATUS
          ================================================= */}

          <div className="final-ai-status">

            <div className="final-status-icon">
              <Zap size={13} />
            </div>

            <div>
              <strong>Fexa AI is ready</strong>
              <small>Waiting for your first conversation</small>
            </div>

            <span>
              <i />
              READY
            </span>

          </div>

          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className="ai-final-actions">

            <button className="ai-primary-button final-primary-button">

              <span>Try AI Chat</span>

              <ArrowRight size={14} />

              <div className="final-button-shine" />

            </button>

            <button className="ai-secondary-button final-secondary-button">
              Book a Demo
            </button>

          </div>

          {/* =================================================
              TRUST POINTS
          ================================================= */}

          <div className="final-trust-row">

            <span>
              <CheckCircle2 size={12} />
              Instant responses
            </span>

            <span>
              <CheckCircle2 size={12} />
              Multi-channel AI
            </span>

            <span>
              <CheckCircle2 size={12} />
              Human handoff
            </span>

          </div>

          {/* =================================================
              READY BADGE
          ================================================= */}

          <div className="ai-final-badge">

            <span />

            AI agent ready

            <CheckCircle2 size={10} />

          </div>

          {/* =================================================
              FLOATING MINI CARDS
          ================================================= */}

          <div className="final-floating-card final-card-left">

            <span>
              <MessageCircle size={12} />
            </span>

            <div>
              <strong>New message</strong>
              <small>AI is responding...</small>
            </div>

          </div>

          <div className="final-floating-card final-card-right">

            <span>
              <Sparkles size={12} />
            </span>

            <div>
              <strong>Lead qualified</strong>
              <small>High intent detected</small>
            </div>

            <b>✓</b>

          </div>

        </div>

      </div>

    </section>
  );
}