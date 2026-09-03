import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story — Why ZENJI Exists",
  description:
    "ZENJI is an independent Australian anime streetwear label. Original artwork, heavyweight cotton, limited drops, no restocks.",
  openGraph: {
    title: "Our Story — ZENJI",
    description:
      "An independent Australian anime streetwear label. Wear the Arc.",
  },
};

const PILLARS = [
  {
    n: "01",
    title: "Original_Artwork",
    body: "Every graphic is drawn in-house. Never licensed, never traced, never a print-on-demand template.",
  },
  {
    n: "02",
    title: "Heavyweight_Only",
    body: "240gsm combed cotton, garment washed, oversized boxy cut. Built to outlive the trend cycle.",
  },
  {
    n: "03",
    title: "No_Restocks",
    body: "Each arc is printed once. When it closes, it stays closed. Ownership should mean something.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <Image
          src="/hero.jpg"
          alt="ZENJI studio"
          className="h-[46vh] min-h-72 w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1600px] px-4 pb-10 sm:px-6">
            <p className="label-xs text-primary">
              {"EST_2024 // Melbourne, AU"}
            </p>
            <h1 className="display mt-3 text-4xl leading-[0.88] sm:text-6xl">
              Our_Story
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] grid gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="display text-3xl sm:text-4xl">
            Built From an Obsession
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              ZENJI started in a bedroom with a drawing tablet and a stack of
              manga volumes that had been read until the spines gave out. We
              wanted the feeling of a great arc — the tension, the turn, the
              quiet after — on something you could actually wear.
            </p>
            <p>
              What existed was licensed merch: thin blanks, flat prints,
              characters slapped on cotton. So we drew our own. Each ZENJI piece
              is an original interpretation of a moment — a breath technique, a
              domain, a will that refuses to go out.
            </p>
            <p>
              We print small on purpose. A drop is an arc: it opens, it runs, it
              closes. No restocks, no shortcuts, no compromise on the blank.
            </p>
          </div>
        </div>
        <Image
          src="/lookbook-2.jpg"
          alt="ZENJI tee worn on the street"
          loading="lazy"
          className="aspect-[4/5] w-full border border-border object-cover"
        />
      </section>

      <section className="border-y border-border bg-ink px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-[1600px] gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.n} className="border border-border p-6">
              <span className="display text-5xl text-primary">{p.n}</span>
              <h3 className="display mt-4 text-xl">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 text-center sm:px-6">
        <h2 className="display text-3xl sm:text-5xl">Wear the Arc</h2>
        <p className="label-xs mt-3 text-primary">
          {"Ten pieces // One drop // No restocks"}
        </p>
        <Link
          href="/drop"
          className="label-xs mt-6 inline-block bg-primary px-8 py-4 font-bold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Enter the drop →
        </Link>
      </section>
    </>
  );
}
