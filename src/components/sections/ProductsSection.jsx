"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  FileText,
  MessageCircle,
  Phone,
  Sparkles,
  UserRound,
  Zap,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";

/* ==========================================================================
   PRODUCT DATA
   ========================================================================== */

const PRODUCT_BLOCKS = [
  {
    tag: "Chat",
    title: "AI Chat Agent",
    tagline: "Turn conversations into customers.",
    description:
      "Connect your business channels and let AI handle customer conversations, answer questions, qualify leads and keep your business running 24/7.",
    items: [
      "Replies instantly on Facebook, Instagram & WhatsApp",
      "Answers product and service questions",
      "Qualifies leads & books appointments",
      "Works 24/7 without breaks",
    ],
    color: "#22c55e",
    platforms: [
      { type: "facebook", label: "Facebook" },
      { type: "instagram", label: "Instagram" },
      { type: "whatsapp", label: "WhatsApp" },
    ],
  },

{
  tag: "Recruit",
  title: "AI Recruiter Agent",
  tagline: "From CV to interview — automatically.",
  description:
    "Upload a candidate's resume and let AI analyze their skills, experience and education against the job requirements. Once approved, Fexa automatically sends the interview invitation, conducts the AI interview and delivers a complete evaluation to your admin dashboard.",
  items: [
    "Analyzes CV & calculates job compatibility %",
    "Admin approval triggers interview invitation",
    "Sends interview invitation directly to candidate email",
    "Conducts AI-powered voice/video interviews",
    "Analyzes strengths, weaknesses & communication",
    "Delivers complete results to admin dashboard",
  ],
  color: "#8b5cf6",
  platforms: [
    { type: "whatsapp", label: "Interview" },
    { type: "zap", label: "Automation" },
  ],
},


  {
    tag: "Voice",
    title: "AI Voice Agent",
    tagline: "Natural conversations. Real results.",
    description:
      "Give your customers a voice-first experience that can answer questions, take orders, book appointments and handle calls automatically.",
    items: [
      "Handles calls like a real human",
      "Answers questions & provides information",
      "Books appointments & takes orders",
      "Supports multiple languages",
    ],
    color: "#06b6d4",
    platforms: [
      { type: "phone", label: "Voice" },
      { type: "zap", label: "Automation" },
    ],
  },
];

/* ==========================================================================
   ICON HELPER
   ========================================================================== */

function PlatformIcon({ type, size = 17 }) {
  if (type === "facebook") {
    return <FaFacebookF size={size} />;
  }

  if (type === "instagram") {
    return <FaInstagram size={size} />;
  }

  if (type === "whatsapp") {
    return <FaWhatsapp size={size} />;
  }

  if (type === "phone") {
    return <Phone size={size} />;
  }

  return <Zap size={size} />;
}

/* ==========================================================================
   FLOATING PARTICLES
   ========================================================================== */

function FloatingParticles({ color }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(16)].map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full"
          style={{
            background: color,
            left: `${4 + ((i * 19) % 92)}%`,
            top: `${7 + ((i * 31) % 86)}%`,
            opacity: 0.25,
            boxShadow: `0 0 12px ${color}`,
            animation: `productParticle ${
              3 + (i % 4)
            }s ease-in-out infinite`,
            animationDelay: `${i * 0.28}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ==========================================================================
   SOCIAL CONNECTION
   ========================================================================== */

function SocialConnection({ color }) {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block">
      <div
        className="absolute left-[5%] right-[5%] top-1/2 h-px opacity-20"
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${color},
            transparent
          )`,
        }}
      />

      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute top-1/2 h-1.5 w-1.5 rounded-full"
          style={{
            background: color,
            boxShadow: `0 0 14px ${color}`,
            animation: "dataFlow 4s linear infinite",
            animationDelay: `${i * 1.3}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ==========================================================================
   SOCIAL PLATFORM ICONS
   ========================================================================== */

function SocialIcons({ platforms, color }) {
  return (
    <div className="absolute -top-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
      {platforms.map((platform, index) => (
        <div
          key={platform.label}
          title={platform.label}
          className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/95 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
          style={{
            animation: `socialFloat ${
              3 + index * 0.5
            }s ease-in-out infinite`,
            animationDelay: `${index * 0.35}s`,
            boxShadow: `0 8px 30px ${color}18`,
          }}
        >
          <span
            className="transition-transform duration-300 group-hover:scale-110"
            style={{
              color:
                platform.type === "facebook"
                  ? "#1877F2"
                  : platform.type === "instagram"
                    ? "#E4405F"
                    : platform.type === "whatsapp"
                      ? "#25D366"
                      : color,
            }}
          >
            <PlatformIcon type={platform.type} size={17} />
          </span>
        </div>
      ))}
    </div>
  );
}

/* ==========================================================================
   AI CHAT MOCK
   ========================================================================== */

function ChatMock() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[390px]">
      {/* Main browser/chat window */}
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950">
              <Bot size={15} className="text-emerald-400" />
            </div>

            <div>
              <p className="text-[11px] font-bold text-slate-900">
                Fexa Agents
              </p>

              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                <span className="text-[9px] font-medium text-slate-400">
                  Online
                </span>
              </div>
            </div>
          </div>

          <MessageCircle
            size={16}
            className="text-slate-300"
          />
        </div>

        {/* Chat area */}
        <div className="h-[245px] bg-slate-50 p-4">
          {/* Date */}
          <div className="mb-4 text-center">
            <span className="rounded-full bg-white px-3 py-1 text-[8px] font-medium text-slate-400 shadow-sm">
              TODAY
            </span>
          </div>

          {/* User message */}
          <div
            className={`ml-auto max-w-[82%] rounded-2xl rounded-br-md bg-slate-950 px-3.5 py-2.5 text-[10px] leading-5 text-white transition-all duration-700 ${
              step >= 1
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            Hi, I'm looking for a product for my team.
          </div>

          {/* Typing */}
          <div
            className={`mt-3 flex items-center gap-1 transition-all duration-500 ${
              step === 1
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
          >
            <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 shadow-sm">
              <span className="h-1 w-1 animate-bounce rounded-full bg-slate-300 [animation-delay:-0.3s]" />
              <span className="h-1 w-1 animate-bounce rounded-full bg-slate-300 [animation-delay:-0.15s]" />
              <span className="h-1 w-1 animate-bounce rounded-full bg-slate-300" />
            </div>
          </div>

          {/* AI reply */}
          <div
            className={`mt-3 max-w-[86%] rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-[10px] leading-5 text-slate-600 shadow-sm transition-all duration-700 ${
              step >= 2
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            Absolutely! I can help you find the right solution for your team.
          </div>

          {/* Success state */}
          <div
            className={`mt-4 flex items-center gap-2 transition-all duration-700 ${
              step >= 3
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
              <Check size={12} className="text-emerald-600" />
            </div>

            <span className="text-[9px] font-medium text-emerald-600">
              Conversation handled automatically
            </span>
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-slate-200 bg-white p-3">
          <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            <span className="text-[9px] text-slate-400">
              Type a message
            </span>

            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-950">
              <ArrowRight
                size={11}
                className="text-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating status */}
      <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/95 px-3 py-2 shadow-2xl backdrop-blur-xl">
        <span className="relative flex h-2 w-2">
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
        </span>

        <span className="text-[9px] font-medium text-slate-300">
          AI responding
        </span>
      </div>
    </div>
  );
}

/* ==========================================================================
   RECRUITER MOCK
   ========================================================================== */

function RecruiterMock() {
  const [stage, setStage] = useState(0);

  /*
    Recruiter workflow:

    0 → Resume uploaded
    1 → AI analyzing resume
    2 → Match score generated
    3 → Admin approved
    4 → Interview email sent
    5 → AI interview
    6 → AI evaluation
    7 → Result ready
  */

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev >= 7 ? 0 : prev + 1));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const workflow = [
    {
      label: "Resume uploaded",
      sub: "Sarah_Johnson_CV.pdf",
      icon: FileText,
    },
    {
      label: "AI analyzing resume",
      sub: "Experience • Skills • Education",
      icon: Sparkles,
    },
    {
      label: "Job compatibility calculated",
      sub: "AI matching candidate with job",
      icon: Bot,
    },
    {
      label: "Admin approved",
      sub: "Candidate moved to interview",
      icon: Check,
    },
    {
      label: "Interview invitation sent",
      sub: "Email delivered to candidate",
      icon: MessageCircle,
    },
    {
      label: "AI interview completed",
      sub: "Voice interview analyzed",
      icon: Phone,
    },
    {
      label: "AI evaluation completed",
      sub: "Strengths & weaknesses detected",
      icon: Sparkles,
    },
    {
      label: "Recruitment result ready",
      sub: "Available in admin dashboard",
      icon: Check,
    },
  ];

  const score =
    stage >= 2
      ? stage >= 3
        ? "92%"
        : "87%"
      : "—";

  return (
    <div className="relative mx-auto w-full max-w-[400px]">

      {/* ================================================================
          MAIN RECRUITER DASHBOARD
          ================================================================ */}

      <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white shadow-2xl">

        {/* ================================================================
            HEADER
            ================================================================ */}

        <div className="border-b border-slate-200 bg-white px-4 py-3">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2.5">

              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100">
                <Bot
                  size={17}
                  className="text-violet-600"
                />

                {stage >= 1 && stage <= 6 && (
                  <span className="absolute -right-1 -top-1 h-2.5 w-2.5 animate-ping rounded-full bg-violet-400 opacity-70" />
                )}
              </div>

              <div>
                <p className="text-[11px] font-bold text-slate-900">
                  Fexa AI Recruiter
                </p>

                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                  <span className="text-[8px] text-slate-400">
                    Recruitment workflow active
                  </span>
                </div>
              </div>

            </div>

            <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[8px] font-bold text-violet-500">
              AI POWERED
            </span>

          </div>

        </div>

        {/* ================================================================
            CANDIDATE
            ================================================================ */}

        <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xs font-bold text-white shadow-lg shadow-violet-500/20">
                SJ
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-800">
                  Sarah Johnson
                </p>

                <p className="text-[8px] text-slate-400">
                  Product Designer
                </p>
              </div>

            </div>

            {/* Score */}
            <div className="text-right">

              <p className="text-[7px] font-medium uppercase tracking-wider text-slate-400">
                Job Match
              </p>

              <p
                className={`text-lg font-black transition-all duration-700 ${
                  stage >= 2
                    ? "text-violet-600"
                    : "text-slate-300"
                }`}
              >
                {score}
              </p>

            </div>

          </div>

        </div>

        {/* ================================================================
            AI MATCH SCORE
            ================================================================ */}

        <div className="bg-white px-4 py-3">

          <div className="mb-2 flex items-center justify-between">

            <span className="text-[8px] font-semibold text-slate-500">
              Candidate compatibility
            </span>

            <span className="text-[8px] font-bold text-violet-500">
              {stage >= 2
                ? "Excellent match"
                : "Analyzing..."}
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-100">

            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-400 transition-all duration-1000"
              style={{
                width:
                  stage >= 3
                    ? "92%"
                    : stage >= 2
                      ? "87%"
                      : stage >= 1
                        ? "48%"
                        : "8%",
              }}
            />

          </div>

          <div className="mt-1.5 flex justify-between">

            <span className="text-[7px] text-slate-400">
              Skills
            </span>

            <span className="text-[7px] text-slate-400">
              Experience
            </span>

            <span className="text-[7px] text-slate-400">
              Education
            </span>

            <span className="text-[7px] text-slate-400">
              Job fit
            </span>

          </div>

        </div>

        {/* ================================================================
            WORKFLOW
            ================================================================ */}

        <div className="h-[210px] overflow-hidden bg-slate-50 px-4 py-3">

          <div className="mb-3 flex items-center justify-between">

            <div>
              <p className="text-[9px] font-bold text-slate-700">
                Recruitment workflow
              </p>

              <p className="text-[7px] text-slate-400">
                Automated candidate journey
              </p>
            </div>

            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[7px] font-bold text-emerald-500">
              LIVE
            </span>

          </div>

          <div className="relative space-y-1.5">

            {/* Vertical line */}

            <div className="absolute bottom-4 left-[11px] top-4 w-px bg-slate-200" />

            {workflow.slice(
              Math.max(0, stage - 3),
              Math.min(workflow.length, stage + 2)
            ).map((item, localIndex) => {

              const realIndex =
                Math.max(0, stage - 3) +
                localIndex;

              const Icon = item.icon;

              const completed =
                realIndex < stage;

              const current =
                realIndex === stage;

              return (
                <div
                  key={item.label}
                  className={`relative flex items-center gap-2.5 rounded-xl border px-2.5 py-2 transition-all duration-700 ${
                    current
                      ? "border-violet-200 bg-white shadow-md shadow-violet-500/5"
                      : completed
                        ? "border-slate-100 bg-white/70"
                        : "border-transparent bg-transparent"
                  }`}
                >

                  {/* Status circle */}

                  <div
                    className={`relative z-10 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                      completed
                        ? "bg-emerald-100"
                        : current
                          ? "bg-violet-100"
                          : "bg-slate-100"
                    }`}
                  >

                    {completed ? (
                      <Check
                        size={10}
                        className="text-emerald-500"
                      />
                    ) : current ? (
                      <Icon
                        size={10}
                        className="animate-pulse text-violet-600"
                      />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    )}

                  </div>

                  {/* Text */}

                  <div className="min-w-0 flex-1">

                    <p
                      className={`truncate text-[8px] font-semibold ${
                        current
                          ? "text-violet-600"
                          : completed
                            ? "text-slate-600"
                            : "text-slate-400"
                      }`}
                    >
                      {item.label}
                    </p>

                    <p className="truncate text-[7px] text-slate-400">
                      {item.sub}
                    </p>

                  </div>

                  {/* Current animation */}

                  {current && (
                    <div className="flex items-center gap-1">

                      <span className="h-1 w-1 animate-pulse rounded-full bg-violet-500" />
                      <span className="text-[6px] font-bold uppercase tracking-wider text-violet-400">
                        Processing
                      </span>

                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

        {/* ================================================================
            FINAL RESULT
            ================================================================ */}

        <div className="border-t border-slate-200 bg-white px-4 py-3">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <div
                className={`flex h-7 w-7 items-center justify-center rounded-lg transition-all duration-700 ${
                  stage >= 7
                    ? "bg-emerald-100"
                    : "bg-slate-100"
                }`}
              >

                <Check
                  size={13}
                  className={
                    stage >= 7
                      ? "text-emerald-500"
                      : "text-slate-300"
                  }
                />

              </div>

              <div>

                <p className="text-[8px] font-bold text-slate-700">
                  AI evaluation
                </p>

                <p className="text-[7px] text-slate-400">
                  {stage >= 7
                    ? "Result ready for admin"
                    : "Analyzing candidate..."}
                </p>

              </div>

            </div>

            {stage >= 7 && (
              <span className="animate-pulse rounded-full bg-emerald-50 px-2.5 py-1 text-[7px] font-bold text-emerald-500">
                READY
              </span>
            )}

          </div>

        </div>

      </div>

      {/* ================================================================
          FLOATING EMAIL NOTIFICATION
          ================================================================ */}

      <div
        className={`absolute -right-4 top-[30%] z-30 w-[145px] rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl transition-all duration-700 ${
          stage >= 4
            ? "translate-x-0 opacity-100"
            : "translate-x-5 opacity-0"
        }`}
      >

        <div className="flex items-start gap-2">

          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
            <MessageCircle
              size={12}
              className="text-violet-400"
            />
          </div>

          <div className="min-w-0">

            <p className="text-[7px] font-bold text-white">
              Interview Invitation
            </p>

            <p className="mt-1 text-[6px] leading-3 text-slate-500">
              Email sent to Sarah Johnson
            </p>

            <div className="mt-2 flex items-center gap-1">

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <span className="text-[6px] font-semibold text-emerald-400">
                Delivered
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* ================================================================
          INTERVIEW RESULT CARD
          ================================================================ */}

      <div
        className={`absolute -bottom-5 -left-5 z-30 w-[150px] rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl transition-all duration-700 ${
          stage >= 6
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
      >

        <div className="mb-2 flex items-center justify-between">

          <span className="text-[7px] font-bold uppercase tracking-wider text-slate-500">
            AI Interview Result
          </span>

          <Sparkles
            size={11}
            className="text-violet-400"
          />

        </div>

        <div className="flex items-end gap-2">

          <span className="text-2xl font-black text-white">
            8.7
          </span>

          <span className="mb-1 text-[7px] text-slate-500">
            / 10
          </span>

        </div>

        <div className="mt-2 space-y-1">

          <div className="flex items-center justify-between">
            <span className="text-[6px] text-slate-500">
              Communication
            </span>

            <span className="text-[6px] font-bold text-emerald-400">
              Strong
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[6px] text-slate-500">
              Technical skills
            </span>

            <span className="text-[6px] font-bold text-emerald-400">
              Strong
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[6px] text-slate-500">
              Problem solving
            </span>

            <span className="text-[6px] font-bold text-amber-400">
              Moderate
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

/* ==========================================================================
   VOICE MOCK
   ========================================================================== */

function VoiceMock() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => !prev);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[390px]">
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-100">
              <Phone
                size={16}
                className="text-cyan-600"
              />
            </div>

            <div>
              <p className="text-[11px] font-bold text-slate-900">
                Fexa Voice Agent
              </p>

              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                <span className="text-[8px] text-slate-400">
                  Call in progress
                </span>
              </div>
            </div>
          </div>

          <span className="text-[9px] font-semibold text-cyan-600">
            02:48
          </span>
        </div>

        {/* Voice visualization */}
        <div className="flex h-[245px] flex-col items-center justify-center bg-slate-50">
          <div className="relative flex h-28 w-28 items-center justify-center">
            <span
              className={`absolute inset-0 rounded-full border border-cyan-400/20 ${
                active ? "animate-ping" : ""
              }`}
            />

            <span className="absolute inset-3 rounded-full border border-cyan-400/20" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 shadow-xl">
              <Phone
                size={22}
                className="text-cyan-400"
              />
            </div>
          </div>

          <p className="mt-5 text-xs font-bold text-slate-800">
            Listening...
          </p>

          <p className="mt-1 text-[9px] text-slate-400">
            Fexa is understanding the customer
          </p>

          {/* Audio bars */}
          <div className="mt-5 flex h-8 items-center gap-1">
            {[4, 8, 14, 22, 13, 8, 18, 10, 5].map(
              (height, index) => (
                <span
                  key={index}
                  className="w-1 rounded-full bg-cyan-400"
                  style={{
                    height: `${active ? height : 4}px`,
                    transition:
                      "height 300ms ease",
                    animation:
                      active
                        ? `voiceBar ${
                            0.6 + index * 0.08
                          }s ease-in-out infinite alternate`
                        : "none",
                    animationDelay: `${index * 0.08}s`,
                  }}
                />
              )
            )}
          </div>
        </div>

        {/* Call controls */}
        <div className="flex items-center justify-center gap-3 border-t border-slate-200 bg-white p-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100">
            <MessageCircle
              size={14}
              className="text-slate-500"
            />
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500">
            <Phone
              size={15}
              className="rotate-[135deg] text-white"
            />
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100">
            <Zap
              size={14}
              className="text-slate-500"
            />
          </div>
        </div>
      </div>

      {/* Floating language badge */}
      <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/95 px-3 py-2 shadow-2xl backdrop-blur-xl">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

        <span className="text-[9px] font-medium text-slate-300">
          Multi-language AI
        </span>
      </div>
    </div>
  );
}

/* ==========================================================================
   FLOW NODE
   ========================================================================== */

function FlowNode({
  icon: Icon,
  label,
  sub,
  active = false,
}) {
  return (
    <div
      className={`relative flex min-w-[155px] flex-col items-center rounded-2xl border px-5 py-4 text-center transition-all duration-500 ${
        active
          ? "border-emerald-400/30 bg-emerald-400/[0.06] shadow-[0_0_35px_rgba(52,211,153,0.06)]"
          : "border-white/10 bg-white/[0.025]"
      }`}
    >
      <div
        className={`mb-2 flex h-10 w-10 items-center justify-center rounded-xl ${
          active
            ? "bg-emerald-400/10"
            : "bg-white/5"
        }`}
      >
        <Icon
          size={18}
          className={
            active
              ? "text-emerald-300"
              : "text-slate-400"
          }
        />
      </div>

      <span className="text-xs font-semibold text-white">
        {label}
      </span>

      <span className="mt-1 text-[9px] text-slate-500">
        {sub}
      </span>

      {active && (
        <span className="absolute -right-1 -top-1 h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
      )}
    </div>
  );
}

/* ==========================================================================
   FLOW ARROW
   ========================================================================== */

function FlowArrow() {
  return (
    <div className="relative flex h-7 w-10 items-center justify-center">
      <div className="hidden h-px w-full bg-gradient-to-r from-white/10 via-emerald-400/40 to-white/10 sm:block" />

      <ArrowRight
        size={14}
        className="relative z-10 text-emerald-400/70"
      />

      <span className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400" />
    </div>
  );
}

/* ==========================================================================
   MAIN PRODUCTS SECTION
   ========================================================================== */

function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* ==================================================================
          AMBIENT BACKGROUND
          ================================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/[0.035] blur-[140px]" />

        <div className="absolute left-0 top-[35%] h-[400px] w-[300px] rounded-full bg-cyan-500/[0.025] blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[350px] rounded-full bg-violet-500/[0.025] blur-[130px]" />
      </div>

      {/* ==================================================================
          HEADER
          ================================================================== */}

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <Eyebrow>Our Products</Eyebrow>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            AI agents that work{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              for you.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Connect your business channels and let AI
            handle customer conversations, recruitment
            and calls automatically — even while you&apos;re
            away.
          </p>
        </Reveal>

        {/* Live automation status */}
        <Reveal delay={220}>
          <div className="mx-auto mt-7 flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.045] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-[11px] font-medium text-emerald-300">
              AI automation is always running
            </span>
          </div>
        </Reveal>
      </div>

      {/* ==================================================================
          PRODUCT CARDS
          ================================================================== */}

      <div className="relative z-10 mx-auto mt-16 flex max-w-5xl flex-col gap-8 px-6">
        {PRODUCT_BLOCKS.map((product, index) => {
          const Mock =
            index === 0
              ? ChatMock
              : index === 1
                ? RecruiterMock
                : VoiceMock;

          return (
            <Reveal
              delay={index * 120}
              key={product.title}
            >
              <div
                className="product-card group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-[1px]"
                style={{
                  "--product-color": product.color,
                }}
              >
                {/* Animated border */}
                <div
                  className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(
                      110deg,
                      transparent 20%,
                      ${product.color}60,
                      transparent 55%
                    )`,
                    backgroundSize: "200% 100%",
                    animation:
                      "borderSweep 3s linear infinite",
                  }}
                />

                <div
                  className="relative grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[23px] bg-slate-950/95 p-6 sm:grid-cols-2 sm:p-9"
                >
                  <FloatingParticles
                    color={product.color}
                  />

                  <SocialConnection
                    color={product.color}
                  />

                  {/* ======================================================
                      CONTENT
                      ====================================================== */}

                  <div
                    className={`relative z-10 ${
                      index % 2 === 1
                        ? "sm:order-2"
                        : ""
                    }`}
                  >
                    {/* Tag */}
                    <div className="mb-4 flex items-center gap-2">
                      <span
                        className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
                        style={{
                          color: product.color,
                          background: `${product.color}15`,
                          border: `1px solid ${product.color}30`,
                        }}
                      >
                        {product.tag}
                      </span>

                      <span className="text-[10px] uppercase tracking-widest text-slate-600">
                        AI Powered
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {product.title}
                    </h3>

                    {/* Tagline */}
                    <p
                      className="mt-2 text-sm font-semibold"
                      style={{
                        color: product.color,
                      }}
                    >
                      {product.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-5 flex flex-col gap-3">
                      {product.items.map((item) => (
                        <li
                          key={item}
                          className="group/item flex items-start gap-2.5 text-sm text-slate-300"
                        >
                          <span
                            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                            style={{
                              background: `${product.color}12`,
                              border: `1px solid ${product.color}25`,
                            }}
                          >
                            <Check
                              size={11}
                              style={{
                                color: product.color,
                              }}
                              className="transition-transform duration-300 group-hover/item:scale-125"
                            />
                          </span>

                          <span className="transition-colors duration-300 group-hover/item:text-white">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Explore button */}
                    <button
                      type="button"
                      className="mt-7 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        borderColor: `${product.color}45`,
                        color: product.color,
                        background: `${product.color}08`,
                      }}
                    >
                      Explore {product.tag}

                      <ArrowRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>

                  {/* ======================================================
                      MOCKUP
                      ====================================================== */}

                  <div
                    className={`relative z-10 flex min-h-[290px] items-center justify-center ${
                      index % 2 === 1
                        ? "sm:order-1"
                        : ""
                    }`}
                  >
                    <SocialIcons
                      platforms={product.platforms}
                      color={product.color}
                    />

                    {/* Glow */}
                    <div
                      className="pointer-events-none absolute h-56 w-56 rounded-full blur-[80px]"
                      style={{
                        background: `${product.color}18`,
                        animation:
                          "mockGlow 4s ease-in-out infinite",
                      }}
                    />

                    {/* Mock */}
                    <div
                      className="product-mock relative z-10 w-full max-w-[390px] transition-transform duration-700 group-hover:-translate-y-2"
                      style={{
                        filter: `drop-shadow(0 25px 55px ${product.color}12)`,
                      }}
                    >
                      <Mock />
                    </div>

                    {/* AI processing badge */}
                    <div
                      className="absolute bottom-2 right-2 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/95 px-3 py-1.5 shadow-2xl backdrop-blur-md"
                      style={{
                        animation:
                          "badgeFloat 3s ease-in-out infinite",
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          background:
                            product.color,
                          boxShadow: `0 0 10px ${product.color}`,
                        }}
                      />

                      <span className="text-[9px] font-medium text-slate-400">
                        AI processing
                      </span>
                    </div>
                  </div>

                  {/* Corner glow */}
                  <div
                    className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full blur-[90px] opacity-20"
                    style={{
                      background: product.color,
                    }}
                  />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* ==================================================================
          AUTOMATION FLOW
          ================================================================== */}

      <Reveal delay={250}>
        <div className="relative z-10 mx-auto mt-16 max-w-4xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/[0.04] via-transparent to-cyan-500/[0.04]" />

            <div className="relative mb-6 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400/70">
                How automation works
              </p>

              <h3 className="mt-2 text-lg font-bold text-white">
                From customer message to action —
                automatically.
              </h3>
            </div>

            <div className="relative flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3">
              <FlowNode
                icon={MessageCircle}
                label="Customer"
                sub="asks a question"
              />

              <FlowArrow />

              <FlowNode
                icon={Bot}
                label="Fexa AI"
                sub="understands & responds"
                active
              />

              <FlowArrow />

              <FlowNode
                icon={Zap}
                label="Business"
                sub="gets the result"
              />
            </div>
          </div>
        </div>
      </Reveal>

      {/* ==================================================================
          ANIMATIONS
          ================================================================== */}

      <style jsx>{`
        .product-card {
          transition:
            transform 500ms ease,
            border-color 500ms ease,
            box-shadow 500ms ease;
        }

        .product-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.16);
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.4),
            0 0 70px
              color-mix(
                in srgb,
                var(--product-color) 5%,
                transparent
              );
        }

        /* Particles */
        @keyframes productParticle {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.15;
          }

          50% {
            transform: translate3d(18px, -25px, 0);
            opacity: 0.7;
          }
        }

        /* Social icons */
        @keyframes socialFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        /* Data flow */
        @keyframes dataFlow {
          0% {
            left: 5%;
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            left: 95%;
            opacity: 0;
          }
        }

        /* Mockup glow */
        @keyframes mockGlow {
          0%,
          100% {
            transform: scale(0.9);
            opacity: 0.45;
          }

          50% {
            transform: scale(1.12);
            opacity: 0.9;
          }
        }

        /* Floating badge */
        @keyframes badgeFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        /* Border */
        @keyframes borderSweep {
          0% {
            background-position: 200% 0;
          }

          100% {
            background-position: -200% 0;
          }
        }

        /* Voice bars */
        @keyframes voiceBar {
          0% {
            transform: scaleY(0.55);
          }

          100% {
            transform: scaleY(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .product-card,
          .product-mock {
            transition: none;
          }

          .product-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}

export default ProductsSection;