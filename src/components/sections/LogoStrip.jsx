import Reveal from "../common/Reveal";
import {
  SiShopify,
  SiWordpress,
  SiWoocommerce,
  SiMeta,
  SiGoogle,
  SiZapier,
} from "@icons-pack/react-simple-icons";

const BRANDS = [
  {
    name: "Shopify",
    Icon: SiShopify,
    color: "#95BF47",
  },
  {
    name: "WordPress",
    Icon: SiWordpress,
    color: "#21759B",
  },
  {
    name: "WooCommerce",
    Icon: SiWoocommerce,
    color: "#96588A",
  },
  {
    name: "Meta",
    Icon: SiMeta,
    color: "#0866FF",
  },
  {
    name: "Google",
    Icon: SiGoogle,
    color: "#4285F4",
  },
  {
    name: "Zapier",
    Icon: SiZapier,
    color: "#FF4A00",
  },
];

function BrandItems({ prefix }) {
  return (
    <div className="flex shrink-0 items-center gap-12 px-6 sm:gap-16 sm:px-8">
      {BRANDS.map(({ name, Icon, color }) => (
        <div
          key={`${prefix}-${name}`}
          className="group flex h-14 shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
          style={{
            boxShadow: `0 8px 30px ${color}10`,
          }}
        >
          <Icon
            size={27}
            color={color}
            className="shrink-0 transition-transform duration-300 group-hover:scale-110"
          />

          <span
            className="whitespace-nowrap text-sm font-semibold"
            style={{ color }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}

function LogoStrip() {
  return (
    <section className="border-t border-white/5 bg-slate-950 py-10">
      <Reveal className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
          Trusted by 2,000+ businesses worldwide
        </p>

        <div className="relative mt-7 overflow-hidden">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-slate-950 to-transparent" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-slate-950 to-transparent" />

          <div className="logo-marquee flex w-max">
            {/* First set */}
            <BrandItems prefix="first" />

            {/* Exact duplicate set */}
            <BrandItems prefix="second" />
          </div>
        </div>
      </Reveal>

      <style jsx>{`
        .logo-marquee {
          animation: logo-slide-right 18s linear infinite;
          will-change: transform;
        }

        @keyframes logo-slide-right {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-marquee {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

export default LogoStrip;