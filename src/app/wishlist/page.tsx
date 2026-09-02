"use client";

import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { useWishlist } from "@/lib/wishlist";
import { useCart } from "@/lib/cart";
import { getProduct, money, products } from "@/lib/products";

export default function WishlistPage() {
  const { items, remove, count } = useWishlist();
  const { add, setOpen } = useCart();

  // Get full product data for each slug in the wishlist
  const savedProducts = items
    .map((slug) => getProduct(slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Banner */}
      <section className="border-b border-border bg-ink px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1600px] space-y-4">
          <span
            className="label-xs block text-xs tracking-[0.3em]"
            style={{ color: "#c0392b" }}
          >
            SAVED // THIS DEVICE
          </span>
          <h1
            className="display text-5xl tracking-tight sm:text-7xl lg:text-8xl text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            WISHLIST
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-400">
            Saved on this device only. Log in and these move to your account, so
            they follow you everywhere.
          </p>
          <div className="pt-2">
            <Link
              href="/login"
              className="label-xs inline-block border-b border-current pb-1 text-xs font-bold tracking-widest text-white transition-colors hover:text-primary hover:border-primary"
            >
              LOG IN TO KEEP THEM →
            </Link>
          </div>
        </div>
      </section>

      {/* Main Wishlist Content */}
      <main className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 md:py-16">
        {savedProducts.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
            <span
              className="label-xs text-xs tracking-widest"
              style={{ color: "#c0392b" }}
            >
              NO SAVED ITEMS
            </span>
            <h2
              className="display text-3xl sm:text-5xl text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              YOUR WISHLIST IS EMPTY
            </h2>
            <p className="max-w-md text-sm text-zinc-400">
              You haven&apos;t saved any pieces yet. Explore the current drop
              and claim your pieces before the arc closes.
            </p>
            <Link
              href="/drop"
              className="display inline-block bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 tracking-widest"
              style={{ fontFamily: "var(--font-display)" }}
            >
              EXPLORE THE DROP →
            </Link>
          </div>
        ) : (
          /* Saved Items Grid */
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="label-xs text-xs tracking-widest text-zinc-400">
                {count} SAVED
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {savedProducts.map((product) => {
                const onSale = Boolean(product.compareAt);
                return (
                  <article
                    key={product.slug}
                    className="flex flex-col border border-border bg-[#f7f5f2] text-black overflow-hidden shadow-sm transition-all hover:shadow-md"
                  >
                    {/* Product Image */}
                    <Link
                      href={`/drop/${product.slug}`}
                      className="group relative block aspect-[4/5] w-full overflow-hidden bg-[#e8e4e0]"
                    >
                      <Image
                        src={product.image}
                        alt={`${product.name} — ${product.colorway}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="p-4 space-y-2">
                      <Link
                        href={`/drop/${product.slug}`}
                        className="display block text-base font-bold uppercase tracking-wide hover:text-[#c0392b] transition-colors"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {product.name}
                      </Link>

                      <div className="flex flex-col">
                        {onSale && product.compareAt && (
                          <span className="text-xs text-zinc-500 line-through">
                            {money(product.compareAt)}
                          </span>
                        )}
                        <span
                          className={`display text-xl font-bold ${
                            onSale ? "text-[#c0392b]" : "text-black"
                          }`}
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {money(product.price)}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="mt-auto grid grid-cols-2 border-t border-black/10">
                      <button
                        onClick={() => {
                          remove(product.slug);
                          toast.info(`${product.name} removed from wishlist`);
                        }}
                        className="display flex items-center justify-center py-3 text-xs font-bold tracking-widest text-black bg-white hover:bg-zinc-100 transition-colors cursor-pointer border-r border-black/10"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        REMOVE
                      </button>
                      <button
                        onClick={() => {
                          const size =
                            product.sizes.find(
                              (s) => !product.soldOutSizes.includes(s)
                            ) ?? "M";
                          add({
                            slug: product.slug,
                            name: product.name,
                            size,
                            price: product.price,
                            compareAt: product.compareAt,
                            image: product.image,
                            qty: 1,
                          });
                          setOpen(true);
                          toast.success(`${product.name} added to cart!`);
                        }}
                        className="display flex items-center justify-center py-3 text-xs font-bold tracking-widest text-white bg-black hover:bg-zinc-800 transition-colors cursor-pointer"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
