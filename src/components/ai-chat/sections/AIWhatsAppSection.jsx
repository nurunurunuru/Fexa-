import {
  ArrowRight,
  Bot,
  CheckCheck,
  Clock3,
  MessageCircle,
  PackageCheck,
  Sparkles,
  UserRound,
  Zap,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

export default function AIWhatsAppSection() {
  return (
    <section className="platform-ai-section whatsapp-ai-section">

      <div className="platform-bg-grid" />

      <div className="platform-glow platform-glow-one" />
      <div className="platform-glow platform-glow-two" />

      <span className="platform-particle platform-particle-1" />
      <span className="platform-particle platform-particle-2" />
      <span className="platform-particle platform-particle-3" />
      <span className="platform-particle platform-particle-4" />

      <div className="platform-container">

        {/* CONTENT */}
        <div className="platform-copy">

          <div className="platform-eyebrow whatsapp-eyebrow">

            <span>
              <FaWhatsapp size={13} />
            </span>

            WhatsApp AI

            <i />

          </div>

          <h2 className="platform-title">

            <span>WhatsApp support.</span>

            <strong>On autopilot.</strong>

          </h2>

          <p className="platform-description">

            Give customers instant answers on WhatsApp.
            Fexa AI can handle support questions, product
            inquiries, order updates and follow-ups without
            your team answering every message manually.

          </p>

          <div className="platform-status">

            <div className="platform-status-icon">
              <Bot size={15} />
            </div>

            <div>
              <strong>WhatsApp AI is active</strong>
              <small>Customer conversations are live</small>
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
                <strong>24/7 support</strong>
                <small>Customers get help anytime.</small>
              </p>
            </div>

            <div>
              <span>
                <PackageCheck size={13} />
              </span>

              <p>
                <strong>Order assistance</strong>
                <small>Handle product and order questions.</small>
              </p>
            </div>

            <div>
              <span>
                <Sparkles size={13} />
              </span>

              <p>
                <strong>Smart follow-ups</strong>
                <small>AI keeps conversations moving.</small>
              </p>
            </div>

          </div>

          <button className="platform-button whatsapp-button">

            <span>Explore WhatsApp AI</span>

            <ArrowRight size={14} />

            <div />

          </button>

        </div>

        {/* VISUAL */}
        <div className="platform-visual">

          <div className="platform-orbit platform-orbit-1" />
          <div className="platform-orbit platform-orbit-2" />

          <div className="platform-brand whatsapp-brand">
            <FaWhatsapp size={29} />
          </div>

          <div className="platform-notification whatsapp-notification">

            <FaWhatsapp size={14} />

            <span>
              <strong>WhatsApp message</strong>
              <small>Order question received</small>
            </span>

            <b>1</b>

          </div>

          {/* WHATSAPP CHAT */}
          <div className="platform-chat whatsapp-chat">

            <div className="whatsapp-chat-header">

              <div className="whatsapp-avatar">
                <FaWhatsapp size={16} />
              </div>

              <div>
                <strong>Fexa AI</strong>

                <small>
                  <i />
                  online
                </small>
              </div>

              <MessageCircle size={16} />

            </div>

            <div className="whatsapp-chat-body">

              <div className="whatsapp-date">
                TODAY
              </div>

              <div className="chat-message customer-message whatsapp-message-1">

                <div className="mini-avatar customer-avatar">
                  <UserRound size={11} />
                </div>

                <div className="message-content">

                  <span>
                    Hi! Where is my order?
                  </span>

                  <small>
                    4:31 PM
                  </small>

                </div>

              </div>

              <div className="chat-typing whatsapp-typing">

                <div className="mini-avatar whatsapp-ai-avatar">
                  <FaWhatsapp size={10} />
                </div>

                <div className="typing-bubble">
                  <i />
                  <i />
                  <i />
                </div>

                <span>Fexa AI is typing...</span>

              </div>

              <div className="chat-message ai-message whatsapp-message-2">

                <div className="mini-avatar whatsapp-ai-avatar">
                  <FaWhatsapp size={10} />
                </div>

                <div className="message-content">

                  <span>
                    Your order #FX2048 is on the way. 📦
                    It should arrive tomorrow.
                  </span>

                  <small>
                    4:31 PM
                    <CheckCheck size={11} />
                  </small>

                </div>

              </div>

              <div className="chat-message customer-message whatsapp-message-3">

                <div className="mini-avatar customer-avatar">
                  <UserRound size={11} />
                </div>

                <div className="message-content">

                  <span>
                    Perfect, thank you!
                  </span>

                  <small>
                    4:32 PM
                  </small>

                </div>

              </div>

              <div className="whatsapp-ai-action">

                <span>
                  <Zap size={11} />
                </span>

                <div>
                  <strong>Conversation resolved</strong>
                  <small>Handled automatically by AI</small>
                </div>

                <CheckCheck size={13} />

              </div>

            </div>

            <div className="platform-chat-input whatsapp-input">

              <span>Message</span>

              <div>
                <ArrowRight size={13} />
              </div>

            </div>

          </div>

          <div className="platform-response-card whatsapp-response">

            <span>
              <CheckCheck size={13} />
            </span>

            <div>
              <strong>Customer supported</strong>
              <small>Resolved automatically</small>
            </div>

            <i />

          </div>

        </div>

      </div>

    </section>
  );
}