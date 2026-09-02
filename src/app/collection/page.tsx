import type { Metadata } from "next";
import { CollectionClient } from "./CollectionClient";

export const metadata: Metadata = {
  title: "Anime Graphic Tees — The Full ZENJI Collection",
  description:
    "Every ZENJI drop, documented. Browse limited-edition anime graphic tees in heavyweight 240gsm cotton.",
  openGraph: {
    title: "The Full ZENJI Collection",
    description: "Every drop. Every arc. Documented.",
  },
};

export default function CollectionPage() {
  return <CollectionClient />;
}
