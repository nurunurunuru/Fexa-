import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  Clock,
  Headset,
  MessageCircle,
  Phone,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";
import Scribble from "../common/Scribble";

const PAIN_POINTS = [
  {
    icon: Headset,
    text: "Too many inquiries to handle",
    color: "cyan",
  },
  {
    icon: Clock,
    text: "Slow response times",
    color: "emerald",
  },
  {
    icon: MessageCircle,
    text: "Repetitive questions eat up time",
    color: "blue",
  },
  {
    icon: Workflow,
    text: "Manual follow-ups get forgotten",
    color: "purple",
  },
  {
    icon: Users,
    text: "Hiring takes unnecessary time",
    color: "amber",
  },
  {
    icon: Zap,
    text: "Valuable leads slip away",
    color: "green",
  },
];

function ProblemSection() {
  const visualRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const element = visualRef.current;

      if (!element) return;

      const rect = element.getBoundingClientRect();

      const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
      const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height;

      setMouse({
        x: x * 12,
        y: y * 12,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="problem-premium-section bg-slate-900/40 py-20">
      {/* Ambient background */}
      <div className="problem-bg-glow problem-bg-glow-1" />
      <div className="problem-bg-glow problem-bg-glow-2" />

      {/* Floating particles */}
      <div className="problem-particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <Reveal>
          <div className="problem-eyebrow-wrap">
            <Eyebrow>The Problem</Eyebrow>
            <span className="problem-live-dot">
              <span />
              Common business bottlenecks
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="problem-title mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your team is buried in{" "}
            <span className="problem-title-gradient">
              repetitive work.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="problem-description mt-4 max-w-2xl text-slate-400">
            Every day your team spends hours on tasks that could be automated.
            It slows growth, increases costs and leads to missed opportunities.
          </p>
        </Reveal>

        {/* Main content */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
          {/* Pain points */}
          <div className="problem-points-grid">
            {PAIN_POINTS.map((p, i) => {
              const Icon = p.icon;

              return (
                <Reveal delay={i * 80} key={p.text}>
                  <div
                    className={`problem-point-card problem-color-${p.color}`}
                    style={{
                      animationDelay: `${i * 180}ms`,
                    }}
                  >
                    {/* Animated shine */}
                    <div className="problem-card-shine" />

                    {/* Icon */}
                    <div className="problem-icon-box">
                      <Icon size={16} />
                    </div>

                    {/* Text */}
                    <span className="problem-point-text">
                      {p.text}
                    </span>

                    {/* Tiny status */}
                    <span className="problem-card-alert">
                      <AlertCircle size={10} />
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Visual */}
          <Reveal delay={220}>
            <div
              ref={visualRef}
              className="problem-visual-wrap"
              style={{
                transform: `perspective(1000px) rotateX(${-mouse.y * 0.35}deg) rotateY(${mouse.x * 0.35}deg)`,
              }}
            >
              <div className="problem-visual">
                {/* Outer glow */}
                <div className="problem-visual-glow" />

                {/* Orbit rings */}
                <div className="problem-orbit problem-orbit-1">
                  <span className="problem-orbit-dot problem-dot-1" />
                </div>

                <div className="problem-orbit problem-orbit-2">
                  <span className="problem-orbit-dot problem-dot-2" />
                </div>

                <div className="problem-orbit problem-orbit-3">
                  <span className="problem-orbit-dot problem-dot-3" />
                </div>

                {/* Grid */}
                <div className="problem-visual-grid" />

                {/* Top label */}
                <div className="problem-visual-label">
                  <span className="problem-label-dot" />
                  <span>Current workload</span>
                </div>

                {/* Main person icon */}
                <div className="problem-person-area">
                  <div className="problem-person-glow" />

                  <div className="problem-person-ring">
                    <div className="problem-person">
                      <Users size={48} />
                    </div>
                  </div>

                  {/* Floating warning bubbles */}
                  <div className="problem-floating-bubble bubble-1">
                    <MessageCircle size={13} />
                    <span>23 chats</span>
                  </div>

                  <div className="problem-floating-bubble bubble-2">
                    <Phone size={13} />
                    <span>5 calls</span>
                  </div>

                  <div className="problem-floating-bubble bubble-3">
                    <Clock size={13} />
                    <span>4.8h/day</span>
                  </div>
                </div>

                {/* Missed calls badge */}
                <div className="problem-missed-calls">
                  <span className="problem-phone-icon">
                    <Phone size={12} />
                  </span>

                  <span>
                    <strong>5 missed calls</strong>
                    <small>Waiting for response</small>
                  </span>

                  <span className="problem-alert-pulse" />
                </div>

                {/* Bottom stats */}
                <div className="problem-bottom-stats">
                  <div>
                    <span className="problem-stat-value">67%</span>
                    <span className="problem-stat-label">
                      Manual work
                    </span>
                  </div>

                  <div className="problem-stat-divider" />

                  <div>
                    <span className="problem-stat-value">24/7</span>
                    <span className="problem-stat-label">
                      Pressure
                    </span>
                  </div>
                </div>

                {/* Scribble */}
                <Scribble
                  text="Sound familiar?"
                  className="problem-scribble"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom transition */}
        <Reveal delay={350}>
          <div className="problem-bottom-message">
            <div className="problem-bottom-line" />

            <div className="problem-bottom-text">
              <span className="problem-bottom-icon">
                <Zap size={13} />
              </span>

              <span>
                What if your team could focus on{" "}
                <strong>work that actually matters?</strong>
              </span>
            </div>

            <div className="problem-bottom-line" />
          </div>
        </Reveal>
      </div>

      <style>{`
        /* =========================================================
           PROBLEM SECTION
        ========================================================= */

        .problem-premium-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background:
            radial-gradient(
              ellipse 55% 45% at 20% 45%,
              rgba(33, 243, 166, 0.075),
              transparent 70%
            ),
            radial-gradient(
              ellipse 45% 45% at 85% 50%,
              rgba(0, 255, 190, 0.055),
              transparent 70%
            ),
            linear-gradient(
              180deg,
              rgba(3, 12, 14, 0.96),
              rgba(2, 8, 10, 1)
            );
        }

        .problem-premium-section::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.22;
          background-image:
            linear-gradient(
              rgba(255,255,255,0.018) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.018) 1px,
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
        }

        .problem-bg-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 999px;
          filter: blur(90px);
          z-index: -1;
        }

        .problem-bg-glow-1 {
          width: 420px;
          height: 420px;
          left: -180px;
          top: 25%;
          background: rgba(33, 243, 166, 0.08);
          animation: problemGlowFloat 9s ease-in-out infinite;
        }

        .problem-bg-glow-2 {
          width: 380px;
          height: 380px;
          right: -170px;
          bottom: 5%;
          background: rgba(0, 255, 190, 0.06);
          animation: problemGlowFloat 11s ease-in-out infinite reverse;
        }

        @keyframes problemGlowFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(30px, -25px, 0) scale(1.12);
          }
        }

        /* =========================================================
           PARTICLES
        ========================================================= */

        .problem-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: -1;
        }

        .problem-particles span {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(53, 255, 192, 0.55);
          box-shadow: 0 0 12px rgba(33, 243, 166, 0.5);
          animation: problemParticleFloat 8s ease-in-out infinite;
        }

        .problem-particles span:nth-child(1) {
          left: 8%;
          top: 20%;
          animation-delay: 0s;
        }

        .problem-particles span:nth-child(2) {
          left: 17%;
          top: 75%;
          animation-delay: 1.5s;
        }

        .problem-particles span:nth-child(3) {
          left: 34%;
          top: 15%;
          animation-delay: 2.4s;
        }

        .problem-particles span:nth-child(4) {
          left: 51%;
          top: 82%;
          animation-delay: 0.8s;
        }

        .problem-particles span:nth-child(5) {
          left: 67%;
          top: 24%;
          animation-delay: 3s;
        }

        .problem-particles span:nth-child(6) {
          left: 78%;
          top: 70%;
          animation-delay: 1s;
        }

        .problem-particles span:nth-child(7) {
          left: 89%;
          top: 34%;
          animation-delay: 2s;
        }

        .problem-particles span:nth-child(8) {
          left: 43%;
          top: 50%;
          animation-delay: 4s;
        }

        @keyframes problemParticleFloat {
          0%, 100% {
            opacity: 0.2;
            transform: translateY(0) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: translateY(-30px) scale(1.25);
          }
        }

        /* =========================================================
           HEADER
        ========================================================= */

        .problem-eyebrow-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .problem-live-dot {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 10px;
          border-radius: 999px;
          border: 1px solid rgba(33, 243, 166, 0.15);
          background: rgba(33, 243, 166, 0.045);
          color: rgba(175, 255, 226, 0.65);
          font-size: 9px;
          letter-spacing: 0.04em;
          animation: problemBadgeFloat 4s ease-in-out infinite;
        }

        .problem-live-dot > span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #21f3a6;
          box-shadow: 0 0 10px rgba(33, 243, 166, 0.8);
          animation: problemLivePulse 1.7s ease-in-out infinite;
        }

        @keyframes problemLivePulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        @keyframes problemBadgeFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .problem-title {
          text-shadow: 0 0 35px rgba(33, 243, 166, 0.06);
        }

        .problem-title-gradient {
          background: linear-gradient(
            90deg,
            #ffffff 0%,
            #35ffc0 45%,
            #21f3a6 70%,
            #8affdc 100%
          );
          background-size: 220% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: problemTextGradient 5s linear infinite;
        }

        @keyframes problemTextGradient {
          from {
            background-position: 0% center;
          }
          to {
            background-position: 220% center;
          }
        }

        .problem-description {
          line-height: 1.8;
        }

        /* =========================================================
           PAIN POINT CARDS
        ========================================================= */

        .problem-points-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .problem-point-card {
          position: relative;
          min-height: 118px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
          overflow: hidden;
          padding: 15px;
          border-radius: 17px;
          border: 1px solid rgba(255, 255, 255, 0.075);
          background:
            linear-gradient(
              145deg,
              rgba(9, 28, 31, 0.82),
              rgba(3, 13, 16, 0.72)
            );
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.035),
            0 14px 40px rgba(0,0,0,0.12);
          backdrop-filter: blur(14px);
          transition:
            transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.35s ease,
            box-shadow 0.35s ease,
            background 0.35s ease;
          animation: problemCardFloat 5s ease-in-out infinite;
          animation-delay: var(--card-delay, 0ms);
        }

        .problem-point-card:hover {
          transform: translateY(-7px) scale(1.025);
          border-color: rgba(33, 243, 166, 0.35);
          background:
            linear-gradient(
              145deg,
              rgba(11, 39, 39, 0.9),
              rgba(3, 17, 19, 0.84)
            );
          box-shadow:
            0 18px 45px rgba(0,0,0,0.3),
            0 0 30px rgba(33,243,166,0.08),
            inset 0 1px 0 rgba(255,255,255,0.06);
        }

        @keyframes problemCardFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .problem-card-shine {
          position: absolute;
          top: -100%;
          left: -80%;
          width: 55%;
          height: 300%;
          pointer-events: none;
          transform: rotate(25deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(53,255,192,0.07),
            transparent
          );
          animation: problemCardShine 6s ease-in-out infinite;
        }

        @keyframes problemCardShine {
          0%, 55% {
            left: -90%;
          }
          75%, 100% {
            left: 150%;
          }
        }

        .problem-icon-box {
          position: relative;
          z-index: 2;
          display: flex;
          width: 34px;
          height: 34px;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          border: 1px solid rgba(33,243,166,0.15);
          background: rgba(33,243,166,0.08);
          color: #35ffc0;
          box-shadow:
            0 0 20px rgba(33,243,166,0.06),
            inset 0 1px 0 rgba(255,255,255,0.05);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .problem-point-card:hover .problem-icon-box {
          transform: rotate(-5deg) scale(1.1);
          box-shadow:
            0 0 25px rgba(33,243,166,0.2),
            0 0 50px rgba(33,243,166,0.08);
        }

        .problem-point-text {
          position: relative;
          z-index: 2;
          font-size: 12px;
          line-height: 1.45;
          color: rgba(226, 238, 235, 0.82);
        }

        .problem-card-alert {
          position: absolute;
          right: 12px;
          bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 19px;
          height: 19px;
          border-radius: 50%;
          color: rgba(255, 130, 130, 0.65);
          background: rgba(255, 70, 70, 0.07);
          border: 1px solid rgba(255, 100, 100, 0.1);
          animation: problemAlertPulse 2.8s ease-in-out infinite;
        }

        @keyframes problemAlertPulse {
          0%, 100% {
            opacity: 0.45;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.08);
          }
        }

        /* =========================================================
           RIGHT VISUAL
        ========================================================= */

        .problem-visual-wrap {
          position: relative;
          width: 100%;
          max-width: 380px;
          margin: 0 auto;
          transition: transform 0.2s ease-out;
          transform-style: preserve-3d;
        }

        .problem-visual {
          position: relative;
          min-height: 390px;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(33, 243, 166, 0.16);
          background:
            radial-gradient(
              circle at 50% 48%,
              rgba(33,243,166,0.10),
              transparent 32%
            ),
            radial-gradient(
              circle at 50% 100%,
              rgba(0,255,190,0.06),
              transparent 55%
            ),
            linear-gradient(
              145deg,
              rgba(8, 27, 30, 0.9),
              rgba(2, 11, 14, 0.96)
            );
          box-shadow:
            0 25px 80px rgba(0,0,0,0.35),
            0 0 55px rgba(33,243,166,0.06),
            inset 0 1px 0 rgba(255,255,255,0.05);
          backdrop-filter: blur(18px);
          transform-style: preserve-3d;
        }

        .problem-visual::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(
              120deg,
              transparent 20%,
              rgba(53,255,192,0.045) 50%,
              transparent 80%
            );
          background-size: 200% 100%;
          animation: problemVisualSweep 7s linear infinite;
        }

        @keyframes problemVisualSweep {
          from {
            background-position: 200% 0;
          }
          to {
            background-position: -200% 0;
          }
        }

        .problem-visual-glow {
          position: absolute;
          left: 50%;
          top: 45%;
          width: 180px;
          height: 180px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: rgba(33,243,166,0.12);
          filter: blur(55px);
          animation: problemCoreGlow 4s ease-in-out infinite;
        }

        @keyframes problemCoreGlow {
          0%, 100% {
            opacity: 0.55;
            transform: translate(-50%, -50%) scale(0.9);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.18);
          }
        }

        .problem-visual-grid {
          position: absolute;
          inset: 0;
          opacity: 0.14;
          background-image:
            linear-gradient(
              rgba(53,255,192,0.07) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(53,255,192,0.07) 1px,
              transparent 1px
            );
          background-size: 32px 32px;
          mask-image: radial-gradient(
            circle at center,
            black,
            transparent 75%
          );
        }

        .problem-visual-label {
          position: absolute;
          left: 18px;
          top: 18px;
          z-index: 8;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 10px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 999px;
          background: rgba(3,14,17,0.65);
          color: rgba(200,220,215,0.58);
          font-size: 9px;
          backdrop-filter: blur(10px);
        }

        .problem-label-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f87171;
          box-shadow: 0 0 10px rgba(248,113,113,0.7);
          animation: problemLivePulse 1.8s infinite;
        }

        /* =========================================================
           ORBITS
        ========================================================= */

        .problem-orbit {
          position: absolute;
          left: 50%;
          top: 48%;
          border: 1px dashed rgba(53,255,192,0.13);
          border-radius: 50%;
          pointer-events: none;
        }

        .problem-orbit-1 {
          width: 205px;
          height: 205px;
          margin-left: -102px;
          margin-top: -102px;
          animation: problemOrbitSpin 16s linear infinite;
        }

        .problem-orbit-2 {
          width: 275px;
          height: 150px;
          margin-left: -137px;
          margin-top: -75px;
          transform: rotate(32deg);
          animation: problemOrbitSpin 21s linear infinite reverse;
        }

        .problem-orbit-3 {
          width: 320px;
          height: 190px;
          margin-left: -160px;
          margin-top: -95px;
          transform: rotate(-35deg);
          animation: problemOrbitSpin 26s linear infinite;
        }

        @keyframes problemOrbitSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .problem-orbit-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #35ffc0;
          box-shadow:
            0 0 10px rgba(53,255,192,0.9),
            0 0 22px rgba(33,243,166,0.45);
        }

        .problem-dot-1 {
          left: 18px;
          top: 20px;
        }

        .problem-dot-2 {
          right: 22px;
          top: 25px;
        }

        .problem-dot-3 {
          left: 35px;
          bottom: 18px;
        }

        /* =========================================================
           PERSON
        ========================================================= */

        .problem-person-area {
          position: absolute;
          left: 50%;
          top: 48%;
          width: 190px;
          height: 190px;
          transform: translate(-50%, -50%);
          z-index: 4;
        }

        .problem-person-glow {
          position: absolute;
          inset: 20px;
          border-radius: 50%;
          background: rgba(33,243,166,0.12);
          filter: blur(25px);
          animation: problemPersonGlow 3.5s ease-in-out infinite;
        }

        @keyframes problemPersonGlow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .problem-person-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 115px;
          height: 115px;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(53,255,192,0.2);
          background: rgba(7,25,27,0.78);
          box-shadow:
            0 0 35px rgba(33,243,166,0.12),
            inset 0 0 30px rgba(33,243,166,0.05);
          animation: problemRingPulse 3s ease-in-out infinite;
        }

        @keyframes problemRingPulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(0.96);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        .problem-person {
          display: flex;
          width: 76px;
          height: 76px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #35ffc0;
          background:
            radial-gradient(
              circle at 40% 35%,
              rgba(53,255,192,0.16),
              rgba(5,25,27,0.95)
            );
          border: 1px solid rgba(53,255,192,0.2);
          box-shadow:
            0 0 30px rgba(33,243,166,0.13);
          animation: problemPersonFloat 4s ease-in-out infinite;
        }

        @keyframes problemPersonFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        /* =========================================================
           FLOATING BUBBLES
        ========================================================= */

        .problem-floating-bubble {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 9px;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          background: rgba(4,17,20,0.82);
          color: rgba(218,237,232,0.72);
          box-shadow:
            0 10px 25px rgba(0,0,0,0.22),
            0 0 18px rgba(33,243,166,0.04);
          backdrop-filter: blur(10px);
          font-size: 9px;
          white-space: nowrap;
        }

        .problem-floating-bubble svg {
          color: #35ffc0;
        }

        .bubble-1 {
          left: -5px;
          top: 38px;
          animation: problemBubble1 4.5s ease-in-out infinite;
        }

        .bubble-2 {
          right: -22px;
          top: 78px;
          animation: problemBubble2 5s ease-in-out infinite;
        }

        .bubble-3 {
          right: -8px;
          bottom: 35px;
          animation: problemBubble3 4.2s ease-in-out infinite;
        }

        @keyframes problemBubble1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-7px, -9px);
          }
        }

        @keyframes problemBubble2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(7px, -8px);
          }
        }

        @keyframes problemBubble3 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(5px, 8px);
          }
        }

        /* =========================================================
           MISSED CALLS
        ========================================================= */

        .problem-missed-calls {
          position: absolute;
          right: 18px;
          top: 18px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 145px;
          padding: 8px 10px;
          border: 1px solid rgba(248,113,113,0.18);
          border-radius: 13px;
          background: rgba(30,8,10,0.76);
          box-shadow:
            0 12px 30px rgba(0,0,0,0.3),
            0 0 20px rgba(248,113,113,0.04);
          backdrop-filter: blur(12px);
          animation: problemMissedFloat 4s ease-in-out infinite;
        }

        @keyframes problemMissedFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        .problem-phone-icon {
          display: flex;
          width: 27px;
          height: 27px;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: #fb7185;
          background: rgba(248,113,113,0.1);
        }

        .problem-missed-calls strong {
          display: block;
          color: rgba(255,235,238,0.88);
          font-size: 9px;
          font-weight: 600;
        }

        .problem-missed-calls small {
          display: block;
          margin-top: 2px;
          color: rgba(255,190,198,0.45);
          font-size: 7px;
        }

        .problem-alert-pulse {
          position: absolute;
          right: 8px;
          top: 8px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #fb7185;
          box-shadow: 0 0 10px rgba(251,113,133,0.8);
          animation: problemLivePulse 1.4s infinite;
        }

        /* =========================================================
           BOTTOM STATS
        ========================================================= */

        .problem-bottom-stats {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 28px;
          z-index: 8;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          padding: 12px 18px;
          border: 1px solid rgba(255,255,255,0.055);
          border-radius: 15px;
          background: rgba(2,12,14,0.65);
          backdrop-filter: blur(12px);
        }

        .problem-bottom-stats > div:not(.problem-stat-divider) {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
        }

        .problem-stat-value {
          color: #35ffc0;
          font-size: 17px;
          font-weight: 700;
          text-shadow: 0 0 18px rgba(53,255,192,0.18);
        }

        .problem-stat-label {
          color: rgba(183,207,201,0.45);
          font-size: 7px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .problem-stat-divider {
          width: 1px;
          height: 30px;
          background: rgba(255,255,255,0.08);
        }

        .problem-scribble {
          position: absolute !important;
          left: 18px !important;
          bottom: 5px !important;
          z-index: 12;
          transform: rotate(-4deg);
        }

        /* =========================================================
           BOTTOM MESSAGE
        ========================================================= */

        .problem-bottom-message {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 55px;
        }

        .problem-bottom-line {
          height: 1px;
          flex: 1;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(33,243,166,0.18),
            transparent
          );
        }

        .problem-bottom-text {
          display: flex;
          align-items: center;
          gap: 9px;
          color: rgba(177,199,194,0.5);
          font-size: 10px;
          text-align: center;
          white-space: nowrap;
        }

        .problem-bottom-text strong {
          color: rgba(53,255,192,0.8);
          font-weight: 600;
        }

        .problem-bottom-icon {
          display: flex;
          width: 24px;
          height: 24px;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          color: #35ffc0;
          background: rgba(33,243,166,0.07);
          border: 1px solid rgba(33,243,166,0.12);
          animation: problemIconPulse 2.5s ease-in-out infinite;
        }

        @keyframes problemIconPulse {
          0%, 100% {
            box-shadow: 0 0 0 rgba(33,243,166,0);
          }
          50% {
            box-shadow: 0 0 20px rgba(33,243,166,0.15);
          }
        }

        /* =========================================================
           RESPONSIVE
        ========================================================= */

        @media (max-width: 640px) {
          .problem-points-grid {
            gap: 9px;
          }

          .problem-point-card {
            min-height: 110px;
            padding: 12px;
          }

          .problem-point-text {
            font-size: 11px;
          }

          .problem-visual {
            min-height: 350px;
          }

          .problem-bottom-message {
            gap: 8px;
          }

          .problem-bottom-line {
            display: none;
          }

          .problem-bottom-text {
            width: 100%;
            justify-content: center;
            white-space: normal;
            line-height: 1.5;
          }

          .problem-missed-calls {
            right: 12px;
            top: 12px;
          }

          .bubble-1 {
            left: -15px;
          }

          .bubble-2 {
            right: -15px;
          }

          .bubble-3 {
            right: -5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .problem-premium-section *,
          .problem-premium-section *::before,
          .problem-premium-section *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* Product blocks: Chat / Recruiter / Voice                                */
/* ----------------------------------------------------------------------- */

export default ProblemSection;