
import { useMemo } from "react";

export default function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        x: `${(index * 37 + 13) % 100}%`,
        y: `${(index * 53 + 7) % 100}%`,
        delay: `${(index % 9) * -0.7}s`,
        duration: `${5 + (index % 6)}s`,
        size: `${2 + (index % 3)}px`,
      })),
    []
  );

  return (
    <div className="ai-chat-particles">
      {particles.map((particle) => (
        <span
          key={particle.id}
          style={{
            "--particle-x": particle.x,
            "--particle-y": particle.y,
            "--particle-delay": particle.delay,
            "--particle-duration": particle.duration,
            "--particle-size": particle.size,
          }}
        />
      ))}
    </div>
  );
}
