import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import HomeScrollStack from "@/components/HomeScrollStack";

export const metadata: Metadata = {
  title: "ZENJI — Wear Your Story | Anime Streetwear Australia",
  description:
    "Limited-edition anime graphic tees from ZENJI. 240gsm heavyweight cotton, oversized fit, free AU shipping over A$150.",
  openGraph: {
    title: "ZENJI — Wear Your Story",
    description: "Anime-inspired streetwear for gamers and otaku. Every drop limited.",
    images: ["/hero.jpg"],
  },
};

export default function HomePage() {
  const latest = products.slice(0, 5);

  return (
    <>
      {/* HERO — full‑screen video */}
      <section className="relative overflow-hidden">
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-[90vh] min-h-[520px] w-full object-cover"
          aria-hidden="true"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        {/* Hero copy */}
        <div className="absolute bottom-10 left-0 w-full px-4 sm:px-6">
          <div className="mx-auto max-w-[1600px]">
            <h1 className="display text-6xl leading-[0.85] sm:text-8xl lg:text-[10rem]">
              Wear Your
              <br />
              Story
            </h1>
            <Link
              href="/drop"
              className="label-xs mt-8 inline-block bg-primary px-8 py-4 font-bold text-primary-foreground hover:opacity-90 transition-opacity tracking-widest"
            >
              SHOP THE DROP →
            </Link>
          </div>
        </div>
      </section>

      {/* DROP SHOWCASE — Interactive ScrollStack */}
      <HomeScrollStack />

      {/* LATEST DROPS */}
      <section className="py-16">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
          <p className="label-xs text-primary">{"New_Arrivals // Fresh_Ink"}</p>
          <h2 className="display mt-2 text-4xl sm:text-6xl">Latest_Drops</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {latest.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ETHOS SPLIT */}
      <section className="grid md:grid-cols-2">
        <img
          src="/lookbook-3.jpg"
          alt="Group of friends wearing ZENJI tees in a warehouse"
          loading="lazy"
          width={1000}
          height={1250}
          className="h-full max-h-[520px] w-full object-cover"
        />
        <div className="flex flex-col justify-center gap-5 bg-ink p-8 sm:p-14">
          <h2 className="display text-3xl leading-[0.9] sm:text-5xl">
            Born from the
            <br />
            warrior spirit.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            ZENJI is an Australian anime streetwear label. Inspired by samurai discipline, anime art
            and modern street culture, we make premium streetwear for those who choose their own
            path.
          </p>
          <blockquote className="rule-left text-sm leading-relaxed text-primary">
            ZENJI is more than a name on a shirt. It represents the warrior within, the part of us
            that keeps moving forward.
          </blockquote>
          <Link
            href="/our-story"
            className="label-xs w-fit border-b border-primary pb-1 font-bold hover:text-primary transition-colors"
          >
            Read our story →
          </Link>
        </div>
      </section>

      {/* ETHOS BANNER */}
      <section className="relative">
        <img
          src="/lookbook-1.jpg"
          alt="Models in ZENJI tees on a neon Tokyo street"
          loading="lazy"
          width={1000}
          height={1250}
          className="h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 mx-auto flex max-w-[1600px] flex-col justify-center px-4 sm:px-6">
          <h2 className="display text-4xl leading-[0.85] sm:text-6xl">
            The
            <br />
            <span className="text-primary">ZENJI</span>
            <br />
            Ethos
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Limited runs. No restocks. Every piece is a chapter — once the arc closes, it stays
            closed.
          </p>
        </div>
      </section>
    </>
  );
}
