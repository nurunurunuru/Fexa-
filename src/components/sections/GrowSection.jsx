import {
  BarChart3,
  Bot,
  Cloud,
  Globe,
  Headphones,
  Mail,
  MessageCircle,
  MessageSquare,
  Puzzle,
  ShieldCheck,
  ShoppingBag,
  Users,
  Zap,
} from "lucide-react";

import Reveal from "../common/Reveal";

const LEFT_CHANNELS = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "Messaging",
  },
  {
    icon: MessageSquare,
    title: "Slack",
    subtitle: "Team Chat",
  },
  {
    icon: Globe,
    title: "Web Chat",
    subtitle: "Website Widget",
  },
  {
    icon: Mail,
    title: "Email",
    subtitle: "Inbox Sync",
  },
];

const RIGHT_CHANNELS = [
  {
    icon: Cloud,
    title: "HubSpot",
    subtitle: "CRM",
  },
  {
    icon: BarChart3,
    title: "Salesforce",
    subtitle: "CRM",
  },
  {
    icon: Headphones,
    title: "Zendesk",
    subtitle: "Support",
  },
  {
    icon: MessageSquare,
    title: "Intercom",
    subtitle: "Support",
  },
];

const BOTTOM_TOOLS = [
  "Stripe",
  "Zapier",
  "Shopify",
  "WordPress",
  "Discord",
  "Telegram",
];

function ChannelCard({ item, side, index }) {
  const Icon = item.icon;

  return (
    <div
      className={`integration-channel integration-channel-${side}`}
      style={{
        "--channel-delay": `${index * 120}ms`,
      }}
    >
      <div className="integration-channel-icon">
        <Icon size={18} strokeWidth={1.8} />
      </div>

      <div className="min-w-0">
        <div className="integration-channel-title">
          {item.title}
        </div>

        <div className="integration-channel-subtitle">
          {item.subtitle}
        </div>
      </div>

      <span className="integration-status-dot" />
    </div>
  );
}

function ConnectionLines() {
  return (
    <svg
      className="integration-connections"
      viewBox="0 0 1000 520"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* LEFT CONNECTIONS */}

      <path
        className="integration-line"
        d="M 205 105 C 330 105, 340 220, 445 250"
      />

      <path
        className="integration-line"
        d="M 205 205 C 320 205, 350 235, 445 255"
      />

      <path
        className="integration-line"
        d="M 205 305 C 320 305, 350 275, 445 265"
      />

      <path
        className="integration-line"
        d="M 205 405 C 330 405, 340 300, 445 270"
      />

      {/* RIGHT CONNECTIONS */}

      <path
        className="integration-line"
        d="M 795 105 C 670 105, 660 220, 555 250"
      />

      <path
        className="integration-line"
        d="M 795 205 C 680 205, 650 235, 555 255"
      />

      <path
        className="integration-line"
        d="M 795 305 C 680 305, 650 275, 555 265"
      />

      <path
        className="integration-line"
        d="M 795 405 C 670 405, 660 300, 555 270"
      />

      {/* LEFT MOVING PARTICLES */}

      <circle className="integration-particle" r="5">
        <animateMotion
          dur="2.8s"
          repeatCount="indefinite"
          path="M 205 105 C 330 105, 340 220, 445 250"
        />
      </circle>

      <circle className="integration-particle" r="4">
        <animateMotion
          dur="3.2s"
          begin="0.5s"
          repeatCount="indefinite"
          path="M 205 205 C 320 205, 350 235, 445 255"
        />
      </circle>

      <circle className="integration-particle" r="4">
        <animateMotion
          dur="3s"
          begin="1s"
          repeatCount="indefinite"
          path="M 205 305 C 320 305, 350 275, 445 265"
        />
      </circle>

      <circle className="integration-particle" r="5">
        <animateMotion
          dur="3.4s"
          begin="0.2s"
          repeatCount="indefinite"
          path="M 205 405 C 330 405, 340 300, 445 270"
        />
      </circle>

      {/* RIGHT MOVING PARTICLES */}

      <circle className="integration-particle" r="5">
        <animateMotion
          dur="2.8s"
          begin="0.4s"
          repeatCount="indefinite"
          path="M 795 105 C 670 105, 660 220, 555 250"
        />
      </circle>

      <circle className="integration-particle" r="4">
        <animateMotion
          dur="3.2s"
          begin="1s"
          repeatCount="indefinite"
          path="M 795 205 C 680 205, 650 235, 555 255"
        />
      </circle>

      <circle className="integration-particle" r="4">
        <animateMotion
          dur="3s"
          begin="0.7s"
          repeatCount="indefinite"
          path="M 795 305 C 680 305, 650 275, 555 265"
        />
      </circle>

      <circle className="integration-particle" r="5">
        <animateMotion
          dur="3.4s"
          begin="1.2s"
          repeatCount="indefinite"
          path="M 795 405 C 670 405, 660 300, 555 270"
        />
      </circle>
    </svg>
  );
}

function GrowSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* BACKGROUND GLOW */}

      <div className="integration-bg-glow integration-bg-glow-left" />
      <div className="integration-bg-glow integration-bg-glow-right" />
      <div className="integration-grid" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* HEADER */}

        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="integration-eyebrow">
              <Puzzle size={13} />
              <span>ONE POWERFUL PLATFORM</span>
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Everything your business needs
              <span className="block">
                <span className="integration-gradient-text">
                  in one platform.
                </span>
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Connect conversations, customers, automation and your
              favorite business tools — all through one intelligent
              Fexa Agent platform.
            </p>
          </div>
        </Reveal>

        {/* INTEGRATION VISUAL */}

        <Reveal delay={150}>
          <div className="integration-stage mt-16">
            <ConnectionLines />

            {/* LEFT */}

            <div className="integration-column integration-column-left">
              {LEFT_CHANNELS.map((item, index) => (
                <ChannelCard
                  key={item.title}
                  item={item}
                  side="left"
                  index={index}
                />
              ))}
            </div>

            {/* CENTER */}

            <div className="integration-center">
              <div className="integration-center-orbit integration-orbit-one" />
              <div className="integration-center-orbit integration-orbit-two" />

              <div className="integration-center-glow" />

              <div className="integration-hub">
                <div className="integration-hub-icon">
                  <Bot size={34} strokeWidth={1.7} />
                </div>

                <div className="mt-4 text-base font-bold text-white">
                  Fexa Agent
                </div>

                <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-emerald-300/70">
                  AI Business Hub
                </div>

                <div className="mt-4 flex items-center justify-center gap-1.5">
                  <span className="integration-hub-dot" />
                  <span className="text-[10px] text-slate-500">
                    Everything connected
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="integration-column integration-column-right">
              {RIGHT_CHANNELS.map((item, index) => (
                <ChannelCard
                  key={item.title}
                  item={item}
                  side="right"
                  index={index}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* BOTTOM CONNECTORS */}

        <Reveal delay={250}>
          <div className="integration-bottom">
            <div className="integration-bottom-label">
              <Zap size={13} />
              <span>ALSO CONNECTS WITH</span>
            </div>

            <div className="integration-tool-list">
              {BOTTOM_TOOLS.map((tool, index) => (
                <div
                  key={tool}
                  className="integration-tool"
                  style={{
                    "--tool-delay": `${index * 80}ms`,
                  }}
                >
                  <span className="integration-tool-icon">
                    {tool.charAt(0)}
                  </span>
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* BOTTOM MESSAGE */}

        <Reveal delay={350}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck
                size={14}
                className="text-emerald-400"
              />
              Secure by design
            </div>

            <span className="text-slate-700">•</span>

            <div className="flex items-center gap-2">
              <Users
                size={14}
                className="text-emerald-400"
              />
              Built for teams
            </div>

            <span className="text-slate-700">•</span>

            <div className="flex items-center gap-2">
              <ShoppingBag
                size={14}
                className="text-emerald-400"
              />
              Ready for business
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default GrowSection;