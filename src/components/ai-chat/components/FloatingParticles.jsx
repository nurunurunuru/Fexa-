export default function FloatingParticles() {
  return (
    <div className="ai-chat-particles">
      {Array.from({ length: 28 }).map((_, index) => (
        <span
          key={index}
          style={{
            "--particle-x": `${Math.random() * 100}%`,
            "--particle-y": `${Math.random() * 100}%`,
            "--particle-delay": `${Math.random() * 5}s`,
            "--particle-duration": `${4 + Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}