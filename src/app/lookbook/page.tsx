import type { Metadata } from "next";
import Link from "next/link";
import LookbookGallery from "@/components/site/LookbookGallery";

export const metadata: Metadata = {
  title: "Lookbook — ZENJI Neo Tokyo Streetwear | Visual Archive",
  description:
    "Editorial lookbook for The Origin Drop, the ZENJI collection. Heavyweight anime graphic tees photographed in urban Tokyo aesthetic. Wear the arc.",
  openGraph: {
    title: "ZENJI Lookbook — The Origin Drop",
    description: "Shot on the street. Worn in the wild.",
    images: ["/lookbook-1.jpg"],
  },
};

export default function LookbookPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Editorial Header with ghost watermark */}
      <section className="relative overflow-hidden border-b border-border bg-ink px-4 py-20 sm:px-6 md:py-28">
        {/* Background Ghost Watermark */}
        <div
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none text-[16vw] font-black text-white/[0.03] sm:right-12"
          style={{ fontFamily: "var(--font-display)" }}
          aria-hidden="true"
        >
          2024
        </div>

        <div className="relative mx-auto max-w-[1600px]">
          <span className="label-xs text-primary block tracking-[0.3em]">
            ANIME STREETWEAR —
          </span>
          <h1 className="display mt-3 text-5xl leading-[0.85] tracking-tight sm:text-7xl lg:text-9xl">
            LOOK
            <br />
            BOOK
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            The Origin Drop // Visual Lore. No studio gloss. Every piece shot
            where it lives — concrete, neon, 3AM in Tokyo.
          </p>
        </div>
      </section>

      {/* Masonry Visual Gallery Section */}
      <main className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 md:py-16">
        <LookbookGallery />
      </main>

      {/* SHOP THE COLLECTION CTA Banner */}
      <section className="border-t border-border bg-ink py-20 text-center px-4 sm:px-6">
        <div className="mx-auto max-w-2xl space-y-6">
          <span className="label-xs text-primary block tracking-[0.3em]">
            THE ORIGIN DROP // VISUAL ARCHIVE
          </span>
          <h2 className="display text-4xl sm:text-6xl text-white">
            SHOP THE COLLECTION
          </h2>
          <p className="text-sm text-muted-foreground">
            Every piece from The Origin Drop, limited stock. 240gsm heavyweight
            cotton, oversized fit, no restocks once the arc closes.
          </p>
          <div>
            <Link
              href="/collection"
              className="display inline-block bg-primary px-10 py-4 text-base font-bold text-primary-foreground hover:opacity-90 transition-opacity tracking-widest"
              style={{ fontFamily: "var(--font-display)" }}
            >
              SHOP NOW →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
