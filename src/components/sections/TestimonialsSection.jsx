import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Headset,
  MessageCircle,
  Quote,
  Sparkles,
  Star,
  Workflow,
} from "lucide-react";

import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";

const FEATURED_TESTIMONIALS = [
  {
    text: "Fexa Agent has completely transformed the way we handle customer inquiries. Our response time is 5x faster and we've seen a 40% increase in conversions.",
    name: "Jessica Miller",
    role: "CEO, TrendyKart",
    rating: 5,
  },
  {
    text: "The recruitment agent screens and ranks every applicant automatically. What used to take our team days now takes hours.",
    name: "Daniel Kim",
    role: "HR Manager, Northlane",
    rating: 5,
  },
  {
    text: "Our voice agent now handles the majority of inbound calls, and customers genuinely can't tell the difference.",
    name: "Rachel Adams",
    role: "Operations Lead, Brightly",
    rating: 5,
  },
];

const SMALL_TESTIMONIALS = [
  {
    icon: Workflow,
    text: "Hiring is now 10x easier with the AI Recruiter. It saves us so much time!",
    name: "Daniel Kim",
    role: "HR Manager",
  },
  {
    icon: Headset,
    text: "The AI voice agent handles calls perfectly. Our customers love it.",
    name: "Rachel Adams",
    role: "Operations Lead",
  },
  {
    icon: MessageCircle,
    text: "A must-have for any growing eCommerce business.",
    name: "Chris Taylor",
    role: "Founder, ShopFlow",
  },
];

function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const startAutoPlay = () => {
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex(
        (current) =>
          (current + 1) % FEATURED_TESTIMONIALS.length
      );
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const go = (dir) => {
    clearInterval(timerRef.current);

    setDirection(dir);

    setIndex(
      (current) =>
        (current + dir + FEATURED_TESTIMONIALS.length) %
        FEATURED_TESTIMONIALS.length
    );

    startAutoPlay();
  };

  const selectSlide = (newIndex) => {
    clearInterval(timerRef.current);

    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);

    startAutoPlay();
  };

  const getOffset = (slideIndex) => {
    const total = FEATURED_TESTIMONIALS.length;
    let offset = slideIndex - index;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    return offset;
  };

  return (
    <section className="testimonials-premium-section">
      {/* Background atmosphere */}

      <div className="testimonial-orb testimonial-orb-one" />
      <div className="testimonial-orb testimonial-orb-two" />
      <div className="testimonial-orb testimonial-orb-three" />

      <div className="testimonial-grid-bg" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* HEADER */}

        <Reveal>
          <div className="text-center">
            <Eyebrow>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles size={12} />
                Testimonials
              </span>
            </Eyebrow>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="testimonial-main-title">
            What our clients say
            <span> about Fexa Agent.</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-7 text-slate-400 sm:text-base">
            Real businesses. Real teams. Real results powered
            by intelligent automation.
          </p>
        </Reveal>

        {/* FEATURED CAROUSEL */}

        <Reveal delay={200}>
          <div className="testimonial-carousel-wrapper">
            {/* Ambient glow */}

            <div className="testimonial-carousel-glow" />

            {/* Previous button */}

            <button
              type="button"
              onClick={() => go(-1)}
              className="testimonial-arrow testimonial-arrow-left"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={19} />
            </button>

            {/* Cards */}

            <div className="testimonial-carousel">
              {FEATURED_TESTIMONIALS.map((testimonial, i) => {
                const offset = getOffset(i);
                const isActive = offset === 0;

                return (
                  <div
                    key={testimonial.name}
                    className={`testimonial-slide ${
                      isActive
                        ? "testimonial-slide-active"
                        : ""
                    }`}
                    style={{
                      "--testimonial-offset": offset,
                      "--testimonial-direction": direction,
                    }}
                  >
                    <div className="testimonial-card">
                      {/* Top glow */}

                      <div className="testimonial-card-glow" />

                      {/* Quote */}

                      <div className="testimonial-quote">
                        <Quote size={23} />
                      </div>

                      {/* Stars */}

                      <div className="testimonial-stars">
                        {Array.from({
                          length: testimonial.rating,
                        }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            size={15}
                            className="testimonial-star"
                            style={{
                              animationDelay: `${
                                starIndex * 90
                              }ms`,
                            }}
                          />
                        ))}
                      </div>

                      {/* Text */}

                      <p className="testimonial-featured-text">
                        {testimonial.text}
                      </p>

                      {/* Divider */}

                      <div className="testimonial-divider" />

                      {/* User */}

                      <div className="testimonial-user">
                        <div className="testimonial-avatar">
                          {testimonial.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")}
                        </div>

                        <div className="text-left">
                          <div className="testimonial-user-name">
                            {testimonial.name}
                          </div>

                          <div className="testimonial-user-role">
                            {testimonial.role}
                          </div>
                        </div>

                        <div className="testimonial-verified">
                          <span />
                          Verified
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next button */}

            <button
              type="button"
              onClick={() => go(1)}
              className="testimonial-arrow testimonial-arrow-right"
              aria-label="Next testimonial"
            >
              <ChevronRight size={19} />
            </button>
          </div>

          {/* Progress */}

          <div className="testimonial-controls">
            <div className="testimonial-progress">
              <div className="testimonial-progress-track">
                <div
                  key={index}
                  className="testimonial-progress-fill"
                />
              </div>
            </div>

            <div className="testimonial-dots">
              {FEATURED_TESTIMONIALS.map((testimonial, i) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => selectSlide(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`testimonial-dot ${
                    i === index
                      ? "testimonial-dot-active"
                      : ""
                  }`}
                />
              ))}
            </div>

            <div className="testimonial-counter">
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-slate-700">/</span>
              <span>
                {String(
                  FEATURED_TESTIMONIALS.length
                ).padStart(2, "0")}
              </span>
            </div>
          </div>
        </Reveal>

        {/* SMALL TESTIMONIALS */}

        <div className="testimonial-mini-slider">
  <div className="testimonial-mini-track">
    {[...SMALL_TESTIMONIALS, ...SMALL_TESTIMONIALS].map(
      (testimonial, i) => {
        const Icon = testimonial.icon;

        return (
          <div
            className="testimonial-mini-slide"
            key={`${testimonial.name}-${i}`}
          >
            <div className="testimonial-mini-card">
              <div className="testimonial-mini-top">
                <div className="testimonial-mini-icon">
                  <Icon size={17} />
                </div>

                <div className="testimonial-mini-stars">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} size={11} />
                  ))}
                </div>
              </div>

              <p className="testimonial-mini-text">
                "{testimonial.text}"
              </p>

              <div className="testimonial-mini-user">
                <div className="testimonial-mini-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <div className="testimonial-mini-name">
                    {testimonial.name}
                  </div>

                  <div className="testimonial-mini-role">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              <div className="testimonial-mini-line" />
            </div>
          </div>
        );
      }
    )}
  </div>
</div>
      </div>
    </section>
  );
}

export default TestimonialsSection;