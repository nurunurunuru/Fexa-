
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { Send, CheckCheck } from "lucide-react";

const SOCIAL_MESSAGES = [
  "Hey! Is this available?",
  "Yes! It's available right now. Would you like me to help you place an order?",
  "Yes please!",
  "Great! I can help you get started.",
];

export default function SocialMockup() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % 4);
    }, 2300);

    return () => clearInterval(timer);
  }, []);

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
          <span className="messenger-logo">M</span>
          <strong>Messenger</strong>
          <span className="messenger-online" />
        </div>

        <div className="messenger-content">
          {SOCIAL_MESSAGES.slice(0, active + 1).map((message, index) => (
            <div
              key={`${index}-${active}`}
              className={`messenger-msg ${
                index === 1 || index === 3 ? "messenger-msg-ai" : ""
              } social-live-message`}
            >
              {message}
              {(index === 1 || index === 3) && index <= active && (
                <CheckCheck size={10} className="social-delivered" />
              )}
            </div>
          ))}

          {active < 3 && (
            <div className="social-typing">
              <i />
              <i />
              <i />
            </div>
          )}
        </div>

        <div className="messenger-input">
          Write a message...
          <Send size={11} />
        </div>
      </div>
    </div>
  );
}
