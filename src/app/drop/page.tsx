import type { Metadata } from "next";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const metadata: Metadata = {
  title: "THE_ORIGIN_DROP — Shop ZENJI Anime Tees",
  description:
    "Shop THE_ORIGIN_DROP: limited-edition ZENJI anime graphic tees. Once an arc closes, it stays closed.",
  openGraph: {
    title: "THE_ORIGIN_DROP — ZENJI",
    description: "Limited-run anime graphic tees. No restocks.",
  },
};

export default function DropPage() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6">
      <p className="label-xs text-primary">{"Live_Now // Limited_Stock"}</p>
      <h1 className="display mt-3 text-4xl leading-[0.88] sm:text-6xl">The_Origin_Drop</h1>
      <p className="mt-4 max-w-xl text-sm text-muted-foreground">
        Ten pieces. One arc. Each design is ZENJI&apos;s own artwork — never licensed, never restocked.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
