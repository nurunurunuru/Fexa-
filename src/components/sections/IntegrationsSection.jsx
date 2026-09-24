import {
  SiShopify,
  SiWordpress,
  SiWoocommerce,
  SiMeta,
  SiInstagram,
  SiWhatsapp,
  SiZapier,
  SiStripe,
  SiDiscord,
  SiTelegram,
  SiHubspot,
} from "react-icons/si";

import { FaSlack } from "react-icons/fa";

import Reveal from "../common/Reveal";

const INTEGRATIONS = [
  {
    name: "Shopify",
    icon: SiShopify,
    color: "#95BF47",
  },
  {
    name: "WordPress",
    icon: SiWordpress,
    color: "#21759B",
  },
  {
    name: "WooCommerce",
    icon: SiWoocommerce,
    color: "#96588A",
  },
  {
    name: "Meta",
    icon: SiMeta,
    color: "#0866FF",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    color: "#E1306C",
  },
  {
    name: "WhatsApp",
    icon: SiWhatsapp,
    color: "#25D366",
  },
  {
    name: "Slack",
    icon: FaSlack,
    color: "#E01E5A",
  },
  {
    name: "Zapier",
    icon: SiZapier,
    color: "#FF4A00",
  },
  {
    name: "Stripe",
    icon: SiStripe,
    color: "#635BFF",
  },
  {
    name: "Discord",
    icon: SiDiscord,
    color: "#5865F2",
  },
  {
    name: "Telegram",
    icon: SiTelegram,
    color: "#229ED9",
  },
  {
    name: "HubSpot",
    icon: SiHubspot,
    color: "#FF7A59",
  },
];

function IntegrationCard({ item }) {
  const Icon = item.icon;

  return (
    <div
      className="integration-logo-card"
      style={{
        "--brand-color": item.color,
      }}
    >
      <div
        className="integration-logo-icon"
        style={{
          color: item.color,
          background: `${item.color}14`,
          borderColor: `${item.color}35`,
        }}
      >
        <Icon size={25} />
      </div>

      <span className="integration-logo-name">
        {item.name}
      </span>
    </div>
  );
}

function IntegrationsSection() {
  /*
   * Duplicate the array so the marquee can loop seamlessly.
   */
  const marqueeItems = [
    ...INTEGRATIONS,
    ...INTEGRATIONS,
    ...INTEGRATIONS,
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background glow */}

      <div className="integration-marquee-glow integration-marquee-glow-1" />
      <div className="integration-marquee-glow integration-marquee-glow-2" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <div className="integration-marquee-eyebrow">
            <span className="integration-eyebrow-dot" />
            INTEGRATIONS
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Connect your favorite tools
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Connect Fexa Agent with the platforms your business
            already uses — all from one intelligent workspace.
          </p>
        </Reveal>
      </div>

      {/* MARQUEE */}

      <Reveal delay={150}>
        <div className="integration-marquee-wrapper mt-14">
          <div className="integration-marquee">
            {marqueeItems.map((item, index) => (
              <IntegrationCard
                key={`${item.name}-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </Reveal>

      {/* SECOND ROW — OPPOSITE DIRECTION */}

      <Reveal delay={220}>
        <div className="integration-marquee-wrapper mt-5">
          <div className="integration-marquee integration-marquee-reverse">
            {[...marqueeItems].reverse().map((item, index) => (
              <IntegrationCard
                key={`reverse-${item.name}-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </Reveal>

      {/* Bottom message */}

      <Reveal delay={300}>
        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <div className="integration-more-badge">
            +20
          </div>

          <p className="text-sm text-slate-400">
            More integrations available for your business workflow.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export default IntegrationsSection;