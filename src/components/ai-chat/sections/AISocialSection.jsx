import {
  ArrowRight,
  Sparkles,
  MessageCircle,
  Send,
  Bot,
  Zap,
} from "lucide-react";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import SocialMockup from "../components/SocialMockup";

export default function AISocialSection() {
  return (
    <section className="ai-social-section">

      {/* Ambient background */}
      <div className="social-bg-grid" />

      <div className="ai-social-glow social-glow-one" />
      <div className="ai-social-glow social-glow-two" />

      {/* Floating particles */}
      <span className="social-particle social-particle-1" />
      <span className="social-particle social-particle-2" />
      <span className="social-particle social-particle-3" />
      <span className="social-particle social-particle-4" />
      <span className="social-particle social-particle-5" />

      <div className="ai-chat-container ai-two-column social-layout">

        {/* =================================================
            SOCIAL VISUAL
        ================================================= */}

        <div className="social-visual">

          {/* Rotating social orbit */}
          <div className="social-orbit social-orbit-one" />
          <div className="social-orbit social-orbit-two" />
          <div className="social-orbit social-orbit-three" />

          {/* Orbit icons */}
          <div className="social-orbit-icon orbit-instagram">
            <FaInstagram size={14} />
          </div>

          <div className="social-orbit-icon orbit-whatsapp">
            <FaWhatsapp size={14} />
          </div>

          <div className="social-orbit-icon orbit-message">
            <MessageCircle size={14} />
          </div>

          {/* AI core */}
          <div className="social-ai-core">
            <div className="social-ai-core-ring" />
            <div className="social-ai-core-inner">
              <Bot size={18} />
            </div>
          </div>

          {/* Message particles */}
          <span className="social-message-particle particle-a">
            <MessageCircle size={10} />
          </span>

          <span className="social-message-particle particle-b">
            <Send size={10} />
          </span>

          <span className="social-message-particle particle-c">
            <Zap size={10} />
          </span>

          {/* Main mockup */}
          <div className="social-mockup-wrapper">
            <div className="social-mockup-glow" />
            <SocialMockup />
          </div>

          {/* Live AI card */}
          <div className="social-floating-card social-ai-card">
            <span className="social-floating-icon">
              <Sparkles size={12} />
            </span>

            <span>
              <strong>AI responding</strong>
              <small>Conversation detected</small>
            </span>

            <i />
          </div>

          {/* Response card */}
          <div className="social-floating-card social-response-card">
            <span className="social-floating-icon">
              <Send size={11} />
            </span>

            <span>
              <strong>Message sent</strong>
              <small>0.8s response time</small>
            </span>

            <b>✓</b>
          </div>

        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="ai-copy-block social-copy">

          <div className="ai-chat-eyebrow social-eyebrow">
            <span>
              <FaInstagram size={11} />
            </span>

            Social conversations

            <i />
          </div>

          <h2 className="social-title">
            <span>One AI agent.</span>
            <strong>Every conversation.</strong>
          </h2>

          <p className="social-description">
            Connect your customer conversations across
            WhatsApp, Messenger and Instagram and let Fexa AI
            respond from one intelligent workspace.
          </p>

          {/* Live workspace status */}
          <div className="social-workspace-status">

            <div className="social-status-icon">
              <Bot size={14} />
            </div>

            <div>
              <strong>Fexa AI is active</strong>
              <small>Monitoring social conversations</small>
            </div>

            <span>
              <i />
              LIVE
            </span>

          </div>

          {/* Channel pills */}
          <div className="social-channel-pills">

            <div className="social-channel-pill instagram-pill">
              <FaInstagram size={12} />
              Instagram
              <i />
            </div>

            <div className="social-channel-pill whatsapp-pill">
              <FaWhatsapp size={12} />
              WhatsApp
              <i />
            </div>

            <div className="social-channel-pill messenger-pill">
              <MessageCircle size={12} />
              Messenger
              <i />
            </div>

          </div>

          <button className="ai-primary-button social-button">

            <span>Explore AI Chat</span>

            <ArrowRight size={14} />

            <div className="social-button-shine" />

          </button>

          {/* Active channel */}
          <div className="ai-channel-active social-active-channel">

            <span className="ai-channel-active-icon social-instagram-icon">
              <FaInstagram size={14} />
            </span>

            <span className="social-active-content">
              <strong>Instagram</strong>

              <small>
                Respond to DMs and comment threads in real time.
              </small>
            </span>

            <span className="ai-live-dot" />

          </div>

        </div>

      </div>

    </section>
  );
}