import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";

function ChatMock() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 3), 1500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
      <div className="mb-3 flex justify-end gap-2">
        {[FacebookIcon, InstagramIcon, MessageCircle, MessageCircle].map((Icon, i) => (
          <span key={i} className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-slate-300">
            <Icon size={13} />
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[10px] text-slate-500">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-700 text-[9px]">C</span>
          Customer
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-800 px-3 py-2 text-xs text-slate-200">
          Hi! Do you have this in stock?
        </div>
        <div className="flex items-center gap-2 text-[10px] text-slate-500">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-[9px] text-slate-950">F</span>
          Fexa AI
        </div>
        <div
          className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-800 px-3 py-2 text-xs text-slate-200 transition-opacity duration-500"
          style={{ opacity: step >= 1 ? 1 : 0 }}
        >
          Yes! It's in stock and ready to ship. Would you like to place an order?
        </div>
        <div className="flex flex-wrap gap-2 transition-opacity duration-500" style={{ opacity: step >= 2 ? 1 : 0 }}>
          <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-medium text-slate-900">Yes, please!</span>
          <span className="rounded-full border border-white/20 px-3 py-1.5 text-[10px] text-slate-300">
            Can you show me more options?
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChatMock;
