
import {
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  MessageCircle,
  Bot,
} from "lucide-react";

import FloatingParticles from "../components/FloatingParticles";
import ChatWindow from "../components/ChatWindow";

export default function AIChatHero() {
  return (
    <section className="ai-chat-hero">

      {/* BACKGROUND */}
      <div className="ai-chat-hero-grid" />

      <div className="ai-chat-hero-glow ai-glow-one" />
      <div className="ai-chat-hero-glow ai-glow-two" />

      <div className="ai-hero-energy energy-one" />
      <div className="ai-hero-energy energy-two" />

      <FloatingParticles />

      {/* FLOATING AI ICONS */}
      <div className="ai-hero-floating-icon ai-floating-one">
        <Bot size={15} />
      </div>

      <div className="ai-hero-floating-icon ai-floating-two">
        <MessageCircle size={14} />
      </div>

      <div className="ai-hero-floating-icon ai-floating-three">
        <Zap size={14} />
      </div>

      {/* HERO CONTENT */}
      <div className="ai-chat-container">

        <div className="ai-chat-hero-content">

          {/* EYEBROW */}
          <div className="ai-chat-eyebrow ai-hero-reveal reveal-one">
            <span>
              <Sparkles size={11} />
            </span>

            <span className="ai-eyebrow-text">
              Fexa AI Chat
            </span>

            <i className="ai-eyebrow-live" />
          </div>

          {/* HEADING */}
          <h1 className="ai-hero-title">

            <span className="hero-line hero-line-one">
              Your AI agent is
            </span>

            <span className="hero-line hero-line-two">
              always ready to
            </span>

            <span className="hero-line hero-line-three">
              <strong>chat.</strong>
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="ai-hero-description ai-hero-reveal reveal-three">
            Turn customer messages into meaningful conversations
            with an AI agent that understands context, answers
            questions and helps customers take the next step.
          </p>

          {/* ACTIONS */}
          <div className="ai-chat-hero-actions ai-hero-reveal reveal-four">

            <button className="ai-primary-button ai-hero-primary">
              <span>Try AI Chat</span>
              <ArrowRight size={14} />
              <div className="button-shine" />
            </button>

            <button className="ai-secondary-button ai-hero-secondary">
              Book a Demo
            </button>

          </div>

          {/* STATS */}
          <div className="ai-chat-hero-stats ai-hero-reveal reveal-five">

            <span>
              <i>
                <Check size={10} />
              </i>
              Responds in seconds
            </span>

            <span>
              <i>
                <Check size={10} />
              </i>
              Works across all channels
            </span>

            <span>
              <i>
                <Check size={10} />
              </i>
              No waiting queues
            </span>

          </div>

        </div>

        {/* VISUAL */}
        <div className="ai-chat-hero-visual ai-hero-visual-reveal">

          <div className="ai-hero-visual-ring ring-one" />
          <div className="ai-hero-visual-ring ring-two" />
          <div className="ai-hero-visual-ring ring-three" />

          <div className="ai-hero-orbit-dot orbit-dot-one" />
          <div className="ai-hero-orbit-dot orbit-dot-two" />

          <div className="ai-hero-ai-badge">
            <span>
              <Bot size={12} />
            </span>

            <div>
              <strong>AI Agent</strong>
              <small>Online & ready</small>
            </div>

            <i />
          </div>

          <ChatWindow />

        </div>

      </div>

      {/* BOTTOM FADE */}
      <div className="ai-hero-bottom-fade" />

      {/* SCROLL INDICATOR */}
      <div className="ai-hero-scroll">
        <span />
        Scroll to explore
      </div>

    </section>
  );
}
