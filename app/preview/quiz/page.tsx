import { RELATIVE_CLAUSES_QUIZ_FILL_IN } from "@/app/_data/relative_clauses";
import FillInTemplate from "@/app/_templates/quiz/fillIn";
import { Suspense } from "react";

function QuizPreviewKeyed() {
  return <FillInTemplate quiz={RELATIVE_CLAUSES_QUIZ_FILL_IN} />;
}

export default function QuizPreviewPage() {
  return (
    <Suspense fallback={null}>
      <QuizPreviewKeyed />
    </Suspense>
  );
}