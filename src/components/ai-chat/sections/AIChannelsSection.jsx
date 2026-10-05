import {
  ArrowRight,
  Sparkles,
  MessageCircle,
  Zap,
  Layers3,
  CheckCircle2,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaFacebookMessenger,
} from "react-icons/fa";

import ChannelNetwork from "../components/ChannelNetwork";

export default function AIChannelsSection() {
  return (
    <section className="ai-multichannel-section">

      {/* Ambient background */}
      <div className="channels-bg-grid" />

      <div className="channels-glow channels-glow-one" />
      <div className="channels-glow channels-glow-two" />
      <div className="channels-glow channels-glow-three" />

      {/* Floating particles */}
      <span className="channels-particle channels-particle-1" />
      <span className="channels-particle channels-particle-2" />
      <span className="channels-particle channels-particle-3" />
      <span className="channels-particle channels-particle-4" />
      <span className="channels-particle channels-particle-5" />
      <span className="channels-particle channels-particle-6" />

      <div className="ai-chat-container ai-two-column reverse-mobile channels-layout">

        {/* LEFT — NETWORK */}
        <div className="channels-visual">

          <div className="channels-visual-label">
            <span className="channels-live-dot" />
            <span>AI CHANNEL NETWORK</span>
            <b>LIVE</b>
          </div>

          <div className="channels-network-wrap">

            <div className="network-energy-ring ring-a" />
            <div className="network-energy-ring ring-b" />
            <div className="network-energy-ring ring-c" />

            <div className="network-scan-line" />

            <ChannelNetwork />

            {/* Facebook */}
            <div className="channel-brand-icon facebook-icon">
              <FaFacebookF />
            </div>

            {/* Messenger */}
            <div className="channel-brand-icon messenger-icon">
              <FaFacebookMessenger />
            </div>

            {/* Instagram */}
            <div className="channel-brand-icon instagram-icon">
              <FaInstagram />
            </div>

            {/* Floating status cards */}
            <div className="channel-floating-card channel-card-top">
              <span className="channel-card-icon">
                <Zap size={13} />
              </span>

              <span>
                <strong>Instant routing</strong>
                <small>Message received</small>
              </span>

              <i />
            </div>

            {/* <div className="channel-floating-card channel-card-bottom">
              <span className="channel-card-icon">
                <MessageCircle size={13} />
              </span>

              <span>
                <strong>Unified inbox</strong>
                <small>All channels connected</small>
              </span>

              <b>
                <CheckCircle2 size={12} />
              </b>
            </div> */}

          </div>

        </div>

        {/* RIGHT — CONTENT */}
        <div className="ai-copy-block channels-copy">

          <div className="ai-chat-eyebrow channels-eyebrow">
            <span>
              <Sparkles size={11} />
            </span>

            Multi-channel

            <i />
          </div>

          <h2 className="channels-title">
            <span>One AI agent.</span>
            <strong>Every channel covered.</strong>
          </h2>

          <p className="channels-description">
            Fexa AI Chat connects to every channel your customers
            use. One unified conversation layer for your team.
          </p>

          {/* AI status */}
          <div className="channels-ai-status">
            <div className="channels-status-icon">
              <Layers3 size={14} />
            </div>

            <div>
              <strong>All channels connected</strong>
              <small>AI is monitoring conversations</small>
            </div>

            <span className="channels-status-live">
              <i />
              LIVE
            </span>
          </div>

          {/* Steps */}
          <div className="ai-number-list channels-number-list">

            <div className="channel-step channel-step-active">
              <b>1</b>
              <span className="step-line" />

              <div>
                <strong>Customers send messages</strong>
                <small>Any channel. Any time.</small>
              </div>

              <CheckCircle2 className="step-check" size={15} />
            </div>

            <div className="channel-step">
              <b>2</b>
              <span className="step-line" />

              <div>
                <strong>Fexa AI picks it up</strong>
                <small>Instantly detects the conversation.</small>
              </div>

              <CheckCircle2 className="step-check" size={15} />
            </div>

            <div className="channel-step">
              <b>3</b>
              <span className="step-line" />

              <div>
                <strong>One unified AI agent</strong>
                <small>Context stays connected everywhere.</small>
              </div>

              <CheckCircle2 className="step-check" size={15} />
            </div>

            <div className="channel-step">
              <b>4</b>
              <span className="step-line" />

              <div>
                <strong>Business action happens</strong>
                <small>From conversation to conversion.</small>
              </div>

              <CheckCircle2 className="step-check" size={15} />
            </div>

          </div>

          <button className="ai-primary-button channels-button">
            <span>Explore AI Chat</span>
            <ArrowRight size={14} />

            <div className="channels-button-shine" />
          </button>

        </div>

      </div>
    </section>
  );
}