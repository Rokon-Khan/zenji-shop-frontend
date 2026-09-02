"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export type LookbookItem = {
  id: string;
  slug: string;
  name: string;
  view: "FRONT" | "BACK" | "ON MODEL";
  tag?: string;
  image: string;
};

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: "blue-flame-1",
    slug: "blue-flame-tee",
    name: "BLUE FLAME TEE",
    view: "FRONT",
    tag: "SALE",
    image: "/Blue-flame-1.avif",
  },
  {
    id: "blue-flame-4",
    slug: "blue-flame-tee",
    name: "BLUE FLAME TEE",
    view: "ON MODEL",
    tag: "SALE",
    image: "/Blue-flame-4.avif",
  },
  {
    id: "bushido-1",
    slug: "bushido-tee",
    name: "BUSHIDO TEE",
    view: "FRONT",
    tag: "LIMITED",
    image: "/Bushido-1.avif",
  },
  {
    id: "bushido-2",
    slug: "bushido-tee",
    name: "BUSHIDO TEE",
    view: "BACK",
    tag: "LIMITED",
    image: "/Bushido-2.avif",
  },
  {
    id: "bushido-5",
    slug: "bushido-tee",
    name: "BUSHIDO TEE",
    view: "ON MODEL",
    tag: "LIMITED",
    image: "/Bushido-5.avif",
  },
  {
    id: "demon-blood-2",
    slug: "demon-blood-tee",
    name: "DEMON BLOOD TEE",
    view: "BACK",
    tag: "SALE",
    image: "/Demon-blood-2.avif",
  },
  {
    id: "demon-blood-4",
    slug: "demon-blood-tee",
    name: "DEMON BLOOD TEE",
    view: "ON MODEL",
    tag: "SALE",
    image: "/Demon-blood-4.avif",
  },
  {
    id: "demon-blood-5",
    slug: "demon-blood-tee",
    name: "DEMON BLOOD TEE",
    view: "ON MODEL",
    tag: "SALE",
    image: "/Demon-blood-5.avif",
  },
  {
    id: "domain-expansion-2",
    slug: "domain-expansion-tee",
    name: "DOMAIN EXPANSION TEE",
    view: "BACK",
    tag: "THE_ORIGIN_DROP",
    image: "/Domain-expansion-2.avif",
  },
  {
    id: "domain-expansion-5",
    slug: "domain-expansion-tee",
    name: "DOMAIN EXPANSION TEE",
    view: "ON MODEL",
    tag: "THE_ORIGIN_DROP",
    image: "/Domain-expansion-5.avif",
  },
  {
    id: "free-soul-2",
    slug: "free-soul-tee",
    name: "FREE SOUL TEE",
    view: "BACK",
    tag: "LIMITED",
    image: "/Free-soul-2.avif",
  },
  {
    id: "free-soul-5",
    slug: "free-soul-tee",
    name: "FREE SOUL TEE",
    view: "ON MODEL",
    tag: "LIMITED",
    image: "/Free-soul-5.avif",
  },
  {
    id: "limitless-1",
    slug: "limitless-tee",
    name: "LIMITLESS TEE",
    view: "FRONT",
    tag: "LIMITED",
    image: "/Limitless-1.avif",
  },
  {
    id: "paradise-spirit-2",
    slug: "paradise-spirit-tee",
    name: "PARADISE SPIRIT TEE",
    view: "BACK",
    tag: "THE_ORIGIN_DROP",
    image: "/Paradise-spirit-2.avif",
  },
  {
    id: "warrior-spirit-1",
    slug: "warrior-spirit-tee",
    name: "WARRIOR SPIRIT TEE",
    view: "FRONT",
    tag: "SALE",
    image: "/Warrior-spirit-1.avif",
  },
  {
    id: "warrior-spirit-5",
    slug: "warrior-spirit-tee",
    name: "WARRIOR SPIRIT TEE",
    view: "ON MODEL",
    tag: "SALE",
    image: "/Warrior-spirit-5.avif",
  },
  {
    id: "water-breathing-5",
    slug: "water-breathing-tee",
    name: "WATER BREATHING TEE",
    view: "ON MODEL",
    tag: "NEW_ARRIVAL",
    image: "/Water-breathing-5.avif",
  },
  {
    id: "will-of-the-sun-1",
    slug: "will-of-the-sun-tee",
    name: "WILL OF THE SUN TEE",
    view: "FRONT",
    tag: "SALE",
    image: "/Will-of-the-sun-1.avif",
  },
  {
    id: "will-of-the-sun-2",
    slug: "will-of-the-sun-tee",
    name: "WILL OF THE SUN TEE",
    view: "BACK",
    tag: "SALE",
    image: "/Will-of-the-sun-2.avif",
  },
  {
    id: "will-of-the-sun-4",
    slug: "will-of-the-sun-tee",
    name: "WILL OF THE SUN TEE",
    view: "ON MODEL",
    tag: "SALE",
    image: "/Will-of-the-sun-4.avif",
  },
  {
    id: "will-of-the-sun-5",
    slug: "will-of-the-sun-tee",
    name: "WILL OF THE SUN TEE",
    view: "ON MODEL",
    tag: "SALE",
    image: "/Will-of-the-sun-5.avif",
  },
  {
    id: "lookbook-street-1",
    slug: "blue-flame-tee",
    name: "BLUE FLAME TEE",
    view: "ON MODEL",
    tag: "EDITORIAL",
    image: "/lookbook-1.jpg",
  },
  {
    id: "lookbook-street-2",
    slug: "bushido-tee",
    name: "BUSHIDO TEE",
    view: "ON MODEL",
    tag: "EDITORIAL",
    image: "/lookbook-2.jpg",
  },
  {
    id: "lookbook-street-3",
    slug: "warrior-spirit-tee",
    name: "WARRIOR SPIRIT TEE",
    view: "ON MODEL",
    tag: "EDITORIAL",
    image: "/lookbook-3.jpg",
  },
];

type FilterType = "ALL" | "FRONT" | "BACK" | "ON MODEL";

export default function LookbookGallery() {
  const [filter, setFilter] = useState<FilterType>("ALL");
  const [cols, setCols] = useState<2 | 3 | 4>(3);

  const filteredItems = useMemo(() => {
    if (filter === "ALL") return LOOKBOOK_ITEMS;
    return LOOKBOOK_ITEMS.filter((item) => item.view === filter);
  }, [filter]);

  return (
    <div className="space-y-8">
      {/* Filter & View Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {(["ALL", "FRONT", "BACK", "ON MODEL"] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`label-xs px-4 py-2 border transition-colors cursor-pointer ${
                filter === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-ink border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Column Layout Selector */}
        <div className="hidden sm:flex items-center gap-1">
          <span className="label-xs text-muted-foreground mr-2">COLUMNS:</span>
          {([2, 3, 4] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCols(c)}
              className={`label-xs h-8 w-8 border flex items-center justify-center transition-colors cursor-pointer ${
                cols === c
                  ? "bg-foreground text-background border-foreground font-bold"
                  : "bg-ink border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
              }`}
              aria-label={`${c} columns`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div
        className={`gap-4 space-y-4 ${
          cols === 2
            ? "columns-1 sm:columns-2"
            : cols === 3
            ? "columns-1 sm:columns-2 lg:columns-3"
            : "columns-1 sm:columns-2 md:columns-3 lg:columns-4"
        }`}
      >
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid overflow-hidden border border-border bg-ink transition-all group"
          >
            <Link
              href={`/drop/${item.slug}`}
              className="relative block w-full overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative w-full overflow-hidden bg-zinc-900">
                <Image
                  src={item.image}
                  alt={`ZENJI ${item.name} - ${item.view}`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Tag Badge */}
              {item.tag && (
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className="label-xs px-2 py-1 text-[9px] font-bold tracking-widest text-white shadow-md"
                    style={{
                      background:
                        item.tag === "SALE"
                          ? "#BC0100"
                          : item.tag === "NEW_ARRIVAL"
                          ? "#10b981"
                          : item.tag === "LIMITED"
                          ? "#c0392b"
                          : "#18181b",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
              )}

              {/* View Badge */}
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="label-xs bg-black/80 px-2 py-1 text-[9px] text-zinc-300 border border-white/20">
                  {item.view}
                </span>
              </div>

              {/* Hover Details Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 translate-y-2 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="label-xs text-primary block text-[10px] tracking-widest">
                  COLLECTION // THE_ORIGIN_DROP
                </span>
                <p className="display mt-1 text-lg sm:text-xl font-bold uppercase text-white truncate group-hover:text-primary transition-colors">
                  {item.name}
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2">
                  <span className="label-xs text-xs text-white tracking-widest flex items-center gap-1 font-bold group-hover:text-primary transition-colors">
                    VIEW PRODUCT →
                  </span>
                  <span className="label-xs text-[10px] text-zinc-400">
                    {item.view}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
