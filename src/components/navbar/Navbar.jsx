import { useEffect, useState } from "react";
import { ArrowRight, Bot, Menu, X } from "lucide-react";
import PrimaryButton from "../common/PrimaryButton";

const NAV_LINKS = ["Product", "Solutions", "Pricing", "Resources", "Company"];


function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        "sticky top-0 z-50 transition-all duration-500 " +
        (scrolled ? "bg-slate-950/85 backdrop-blur-xl border-b border-white/10" : "bg-transparent")
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400 text-sm font-black text-slate-950">
            <Bot size={18} />
          </span>
          <span className="text-lg font-bold tracking-tight text-white">Fexa Agent</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l} href="#" className="group relative text-sm text-slate-300 transition-colors hover:text-white">
              {l}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="#" className="text-sm text-slate-300 transition-colors hover:text-white">
            Sign in
          </a>
          <PrimaryButton className="!px-5 !py-2.5 text-xs">
            Book a Demo <ArrowRight size={14} />
          </PrimaryButton>
        </div>

        <button className="text-white md:hidden" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="overflow-hidden transition-all duration-300 md:hidden" style={{ maxHeight: open ? 320 : 0 }}>
        <div className="flex flex-col gap-4 px-6 pb-6">
          {NAV_LINKS.map((l) => (
            <a key={l} href="#" className="text-sm text-slate-300">
              {l}
            </a>
          ))}
          <PrimaryButton className="w-full justify-center">Book a Demo</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/*  Hero + dashboard mockup                                                 */

export default Navbar;
