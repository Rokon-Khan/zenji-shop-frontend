"use client";

import { ScrollStackItem } from "@/components/ScrollStack";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

// Dynamically import ScrollStack (uses useLayoutEffect — client only)
const ScrollStack = dynamic(() => import("@/components/ScrollStack"), {
  ssr: false,
});

const CARDS = [
  {
    id: "demon-blood",
    name: "DEMON BLOOD TEE",
    image: "/Demon-blood-4.avif",
    href: "/drop/demon-blood-tee",
  },
  {
    id: "blue-flame",
    name: "BLUE FLAME TEE",
    image: "/Blue-flame-4.avif",
    href: "/drop/blue-flame-tee",
  },
  {
    id: "will-of-the-sun",
    name: "WILL OF THE SUN TEE",
    image: "/Will-of-the-sun-4.avif",
    href: "/drop/will-of-the-sun-tee",
  },
  {
    id: "warrior-spirit",
    name: "WARRIOR SPIRIT TEE",
    image: "/Warrior-spirit-5.avif",
    href: "/drop/warrior-spirit-tee",
  },
];

export default function HomeScrollStack() {
  return (
    <section
      id="drop-showcase"
      className="bg-paper py-16 text-paper-foreground"
    >
      {/* Drop showcase header */}
      <div className="mx-auto max-w-[1600px] px-6 py-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span
              className="label-xs block text-xs tracking-widest"
              style={{ color: "#BC0100" }}
            >
              COLLECTION // THE_ORIGIN_DROP
            </span>
            <h2 className="display mt-2 text-4xl sm:text-6xl text-black font-bold uppercase leading-none tracking-tight">
              SALE
            </h2>
          </div>
          <Link
            href="/collection"
            className="label-xs shrink-0 whitespace-nowrap border border-paper-foreground/30 px-6 py-3 font-bold hover:bg-paper-foreground hover:text-paper transition-colors"
          >
            VIEW_ALL
          </Link>
        </div>
      </div>

      {/* Scroll Stack container — uses window scroll with no inner scrollbar */}
      <div className="overflow-hidden px-4 sm:px-8">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={40}
          itemScale={0.03}
          itemStackDistance={24}
          stackPosition="20%"
          scaleEndPosition="10%"
          baseScale={0.88}
          onStackComplete={() => {}}
        >
          {CARDS.map((card) => (
            <ScrollStackItem key={card.id}>
              <article
                className="relative mx-auto overflow-hidden bg-black max-w-full"
                style={{
                  height: "min(800px, 74vh)",
                  width: "1000px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "rgba(255,255,255,0.12)",
                  borderTopWidth: "4px",
                  borderTopColor: "#BC0100",
                }}
              >
                <Image
                  src={card.image}
                  alt={`ZENJI ${card.name} anime streetwear graphic`}
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="1000px"
                  priority={false}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 md:p-12"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
                  }}
                >
                  <span
                    className="label-xs block text-[10px] tracking-[0.3em]"
                    style={{ color: "#BC0100" }}
                  >
                    COLLECTION{" "}
                    <span className="text-white/45"> THE_ORIGIN_DROP </span>
                  </span>
                  <Link
                    href={card.href}
                    className="display mt-2 block text-3xl uppercase leading-none text-white transition-colors hover:text-[#BC0100] sm:text-4xl md:text-[40px]"
                  >
                    {card.name}
                  </Link>
                  <Link
                    href={card.href}
                    className="label-xs mt-5 inline-block w-fit border-b border-current pb-1 text-[11px] uppercase tracking-widest text-white transition-colors hover:border-[#BC0100] hover:text-[#BC0100]"
                  >
                    SHOP {card.name} →
                  </Link>
                </div>
              </article>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
