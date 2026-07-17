"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./typingtext.module.css";

/** Longer beats after punctuation — this is what sells it as "typing".
 *  Values are multipliers on the base per-character delay. */
const PAUSE: Record<string, number> = {
  ",": 6,
  ";": 6,
  ":": 6,
  "—": 4,
  ".": 11,
  "!": 11,
  "?": 11,
  "\n": 9,
};

export interface TypingTextProps {
  /** The text to type out. Authored line breaks are preserved. */
  text: string;
  /** Typing speed in characters per second. Defaults to 34. */
  cps?: number;
  /** Delay before typing begins, in seconds. Defaults to 0. */
  startDelay?: number;
  /** Overrides the caret color (defaults to the current text color). */
  caretColor?: string;
  /** Reveals the reserved (untyped) space at low opacity — useful for demos. */
  showGhost?: boolean;
  /** Called once the full string has been typed. */
  onDone?: () => void;
  className?: string;
  /** Hides the blinking caret entirely (both the empty-state and typing caret). */
  noCaret?: boolean;
  /** Gates the animation: while false, characters stay hidden (but still reserve
   *  their layout space) and typing only begins once this flips to true. */
  start?: boolean;
}

export default function TypingText({
  text,
  cps = 34,
  startDelay = 0,
  caretColor,
  showGhost = false,
  onDone,
  className = "",
  noCaret = true,
  start = true,
}: TypingTextProps) {
  // Split once, emoji-safe. All characters render from the first paint so the
  // browser fixes the line breaks before a single one becomes visible.
  const chars = Array.from(text);
  const [revealed, setRevealed] = useState(0);

  // Reset the reveal count the instant `text` changes, during render — the
  // React-recommended alternative to resetting state in an effect.
  const [prevText, setPrevText] = useState(text);
  if (text !== prevText) {
    setPrevText(text);
    setRevealed(0);
  }

  // Keep the latest onDone without making it a dependency (which would restart
  // typing whenever the parent passes a new function identity).
  const onDoneRef = useRef(onDone);
  useEffect(() => {
    onDoneRef.current = onDone;
  });

  useEffect(() => {
    if (!start) return;

    const reduced =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;

    const arr = Array.from(text);
    const total = arr.length;
    let raf = 0;
    let i = 0;
    let next = 0;

    const tick = (now: number) => {
      if (!next) next = now;
      if (now - next > 400) next = now; // returning from a hidden tab

      while (i < total && now >= next) {
        i += 1;
        const base = 1000 / cps;
        const factor = PAUSE[arr[i - 1]] ?? 1;
        next += base * factor * (0.7 + Math.random() * 0.6);
      }

      setRevealed(i);

      if (i < total) {
        raf = requestAnimationFrame(tick);
      } else {
        onDoneRef.current?.();
      }
    };

    // Start everything from inside a timer callback so no setState runs
    // synchronously in the effect body.
    const startTimer = setTimeout(() => {
      if (reduced || total === 0) {
        setRevealed(total);
        onDoneRef.current?.();
        return;
      }
      raf = requestAnimationFrame(tick);
    }, startDelay * 1000);

    return () => {
      clearTimeout(startTimer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [text, cps, startDelay, start]);

  return (
    <p
      className={`${styles.tw} ${
        revealed === 0 && !noCaret ? styles.empty : ""
      } ${showGhost ? styles.ghost : ""} ${className}`}
      style={
        caretColor
          ? ({ "--caret-color": caretColor } as React.CSSProperties)
          : undefined
      }
    >
      {chars.map((ch, index) => {
        const isOn = index < revealed;
        const hasCaret = !noCaret && index === revealed - 1;
        return (
          <span
            key={index}
            className={`${styles.char} ${isOn ? styles.on : ""} ${
              hasCaret ? styles.caret : ""
            }`}
          >
            {ch}
          </span>
        );
      })}
    </p>
  );
}
