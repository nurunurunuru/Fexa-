import { ArrowRight, Check } from "lucide-react";
import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";
import PrimaryButton from "../common/PrimaryButton";
import GhostButton from "../common/GhostButton";

function never() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(52,211,153,0.5) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          animation: "panGrid 18s linear infinite",
        }}
      />
      <div className="relative mx-auto max-w-2xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-emerald-900/25 to-slate-900/40 px-6 py-12 sm:px-14">
            <Eyebrow>Ready to grow?</Eyebrow>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let AI handle the repetitive work.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-slate-400">
              Save time, reduce costs and scale your business with Fexa Agent. Get started today and
              see the difference.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton>
                Book a Demo <ArrowRight size={16} />
              </PrimaryButton>
              <GhostButton>Start Free Trial</GhostButton>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-emerald-400" /> No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-emerald-400" /> Setup in minutes
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-emerald-400" /> Cancel anytime
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/*  Footer                                                                    */
/* ----------------------------------------------------------------------- */

export default never;
