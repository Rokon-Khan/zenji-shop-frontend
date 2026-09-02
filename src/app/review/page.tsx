import type { Metadata } from "next";
import { ReviewClient } from "./ReviewClient";

export const metadata: Metadata = {
  title: "Reviews — What ZENJI Wearers Say",
  description:
    "Read verified customer reviews of ZENJI anime graphic tees — fit, print quality and heavyweight 240gsm cotton.",
  openGraph: {
    title: "ZENJI Reviews",
    description: "Verified reviews from the ZENJI community.",
  },
};

export default function ReviewPage() {
  return <ReviewClient />;
}
