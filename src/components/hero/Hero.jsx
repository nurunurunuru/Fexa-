import { ArrowRight, Check } from "lucide-react";
import { STATS } from "../../data/stats";
import Reveal from "../common/Reveal";
import CountUp from "../common/CountUp";
import Eyebrow from "../common/Eyebrow";
import PrimaryButton from "../common/PrimaryButton";
import GhostButton from "../common/GhostButton";
import Scribble from "../common/Scribble";
import DashboardMock from "./DashboardMock";
import TypewriterText from "../common/TypewriterText";

function Hero() {
  return (
    <header className="relative overflow-hidden bg-slate-950 pb-10 pt-16 text-center">
      <div
        className="pointer-events-none absolute left-1/2 top-[-120px] h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-emerald-500/25 blur-[120px]"
        style={{ animation: "pulseGlow 6s ease-in-out infinite" }}
      />
      <div className="relative mx-auto max-w-3xl px-6 pt-4">
        <Reveal>
          <Eyebrow>AI Agents for Business</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl">
            Automate today.
            <br />
           <span className="text-emerald-400">
  Grow <TypewriterText text="tomorrow." speed={160} />
</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-base text-slate-400 sm:text-lg">
            Fexa Agent helps businesses automate customer conversations, recruitment and repetitive
            workflows with intelligent AI agents.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton>
              Book a Demo <ArrowRight size={16} />
            </PrimaryButton>
            <GhostButton>Explore Solutions</GhostButton>
            <Scribble
              text="Less work, more growth"
              className="absolute -right-4 -top-16 hidden rotate-[-6deg] sm:block"
            />
          </div>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-400" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-400" /> Setup in minutes
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-400" /> Trusted by modern businesses
            </span>
          </div>
        </Reveal>
      </div>

      <Reveal delay={200} className="px-6">
        <DashboardMock />
      </Reveal>

      <Reveal delay={300}>
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-emerald-400 sm:text-4xl">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </header>
  );
}

export default Hero;
