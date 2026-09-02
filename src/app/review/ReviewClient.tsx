"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { toast } from "sonner";

const INITIAL_REVIEWS = [
  {
    name: "Kai T.",
    piece: "Domain Expansion Tee",
    stars: 5,
    body: "Heaviest tee I own. The print hasn't cracked after 20 washes and the boxy cut sits perfectly.",
  },
  {
    name: "Mira S.",
    piece: "Water Breathing Tee",
    stars: 5,
    body: "Bought it for the artwork, kept wearing it for the fabric. Feels like a jacket weight.",
  },
  {
    name: "Dan R.",
    piece: "Blue Flame Tee",
    stars: 4,
    body: "Sizing runs oversized as promised — sized down to M and it's exactly right.",
  },
  {
    name: "Aya N.",
    piece: "Bushido Tee",
    stars: 5,
    body: "Shipped from Melbourne in two days. Packaging alone felt like opening a collector's item.",
  },
  {
    name: "Leo P.",
    piece: "Will of the Sun Tee",
    stars: 5,
    body: "Original artwork you can't find anywhere else. Got asked about it three times in one day.",
  },
  {
    name: "Zoe C.",
    piece: "Warrior Spirit Tee",
    stars: 4,
    body: "Wish they restocked, but honestly the no-restock rule is why it feels special.",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < n ? "fill-primary text-primary" : "text-muted-foreground"}`}
        />
      ))}
    </div>
  );
}

export function ReviewClient() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [name, setName] = useState("");
  const [piece, setPiece] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !piece || !body) return;

    setReviews([
      {
        name,
        piece,
        stars: 5,
        body,
      },
      ...reviews,
    ]);
    toast.success("Review submitted — thanks for repping the arc");
    setName("");
    setPiece("");
    setBody("");
  };

  return (
    <>
      <section className="border-b border-border bg-ink px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-[1600px]">
          <p className="label-xs text-primary">{"Verified_Wearers // 4.8_Avg"}</p>
          <h1 className="display mt-3 text-4xl leading-[0.88] sm:text-6xl">Reviews</h1>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            No paid placements. Just people who bought a piece and wore it out.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, idx) => (
            <article key={`${r.name}-${idx}`} className="border border-border bg-card p-6">
              <Stars n={r.stars} />
              <p className="mt-4 text-sm text-muted-foreground">&quot;{r.body}&quot;</p>
              <p className="display mt-6 text-sm">{r.name}</p>
              <p className="label-xs mt-1 text-primary">{r.piece}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-ink px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-xl">
          <h2 className="display text-3xl sm:text-4xl">Leave_a_Review</h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="rname" className="label-xs text-muted-foreground">
                Name
              </label>
              <input
                id="rname"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="rpiece" className="label-xs text-muted-foreground">
                Piece
              </label>
              <input
                id="rpiece"
                required
                placeholder="Which tee?"
                value={piece}
                onChange={(e) => setPiece(e.target.value)}
                className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="rbody" className="label-xs text-muted-foreground">
                Your review
              </label>
              <textarea
                id="rbody"
                required
                rows={4}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="mt-2 w-full resize-none border border-border bg-transparent p-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="display w-full bg-primary py-4 text-sm tracking-widest text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
            >
              Submit review →
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
