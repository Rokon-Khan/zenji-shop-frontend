import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lookbook — ZENJI Anime Streetwear on the Street",
  description:
    "The ZENJI lookbook: heavyweight anime graphic tees photographed on the street. Wear the arc.",
  openGraph: {
    title: "ZENJI Lookbook",
    description: "Shot on the street. Worn in the wild.",
  },
};

const SHOTS = [
  { src: "/lookbook-1.jpg", title: "Chapter_01", caption: "Void Purple / Alleyway, 06:14" },
  { src: "/lookbook-2.jpg", title: "Chapter_02", caption: "Bone / Rooftop, dusk" },
  { src: "/lookbook-3.jpg", title: "Chapter_03", caption: "Forest Green / Underpass" },
  { src: "/hero.jpg", title: "Chapter_04", caption: "The Origin Drop / Studio" },
];

export default function LookbookPage() {
  return (
    <>
      <section className="border-b border-border bg-ink px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-[1600px]">
          <p className="label-xs text-primary">{"Visual_Archive // Vol_01"}</p>
          <h1 className="display mt-3 text-4xl leading-[0.88] sm:text-6xl">The_Lookbook</h1>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            No studio gloss. Every piece shot where it lives — concrete, neon, 3AM.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {SHOTS.map((s, i) => (
            <figure
              key={s.title}
              className={`group relative overflow-hidden border border-border ${
                i % 3 === 0 ? "md:col-span-2" : ""
              }`}
            >
              <img
                src={s.src}
                alt={`${s.title} — ${s.caption}`}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  i % 3 === 0 ? "aspect-[16/10]" : "aspect-[4/5]"
                }`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink to-transparent p-5">
                <span className="display text-2xl">{s.title}</span>
                <span className="label-xs text-muted-foreground">{s.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-10 text-center">
          <h2 className="display text-3xl sm:text-5xl">Wear the Arc</h2>
          <Link
            href="/drop"
            className="label-xs mt-6 inline-block bg-primary px-8 py-4 font-bold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Shop the drop →
          </Link>
        </div>
      </section>
    </>
  );
}
