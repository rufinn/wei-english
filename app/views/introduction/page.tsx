import IntroductionTemplate from "@/app/_templates/introduction";
import { ENGLISH_COURSE_INTRODUCTION } from "@/app/_templates/introduction/_mocks";

export default function IntroductionPreviewPage() {
  return <IntroductionTemplate {...ENGLISH_COURSE_INTRODUCTION} />;
}
