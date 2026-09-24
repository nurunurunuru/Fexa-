import Reveal from "../common/Reveal";

function RecruiterMock() {
  const candidates = [
    { name: "Sarah Ahmed", role: "Marketing Specialist", score: 92 },
    { name: "John Carter", role: "Sales Executive", score: 80 },
    { name: "Emily Watson", role: "Content Writer", score: 85 },
    { name: "Michael Brown", role: "Product Manager", score: 83 },
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
      <div className="mb-3 text-xs font-semibold text-white">Top Candidates</div>
      <div className="flex flex-col gap-2.5">
        {candidates.map((c, i) => (
          <Reveal delay={i * 100} key={c.name}>
            <div className="flex items-center gap-3 rounded-lg bg-white/[0.03] p-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fuchsia-500/20 text-[10px] font-semibold text-fuchsia-300">
                {c.name.split(" ").map((n) => n[0]).join("")}
              </span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-xs text-white">{c.name}</div>
                <div className="truncate text-[10px] text-slate-500">{c.role}</div>
              </div>
              <span className="shrink-0 rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold text-emerald-300">
                {c.score}%
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default RecruiterMock;
