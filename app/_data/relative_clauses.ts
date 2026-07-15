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