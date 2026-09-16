import { useEffect, useState } from "react";

// Types out a sequence of { text, pause } lines one character at a time.
// This powers the single hero "terminal" moment — kept as the one
// deliberate animation on the page rather than reused elsewhere.
export function useTypewriter(lines, { speed = 32 } = {}) {
  const [output, setOutput] = useState(() => lines.map(() => ""));
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOutput(lines.map((l) => l.text));
      setDone(true);
      return;
    }

    let cancelled = false;
    let timeoutId;

    async function run() {
      for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        const { text, pause = 400 } = lines[lineIndex];
        for (let charIndex = 0; charIndex <= text.length; charIndex++) {
          if (cancelled) return;
          await new Promise((resolve) => {
            timeoutId = setTimeout(resolve, speed);
          });
          setOutput((prev) => {
            const next = [...prev];
            next[lineIndex] = text.slice(0, charIndex);
            return next;
          });
        }
        await new Promise((resolve) => {
          timeoutId = setTimeout(resolve, pause);
        });
      }
      if (!cancelled) setDone(true);
    }

    run();
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { output, done };
}
