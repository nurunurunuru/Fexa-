
import { useEffect, useState } from "react";
import {
  Bot,
  Send,
  Sparkles,
  Zap,
  CheckCheck,
} from "lucide-react";

const PHONE_MESSAGES = [
  { type: "user", text: "Can you help me choose a plan?" },
  {
    type: "ai",
    text: "Of course! Based on your requirements, I recommend our Pro plan.",
  },
  { type: "user", text: "Can I try it first?" },
  {
    type: "ai",
    text: "Absolutely. I've prepared a quick demo for you.",
  },
];

export default function PhoneMockup() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((current) => (current >= 8 ? 0 : current + 1));
    }, 2100);

    return () => clearInterval(timer);
  }, []);

  const count = Math.min(Math.floor(step / 2) + 1, 4);
  const typing = step % 2 === 1 && step < 8;

  return (
    <div className="ai-phone-scene">
      <div className="ai-phone-orbit orbit-one" />
      <div className="ai-phone-orbit orbit-two" />
      <div className="ai-phone-glow" />

      <div className="ai-phone">
        <div className="ai-phone-notch" />

        <div className="ai-phone-header">
          <span><Bot size={11} /></span>
          <strong>Fexa Chat</strong>
          <i />
        </div>

        <div className="ai-phone-messages">
          {PHONE_MESSAGES.slice(0, count).map((message, index) => (
            <div
              key={`${index}-${step}`}
              className={`phone-msg phone-msg-${message.type} phone-live-message`}
            >
              {message.text}
              {message.type === "ai" && index === count - 1 && (
                <CheckCheck className="phone-delivered" size={11} />
              )}
            </div>
          ))}

          {typing && (
            <div className="phone-typing">
              <i />
              <i />
              <i />
            </div>
          )}
        </div>

        <div className="ai-phone-input">
          <span>Message...</span>
          <span><Send size={10} /></span>
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
