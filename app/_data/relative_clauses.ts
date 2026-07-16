export const RELATIVE_CLAUSES_QUIZ_FILL_IN = {
  "id": "relative-clauses-part-1",
  "type": "fill_in",
  "meta": {
    "title": "Fill in the Blank",
    "titleZh": "填入關係代名詞",
    "part": 1,
    "topic": "Relative pronouns",
    "instructions": "Click the correct pronoun. Some questions accept more than one answer.",
    "instructionsZh": "點選正確的關係代名詞。部分題目有多個可接受的答案。",
    "level": "B1-B2",
    "totalQuestions": 8,
    "interaction": "single-select",
    "lockAfterAnswer": true,
    "revealCorrectOnWrong": true,
    "scoring": { "pointsPerQuestion": 1, "maxScore": 8, "passScore": 6 },
    "source": "relative-clauses.html — PART1"
  },

  "optionBank": [
    { "value": "who",   "label": "who",   "usedFor": "people (subject)",        "icon": "👤" },
    { "value": "whom",  "label": "whom",  "usedFor": "people (object, formal)", "icon": "🤝" },
    { "value": "which", "label": "which", "usedFor": "things",                  "icon": "📄" },
    { "value": "whose", "label": "whose", "usedFor": "possession",              "icon": "🔑" },
    { "value": "that",  "label": "that",  "usedFor": "people or things (defining only)", "icon": "🔗" }
  ],

  "questions": [
    {
      "id": "p1-q1",
      "number": 1,
      "sentence": {
        "before": "The engineer",
        "after": "designed this system has over 20 years of experience.",
        "display": "The engineer ______ designed this system has over 20 years of experience."
      },
      "acceptedAnswers": ["who", "that"],
      "primaryAnswer": "who",
      "note": "People acting as subject → who or that",
      "hintZh": "「人」當主詞 → who / that",
      "tags": { "refersTo": "person", "role": "subject", "clauseType": "defining", "omissible": false },
      "difficulty": "easy",
      "options": [
        { "value": "who",   "isCorrect": true,  "explanation": "Correct. The engineer is a person and is the subject of 'designed', so who fits." },
        { "value": "that",  "isCorrect": true,  "explanation": "Also correct. In a defining clause, that can replace who for people." },
        { "value": "whom",  "isCorrect": false, "explanation": "whom is the object form, but here the pronoun performs the verb 'designed' — it is the subject. Use who or that." },
        { "value": "which", "isCorrect": false, "explanation": "which is only for things. The engineer is a person, so use who or that." },
        { "value": "whose", "isCorrect": false, "explanation": "whose shows possession and must be followed by a noun. Nothing here belongs to the engineer." }
      ]
    },
    {
      "id": "p1-q2",
      "number": 2,
      "sentence": {
        "before": "This is the proposal",
        "after": "we submitted to the client last week.",
        "display": "This is the proposal ______ we submitted to the client last week."
      },
      "acceptedAnswers": ["that", "which"],
      "primaryAnswer": "that",
      "note": "Things as object → that or which (pronoun can even be omitted)",
      "hintZh": "「事物」當受詞 → that / which（亦可省略）",
      "tags": { "refersTo": "thing", "role": "object", "clauseType": "defining", "omissible": true },
      "tip": "Because the pronoun is the object of a defining clause, you could also drop it entirely: 'the proposal we submitted'.",
      "difficulty": "easy",
      "options": [
        { "value": "that",  "isCorrect": true,  "explanation": "Correct. A proposal is a thing, and 'we submitted' it — the pronoun is the object of a defining clause." },
        { "value": "which", "isCorrect": true,  "explanation": "Also correct. which works for things in either role; that is simply more common in speech." },
        { "value": "who",   "isCorrect": false, "explanation": "who is for people. A proposal is a thing — use that or which." },
        { "value": "whom",  "isCorrect": false, "explanation": "whom is for people only, even though the object position is right." },
        { "value": "whose", "isCorrect": false, "explanation": "whose signals possession and needs a following noun. The proposal owns nothing here." }
      ]
    },
    {
      "id": "p1-q3",
      "number": 3,
      "sentence": {
        "before": "She is the only person to",
        "after": "I would trust this information.",
        "display": "She is the only person to ______ I would trust this information."
      },
      "acceptedAnswers": ["whom"],
      "primaryAnswer": "whom",
      "note": "After the preposition 'to' → whom (formal only)",
      "hintZh": "介係詞 to 之後 → whom（正式用法）",
      "tags": { "refersTo": "person", "role": "object-of-preposition", "clauseType": "defining", "omissible": false, "register": "formal" },
      "difficulty": "hard",
      "options": [
        { "value": "whom",  "isCorrect": true,  "explanation": "Correct. Directly after a preposition ('to ___'), English requires the object form whom." },
        { "value": "who",   "isCorrect": false, "explanation": "who cannot follow a preposition. It only works if you move the preposition to the end: 'the person who I would trust this information to'." },
        { "value": "that",  "isCorrect": false, "explanation": "that can never follow a preposition — 'to that' is impossible in a relative clause." },
        { "value": "which", "isCorrect": false, "explanation": "which is for things, and 'person' is a person." },
        { "value": "whose", "isCorrect": false, "explanation": "whose expresses possession and must be followed by a noun, which is not the case here." }
      ]
    },
    {
      "id": "p1-q4",
      "number": 4,
      "sentence": {
        "before": "We are looking for a candidate",
        "after": "background includes event management.",
        "display": "We are looking for a candidate ______ background includes event management."
      },
      "acceptedAnswers": ["whose"],
      "primaryAnswer": "whose",
      "note": "Shows possession (the candidate's background) → whose",
      "hintZh": "表示所有格（候選人「的」背景）→ whose",
      "tags": { "refersTo": "person", "role": "possessive", "clauseType": "defining", "omissible": false },
      "difficulty": "medium",
      "options": [
        { "value": "whose", "isCorrect": true,  "explanation": "Correct. The background belongs to the candidate, and a noun follows the blank — the signature of whose." },
        { "value": "who",   "isCorrect": false, "explanation": "who must be the subject of a verb, but a noun ('background') follows the blank, not a verb. Compare: 'a candidate who has a background in…'." },
        { "value": "whom",  "isCorrect": false, "explanation": "whom is the object form and cannot show possession." },
        { "value": "which", "isCorrect": false, "explanation": "which is for things, and it cannot mark possession here." },
        { "value": "that",  "isCorrect": false, "explanation": "that has no possessive form — it can never be followed directly by a noun this way." }
      ]
    },
    {
      "id": "p1-q5",
      "number": 5,
      "sentence": {
        "before": "The new policy,",
        "after": "was announced yesterday, will take effect in July.",
        "display": "The new policy, ______ was announced yesterday, will take effect in July."
      },
      "acceptedAnswers": ["which"],
      "primaryAnswer": "which",
      "note": "Non-defining clause (commas present) about a thing → which only",
      "hintZh": "非限定子句（有逗號）+ 事物 → 只能用 which",
      "tags": { "refersTo": "thing", "role": "subject", "clauseType": "non-defining", "omissible": false },
      "tip": "The commas are the clue: the clause adds extra information and could be removed without breaking the sentence.",
      "difficulty": "medium",
      "options": [
        { "value": "which", "isCorrect": true,  "explanation": "Correct. The commas mark a non-defining clause, and the policy is a thing — which is the only option." },
        { "value": "that",  "isCorrect": false, "explanation": "Never use that in a non-defining clause. The commas rule it out completely." },
        { "value": "who",   "isCorrect": false, "explanation": "who is for people. A policy is a thing." },
        { "value": "whom",  "isCorrect": false, "explanation": "whom is for people, and the pronoun here is the subject of 'was announced'." },
        { "value": "whose", "isCorrect": false, "explanation": "whose marks possession and needs a following noun; 'was announced' is a verb." }
      ]
    },
    {
      "id": "p1-q6",
      "number": 6,
      "sentence": {
        "before": "Is this the colleague",
        "after": "you were telling me about?",
        "display": "Is this the colleague ______ you were telling me about?"
      },
      "acceptedAnswers": ["whom", "who", "that"],
      "primaryAnswer": "whom",
      "note": "Object of 'about' → whom (formal); who/that also accepted in speech",
      "hintZh": "介係詞 about 的受詞 → whom（正式）；口語亦可用 who / that",
      "tags": { "refersTo": "person", "role": "object-of-preposition", "clauseType": "defining", "omissible": true, "register": "flexible" },
      "tip": "The preposition sits at the end ('about'), which is what allows who and that here — unlike 'to whom' in Q3.",
      "difficulty": "hard",
      "options": [
        { "value": "whom",  "isCorrect": true,  "explanation": "Correct, and the most formal choice. The colleague is the object of the preposition 'about'." },
        { "value": "who",   "isCorrect": true,  "explanation": "Also accepted. Because 'about' is stranded at the end, everyday English allows who." },
        { "value": "that",  "isCorrect": true,  "explanation": "Also accepted. This is a defining clause with the preposition at the end, so that is natural in speech." },
        { "value": "which", "isCorrect": false, "explanation": "which is for things. A colleague is a person." },
        { "value": "whose", "isCorrect": false, "explanation": "whose shows possession and must be followed by a noun — nothing belongs to the colleague here." }
      ]
    },
    {
      "id": "p1-q7",
      "number": 7,
      "sentence": {
        "before": "They hired a team",
        "after": "specialises in luxury brand communications.",
        "display": "They hired a team ______ specialises in luxury brand communications."
      },
      "acceptedAnswers": ["that", "which", "who"],
      "primaryAnswer": "that",
      "note": "Team doing the action (subject) → that/which; who also accepted for groups",
      "hintZh": "團隊當主詞 → that / which；視為「人」時亦可用 who",
      "tags": { "refersTo": "collective", "role": "subject", "clauseType": "defining", "omissible": false },
      "tip": "'Team' is a collective noun — treat it as a thing (which/that) or as the people in it (who).",
      "difficulty": "medium",
      "options": [
        { "value": "that",  "isCorrect": true,  "explanation": "Correct. The team is the subject of 'specialises', and that covers both people and things in defining clauses." },
        { "value": "which", "isCorrect": true,  "explanation": "Also correct. Treating the team as a single entity — a thing — makes which valid." },
        { "value": "who",   "isCorrect": true,  "explanation": "Also accepted. A team is made up of people, so who works when you view the group that way." },
        { "value": "whom",  "isCorrect": false, "explanation": "whom is the object form, but the pronoun here performs the verb 'specialises' — it is the subject." },
        { "value": "whose", "isCorrect": false, "explanation": "whose needs a noun after it to show possession; a verb follows the blank instead." }
      ]
    },
    {
      "id": "p1-q8",
      "number": 8,
      "sentence": {
        "before": "The contract",
        "after": "you signed includes a confidentiality clause.",
        "display": "The contract ______ you signed includes a confidentiality clause."
      },
      "acceptedAnswers": ["that", "which"],
      "primaryAnswer": "that",
      "note": "Thing as object → that or which (pronoun can be omitted too)",
      "hintZh": "「事物」當受詞 → that / which（亦可省略）",
      "tags": { "refersTo": "thing", "role": "object", "clauseType": "defining", "omissible": true },
      "tip": "You could also say 'The contract you signed…' — the object pronoun is optional in a defining clause.",
      "difficulty": "easy",
      "options": [
        { "value": "that",  "isCorrect": true,  "explanation": "Correct. A contract is a thing, and 'you signed' it — the pronoun is the object of a defining clause." },
        { "value": "which", "isCorrect": true,  "explanation": "Also correct. which is the slightly more formal alternative to that for things." },
        { "value": "who",   "isCorrect": false, "explanation": "who is for people. A contract is a thing — use that or which." },
        { "value": "whom",  "isCorrect": false, "explanation": "whom refers to people only, even in the object position." },
        { "value": "whose", "isCorrect": false, "explanation": "whose shows possession and must be followed by a noun; 'you signed' is a subject plus verb." }
      ]
    }
  ]
}

export const RELATIVE_CLAUSES_QUIZ_READING = {
  "id": "relative-clauses-part-6-reading",
  "meta": {
    "title": "Integrated Reading",
    "titleZh": "綜合填空練習",
    "part": 6,
    "topic": "Relative pronouns in context",
    "instructions": "Drag a relative pronoun from the word bank into each blank.",
    "instructionsZh": "將關係代名詞從字庫拖曳至每個空格。",
    "note": "who, which and that may be used more than once.",
    "interaction": "drag-and-drop",
    "reusableAnswers": true,
    "totalBlanks": 8,
    "scoring": {
      "pointsPerBlank": 1,
      "maxScore": 8
    },
    "source": "relative-clauses.html — PART6_SEGMENTS (numbered blanks only)",
    "excluded": "Lettered fixed-phrase vocabulary blanks (a)-(h) are omitted; their words are written into the article text."
  },
  "wordBank": [
    {
      "id": "wb-who",
      "value": "who",
      "label": "who",
      "reusable": true,
      "usedIn": [
        "(2)",
        "(6)",
        "(7)",
        "(8)"
      ],
      "timesUsed": 4
    },
    {
      "id": "wb-which",
      "value": "which",
      "label": "which",
      "reusable": true,
      "usedIn": [
        "(1)",
        "(3)",
        "(4)"
      ],
      "timesUsed": 3
    },
    {
      "id": "wb-whose",
      "value": "whose",
      "label": "whose",
      "reusable": true,
      "usedIn": [
        "(5)"
      ],
      "timesUsed": 1
    },
    {
      "id": "wb-that",
      "value": "that",
      "label": "that",
      "reusable": true,
      "usedIn": [
        "(1)",
        "(3)"
      ],
      "timesUsed": 2
    }
  ],
  "article": {
    "text": "肯愛協會 is a mental health charity {{1}} was founded on the belief that everyone deserves emotional support. The volunteers {{2}} work there come from various professional backgrounds, and many are familiar with the real challenges faced by people in our community.\n\nOne of the programmes {{3}} has attracted the most attention is a community counselling initiative, {{4}} connects trained counsellors with individuals in need of support. The founder, {{5}} background is in clinical psychology, believes that every act of kindness can make a difference to people {{6}} feel isolated or overwhelmed.\n\nThe charity also works hard to raise awareness of mental health issues through public events. Those {{7}} take part in these programmes often say the experience changed their perspective. The organisation is dedicated to ensuring that its services reach everyone in the community. It aims to give hope to anyone {{8}} is struggling, and encourages all of us to be aware of the mental health needs of those around us.",
    "paragraphCount": 3,
    "placeholderFormat": "{{n}} where n = blank order"
  },
  "paragraphs": [
    {
      "index": 1,
      "tokens": [
        {
          "type": "text",
          "value": "肯愛協會 is a mental health charity "
        },
        {
          "type": "blank",
          "blankId": "p6-1",
          "label": "(1)"
        },
        {
          "type": "text",
          "value": " was founded on the belief that everyone deserves emotional support. The volunteers "
        },
        {
          "type": "blank",
          "blankId": "p6-2",
          "label": "(2)"
        },
        {
          "type": "text",
          "value": " work there come from various professional backgrounds, and many are familiar with the real challenges faced by people in our community."
        }
      ]
    },
    {
      "index": 2,
      "tokens": [
        {
          "type": "text",
          "value": "One of the programmes "
        },
        {
          "type": "blank",
          "blankId": "p6-3",
          "label": "(3)"
        },
        {
          "type": "text",
          "value": " has attracted the most attention is a community counselling initiative, "
        },
        {
          "type": "blank",
          "blankId": "p6-4",
          "label": "(4)"
        },
        {
          "type": "text",
          "value": " connects trained counsellors with individuals in need of support. The founder, "
        },
        {
          "type": "blank",
          "blankId": "p6-5",
          "label": "(5)"
        },
        {
          "type": "text",
          "value": " background is in clinical psychology, believes that every act of kindness can make a difference to people "
        },
        {
          "type": "blank",
          "blankId": "p6-6",
          "label": "(6)"
        },
        {
          "type": "text",
          "value": " feel isolated or overwhelmed."
        }
      ]
    },
    {
      "index": 3,
      "tokens": [
        {
          "type": "text",
          "value": "The charity also works hard to raise awareness of mental health issues through public events. Those "
        },
        {
          "type": "blank",
          "blankId": "p6-7",
          "label": "(7)"
        },
        {
          "type": "text",
          "value": " take part in these programmes often say the experience changed their perspective. The organisation is dedicated to ensuring that its services reach everyone in the community. It aims to give hope to anyone "
        },
        {
          "type": "blank",
          "blankId": "p6-8",
          "label": "(8)"
        },
        {
          "type": "text",
          "value": " is struggling, and encourages all of us to be aware of the mental health needs of those around us."
        }
      ]
    }
  ],
  "blanks": [
    {
      "id": "p6-1",
      "label": "(1)",
      "order": 1,
      "paragraph": 1,
      "placeholder": "{{1}}",
      "acceptedAnswers": [
        "which",
        "that"
      ],
      "correctAnswer": "which",
      "multipleAccepted": true
    },
    {
      "id": "p6-2",
      "label": "(2)",
      "order": 2,
      "paragraph": 1,
      "placeholder": "{{2}}",
      "acceptedAnswers": [
        "who"
      ],
      "correctAnswer": "who",
      "multipleAccepted": false
    },
    {
      "id": "p6-3",
      "label": "(3)",
      "order": 3,
      "paragraph": 2,
      "placeholder": "{{3}}",
      "acceptedAnswers": [
        "that",
        "which"
      ],
      "correctAnswer": "that",
      "multipleAccepted": true
    },
    {
      "id": "p6-4",
      "label": "(4)",
      "order": 4,
      "paragraph": 2,
      "placeholder": "{{4}}",
      "acceptedAnswers": [
        "which"
      ],
      "correctAnswer": "which",
      "multipleAccepted": false
    },
    {
      "id": "p6-5",
      "label": "(5)",
      "order": 5,
      "paragraph": 2,
      "placeholder": "{{5}}",
      "acceptedAnswers": [
        "whose"
      ],
      "correctAnswer": "whose",
      "multipleAccepted": false
    },
    {
      "id": "p6-6",
      "label": "(6)",
      "order": 6,
      "paragraph": 2,
      "placeholder": "{{6}}",
      "acceptedAnswers": [
        "who"
      ],
      "correctAnswer": "who",
      "multipleAccepted": false
    },
    {
      "id": "p6-7",
      "label": "(7)",
      "order": 7,
      "paragraph": 3,
      "placeholder": "{{7}}",
      "acceptedAnswers": [
        "who"
      ],
      "correctAnswer": "who",
      "multipleAccepted": false
    },
    {
      "id": "p6-8",
      "label": "(8)",
      "order": 8,
      "paragraph": 3,
      "placeholder": "{{8}}",
      "acceptedAnswers": [
        "who"
      ],
      "correctAnswer": "who",
      "multipleAccepted": false
    }
  ]
}