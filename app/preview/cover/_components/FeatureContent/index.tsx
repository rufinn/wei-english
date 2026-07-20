import CoverTemplate from "@/app/_templates/cover";
import FeatureTemplate from "@/app/_templates/feature";
import FillInTemplate from "@/app/_templates/quiz/fillIn";
import Table from "@/app/_components/Table";
import type { Slide } from "@/app/_data/tenses";

type FeatureContent = {
  type: "table";
  data: { headers: string[]; rows: React.ReactNode[][] };
};

interface FeatureContentProps {
  slide: Slide;
  /** Whether the current slide is the last of its deck. */
  isLast: boolean;
  /** Whether another deck follows this one. */
  hasNextDeck: boolean;
  onNext: () => void;
  onBack: () => void;
}

export default function FeatureContent({
  slide,
  isLast,
  hasNextDeck,
  onNext,
  onBack,
}: FeatureContentProps) {
  if (slide.type === "cover") {
    return <CoverTemplate {...slide} onNext={onNext} />;
  }

  if (slide.type === "quiz") {
    return (
      <FillInTemplate
        {...slide}
        onBack={onBack}
        onNext={isLast && !hasNextDeck ? undefined : onNext}
      />
    );
  }

  const content = (slide as { content?: FeatureContent }).content;

  return (
    <FeatureTemplate
      {...slide}
      onBack={onBack}
      onNext={isLast && !hasNextDeck ? undefined : onNext}
    >
      {content?.type === "table" && (
        <Table headers={content.data.headers} rows={content.data.rows} />
      )}
    </FeatureTemplate>
  );
}
