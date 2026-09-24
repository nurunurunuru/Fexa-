import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";

const FAQS = [
  {
    q: "How does Fexa Agent work?",
    a: "Fexa Agent uses advanced AI to understand customer inquiries, automate workflows and perform tasks like chatting, calling and recruitment — all from one powerful platform.",
  },
  { q: "Do I need technical knowledge to get started?", a: "No. Agents are configured through guided setup, not code — your team describes the workflow in plain language and we handle the rest." },
  { q: "Which platforms does it support?", a: "Fexa connects to chat, email, voice and SMS out of the box, plus your CRM, helpdesk and e-commerce platforms through native integrations." },
  { q: "Can I try Fexa Agent for free?", a: "Yes — you can start a free trial with no credit card required and explore every core feature before committing to a plan." },
  { q: "Is my data secure?", a: "All data is encrypted in transit and at rest, and agents only ever access what a workflow explicitly needs." },
];


function FaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-3 text-slate-400">Everything you need to know about Fexa Agent.</p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal delay={i * 60} key={f.q}>
                <div
                  className={
                    "overflow-hidden rounded-xl border transition-colors duration-300 " +
                    (isOpen ? "border-emerald-400/40 bg-emerald-500/[0.05]" : "border-white/10 bg-white/[0.02]")
                  }
                >
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                    <span className="text-sm text-white">{f.q}</span>
                    <span
                      className={
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-all duration-300 " +
                        (isOpen ? "bg-emerald-400 text-slate-950" : "bg-white/10 text-white")
                      }
                    >
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  <div className="grid transition-all duration-300" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/*  Final CTA                                                                */
/* ----------------------------------------------------------------------- */

export default FaqSection;
