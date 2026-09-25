import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bot,
  ChevronDown,
  Grid2X2,
  Headphones,
  Menu,
  MessageSquare,
  Network,
  Sparkles,
  Users,
  Workflow,
  X,
} from "lucide-react";

import PrimaryButton from "../common/PrimaryButton";

const NAV_LINKS = ["Solutions", "Features", "Pricing", "Learn"];

const PLATFORM_MAIN = [
  {
    icon: Grid2X2,
    title: "Overview",
    desc: "Measure, test, coach your AI agent at scale",
  },
  {
    icon: Workflow,
    title: "Playbooks",
    desc: "Automate your complex SOPs with agentic AI",
  },
  {
    icon: Network,
    title: "Integrations",
    desc: "Connect system to personalize across channels",
  },
];

const PLATFORM_AGENTS = [
  {
    icon: Headphones,
    title: "AI Voice",
  },
  {
    icon: MessageSquare,
    title: "AI Chat",
  },
  {
    icon: Users,
    title: "AI Recruiter",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const platformRef = useRef(null);

  /* =========================================================
     SCROLL
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     OUTSIDE CLICK
  ========================================================= */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        platformRef.current &&
        !platformRef.current.contains(event.target)
      ) {
        setPlatformOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const closeMenus = () => {
    setPlatformOpen(false);
    setOpen(false);
  };

  return (
    <>
      {/* =====================================================
          FLOATING NAVBAR
      ===================================================== */}

      <header
        className={
          "fixed left-0 right-0 top-0 z-[100] px-4 transition-all duration-500 sm:px-6 " +
          (scrolled
            ? "pt-3"
            : "pt-3 sm:pt-4")
        }
      >
        <div
          className={
            "navbar-shell mx-auto flex max-w-[1160px] items-center justify-between " +
            "transition-all duration-500 " +
            (scrolled
              ? "navbar-shell-scrolled"
              : "")
          }
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <a
            href="#"
            onClick={closeMenus}
            className="navbar-brand"
          >
            <span className="navbar-brand-icon">
              <Bot size={16} strokeWidth={2.5} />
            </span>

            <span className="navbar-brand-text">
              Fexa Agents
            </span>
          </a>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <nav className="hidden items-center gap-7 md:flex">

            {/* PLATFORM */}
            <div
              ref={platformRef}
              className="relative"
              onMouseEnter={() => setPlatformOpen(true)}
            >
              <button
                type="button"
                onClick={() =>
                  setPlatformOpen((value) => !value)
                }
                className={
                  "navbar-nav-link navbar-platform-button " +
                  (platformOpen
                    ? "navbar-nav-link-active"
                    : "")
                }
              >
                <span>Platform</span>

                <ChevronDown
                  size={12}
                  strokeWidth={2.3}
                  className={
                    "transition-transform duration-300 " +
                    (platformOpen
                      ? "rotate-180"
                      : "")
                  }
                />

                <span
                  className={
                    "navbar-link-line " +
                    (platformOpen
                      ? "navbar-link-line-active"
                      : "")
                  }
                />
              </button>

              {/* =================================================
                  PLATFORM DROPDOWN
              ================================================= */}

              <div
                className={
                  "platform-dropdown " +
                  (platformOpen
                    ? "platform-dropdown-visible"
                    : "platform-dropdown-hidden")
                }
              >
                {/* Animated top light */}
                <div className="platform-dropdown-light" />

                {/* Soft glow */}
                <div className="platform-dropdown-glow" />

                <div className="platform-dropdown-content">

                  {/* LEFT */}
                  <div className="platform-main-column">
                    {PLATFORM_MAIN.map((item) => {
                      const Icon = item.icon;

                      return (
                        <a
                          key={item.title}
                          href="#"
                          className="platform-menu-item"
                          onClick={() =>
                            setPlatformOpen(false)
                          }
                        >
                          <span className="platform-menu-icon">
                            <Icon size={15} />
                          </span>

                          <span className="platform-menu-copy">
                            <span className="platform-menu-title">
                              {item.title}
                            </span>

                            <span className="platform-menu-desc">
                              {item.desc}
                            </span>
                          </span>

                          <ArrowRight
                            size={12}
                            className="platform-menu-arrow"
                          />
                        </a>
                      );
                    })}
                  </div>

                  {/* DIVIDER */}
                  <div className="platform-divider" />

                  {/* RIGHT */}
                  <div className="platform-agent-column">

                    <div className="platform-agent-heading">
                      <Sparkles size={11} />
                      AI Agents
                    </div>

                    {PLATFORM_AGENTS.map((item) => {
                      const Icon = item.icon;

                      return (
                        <a
  key={item.title}
  href={
    item.title === "AI Chat"
      ? "/ai-chat"
      : "#"
  }
  className="platform-agent-item"
  onClick={() => {
    setPlatformOpen(false);
  }}
>
                          <span className="platform-agent-icon">
                            <Icon size={14} />
                          </span>

                          <span>
                            {item.title}
                          </span>

                          <ArrowRight
                            size={11}
                            className="platform-agent-arrow"
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Footer */}
                <div className="platform-dropdown-footer">
                  <span>
                    One platform. Multiple intelligent agents.
                  </span>

                  <span className="platform-footer-live">
                    <span />
                    Live
                  </span>
                </div>
              </div>
            </div>

            {/* OTHER LINKS */}
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="navbar-nav-link group"
              >
                {link}

                <span className="navbar-link-line group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="hidden items-center gap-5 md:flex">

            <a
              href="#"
              className="navbar-signin"
            >
              Sign in
            </a>

            <PrimaryButton className="navbar-demo-button !px-5 !py-2.5 text-[11px]">
              Book a Demo
              <ArrowRight size={13} />
            </PrimaryButton>
          </div>

          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <button
            type="button"
            className="navbar-mobile-button md:hidden"
            onClick={() => {
              setOpen((value) => !value);
              setPlatformOpen(false);
            }}
          >
            {open ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <div
          className={
            "navbar-mobile-menu mx-auto max-w-[1160px] md:hidden " +
            (open
              ? "navbar-mobile-menu-open"
              : "")
          }
        >
          <div className="navbar-mobile-inner">

            {/* Platform */}
            <button
              type="button"
              className="navbar-mobile-platform"
              onClick={() =>
                setPlatformOpen((value) => !value)
              }
            >
              <span>Platform</span>

              <ChevronDown
                size={15}
                className={
                  "transition-transform duration-300 " +
                  (platformOpen
                    ? "rotate-180"
                    : "")
                }
              />
            </button>

            {/* Mobile Platform Items */}
            <div
              className={
                "mobile-platform-list " +
                (platformOpen
                  ? "mobile-platform-list-open"
                  : "")
              }
            >
              {PLATFORM_MAIN.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href="#"
                    onClick={closeMenus}
                    className="mobile-platform-item"
                  >
                    <span className="mobile-platform-icon">
                      <Icon size={14} />
                    </span>

                    <span>
                      <strong>
                        {item.title}
                      </strong>

                      <small>
                        {item.desc}
                      </small>
                    </span>
                  </a>
                );
              })}

              <div className="mobile-platform-divider" />

              {PLATFORM_AGENTS.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                     href={
    item.title === "AI Chat"
      ? "/ai-chat"
      : "#"
  }
                    onClick={closeMenus}
                    className="mobile-agent-item"
                  >
                    <span className="mobile-platform-icon">
                      <Icon size={14} />
                    </span>

                    {item.title}
                  </a>
                );
              })}
            </div>

            {/* Links */}
            <div className="navbar-mobile-links">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={closeMenus}
                >
                  {link}
                </a>
              ))}
            </div>

            <a
              href="#"
              onClick={closeMenus}
              className="navbar-mobile-signin"
            >
              Sign in
            </a>

            <PrimaryButton
              className="mt-3 w-full justify-center"
              onClick={closeMenus}
            >
              Book a Demo
              <ArrowRight size={14} />
            </PrimaryButton>
          </div>
        </div>
      </header>

      {/* =======================================================
          NAVBAR STYLES
      ======================================================= */}

      <style>{`

        /* =====================================================
           MAIN WHITE PILL
        ===================================================== */

        .navbar-shell {
          position: relative;

          height: 48px;

          padding: 5px 7px 5px 9px;

          border-radius: 999px;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,0.98),
              rgba(247,250,249,0.97)
            );

          border: 1px solid rgba(255,255,255,0.85);

          box-shadow:
            0 12px 40px rgba(0,0,0,0.18),
            0 0 0 1px rgba(0,0,0,0.035),
            inset 0 1px 0 rgba(255,255,255,1);

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .navbar-shell::before {
          content: "";

          position: absolute;

          inset: -1px;

          border-radius: inherit;

          pointer-events: none;

          background:
            linear-gradient(
              100deg,
              rgba(33,243,166,0.2),
              transparent 25%,
              transparent 75%,
              rgba(33,243,166,0.18)
            );

          opacity: 0.65;

          z-index: -1;
        }

        .navbar-shell-scrolled {
          height: 46px;

          box-shadow:
            0 18px 50px rgba(0,0,0,0.25),
            0 0 35px rgba(33,243,166,0.06),
            inset 0 1px 0 rgba(255,255,255,1);
        }

        /* =====================================================
           BRAND
        ===================================================== */

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 7px;

          padding-left: 2px;

          text-decoration: none;
        }

        .navbar-brand-icon {
          position: relative;

          display: flex;

          width: 28px;
          height: 28px;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #21f3a6,
              #0bbd88
            );

          box-shadow:
            0 0 12px rgba(33,243,166,0.2),
            inset 0 1px 0 rgba(255,255,255,0.45);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .navbar-brand:hover .navbar-brand-icon {
          transform: rotate(-8deg) scale(1.06);

          box-shadow:
            0 0 20px rgba(33,243,166,0.35),
            inset 0 1px 0 rgba(255,255,255,0.5);
        }

        .navbar-brand-text {
          color: #172321;

          font-size: 11px;

          font-weight: 700;

          letter-spacing: -0.01em;
        }

        /* =====================================================
           NAV LINKS
        ===================================================== */

        .navbar-nav-link {
          position: relative;

          display: inline-flex;

          align-items: center;
          gap: 4px;

          height: 38px;

          color: #43514e;

          font-size: 10px;

          font-weight: 500;

          text-decoration: none;

          transition:
            color 0.25s ease;
        }

        .navbar-nav-link:hover,
        .navbar-nav-link-active {
          color: #101a18;
        }

        .navbar-platform-button {
          border: 0;
          background: transparent;
          cursor: pointer;
          font-family: inherit;
        }

        .navbar-link-line {
          position: absolute;

          left: 0;
          right: 0;
          bottom: 4px;

          width: 0;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              #21f3a6,
              #0bcf91
            );

          border-radius: 999px;

          transition:
            width 0.3s cubic-bezier(0.16,1,0.3,1);
        }

        .navbar-link-line-active {
          width: 100%;
        }

        /* =====================================================
           SIGN IN
        ===================================================== */

        .navbar-signin {
          color: #43514e;

          font-size: 10px;

          font-weight: 500;

          text-decoration: none;

          transition:
            color 0.25s ease;
        }

        .navbar-signin:hover {
          color: #101a18;
        }

        /* =====================================================
           DEMO BUTTON
        ===================================================== */

        .navbar-demo-button {
          min-height: 30px;

          color: #ffffff !important;

          background:
            linear-gradient(
              135deg,
              #21c994,
              #0e9f76
            ) !important;

          box-shadow:
            0 5px 14px rgba(15,160,115,0.2),
            inset 0 1px 0 rgba(255,255,255,0.22);
        }

        .navbar-demo-button:hover {
          box-shadow:
            0 7px 20px rgba(15,160,115,0.32),
            0 0 20px rgba(33,243,166,0.14),
            inset 0 1px 0 rgba(255,255,255,0.25);
        }

        /* =====================================================
           PLATFORM DROPDOWN
        ===================================================== */

        .platform-dropdown {
          position: absolute;

          left: 50%;
          top: calc(100% + 14px);

          width: 610px;

          overflow: hidden;

          border-radius: 18px;

          border:
            1px solid rgba(255,255,255,0.11);

          background:
            linear-gradient(
              145deg,
              rgba(14,25,29,0.98),
              rgba(3,10,13,0.99)
            );

          box-shadow:
            0 30px 80px rgba(0,0,0,0.5),
            0 0 50px rgba(33,243,166,0.055),
            inset 0 1px 0 rgba(255,255,255,0.055);

          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);

          transform-origin: top center;

          z-index: 200;
        }

        .platform-dropdown-visible {
          opacity: 1;

          visibility: visible;

          pointer-events: auto;

          transform:
            translateX(-50%)
            translateY(0)
            scale(1);

          transition:
            opacity 0.2s ease,
            transform 0.32s cubic-bezier(0.16,1,0.3,1),
            visibility 0.2s ease;
        }

        .platform-dropdown-hidden {
          opacity: 0;

          visibility: hidden;

          pointer-events: none;

          transform:
            translateX(-50%)
            translateY(-9px)
            scale(0.97);

          transition:
            opacity 0.15s ease,
            transform 0.2s ease,
            visibility 0.15s ease;
        }

        /* =====================================================
           DROPDOWN TOP LIGHT
        ===================================================== */

        .platform-dropdown-light {
          position: absolute;

          left: -20%;

          top: 0;

          width: 40%;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #35ffc0,
              #00dcff,
              transparent
            );

          box-shadow:
            0 0 15px rgba(53,255,192,0.65),
            0 0 35px rgba(0,220,255,0.25);

          animation:
            platformDropdownLight 4s linear infinite;
        }

        @keyframes platformDropdownLight {
          0% {
            left: -40%;
          }

          100% {
            left: 100%;
          }
        }

        .platform-dropdown-glow {
          position: absolute;

          left: 50%;
          top: -100px;

          width: 360px;
          height: 170px;

          transform: translateX(-50%);

          border-radius: 50%;

          background:
            rgba(33,243,166,0.07);

          filter: blur(60px);

          pointer-events: none;
        }

        .platform-dropdown-content {
          position: relative;

          display: grid;

          grid-template-columns:
            1.45fr
            1px
            0.75fr;

          gap: 20px;

          padding: 17px;
        }

        /* =====================================================
           LEFT ITEMS
        ===================================================== */

        .platform-main-column {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .platform-menu-item {
          position: relative;

          display: flex;

          align-items: center;

          gap: 11px;

          min-height: 57px;

          padding: 9px 10px;

          border:
            1px solid transparent;

          border-radius: 11px;

          text-decoration: none;

          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            transform 0.25s ease;
        }

        .platform-menu-item:hover {
          transform: translateX(3px);

          background:
            linear-gradient(
              90deg,
              rgba(33,243,166,0.08),
              rgba(33,243,166,0.015)
            );

          border-color:
            rgba(33,243,166,0.11);
        }

        .platform-menu-icon {
          display: flex;

          width: 35px;
          height: 35px;

          flex: 0 0 35px;

          align-items: center;
          justify-content: center;

          border-radius: 9px;

          color: #9aacaa;

          background:
            rgba(255,255,255,0.055);

          border:
            1px solid rgba(255,255,255,0.055);

          transition:
            all 0.25s ease;
        }

        .platform-menu-item:hover .platform-menu-icon {
          color: #35ffc0;

          background:
            rgba(33,243,166,0.1);

          border-color:
            rgba(33,243,166,0.17);

          box-shadow:
            0 0 18px rgba(33,243,166,0.08);
        }

        .platform-menu-copy {
          min-width: 0;

          display: flex;

          flex-direction: column;

          gap: 3px;
        }

        .platform-menu-title {
          color: #f2faf7;

          font-size: 11px;

          font-weight: 600;
        }

        .platform-menu-desc {
          color: rgba(160,180,175,0.62);

          font-size: 8px;

          line-height: 1.35;

          white-space: nowrap;
        }

        .platform-menu-arrow {
          margin-left: auto;

          color: transparent;

          transform: translateX(-5px);

          transition:
            all 0.25s ease;
        }

        .platform-menu-item:hover .platform-menu-arrow {
          color: #35ffc0;

          transform: translateX(0);
        }

        /* =====================================================
           DIVIDER
        ===================================================== */

        .platform-divider {
          width: 1px;

          background:
            linear-gradient(
              to bottom,
              transparent,
              rgba(255,255,255,0.09) 20%,
              rgba(255,255,255,0.09) 80%,
              transparent
            );
        }

        /* =====================================================
           AGENTS
        ===================================================== */

        .platform-agent-column {
          display: flex;

          flex-direction: column;

          gap: 5px;
        }

        .platform-agent-heading {
          display: flex;

          align-items: center;

          gap: 6px;

          margin-bottom: 5px;

          padding: 0 8px;

          color: rgba(53,255,192,0.65);

          font-size: 8px;

          font-weight: 600;

          letter-spacing: 0.09em;

          text-transform: uppercase;
        }

        .platform-agent-item {
          display: flex;

          align-items: center;

          gap: 9px;

          padding: 9px 8px;

          border-radius: 10px;

          color: rgba(214,228,224,0.72);

          font-size: 10px;

          font-weight: 500;

          text-decoration: none;

          transition:
            all 0.25s ease;
        }

        .platform-agent-item:hover {
          color: white;

          background:
            rgba(33,243,166,0.065);

          transform: translateX(3px);
        }

        .platform-agent-icon {
          display: flex;

          width: 29px;
          height: 29px;

          align-items: center;
          justify-content: center;

          border-radius: 8px;

          color: #8ca39e;

          background:
            rgba(255,255,255,0.045);

          border:
            1px solid rgba(255,255,255,0.05);

          transition:
            all 0.25s ease;
        }

        .platform-agent-item:hover .platform-agent-icon {
          color: #35ffc0;

          background:
            rgba(33,243,166,0.09);

          border-color:
            rgba(33,243,166,0.14);

          box-shadow:
            0 0 15px rgba(33,243,166,0.08);
        }

        .platform-agent-arrow {
          margin-left: auto;

          opacity: 0;

          color: #35ffc0;

          transform: translateX(-4px);

          transition:
            all 0.25s ease;
        }

        .platform-agent-item:hover .platform-agent-arrow {
          opacity: 0.8;

          transform: translateX(0);
        }

        /* =====================================================
           DROPDOWN FOOTER
        ===================================================== */

        .platform-dropdown-footer {
          position: relative;

          display: flex;

          align-items: center;

          justify-content: space-between;

          padding: 9px 17px;

          border-top:
            1px solid rgba(255,255,255,0.055);

          background:
            rgba(255,255,255,0.018);

          color:
            rgba(150,170,165,0.48);

          font-size: 8px;
        }

        .platform-footer-live {
          display: flex;

          align-items: center;

          gap: 5px;

          color:
            rgba(53,255,192,0.6);
        }

        .platform-footer-live > span {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #35ffc0;

          box-shadow:
            0 0 9px rgba(53,255,192,0.8);

          animation:
            navbarLivePulse 1.7s ease-in-out infinite;
        }

        @keyframes navbarLivePulse {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        .navbar-mobile-button {
          display: flex;

          width: 34px;
          height: 34px;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          color: #1b2825;

          background: rgba(0,0,0,0.045);

          border: 1px solid rgba(0,0,0,0.06);
        }

        .navbar-mobile-menu {
          overflow: hidden;

          max-height: 0;

          opacity: 0;

          transform: translateY(-8px);

          pointer-events: none;

          transition:
            max-height 0.4s ease,
            opacity 0.3s ease,
            transform 0.35s ease;
        }

        .navbar-mobile-menu-open {
          max-height: 700px;

          opacity: 1;

          transform: translateY(0);

          pointer-events: auto;
        }

        .navbar-mobile-inner {
          margin-top: 8px;

          padding: 14px;

          border-radius: 22px;

          background:
            rgba(250,253,252,0.98);

          border:
            1px solid rgba(0,0,0,0.07);

          box-shadow:
            0 20px 50px rgba(0,0,0,0.2);

          backdrop-filter: blur(20px);
        }

        .navbar-mobile-platform {
          display: flex;

          width: 100%;

          align-items: center;

          justify-content: space-between;

          padding: 12px 10px;

          border: 0;

          background: transparent;

          color: #263330;

          font-family: inherit;

          font-size: 12px;

          font-weight: 600;

          cursor: pointer;
        }

        .mobile-platform-list {
          max-height: 0;

          overflow: hidden;

          opacity: 0;

          transition:
            max-height 0.35s ease,
            opacity 0.25s ease;
        }

        .mobile-platform-list-open {
          max-height: 500px;

          opacity: 1;
        }

        .mobile-platform-item {
          display: flex;

          align-items: center;

          gap: 10px;

          padding: 10px;

          border-radius: 12px;

          text-decoration: none;

          transition:
            background 0.2s ease;
        }

        .mobile-platform-item:hover {
          background: rgba(33,243,166,0.07);
        }

        .mobile-platform-item strong {
          display: block;

          color: #172321;

          font-size: 11px;
        }

        .mobile-platform-item small {
          display: block;

          margin-top: 2px;

          color: #82918d;

          font-size: 8px;
        }

        .mobile-platform-icon {
          display: flex;

          width: 32px;
          height: 32px;

          flex: 0 0 32px;

          align-items: center;
          justify-content: center;

          border-radius: 9px;

          color: #0da77a;

          background: rgba(33,243,166,0.08);

          border:
            1px solid rgba(33,243,166,0.13);
        }

        .mobile-platform-divider {
          height: 1px;

          margin: 5px 10px;

          background: rgba(0,0,0,0.06);
        }

        .mobile-agent-item {
          display: flex;

          align-items: center;

          gap: 10px;

          padding: 9px 10px;

          border-radius: 10px;

          color: #53615e;

          font-size: 10px;

          text-decoration: none;
        }

        .mobile-agent-item:hover {
          background: rgba(33,243,166,0.06);

          color: #172321;
        }

        .navbar-mobile-links {
          display: flex;

          flex-direction: column;

          margin-top: 6px;

          border-top:
            1px solid rgba(0,0,0,0.06);
        }

        .navbar-mobile-links a {
          padding: 12px 10px;

          border-bottom:
            1px solid rgba(0,0,0,0.055);

          color: #53615e;

          font-size: 11px;

          text-decoration: none;
        }

        .navbar-mobile-links a:hover {
          color: #172321;
        }

        .navbar-mobile-signin {
          display: block;

          padding: 12px 10px;

          color: #53615e;

          font-size: 11px;

          text-decoration: none;
        }

        @media (max-width: 767px) {
          .navbar-shell {
            height: 48px;
          }

          .navbar-brand-text {
            font-size: 11px;
          }
        }

      `}</style>
    </>
  );
}

export default Navbar;