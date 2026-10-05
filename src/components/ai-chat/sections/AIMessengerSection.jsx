import {
  ArrowRight,
  Bot,
  CheckCheck,
  Clock3,
  MessageCircle,
  Sparkles,
  UserRound,
  Zap,
} from "lucide-react";

import { FaFacebookMessenger } from "react-icons/fa";

export default function AIMessengerSection() {
  return (
    <section className="platform-ai-section messenger-ai-section">

      <div className="platform-bg-grid" />

      <div className="platform-glow platform-glow-one" />
      <div className="platform-glow platform-glow-two" />

      <span className="platform-particle platform-particle-1" />
      <span className="platform-particle platform-particle-2" />
      <span className="platform-particle platform-particle-3" />
      <span className="platform-particle platform-particle-4" />

      <div className="platform-container">

        {/* LEFT CONTENT */}
        <div className="platform-copy">

          <div className="platform-eyebrow messenger-eyebrow">
            <span>
              <FaFacebookMessenger size={12} />
            </span>

            Messenger AI

            <i />
          </div>

          <h2 className="platform-title">
            <span>Every Messenger.</span>
            <strong>Answered instantly.</strong>
          </h2>

          <p className="platform-description">
            Fexa AI turns Facebook Messenger into an intelligent
            customer conversation channel. Answer questions,
            qualify leads and keep every conversation moving —
            automatically.
          </p>

          <div className="platform-status">
            <div className="platform-status-icon">
              <Bot size={15} />
            </div>

            <div>
              <strong>Fexa AI is responding</strong>
              <small>Messenger conversations are live</small>
            </div>

            <span>
              <i />
              LIVE
            </span>
          </div>

          <div className="platform-features">

            <div>
              <span>
                <Zap size={13} />
              </span>
              <p>
                <strong>Instant replies</strong>
                <small>Respond in seconds, 24/7.</small>
              </p>
            </div>

            <div>
              <span>
                <Sparkles size={13} />
              </span>
              <p>
                <strong>Smart conversations</strong>
                <small>AI understands customer intent.</small>
              </p>
            </div>

            <div>
              <span>
                <MessageCircle size={13} />
              </span>
              <p>
                <strong>Lead qualification</strong>
                <small>Turn conversations into opportunities.</small>
              </p>
            </div>

          </div>

          <button className="platform-button messenger-button">
            <span>Explore Messenger AI</span>
            <ArrowRight size={14} />
            <div />
          </button>

        </div>

        {/* RIGHT VISUAL */}
        <div className="platform-visual">

          <div className="platform-orbit platform-orbit-1" />
          <div className="platform-orbit platform-orbit-2" />

          {/* Floating Messenger logo */}
          <div className="platform-brand messenger-brand">
            <FaFacebookMessenger size={28} />
          </div>

          {/* Notification */}
          <div className="platform-notification messenger-notification">
            <FaFacebookMessenger size={13} />

            <span>
              <strong>New Messenger</strong>
              <small>Customer message received</small>
            </span>

            <b>1</b>
          </div>

          {/* CHAT WINDOW */}
          <div className="platform-chat messenger-chat">

            <div className="platform-chat-header">

              <div className="platform-chat-avatar messenger-avatar">
                <FaFacebookMessenger size={16} />
              </div>

              <div>
                <strong>Fexa AI</strong>
                <small>
                  <i />
                  Active now
                </small>
              </div>

              <div className="chat-header-dots">
                <span />
                <span />
                <span />
              </div>

            </div>

            <div className="platform-chat-body">

              <div className="chat-date">
                Today
              </div>

              <div className="chat-message customer-message messenger-message-1">
                <div className="mini-avatar customer-avatar">
                  <UserRound size={11} />
                </div>

                <div className="message-content">
                  <span>Hi! Is this product available?</span>
                  <small>10:42 AM</small>
                </div>
              </div>

              <div className="chat-message ai-message messenger-message-2">

                <div className="mini-avatar ai-avatar">
                  <Bot size={11} />
                </div>

                <div className="message-content">
                  <span>
                    Hi! 👋 Yes, it's currently available.
                    Would you like to know the price?
                  </span>

                  <small>
                    10:42 AM
                    <CheckCheck size={11} />
                  </small>
                </div>

              </div>

              <div className="chat-message customer-message messenger-message-3">
                <div className="mini-avatar customer-avatar">
                  <UserRound size={11} />
                </div>

                <div className="message-content">
                  <span>Yes, please.</span>
                  <small>10:43 AM</small>
                </div>
              </div>

              <div className="chat-typing messenger-typing">
                <div className="mini-avatar ai-avatar">
                  <Bot size={11} />
                </div>

                <div className="typing-bubble">
                  <i />
                  <i />
                  <i />
                </div>

                <span>Fexa AI is typing...</span>
              </div>

              <div className="chat-message ai-message messenger-message-4">

                <div className="mini-avatar ai-avatar">
                  <Bot size={11} />
                </div>

                <div className="message-content">
                  <span>
                    It's $129. We can also help you place
                    the order right here. 🚀
                  </span>

                  <small>
                    10:43 AM
                    <CheckCheck size={11} />
                  </small>
                </div>

              </div>

            </div>

            <div className="platform-chat-input">
              <span>Message Fexa AI...</span>
              <div>
                <ArrowRight size={13} />
              </div>
            </div>

          </div>

          <div className="platform-response-card messenger-response">
            <span>
              <CheckCheck size={13} />
            </span>

            <div>
              <strong>AI response delivered</strong>
              <small>0.7s response time</small>
            </div>

            <i />
          </div>

        </div>

      </div>
    </section>
  );
}