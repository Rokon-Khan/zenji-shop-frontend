"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "sale", label: "Sale" },
  { key: "new_arrival", label: "New_Arrival" },
  { key: "limited", label: "Limited" },
  { key: "kimetsu", label: "Kimetsu" },
];

export function CollectionClient() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");

  const list = useMemo(
    () =>
      products.filter(
        (p) =>
          (filter === "all" || p.tags.includes(filter)) &&
          p.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [filter, query],
  );

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-ink px-4 py-16 sm:px-6">
        <span
          aria-hidden
          className="display pointer-events-none absolute -top-6 right-4 text-[9rem] leading-none text-foreground/5 select-none sm:text-[14rem]"
        >
          10
        </span>
        <div className="relative mx-auto max-w-[1600px]">
          <p className="label-xs text-primary">{"The_Origin_Drop // Catalog_Index"}</p>
          <h1 className="display mt-3 max-w-3xl text-4xl leading-[0.88] sm:text-6xl">
            Anime Graphic Tees — The Full Collection
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Every drop. Every arc. Documented.</p>
          <div className="label-xs mt-8 flex flex-wrap justify-between gap-4 border-t border-border pt-4 text-muted-foreground">
            <span>
              {`${products.length} pieces // THE_ORIGIN_DROP // EST_2024`}
            </span>
            <span>Australia-wide shipping</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div className="flex min-w-0 flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`label-xs border px-4 py-2 font-bold transition-colors cursor-pointer ${
                  filter === f.key
                    ? "border-paper bg-paper text-paper-foreground"
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH..."
              aria-label="Search the collection"
              className="label-xs w-full border border-border bg-transparent px-3 py-2 outline-none focus:border-primary md:w-56"
            />
            <span className="label-xs shrink-0 text-muted-foreground">{list.length} items</span>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        {list.length === 0 && (
          <p className="py-20 text-center text-sm text-muted-foreground">
            No pieces match. Try another arc.
          </p>
        )}
      </section>

      <section className="border-t border-border bg-ink py-16 text-center">
        <h2 className="display text-3xl sm:text-5xl">More Drops Coming</h2>
        <p className="label-xs mt-3 text-primary">{"Awakening // Awaiting"}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) {
              toast.success("You are on the early access list for the next arc");
              setEmail("");
            }
          }}
          className="mx-auto mt-8 flex max-w-md flex-col gap-2 px-4 sm:flex-row"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="ENTER_EMAIL //"
            aria-label="Email address"
            className="label-xs flex-1 border-b border-border bg-transparent px-2 py-3 outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="label-xs bg-primary px-6 py-3 font-bold text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
          >
            Notify Me
          </button>
        </form>
      </section>
    </>
  );
}
