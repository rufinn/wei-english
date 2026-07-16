import ContentTemplate from "@/app/_templates/content";
import { Suspense } from "react";

export default function CoverPreviewPage() {
  return (
    <Suspense fallback={null}>
      <ContentTemplate />
    </Suspense>
  );
}