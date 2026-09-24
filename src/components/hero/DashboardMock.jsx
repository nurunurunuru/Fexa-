import { useEffect, useState } from "react";
import { BarChart3, Bell, Bot, Clock, Inbox, MessageCircle, Puzzle, Search, Settings, ShoppingBag, Users } from "lucide-react";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";

const CONVERSATIONS = [
  { name: "Sarah Johnson", msg: "Hi! Do you have this in stock?", time: "2m ago" },
  { name: "Michael Chen", msg: "Can you tell me the pricing?", time: "5m ago" },
  { name: "Emily Carter", msg: "I'd like to place an order.", time: "12m ago" },
  { name: "David Wilson", msg: "Do you offer international shipping?", time: "18m ago" },
  { name: "Sophia Martinez", msg: "Thank you! That's helpful.", time: "24m ago" },
];
const CHANNELS = ["All", "Facebook", "Instagram", "WhatsApp", "Messenger", "Website"];
const CHANNEL_ICONS = [FacebookIcon, InstagramIcon, MessageCircle, MessageCircle];

function DashboardMock() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 4), 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-[0_40px_120px_-40px_rgba(16,185,129,0.35)]"
      style={{ animation: "floaty 7s ease-in-out infinite" }}
    >
      <div className="grid grid-cols-[54px_1fr] sm:grid-cols-[190px_1fr]">
        {/* sidebar */}
        <div className="flex flex-col gap-1 border-r border-white/10 bg-slate-950/60 p-3 text-xs text-slate-400">
          <div className="mb-3 hidden items-center gap-2 px-1 sm:flex">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-400 text-slate-950">
              <Bot size={12} />
            </span>
            <span className="text-[11px] font-semibold text-white">Fexa Agent</span>
          </div>
          {[
            { icon: Inbox, label: "Inbox", active: true },
            { icon: Bot, label: "AI Agents" },
            { icon: Users, label: "Contacts" },
            { icon: Clock, label: "Automation" },
            { icon: BarChart3, label: "Analytics" },
            { icon: Puzzle, label: "Integrations" },
            { icon: Settings, label: "Settings" },
          ].map((it) => (
            <div
              key={it.label}
              className={
                "flex items-center gap-2 rounded-md px-2 py-1.5 " +
                (it.active ? "bg-emerald-500/15 text-emerald-300" : "")
              }
            >
              <it.icon size={13} />
              <span className="hidden sm:inline">{it.label}</span>
            </div>
          ))}
        </div>

        {/* main */}
        <div>
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <div className="flex flex-1 items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-500">
              <Search size={12} /> Search conversations...
            </div>
            <span className="hidden items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] text-emerald-300 sm:flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> AI Agent
            </span>
            <Bell size={14} className="text-slate-500" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr]">
            <div className="border-b border-white/10 p-3 sm:border-b-0 sm:border-r">
              <div className="mb-2 flex items-center justify-between px-1">
                <span className="text-xs font-semibold text-white">Inbox</span>
                <span className="text-[10px] text-slate-500">Always on</span>
              </div>
              <div className="mb-2 flex gap-1 overflow-x-auto pb-1 text-[10px] text-slate-400">
                {CHANNELS.map((c, i) => (
                  <span
                    key={c}
                    className={
                      "shrink-0 rounded-full px-2 py-1 " +
                      (i === 0 ? "bg-emerald-500/15 text-emerald-300" : "bg-white/5")
                    }
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {CONVERSATIONS.map((c, i) => (
                  <div
                    key={c.name}
                    className={"flex items-center gap-2 rounded-lg px-2 py-1.5 " + (i === 0 ? "bg-white/5" : "")}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[9px] font-semibold text-emerald-300">
                      {c.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[11px] text-white">{c.name}</div>
                      <div className="truncate text-[10px] text-slate-500">{c.msg}</div>
                    </div>
                    <span className="shrink-0 text-[9px] text-slate-600">{c.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex flex-col p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white">Sarah Johnson</span>
                <div className="flex gap-1.5">
                  {CHANNEL_ICONS.map((Icon, i) => (
                    <span key={i} className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-slate-300">
                      <Icon size={11} />
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-800 px-3 py-1.5 text-[11px] text-slate-200 transition-opacity duration-500" style={{ opacity: step >= 0 ? 1 : 0 }}>
                  Hi! Do you have this in stock?
                </div>
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-emerald-400 px-3 py-1.5 text-[11px] text-slate-950 transition-opacity duration-500" style={{ opacity: step >= 1 ? 1 : 0 }}>
                  Yes! It's in stock and ready to ship. Would you like to place an order?
                </div>
                <div
                  className="ml-auto flex max-w-[85%] items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 transition-opacity duration-500"
                  style={{ opacity: step >= 2 ? 1 : 0 }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-slate-300">
                    <ShoppingBag size={14} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[10px] text-white">Premium Headphones</div>
                    <div className="text-[10px] text-emerald-300">$99.00</div>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-400 px-2 py-1 text-[9px] font-semibold text-slate-950">
                    Buy Now
                  </span>
                </div>
                {step < 2 && (
                  <div className="flex gap-1 pl-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500" style={{ animationDelay: "300ms" }} />
                  </div>
                )}
              </div>

              <div className="mt-2 rounded-full bg-white/5 px-3 py-1.5 text-[10px] text-slate-500">Type a message...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardMock;
