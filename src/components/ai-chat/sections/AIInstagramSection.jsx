import {
  ArrowRight,
  Bot,
  CheckCheck,
  Heart,
  MessageCircle,
  Send,
  Sparkles,
  UserRound,
  Zap,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

export default function AIInstagramSection() {
  return (
    <section className="platform-ai-section instagram-ai-section">

      <div className="platform-bg-grid" />

      <div className="platform-glow platform-glow-one" />
      <div className="platform-glow platform-glow-two" />

      <span className="platform-particle platform-particle-1" />
      <span className="platform-particle platform-particle-2" />
      <span className="platform-particle platform-particle-3" />
      <span className="platform-particle platform-particle-4" />

      <div className="platform-container instagram-container">

        {/* VISUAL FIRST */}
        <div className="platform-visual">

          <div className="platform-orbit platform-orbit-1" />
          <div className="platform-orbit platform-orbit-2" />

          <div className="platform-brand instagram-brand">
            <FaInstagram size={28} />
          </div>

          {/* floating DM notification */}
          <div className="platform-notification instagram-notification">

            <FaInstagram size={13} />

            <span>
              <strong>New Instagram DM</strong>
              <small>Customer wants to know more</small>
            </span>

            <b>1</b>

          </div>

          {/* INSTAGRAM CHAT */}
          <div className="platform-chat instagram-chat">

            <div className="instagram-top-bar">

              <div className="instagram-back">
                ←
              </div>

              <div className="instagram-profile">

                <div className="instagram-profile-avatar">
                  <FaInstagram size={13} />
                </div>

                <div>
                  <strong>fexa.ai</strong>
                  <small>Active now</small>
                </div>

              </div>

              <div className="instagram-actions">
                <MessageCircle size={15} />
                <Send size={15} />
              </div>

            </div>

            <div className="instagram-chat-body">

              <div className="instagram-profile-intro">

                <div className="instagram-large-avatar">
                  <FaInstagram size={22} />
                </div>

                <strong>Fexa AI</strong>
                <span>AI-powered customer support</span>

              </div>

              <div className="chat-date">
                Today
              </div>

              <div className="chat-message customer-message instagram-message-1">

                <div className="mini-avatar customer-avatar">
                  <UserRound size={11} />
                </div>

                <div className="message-content">
                  <span>
                    Hey! 👋 Do you have this in black?
                  </span>
                  <small>2:18 PM</small>
                </div>

              </div>

              <div className="chat-typing instagram-typing">

                <div className="mini-avatar instagram-ai-avatar">
                  <FaInstagram size={10} />
                </div>

                <div className="typing-bubble">
                  <i />
                  <i />
                  <i />
                </div>

                <span>Fexa AI is typing...</span>

              </div>

              <div className="chat-message ai-message instagram-message-2">

                <div className="mini-avatar instagram-ai-avatar">
                  <FaInstagram size={10} />
                </div>

                <div className="message-content">

                  <span>
                    Absolutely! 🖤 The black version is
                    available right now.
                  </span>

                  <small>
                    2:18 PM
                    <CheckCheck size={11} />
                  </small>

                </div>

              </div>

              <div className="instagram-comment-event">

                <Heart size={12} />

                <span>
                  AI replied to a customer comment
                </span>

                <Sparkles size={11} />

              </div>

            </div>

            <div className="platform-chat-input instagram-input">

              <div className="instagram-input-icon">
                <Sparkles size={12} />
              </div>

              <span>Message...</span>

              <Send size={14} />

            </div>

          </div>

          {/* AI CARD */}
          <div className="platform-response-card instagram-response">

            <span>
              <Sparkles size={13} />
            </span>

            <div>
              <strong>AI replied automatically</strong>
              <small>DM + comments handled</small>
            </div>

            <i />

          </div>

        </div>

        {/* CONTENT */}
        <div className="platform-copy">

          <div className="platform-eyebrow instagram-eyebrow">

            <span>
              <FaInstagram size={12} />
            </span>

            Instagram AI

            <i />

          </div>

          <h2 className="platform-title">

            <span>Your Instagram.</span>

            <strong>Always responding.</strong>

          </h2>

          <p className="platform-description">

            Fexa AI handles Instagram conversations from
            DMs to customer comments. Engage faster, answer
            questions and turn attention into real customers.

          </p>

          <div className="platform-status">

            <div className="platform-status-icon">
              <Bot size={15} />
            </div>

            <div>
              <strong>Instagram AI is active</strong>
              <small>DMs and comments are being monitored</small>
            </div>

            <span>
              <i />
              LIVE
            </span>

          </div>

          <div className="platform-features">

            <div>
              <span>
                <MessageCircle size={13} />
              </span>

              <p>
                <strong>DM automation</strong>
                <small>Every customer gets an instant reply.</small>
              </p>
            </div>

            <div>
              <span>
                <Heart size={13} />
              </span>

              <p>
                <strong>Comment engagement</strong>
                <small>Never miss a customer comment.</small>
              </p>
            </div>

            <div>
              <span>
                <Zap size={13} />
              </span>

              <p>
                <strong>Convert attention</strong>
                <small>Turn conversations into opportunities.</small>
              </p>
            </div>

          </div>

          <button className="platform-button instagram-button">

            <span>Explore Instagram AI</span>

            <ArrowRight size={14} />

            <div />

          </button>

        </div>

      </div>

    </section>
  );
}