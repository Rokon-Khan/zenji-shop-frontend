"use client";

import { ProductCard } from "@/components/site/ProductCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCart } from "@/lib/cart";
import { money, type Product } from "@/lib/products";
import { useWishlist } from "@/lib/wishlist";
import { Heart, Minus, Plus, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export function ProductDetailClient({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { add, setOpen } = useCart();
  const { toggle, has } = useWishlist();
  const isSaved = has(product.slug);
  const [size, setSize] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(0);
  const onSale = Boolean(product.compareAt);

  return (
    <>
      <section className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6">
        <nav className="label-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/drop" className="hover:text-primary transition-colors">
            Drop
          </Link>{" "}
          / <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div className="grid gap-3 sm:grid-cols-[80px_1fr]">
            <div className="order-2 flex gap-3 sm:order-1 sm:flex-col overflow-x-auto sm:overflow-visible">
              {product.gallery.map((g, i) => (
                <button
                  key={`${g}-${i}`}
                  onClick={() => setActive(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`w-20 shrink-0 border cursor-pointer transition-colors ${
                    active === i
                      ? "border-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Image
                    src={g}
                    alt=""
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
            <div className="relative order-1 border border-border sm:order-2">
              {onSale && (
                <span className="label-xs absolute top-4 left-4 z-10 bg-primary px-3 py-1 font-bold text-primary-foreground">
                  Sale
                </span>
              )}
              <Image
                src={product.gallery[active] ?? product.image}
                alt={`${product.name} — ${product.colorway}`}
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="label-xs text-primary">
              {`${product.sku} // ${product.colorway}`}
            </p>
            <h1 className="display mt-3 text-4xl leading-[0.9] sm:text-5xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-baseline gap-3">
              {onSale && (
                <span className="text-sm text-muted-foreground line-through">
                  {money(product.compareAt!)}
                </span>
              )}
              <span
                className={`display text-3xl ${onSale ? "text-primary" : ""}`}
              >
                {money(product.price)}
              </span>
            </div>

            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              {product.details[0]}
            </p>

            <div className="mt-8">
              <div className="label-xs flex items-center justify-between">
                <span className="font-bold">Select_Size</span>
                <span className="text-muted-foreground">Size guide</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((s) => {
                  const soldOut = product.soldOutSizes.includes(s);
                  return (
                    <button
                      key={s}
                      disabled={soldOut}
                      onClick={() => setSize(s)}
                      className={`label-xs min-w-14 border px-4 py-3 font-bold transition-colors cursor-pointer ${
                        size === s
                          ? "border-paper bg-paper text-paper-foreground"
                          : "border-border hover:border-primary hover:text-primary"
                      } ${soldOut ? "cursor-not-allowed text-muted-foreground line-through opacity-40" : ""}`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center border border-border">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="px-3 py-3 hover:text-primary transition-colors cursor-pointer"
                >
                  <Minus className="h-3 w-3" />
                </button>
                <span className="label-xs w-8 text-center font-bold">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="px-3 py-3 hover:text-primary transition-colors cursor-pointer"
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>
              <button
                onClick={() => {
                  if (!size) {
                    toast.error("Pick a size first");
                    return;
                  }
                  add({
                    slug: product.slug,
                    name: product.name,
                    size,
                    price: product.price,
                    image: product.image,
                    qty,
                  });
                  setOpen(true);
                }}
                className="display min-w-48 flex-1 bg-primary px-6 py-4 text-sm tracking-widest text-primary-foreground transition-opacity hover:opacity-90 cursor-pointer"
              >
                Add to cart →
              </button>
              <button
                onClick={() => {
                  toggle(product.slug);
                  if (isSaved) {
                    toast.info(`${product.name} removed from wishlist`);
                  } else {
                    toast.success(`${product.name} saved to wishlist`);
                  }
                }}
                aria-label="Add to wishlist"
                className={`border p-4 transition-colors cursor-pointer ${
                  isSaved
                    ? "border-primary text-primary"
                    : "border-border hover:border-primary hover:text-primary"
                }`}
              >
                <Heart className={`h-4 w-4 ${isSaved ? "fill-primary" : ""}`} />
              </button>
            </div>

            <p className="label-xs mt-4 flex items-center gap-2 text-muted-foreground">
              <Truck className="h-4 w-4" /> Free Australia-wide shipping over
              A$100
            </p>

            <Accordion
              type="single"
              collapsible
              className="mt-8 border-t border-border"
            >
              <AccordionItem value="details" className="border-border">
                <AccordionTrigger className="label-xs font-bold">
                  Product_Details
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {product.details.map((d) => (
                      <li key={d}>— {d}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="sizing" className="border-border">
                <AccordionTrigger className="label-xs font-bold">
                  Sizing_&_Fit
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Oversized boxy fit. Model is 183cm wearing size L. Size down
                  for a regular fit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-border">
                <AccordionTrigger className="label-xs font-bold">
                  Shipping_&_Returns
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Dispatched within 2 business days from Melbourne. 30-day
                  returns on unworn pieces with tags attached. Drops are limited
                  — no restocks once sold out.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="display text-3xl sm:text-4xl">You_May_Also_Like</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
