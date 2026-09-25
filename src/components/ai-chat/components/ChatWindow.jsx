import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bot,
  Send,
} from "lucide-react";

export default function ChatWindow() {
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTyping((value) => !value);
    }, 2600);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ai-chat-window-wrap">
      <div className="ai-chat-window-glow" />

      <div className="ai-chat-window">

        {/* HEADER */}
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

        {/* BODY */}
        <div className="ai-chat-body">
          <div className="ai-chat-time">
            Today · 10:42 AM
          </div>

          <div className="ai-message ai-message-user">
            Hi, I'm looking for a product for my team.
          </div>

          <div className="ai-message ai-message-bot">
            <span className="ai-mini-avatar">
              <Bot size={11} />
            </span>

            Absolutely! I'd love to help. How many people are on your team?
          </div>

          <div className="ai-message ai-message-user">
            Around 20 people.
          </div>

          <div className="ai-message ai-message-bot ai-message-highlight">
            Perfect. I found a plan that fits your team perfectly.

            <span className="ai-message-link">
              View recommendation <ArrowRight size={10} />
            </span>
          </div>

          {typing && (
            <div className="ai-typing">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>

        {/* INPUT */}
        <div className="ai-chat-input">
          <span>Type a message...</span>

          <button type="button">
            <Send size={13} />
          </button>
        </div>

      </div>
    </div>
  );
}