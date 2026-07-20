"use client";

import { useState } from "react";
import { Playfair_Display, Nunito } from "next/font/google";
import styles from "./fillIn.module.css";
import ScoreCard from "../_components/scoreCard";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const bodyFont = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

/* --- Data shape (satisfied by app/_data/relative_clauses.ts) ------------- */

export interface FillInOption {
  value: string;
  isCorrect: boolean;
  explanation: string;
}

export interface FillInQuestion {
  id: string;
  number: number;
  sentence: { before: string; after: string; display?: string };
  acceptedAnswers: string[];
  primaryAnswer: string;
  note?: string;
  hintZh?: string;
  tip?: string;
  difficulty?: string;
  options: FillInOption[];
  tags?: Record<string, unknown>;
}

export interface FillInOptionBankEntry {
  value: string;
  label: string;
  usedFor: string;
  icon?: string;
}

export interface FillInQuiz {
  id: string;
  type: string;
  meta: {
    title: string;
    titleZh: string;
    part: number;
    topic: string;
    instructions: string;
    instructionsZh?: string;
    level?: string;
    totalQuestions: number;
    [key: string]: unknown;
  };
  optionBank: FillInOptionBankEntry[];
  questions: FillInQuestion[];
}

export interface FillInTemplateProps {
  /** The quiz to render (e.g. RELATIVE_CLAUSES_QUIZ_FILL_IN). */
  quiz: FillInQuiz;
  /** Masthead name shown top-left. Defaults to "CLAUSE". */
  magazineName?: string;
  /** Stylised headline; `accent` is set in italic. Defaults to "The Test / of Taste". */
  heading?: { lead: string; accent: string };
  /** Right-hand caption of the running head, e.g. "№ 7 — Page 58". */
  issueLabel?: string;
  /** Editorial pull quote in the side column. `emphasis` is highlighted in red. */
  pullQuote?: { text: string; emphasis?: string; attribution: string };
  /** Overrides the ivory page background. */
  backgroundColor?: string;
  /** Called when advancing past the final question. */
  onNext?: () => void;
  /** Called when going back from the first question. */
  onBack?: () => void;
}

const PART_WORDS = ["", "One", "Two", "Three", "Four", "Five"];

const pad2 = (n: number) => String(n).padStart(2, "0");

export default function FillInTemplate({
  quiz,
  magazineName = "CLAUSE",
  heading = { lead: "The Test", accent: "of Taste" },
  issueLabel,
  pullQuote = {
    text: "A sentence, like a silhouette, is defined by what it cannot lose.",
    emphasis: "what it cannot lose",
    attribution: "The Comma Edit",
  },
  backgroundColor,
  onNext,
  onBack,
}: FillInTemplateProps) {
  const { meta, optionBank, questions } = quiz;
  const total = meta.totalQuestions ?? questions.length;

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [panelOpen, setPanelOpen] = useState(false);

  const current = questions[index];
  const selected = answers[current.id];
  const answered = selected != null;
  const isLast = index === questions.length - 1;

  const usedForOf = (value: string) =>
    optionBank.find((o) => o.value === value)?.usedFor ?? "";

  const selectedOption = current.options.find((o) => o.value === selected);
  const isCorrect = answered && current.acceptedAnswers.includes(selected);

  const correctCount = questions.filter(
    (q) => answers[q.id] != null && q.acceptedAnswers.includes(answers[q.id])
  ).length;

  const pct = Math.round((current.number / total) * 100);

  const handleSelect = (value: string) => {
    if (answered) return; // lockAfterAnswer
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
    setPanelOpen(true); // reveal the verdict once an answer is chosen
  };

  const goNext = () => {
    setPanelOpen(false); // collapse on leaving, answered or skipped
    if (isLast) onNext?.();
    else setIndex((i) => i + 1);
  };
  const goPrev = () => {
    setPanelOpen(false);
    if (index === 0) onBack?.();
    else setIndex((i) => i - 1);
  };

  const pullEmphasised = () => {
    const { text, emphasis } = pullQuote;
    if (!emphasis || !text.includes(emphasis)) return text;
    const [head, ...rest] = text.split(emphasis);
    return (
      <>
        {head}
        <b>{emphasis}</b>
        {rest.join(emphasis)}
      </>
    );
  };

  return (
    <section
      className={`${styles.quiz} ${displayFont.variable} ${bodyFont.variable}`}
      style={backgroundColor ? { background: backgroundColor } : undefined}
    >
      <div className={styles.page}>
        <div className={styles.runhead}>
          <span className={styles.mag}>{magazineName}</span>
          <span>
            The Test · {meta.titleZh}
          </span>
          <span>{issueLabel ?? `№ ${meta.part} — ${meta.topic}`}</span>
        </div>

        <div className={styles.testhead}>
          <div className={styles.kick}>
            Interactive · Part {PART_WORDS[meta.part] ?? meta.part}
          </div>
          <h2 className={styles.heading}>
            {heading.lead} <i>{heading.accent}</i>
          </h2>
          <div className={styles.dek}>{meta.instructions}</div>
        </div>

        <div className={styles.progress}>
          <span className={styles.progressLbl}>
            Question {pad2(current.number)} — of {pad2(total)}
          </span>
          <div className={styles.track}>
            <span className={styles.trackFill} style={{ width: `${pct}%` }} />
          </div>
          <span className={styles.pct}>{pct}%</span>
        </div>

        <div className={styles.testbody}>
          {/* Question column ------------------------------------------- */}
          <div className={styles.qcol}>
            <div className={styles.qnum}>
              <span className={styles.qnumBig}>{pad2(current.number)}</span>
              <span className={styles.qnumOf}>Choose the pronoun</span>
            </div>

            <div className={styles.prompt}>
              {current.sentence.before}{" "}
              <span
                className={`${styles.blank} ${
                  answered && !isCorrect ? styles.blankWrong : ""
                }`}
              >
                {selected ?? " "}
              </span>{" "}
              {current.sentence.after}
              {current.hintZh && (
                <span className={styles.zh}>{current.hintZh}</span>
              )}
            </div>

            <div className={styles.opts}>
              {current.options.map((opt) => {
                const isSel = opt.value === selected;
                const showCorrect = answered && opt.isCorrect;
                const showWrong = answered && isSel && !opt.isCorrect;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    disabled={answered}
                    onClick={() => handleSelect(opt.value)}
                    className={[
                      styles.opt,
                      isSel && !showWrong ? styles.optSel : "",
                      showWrong ? styles.optWrong : "",
                      showCorrect && !isSel ? styles.optCorrect : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {opt.value}
                    <span className={styles.k}>
                      {usedForOf(opt.value)}
                      {showCorrect ? " ✓" : ""}
                    </span>
                  </button>
                );
              })}
            </div>

            {answered && selectedOption && (
              <div className={styles.verdict}>
                <span
                  className={`${styles.verdictWord} ${
                    isCorrect ? styles.verdictWordOk : ""
                  }`}
                >
                  {isCorrect ? "Correct —" : "Not quite —"}
                </span>
                <p className={styles.verdictText}>
                  {selectedOption.explanation}
                  {!isCorrect && (
                    <>
                      {" "}
                      The intended answer is <b>{current.primaryAnswer}</b>.
                    </>
                  )}
                </p>
              </div>
            )}

            <ScoreCard
              statuses={questions.map((q) =>
                answers[q.id] == null
                  ? "unanswered"
                  : q.acceptedAnswers.includes(answers[q.id])
                  ? "correct"
                  : "incorrect"
              )}
              currentIndex={index}
              total={total}
              onSelect={(i) => {
                setPanelOpen(false);
                setIndex(i);
              }}
            />

            <div className={styles.navrow}>
              <div className={styles.navLeft}>
                {(index > 0 || onBack) && (
                  <button type="button" className={styles.prev} onClick={goPrev}>
                    ‹ {index > 0 ? "Previous" : "Back"}
                  </button>
                )}
                {!answered && !isLast && (
                  <button type="button" className={styles.skip} onClick={goNext}>
                    Skip this question
                  </button>
                )}
              </div>
              <button type="button" className={styles.nextBtn} onClick={goNext}>
                {isLast ? "Finish" : `Next — ${pad2(current.number + 1)}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
