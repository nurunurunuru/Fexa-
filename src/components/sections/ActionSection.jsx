import {
  ArrowRight,
  Bot,
  MessageCircle,
  Mic,
  Play,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";
import PrimaryButton from "../common/PrimaryButton";

const VIDEO_CARDS = [
  {
    icon: MessageCircle,
    title: "AI Chat Agent",
    desc: "Automate customer conversations across all channels.",
    time: "02:15",
    number: "01",
  },
  {
    icon: Users,
    title: "AI Recruitment Agent",
    desc: "Find, screen and hire top talent faster with AI.",
    time: "01:28",
    number: "02",
  },
  {
    icon: Mic,
    title: "AI Voice Agent",
    desc: "Handle calls, answer questions and book appointments.",
    time: "02:02",
    number: "03",
  },
];

const NETWORK_NODES = [
  {
    icon: MessageCircle,
    label: "Chat Agent",
    position: "left-0 top-2",
    delay: "0s",
  },
  {
    icon: Users,
    label: "Recruitment Agent",
    position: "right-0 top-2",
    delay: "1.2s",
  },
  {
    icon: Mic,
    label: "Voice Agent",
    position: "right-6 bottom-0",
    delay: "2.2s",
  },
];

function ActionSection() {
 const [activeCard, setActiveCard] = useState(null);
 const [mouse, setMouse] = useState({ x: 50, y: 50 });

 const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      className="action-premium-section relative overflow-hidden bg-slate-950 py-24 sm:py-28"
      onMouseMove={handleMouseMove}
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
         ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Mouse-follow glow */}
        <div
          className="action-mouse-glow absolute h-[420px] w-[420px] rounded-full"
          style={{
            left: `${mouse.x}%`,
            top: `${mouse.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Main emerald glow */}
        <div className="action-main-glow absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full" />

        {/* Left ambient glow */}
        <div className="action-side-glow absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full" />

        {/* Right ambient glow */}
        <div className="action-side-glow action-side-glow-right absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full" />

        {/* Grid */}
        <div className="action-grid absolute inset-0 opacity-30" />

        {/* Floating particles */}
        <span className="action-particle action-particle-1" />
        <span className="action-particle action-particle-2" />
        <span className="action-particle action-particle-3" />
        <span className="action-particle action-particle-4" />
        <span className="action-particle action-particle-5" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* =========================================================
            HEADER
           ========================================================= */}

        <Reveal>
          <div className="inline-flex items-center gap-2">
            <Eyebrow>
              <span className="inline-flex items-center gap-2">
                <Sparkles size={13} />
                Watch &amp; Learn
              </span>
            </Eyebrow>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="action-title mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            See Fexa Agent{" "}
            <span className="action-gradient-text">in Action</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Watch how each AI agent works and discover how Fexa Agent can help
            your business automate, engage and grow — effortlessly.
          </p>
        </Reveal>

        {/* =========================================================
            VIDEO CARDS
           ========================================================= */}

        <div className="mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
          {VIDEO_CARDS.map((video, index) => {
            const Icon = video.icon;
            const isActive = activeCard === index;

            return (
              <Reveal delay={index * 120} key={video.title}>
                <div
                  className={`action-video-card group relative overflow-hidden rounded-3xl border transition-all duration-500 ${
                    isActive
                      ? "border-emerald-400/50"
                      : "border-white/10"
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Card glow */}
                  <div
                    className={`absolute -inset-20 rounded-full bg-emerald-400/10 blur-3xl transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Video preview */}
                  <div className="action-video-preview relative flex h-48 items-center justify-center overflow-hidden">
                    {/* Animated rings */}
                    <span className="action-video-ring action-video-ring-1" />
                    <span className="action-video-ring action-video-ring-2" />
                    <span className="action-video-ring action-video-ring-3" />

                    {/* Top line */}
                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-300/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                        Live Preview
                      </span>

                      <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] text-white/80 backdrop-blur-md">
                        {video.time}
                      </span>
                    </div>

                    {/* Main play button */}
                    <button
                      type="button"
                      aria-label={`Play ${video.title}`}
                      className="action-play-button relative z-10"
                    >
                      <span className="action-play-pulse" />
                      <span className="action-play-pulse action-play-pulse-delay" />

                      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-950 shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_55px_rgba(52,211,153,0.45)]">
                        <Play size={21} fill="currentColor" className="ml-1" />
                      </span>
                    </button>

                    {/* Background icon */}
                    <Icon
                      size={125}
                      strokeWidth={1}
                      className="absolute -bottom-8 -right-7 text-emerald-300/[0.07] transition-all duration-700 group-hover:scale-125 group-hover:text-emerald-300/[0.13]"
                    />

                    {/* Scan line */}
                    <div className="action-scan-line absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
                  </div>

                  {/* Card content */}
                  <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/15">
                          <Icon size={18} />
                        </span>

                        <div>
                          <div className="text-sm font-semibold text-white">
                            {video.title}
                          </div>

                          <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-emerald-400/60">
                            AI Agent
                          </div>
                        </div>
                      </div>

                      <span className="text-xs font-semibold text-emerald-400/40">
                        {video.number}
                      </span>
                    </div>

                    <p className="mt-4 text-xs leading-6 text-slate-500">
                      {video.desc}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-300 transition-all duration-300 group-hover:gap-2.5">
                        Watch Video
                        <ArrowRight size={13} />
                      </span>

                      <span className="text-[10px] text-slate-600">
                        {video.time}
                      </span>
                    </div>

                    {/* Bottom animated line */}
                    <div className="action-card-line absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* =========================================================
            FULL OVERVIEW
           ========================================================= */}

        <Reveal delay={250}>
          <div className="action-overview-card relative mt-8 overflow-hidden rounded-3xl border border-emerald-400/20 p-7 text-left sm:p-9 lg:p-10">
            {/* Card ambient light */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-emerald-400/10 blur-[100px]" />

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
              {/* Left */}
              <div className="relative z-10">
                <Eyebrow>
                  <span className="inline-flex items-center gap-2">
                    <Zap size={13} />
                    Full Overview
                  </span>
                </Eyebrow>

                <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                  See All 3 Agents{" "}
                  <span className="action-gradient-text">Together</span>
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
                  Watch how Fexa Agent&apos;s AI Chat, Recruitment and Voice
                  Agents work together to automate your entire business
                  workflow.
                </p>

                <PrimaryButton className="mt-6 !px-5 !py-2.5 text-xs">
                  <Play size={12} fill="currentColor" />
                  Play Full Video · 03:45
                </PrimaryButton>

                {/* Mini stats */}
                <div className="mt-7 flex flex-wrap gap-5">
                  <div>
                    <div className="text-lg font-bold text-emerald-400">
                      3
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-600">
                      AI Agents
                    </div>
                  </div>

                  <div className="h-9 w-px bg-white/10" />

                  <div>
                    <div className="text-lg font-bold text-emerald-400">
                      24/7
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-600">
                      Automation
                    </div>
                  </div>

                  <div className="h-9 w-px bg-white/10" />

                  <div>
                    <div className="text-lg font-bold text-emerald-400">
                      1
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-600">
                      Platform
                    </div>
                  </div>
                </div>
              </div>

              {/* Right network */}
              <div className="relative mx-auto h-64 w-full max-w-[360px] sm:h-72">
                {/* Orbit glow */}
                <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[60px]" />

                {/* Orbit rings */}
                <div className="action-orbit action-orbit-1 absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/15" />

                <div className="action-orbit action-orbit-2 absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-emerald-400/15" />

                <div className="action-orbit action-orbit-3 absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/10" />

                {/* SVG connections */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 360 288"
                  fill="none"
                >
                  <path
                    d="M180 144 L54 55"
                    stroke="rgba(52,211,153,0.25)"
                    strokeWidth="1"
                    strokeDasharray="5 6"
                    className="action-network-line"
                  />

                  <path
                    d="M180 144 L306 55"
                    stroke="rgba(52,211,153,0.25)"
                    strokeWidth="1"
                    strokeDasharray="5 6"
                    className="action-network-line action-network-line-delay"
                  />

                  <path
                    d="M180 144 L300 230"
                    stroke="rgba(52,211,153,0.25)"
                    strokeWidth="1"
                    strokeDasharray="5 6"
                    className="action-network-line"
                  />

                  {/* Traveling particles */}
                  <circle
                    r="3"
                    fill="#35ffc0"
                    className="action-travel-dot action-travel-dot-1"
                  />

                  <circle
                    r="3"
                    fill="#35ffc0"
                    className="action-travel-dot action-travel-dot-2"
                  />

                  <circle
                    r="3"
                    fill="#35ffc0"
                    className="action-travel-dot action-travel-dot-3"
                  />
                </svg>

                {/* Agent nodes */}
                {NETWORK_NODES.map((node) => {
                  const NodeIcon = node.icon;

                  return (
                    <div
                      key={node.label}
                      className={`absolute ${node.position} z-20 flex flex-col items-center gap-2`}
                      style={{
                        animation: `actionNodeFloat 4s ease-in-out ${node.delay} infinite`,
                      }}
                    >
                      <div className="action-node">
                        <NodeIcon size={17} />
                      </div>

                      <span className="whitespace-nowrap rounded-full border border-white/5 bg-slate-950/70 px-2.5 py-1 text-[9px] font-medium text-slate-400 backdrop-blur-md">
                        {node.label}
                      </span>
                    </div>
                  );
                })}

                {/* Center Fexa */}
                <div className="absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                  <div className="action-center-orb relative flex h-20 w-20 items-center justify-center rounded-full">
                    <div className="action-center-ring absolute inset-[-10px] rounded-full border border-emerald-400/10" />

                    <div className="action-center-ring action-center-ring-2 absolute inset-[-20px] rounded-full border border-emerald-400/5" />

                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/60 bg-emerald-400 text-slate-950 shadow-[0_0_45px_rgba(52,211,153,0.45)]">
                      <Bot size={25} />
                    </div>
                  </div>

                  <span className="mt-3 whitespace-nowrap text-xs font-semibold text-white">
                    Fexa Agent
                  </span>

                  <span className="mt-1 whitespace-nowrap text-[8px] tracking-wide text-slate-600">
                    One Platform · Endless Possibilities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* =========================================================
          LOCAL CSS ANIMATIONS
         ========================================================= */}

      <style>{`
        .action-premium-section {
          isolation: isolate;
        }

        /* Background */

        .action-mouse-glow {
          background:
            radial-gradient(
              circle,
              rgba(33, 243, 166, 0.09) 0%,
              rgba(33, 243, 166, 0.035) 35%,
              transparent 70%
            );
          filter: blur(20px);
          opacity: 0.8;
          transition:
            left 0.25s ease-out,
            top 0.25s ease-out;
        }

        .action-main-glow {
          background:
            radial-gradient(
              ellipse,
              rgba(33, 243, 166, 0.085),
              rgba(33, 243, 166, 0.025) 45%,
              transparent 72%
            );
          filter: blur(50px);
          animation: actionMainGlow 8s ease-in-out infinite alternate;
        }

        .action-side-glow {
          background: radial-gradient(
            circle,
            rgba(33, 243, 166, 0.06),
            transparent 70%
          );
          filter: blur(50px);
          animation: actionSideGlow 9s ease-in-out infinite alternate;
        }

        .action-side-glow-right {
          animation-delay: -3s;
        }

        @keyframes actionMainGlow {
          0% {
            transform: translateX(-50%) scale(0.95);
            opacity: 0.55;
          }

          100% {
            transform: translateX(-50%) scale(1.08);
            opacity: 1;
          }
        }

        @keyframes actionSideGlow {
          0% {
            transform: translateY(15px) scale(0.9);
            opacity: 0.45;
          }

          100% {
            transform: translateY(-20px) scale(1.08);
            opacity: 0.85;
          }
        }

        /* Grid */

        .action-grid {
          background-image:
            linear-gradient(
              rgba(52, 211, 153, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(52, 211, 153, 0.035) 1px,
              transparent 1px
            );
          background-size: 55px 55px;
          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 20%,
            black 80%,
            transparent
          );
          animation: actionGridMove 18s linear infinite;
        }

        @keyframes actionGridMove {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 55px 55px;
          }
        }

        /* Particles */

        .action-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 999px;
          background: #35ffc0;
          box-shadow: 0 0 12px rgba(53, 255, 192, 0.8);
          opacity: 0;
          animation: actionParticleFloat 7s ease-in-out infinite;
        }

        .action-particle-1 {
          left: 12%;
          top: 25%;
          animation-delay: 0s;
        }

        .action-particle-2 {
          left: 82%;
          top: 18%;
          animation-delay: 1.5s;
        }

        .action-particle-3 {
          left: 24%;
          top: 70%;
          animation-delay: 3s;
        }

        .action-particle-4 {
          right: 15%;
          bottom: 24%;
          animation-delay: 4.5s;
        }

        .action-particle-5 {
          left: 50%;
          bottom: 12%;
          animation-delay: 2s;
        }

        @keyframes actionParticleFloat {
          0% {
            transform: translateY(20px) scale(0.5);
            opacity: 0;
          }

          25% {
            opacity: 0.7;
          }

          70% {
            opacity: 0.4;
          }

          100% {
            transform: translateY(-80px) scale(1.2);
            opacity: 0;
          }
        }

        /* Heading */

        .action-gradient-text {
          background: linear-gradient(
            90deg,
            #21f3a6,
            #35ffc0,
            #22d3ee,
            #21f3a6
          );
          background-size: 250% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: actionGradient 5s linear infinite;
          text-shadow: none;
        }

        @keyframes actionGradient {
          to {
            background-position: 250% center;
          }
        }

        /* Video cards */

        .action-video-card {
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(33, 243, 166, 0.045),
              transparent 55%
            ),
            rgba(5, 17, 20, 0.82);
          box-shadow:
            0 18px 50px rgba(0, 0, 0, 0.22),
            0 0 30px rgba(33, 243, 166, 0.018);
          backdrop-filter: blur(18px);
        }

        .action-video-card:hover {
          box-shadow:
            0 25px 65px rgba(0, 0, 0, 0.32),
            0 0 45px rgba(33, 243, 166, 0.09);
        }

        .action-video-preview {
          background:
            radial-gradient(
              circle at 50% 55%,
              rgba(33, 243, 166, 0.12),
              transparent 35%
            ),
            linear-gradient(
              145deg,
              rgba(7, 35, 32, 0.92),
              rgba(3, 14, 17, 0.98)
            );
        }

        .action-video-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          border: 1px solid rgba(53, 255, 192, 0.12);
          border-radius: 999px;
          transform: translate(-50%, -50%);
        }

        .action-video-ring-1 {
          width: 100px;
          height: 100px;
          animation: actionRing 4s ease-in-out infinite;
        }

        .action-video-ring-2 {
          width: 160px;
          height: 160px;
          border-color: rgba(53, 255, 192, 0.07);
          animation: actionRing 5s ease-in-out infinite reverse;
        }

        .action-video-ring-3 {
          width: 230px;
          height: 230px;
          border-color: rgba(53, 255, 192, 0.045);
          animation: actionRing 7s ease-in-out infinite;
        }

        @keyframes actionRing {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.92);
            opacity: 0.35;
          }

          50% {
            transform: translate(-50%, -50%) scale(1.08);
            opacity: 1;
          }
        }

        /* Play button */

        .action-play-button {
          position: relative;
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .action-play-pulse {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 76px;
          height: 76px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 999px;
          transform: translate(-50%, -50%);
          animation: actionPlayPulse 2.4s ease-out infinite;
        }

        .action-play-pulse-delay {
          animation-delay: 1.2s;
        }

        @keyframes actionPlayPulse {
          0% {
            transform: translate(-50%, -50%) scale(0.65);
            opacity: 0.7;
          }

          100% {
            transform: translate(-50%, -50%) scale(1.65);
            opacity: 0;
          }
        }

        /* Scan line */

        .action-scan-line {
          top: -10%;
          animation: actionScan 4s linear infinite;
        }

        @keyframes actionScan {
          0% {
            top: -10%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            top: 110%;
            opacity: 0;
          }
        }

        /* Overview */

        .action-overview-card {
          background:
            radial-gradient(
              ellipse 70% 100% at 100% 50%,
              rgba(33, 243, 166, 0.08),
              transparent 65%
            ),
            linear-gradient(
              135deg,
              rgba(7, 29, 31, 0.9),
              rgba(3, 14, 17, 0.88)
            );
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.045),
            0 25px 70px rgba(0, 0, 0, 0.25),
            0 0 50px rgba(33, 243, 166, 0.035);
          backdrop-filter: blur(18px);
        }

        /* Orbit */

        .action-orbit-1 {
          animation: actionOrbitSpin 18s linear infinite;
        }

        .action-orbit-2 {
          animation: actionOrbitSpinReverse 12s linear infinite;
        }

        .action-orbit-3 {
          animation: actionOrbitSpin 8s linear infinite;
        }

        @keyframes actionOrbitSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes actionOrbitSpinReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        /* Network */

        .action-network-line {
          animation: actionNetworkDash 3s linear infinite;
        }

        .action-network-line-delay {
          animation-delay: 1s;
        }

        @keyframes actionNetworkDash {
          to {
            stroke-dashoffset: -22;
          }
        }

        .action-travel-dot {
          opacity: 0;
        }

        .action-travel-dot-1 {
          animation: actionTravelOne 3.5s linear infinite;
        }

        .action-travel-dot-2 {
          animation: actionTravelTwo 3.5s linear 1.1s infinite;
        }

        .action-travel-dot-3 {
          animation: actionTravelThree 3.5s linear 2.1s infinite;
        }

        @keyframes actionTravelOne {
          0% {
            cx: 180;
            cy: 144;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            cx: 54;
            cy: 55;
            opacity: 0;
          }
        }

        @keyframes actionTravelTwo {
          0% {
            cx: 180;
            cy: 144;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            cx: 306;
            cy: 55;
            opacity: 0;
          }
        }

        @keyframes actionTravelThree {
          0% {
            cx: 180;
            cy: 144;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            cx: 300;
            cy: 230;
            opacity: 0;
          }
        }

        /* Nodes */

        .action-node {
          display: flex;
          height: 42px;
          width: 42px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(53, 255, 192, 0.22);
          border-radius: 14px;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(53, 255, 192, 0.12),
              transparent 70%
            ),
            rgba(3, 18, 20, 0.92);
          color: #35ffc0;
          box-shadow:
            0 0 25px rgba(33, 243, 166, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .action-node:hover {
          transform: scale(1.12);
          border-color: rgba(53, 255, 192, 0.5);
          box-shadow:
            0 0 35px rgba(33, 243, 166, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        @keyframes actionNodeFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-9px);
          }
        }

        /* Center orb */

        .action-center-orb {
          animation: actionCenterFloat 4s ease-in-out infinite;
        }

        .action-center-ring {
          animation: actionCenterRing 3s ease-out infinite;
        }

        .action-center-ring-2 {
          animation-delay: 1.5s;
        }

        @keyframes actionCenterFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes actionCenterRing {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }

          100% {
            transform: scale(1.25);
            opacity: 0;
          }
        }

        /* Responsive */

        @media (max-width: 640px) {
          .action-mouse-glow {
            display: none;
          }

          .action-grid {
            background-size: 40px 40px;
          }

          .action-overview-card {
            padding: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .action-main-glow,
          .action-side-glow,
          .action-grid,
          .action-particle,
          .action-gradient-text,
          .action-video-ring,
          .action-play-pulse,
          .action-scan-line,
          .action-orbit-1,
          .action-orbit-2,
          .action-orbit-3,
          .action-network-line,
          .action-travel-dot,
          .action-center-orb,
          .action-center-ring,
          .action-node {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default ActionSection;