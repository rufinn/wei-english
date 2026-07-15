import type { CoverTemplateProps } from "../_templates/cover";
import type { FeatureTemplateProps } from "../_templates/feature";
import type { FillInTemplateProps } from "../_templates/quiz/fillIn";
import { RELATIVE_CLAUSES_QUIZ_FILL_IN } from "./relative_clauses";

export type Slide =
  | ({ type: "cover" } & CoverTemplateProps)
  | ({ type: "feature"; cards?: { label: string }[] } & Omit<
      FeatureTemplateProps,
      "children"
    >)
  | ({ type: "quiz" } & Omit<FillInTemplateProps, "onBack" | "onNext">);

export const PRESENT_SIMPLE_COVER = {
  "titleLines": ["PRESENT", "SIMPLE"],
  "subtitle": "HABIT. FACT. ROUTINE.",
  "scrollLabel": "The beauty of everyday life lies in its pattern",
  "footerText": "WEI'S ENGLISH"
}

export const PRESENT_SIMPLE_FEATURE = {
  "headlineLines": ["Every day,", "every time."],
  "subtitle": "ROUTINE. FACT. TRUTH",
  "description": [
    "We use Present Simple for habits,",
    "general truths, routines,",
    "and things that are always true."
  ]
}

export const PRESENT_SIMPLE = [
  {
    "type": "cover",
    "titleLines": ["PRESENT", "SIMPLE"],
    "subtitle": "HABIT. FACT. ROUTINE.",
    "scrollLabel": "The beauty of everyday life lies in its pattern",
    "footerText": "WEI'S ENGLISH"
  },
  {
    "type": "feature",
    "headlineLines": ["Every day,", "every time."],
    "subtitle": "ROUTINE. FACT. TRUTH",
    "description": [
      "We use Present Simple for habits,",
      "general truths, routines,",
      "and things that are always true."
    ],
    "cards": [{
      "label": "Formula"
    }, {
      "label": "Usage"
    }, {
      "label": "Examples"
    }]
  }
]

export const PAST_SIMPLE = [
  {
    "type": "cover",
    "titleLines": ["PAST", "SIMPLE"],
    "subtitle": "EVENT. ACTION. FINISHED.",
    "scrollLabel": "It happened in the past. It's finished.",
    "footerText": "WEI'S ENGLISH"
  },
  {
    "type": "feature",
    "headlineLines": ["It happened.", "It's finished."],
    "subtitle": "COMPLETED. SPECIFIC TIME. FINISHED",
    "description": [
      "We use Past Simple tense for actions ", "that started and finished in the past."
    ],
    "cards": [{
      "label": "Formula"
    }, {
      "label": "Usage"
    }, {
      "label": "Examples"
    }]
  }
]

export const FUTURE_TENSE = [
  {
    "type": "cover",
    "titleLines": ["FUTURE", "TENSE"],
    "subtitle": "PLAN. EXPECTATION. POSSIBILITY.",
    "scrollLabel": "It will happen. We are looking ahead.",
    "footerText": "WEI'S ENGLISH"
  },
  {
    "type": "feature",
    "headlineLines": ["It will happen."],
    "subtitle": "FUTURE. PLAN. POSSIBILITY.",
    "description": [
      "We use Future Tense for actions","that will happen in the future."
    ],
    "cards": [{
      "label": "Formula"
    }, {
      "label": "Usage"
    }, {
      "label": "Examples"
    }]
  }
]

export const RELATIVE_CLAUSES = [
  {
    "type": "quiz",
    "quiz": RELATIVE_CLAUSES_QUIZ_FILL_IN
  }
]



export const SLIDES_MAP: { label: string; slug: string; data: Slide[] }[] = [
    { label: '01 Present Simple', slug: 'present-simple', data: PRESENT_SIMPLE as Slide[] },
    { label: '02 Past Simple', slug: 'past-simple', data: PAST_SIMPLE as Slide[] },
    { label: '03 Future Tense', slug: 'future-tense', data: FUTURE_TENSE as Slide[] },
    { label: '04 Relative Clauses', slug: 'relative-clauses', data: RELATIVE_CLAUSES as Slide[] },
]