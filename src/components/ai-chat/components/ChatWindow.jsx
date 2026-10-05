
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bot,
  CheckCheck,
  Send,
} from "lucide-react";

const MESSAGES = [
  {
    type: "user",
    text: "Hi, I'm looking for a product for my team.",
  },
  {
    type: "bot",
    text: "Absolutely! I'd love to help. How many people are on your team?",
  },
  {
    type: "user",
    text: "Around 20 people.",
  },
  {
    type: "bot",
    text: "Perfect. I found a plan that fits your team perfectly.",
  },
];

export default function ChatWindow() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((current) => (current >= 8 ? 0 : current + 1));
    }, 1900);

    return () => clearInterval(timer);
  }, []);

  const visibleMessages = Math.min(
    Math.floor(step / 2) + 1,
    MESSAGES.length
  );

  const typing = step % 2 === 1 && step < 8;

  return (
    <div className="ai-chat-window-wrap">
      <div className="ai-chat-window-glow" />

      <div className="ai-chat-window">
        <div className="ai-chat-header">
          <div className="ai-chat-brand">
            <span className="ai-chat-brand-icon">
              <Bot size={16} />
            </span>

            <div>
              <strong>Fexa Agent</strong>
              <span>
                <i />
                Online
              </span>
            </div>
          </div>

          <div className="ai-chat-header-dots">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="ai-chat-body">
          <div className="ai-chat-time">
            Today · 10:42 AM
          </div>

          {MESSAGES.slice(0, visibleMessages).map((message, index) => (
            <div
              key={`${index}-${step}`}
              className={`ai-message ai-message-${message.type} live-message`}
              style={{ "--message-index": index }}
            >
              {message.type === "bot" && (
                <span className="ai-mini-avatar">
                  <Bot size={11} />
                </span>
              )}

              <span>{message.text}</span>

              {message.type === "bot" && index === visibleMessages - 1 && (
                <span className="ai-message-delivered">
                  <CheckCheck size={11} />
                </span>
              )}

              {message.type === "bot" && index === 3 && (
                <span className="ai-message-link">
                  View recommendation <ArrowRight size={10} />
                </span>
              )}
            </div>
          ))}

          {typing && (
            <div className="ai-typing live-typing">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>

        <div className="ai-chat-input">
          <span>Type a message...</span>

          <button type="button" aria-label="Send message">
            <Send size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
