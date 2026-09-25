import {
  Zap,
  MessageCircle,
  Sparkles,
  ChevronRight,
  Clock3,
  Users,
} from "lucide-react";

export const FEATURES = [
  {
    icon: Zap,
    title: "Instant Responses",
    desc: "No wait time. Every message answered in seconds.",
  },
  {
    icon: MessageCircle,
    title: "Context Awareness",
    desc: "Understands conversation history and customer intent.",
  },
  {
    icon: Sparkles,
    title: "Lead Qualification",
    desc: "Identifies and qualifies high-intent prospects automatically.",
  },
  {
    icon: ChevronRight,
    title: "Smart Recommendations",
    desc: "Guides customers toward the right product or solution.",
  },
  {
    icon: Clock3,
    title: "Automated Follow-ups",
    desc: "Keeps conversations alive without manual effort.",
  },
  {
    icon: Users,
    title: "Human Handoff",
    desc: "Escalates complex conversations to the right person.",
  },
];

export const CHANNELS = [
  {
    name: "WhatsApp",
    className: "channel-whatsapp",
    symbol: "W",
  },
  {
    name: "Messenger",
    className: "channel-messenger",
    symbol: "M",
  },
  {
    name: "Instagram",
    className: "channel-instagram",
    symbol: "◎",
  },
];