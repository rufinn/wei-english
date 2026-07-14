"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import slides from "../slides.json";
import { SLIDES_MAP, type Slide } from "@/app/_data/tenses";
import CoverTemplate from "../../_templates/cover";
import FeatureTemplate from "../../_templates/feature";
import Card from "@/app/_components/Card";
import styles from './cover.module.css';

const defaultSlides = slides as Slide[];

function CoverPreviewContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const entry = SLIDES_MAP.find((item) => item.slug === slug);
  const typedSlides = (entry ? entry.data : defaultSlides) as Slide[];

  const deckPos = entry ? SLIDES_MAP.indexOf(entry) : -1;
  const nextDeck = deckPos >= 0 ? SLIDES_MAP[deckPos + 1] : undefined;

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

  if (slide.type === "cover") {
    return <CoverTemplate {...slide} onNext={goNext} />;
  }

  return (
    <FeatureTemplate
      {...slide}
      onBack={goBack}
      onNext={isLast && !nextDeck ? undefined : goNext}
    >
      <div className={`${styles.vertical} ${styles.cards}`}>
      {
        slide.cards && slide.cards.map((item) => {
          return (
            <Card key={item.label} label={item.label} />
          )
        })
      }
      </div>
    </FeatureTemplate>
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
