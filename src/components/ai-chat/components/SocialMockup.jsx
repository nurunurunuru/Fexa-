import { FaInstagram } from "react-icons/fa";
import { Send } from "lucide-react";

export default function SocialMockup() {
  return (
    <div className="social-scene">

      <div className="social-back-card social-back-instagram">

        <div className="social-top">
          <FaInstagram size={14} />
          Instagram
        </div>

        <div className="social-image-grid">
          <span />
          <span />
          <span />
          <span />
        </div>

      </div>

      <div className="social-front-card">

        <div className="messenger-header">
          <span className="messenger-logo">
            M
          </span>

          <strong>Messenger</strong>

          <span className="messenger-online" />
        </div>

        <div className="messenger-content">

          <div className="messenger-msg">
            Hey! Is this available?
          </div>

          <div className="messenger-msg messenger-msg-ai">
            Yes! It's available right now. Would you like me to help you place an order?
          </div>

          <div className="messenger-msg">
            Yes please!
          </div>

        </div>

        <div className="messenger-input">
          Write a message...
          <Send size={11} />
        </div>

      </div>

    </div>
  );
}