import { Bot } from "lucide-react";
import FacebookIcon from "../icons/FacebookIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

const FOOTER_COLS = {
  Product: ["AI Chat", "AI Recruiter", "AI Voice", "AI Solutions", "Integrations"],
  Company: ["About", "Careers", "Blog", "Contact"],
  Resources: ["Help Center", "Documentation", "Case Studies", "Pricing"],
};


function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 pt-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 pb-10 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400 text-slate-950">
              <Bot size={14} />
            </span>
            <span className="text-base font-bold text-white">Fexa Agent</span>
          </div>
          <p className="mt-3 max-w-[200px] text-xs leading-relaxed text-slate-500">
            AI agents for modern businesses. Automate. Engage. Grow.
          </p>
          <div className="mt-4 flex gap-3 text-slate-500">
            {[LinkedinIcon, FacebookIcon, TwitterIcon, YoutubeIcon].map((Icon, i) => (
              <a key={i} href="#" className="transition-colors hover:text-emerald-300">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_COLS).map(([col, links]) => (
          <div key={col}>
            <div className="mb-4 text-xs font-semibold text-white">{col}</div>
            <ul className="flex flex-col gap-2.5">
              {links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-xs text-slate-500 transition-colors hover:text-emerald-300">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-slate-600">
        © 2026 Fexa Agent. All rights reserved.
      </div>
    </footer>
  );
}

/* ----------------------------------------------------------------------- */
/*  App                                                                       */
/* ----------------------------------------------------------------------- */

export default Footer;
