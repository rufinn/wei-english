"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import slides from "../slides.json";
import { type Slide } from "@/app/_data/tenses";
import { RELATIVE_CLAUSES_SLIDES_MAP } from "@/app/_data/relative_clauses";
import FeatureContent from "./_components/FeatureContent";

const defaultSlides = slides as Slide[];

function CoverPreviewContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const slides = RELATIVE_CLAUSES_SLIDES_MAP;

  const entry = slides.find((item) => item.slug === slug);
  const typedSlides = (entry ? entry.data : defaultSlides) as Slide[];

  const deckPos = entry ? slides.indexOf(entry) : -1;
  const nextDeck = deckPos >= 0 ? slides[deckPos + 1] : undefined;

  const [index, setIndex] = useState(0);

  const isLast = index === typedSlides.length - 1;

  const goNext = () => {
    if (isLast) {
      if (nextDeck) router.push(`/preview/cover?slug=${nextDeck.slug}`);
      return;
    }
    setIndex((i) => Math.min(i + 1, typedSlides.length - 1));
  };
  const goBack = () => setIndex((i) => Math.max(i - 1, 0));

  const slide = typedSlides[index];

  return (
    <FeatureContent
      slide={slide}
      isLast={isLast}
      hasNextDeck={Boolean(nextDeck)}
      onNext={goNext}
      onBack={goBack}
    />
  );
}

function CoverPreviewKeyed() {
  const searchParams = useSearchParams();
  return <CoverPreviewContent key={searchParams.get("slug")} />;
}

export default function CoverPreviewPage() {
  return (
    <Suspense fallback={null}>
      <CoverPreviewKeyed />
    </Suspense>
  );
}
