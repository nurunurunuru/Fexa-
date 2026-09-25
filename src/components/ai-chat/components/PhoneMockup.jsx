import {
  Bot,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";

export default function PhoneMockup() {
  return (
    <div className="ai-phone-scene">

      <div className="ai-phone-orbit orbit-one" />
      <div className="ai-phone-orbit orbit-two" />

      <div className="ai-phone-glow" />

      <div className="ai-phone">

        <div className="ai-phone-notch" />

        <div className="ai-phone-header">
          <span>
            <Bot size={11} />
          </span>

          <strong>Fexa Chat</strong>

          <i />
        </div>

        <div className="ai-phone-messages">

          <div className="phone-msg phone-msg-user">
            Can you help me choose a plan?
          </div>

          <div className="phone-msg phone-msg-ai">
            Of course! Based on your requirements, I recommend our Pro plan.
          </div>

          <div className="phone-msg phone-msg-user">
            Can I try it first?
          </div>

          <div className="phone-msg phone-msg-ai">
            Absolutely. I've prepared a quick demo for you.
          </div>

        </div>

        <div className="ai-phone-input">
          <span>Message...</span>

          <span>
            <Send size={10} />
          </span>
        </div>

      </div>

      <div className="phone-floating-card phone-card-one">
        <Zap size={13} />

        <span>
          <strong>Instant reply</strong>
          <small>0.8 sec response</small>
        </span>
      </div>

      <div className="phone-floating-card phone-card-two">
        <Sparkles size={13} />

        <span>
          <strong>AI detected</strong>
          <small>High-intent lead</small>
        </span>
      </div>

    </div>
  );
}