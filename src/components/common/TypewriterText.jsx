import { useEffect, useState } from "react";

function TypewriterText({ text, speed = 120, deleteSpeed = 70, pause = 1800 }) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && displayText === text) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
    } else {
      timer = setTimeout(() => {
        if (isDeleting) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          setDisplayText((prev) => text.slice(0, prev.length + 1));
        }
      }, isDeleting ? deleteSpeed : speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text, speed, deleteSpeed, pause]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

export default TypewriterText;