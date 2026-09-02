"use client";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { money } from "@/lib/products";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FREE_SHIPPING_THRESHOLD = 150;
const SHIPPING_COST = 9.99;

export function CartDrawer() {
  const { lines, open, setOpen, remove, updateQty, total, count } = useCart();

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - total);
  const progressPct = Math.min(100, (total / FREE_SHIPPING_THRESHOLD) * 100);
  const isFreeShipping = total >= FREE_SHIPPING_THRESHOLD;
  const shipping = isFreeShipping ? 0 : SHIPPING_COST;
  const grandTotal = total + shipping;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="flex flex-col p-0 border-0 shadow-2xl"
        style={{
          width: "min(420px, 100vw)",
          background: "#0a0a0a",
          color: "#fff",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b pr-12"
          style={{ borderColor: "#1f1f1f" }}
        >
          <div className="flex items-center gap-3">
            <SheetTitle
              className="display text-xl tracking-widest text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              YOUR CART
            </SheetTitle>
            {count > 0 && (
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold"
                style={{ background: "#c0392b", color: "#fff" }}
              >
                {count}
              </span>
            )}
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {lines.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 px-6 text-center">
              <p className="label-xs text-zinc-500">Your cart is empty.</p>
              <p className="text-xs text-zinc-600">
                Nothing here yet — go claim a piece before it&apos;s gone.
              </p>
            </div>
          ) : (
            <ul className="divide-y" style={{ borderColor: "#1a1a1a" }}>
              {lines.map((l) => {
                const isOnSale = !!l.compareAt;
                return (
                  <li
                    key={`${l.slug}-${l.size}`}
                    className="flex gap-4 px-5 py-4"
                  >
                    {/* Product image */}
                    <div
                      className="shrink-0 overflow-hidden"
                      style={{ width: 64, height: 64, background: "#1a1a1a" }}
                    >
                      <Image
                        width={64}
                        height={64}
                        src={l.image}
                        alt={l.name}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p
                          className="display text-sm uppercase tracking-wide text-white leading-tight"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {l.name}
                        </p>
                        <button
                          onClick={() => remove(l.slug, l.size)}
                          aria-label={`Remove ${l.name}`}
                          className="shrink-0 transition-opacity hover:opacity-60 cursor-pointer"
                        >
                          <X className="h-4 w-4 text-zinc-400" />
                        </button>
                      </div>

                      <p className="label-xs text-zinc-500 tracking-widest">
                        SIZE {l.size}
                      </p>

                      {isOnSale && (
                        <span
                          className="w-fit px-1.5 py-0.5 text-[9px] font-bold tracking-widest"
                          style={{ background: "#c0392b", color: "#fff" }}
                        >
                          LIVE
                        </span>
                      )}

                      {/* Qty controls + price */}
                      <div className="flex items-center justify-between mt-1">
                        <div
                          className="flex items-center border"
                          style={{ borderColor: "#2a2a2a" }}
                        >
                          <button
                            onClick={() => updateQty(l.slug, l.size, -1)}
                            aria-label="Decrease quantity"
                            className="flex h-7 w-7 items-center justify-center text-sm text-zinc-300 hover:bg-zinc-800 transition-colors cursor-pointer"
                          >
                            -
                          </button>
                          <span
                            className="flex h-7 w-8 items-center justify-center text-sm text-white border-x"
                            style={{ borderColor: "#2a2a2a" }}
                          >
                            {l.qty}
                          </span>
                          <button
                            onClick={() => updateQty(l.slug, l.size, 1)}
                            aria-label="Increase quantity"
                            className="flex h-7 w-7 items-center justify-center text-sm text-zinc-300 hover:bg-zinc-800 transition-colors cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          {l.compareAt && (
                            <span className="text-xs line-through text-zinc-500">
                              {money(l.compareAt * l.qty)}
                            </span>
                          )}
                          <span className="text-sm font-bold text-white">
                            {money(l.price * l.qty)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div
            className="border-t px-5 pb-5 pt-4 space-y-4"
            style={{ borderColor: "#1f1f1f" }}
          >
            {/* Free shipping progress */}
            <div className="space-y-1.5">
              {isFreeShipping ? (
                <p className="label-xs text-[#c0392b] tracking-widest">
                  🎉 You&apos;ve unlocked free shipping!
                </p>
              ) : (
                <p className="label-xs text-zinc-400 tracking-widest">
                  {money(remaining)} away from free shipping
                </p>
              )}
              <div
                className="h-0.5 w-full overflow-hidden"
                style={{ background: "#1f1f1f" }}
              >
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${progressPct}%`,
                    background: "#c0392b",
                  }}
                />
              </div>
            </div>

            {/* Subtotal / Shipping */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="label-xs text-zinc-400 tracking-widest">
                  SUBTOTAL
                </span>
                <span className="text-sm text-white">{money(total)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="label-xs text-zinc-400 tracking-widest">
                  SHIPPING
                </span>
                <span className="text-sm text-white">
                  {isFreeShipping ? "FREE" : money(SHIPPING_COST)}
                </span>
              </div>
            </div>

            {/* Total */}
            <div
              className="flex items-center justify-between border-t pt-3"
              style={{ borderColor: "#1f1f1f" }}
            >
              <span
                className="display text-sm tracking-widest text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                TOTAL
              </span>
              <span
                className="display text-xl font-bold"
                style={{ color: "#c0392b", fontFamily: "var(--font-display)" }}
              >
                {money(grandTotal)}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2">
              <Link
                href="/checkout"
                onClick={() => setOpen(false)}
                className="display flex w-full items-center justify-center py-3.5 text-sm tracking-widest font-bold transition-opacity hover:opacity-90"
                style={{
                  background: "#c0392b",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                }}
              >
                CHECKOUT →
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="display flex w-full items-center justify-center border py-3.5 text-sm tracking-widest font-bold transition-colors hover:bg-white hover:text-black cursor-pointer"
                style={{
                  borderColor: "#fff",
                  color: "#fff",
                  background: "transparent",
                  fontFamily: "var(--font-display)",
                }}
              >
                CONTINUE SHOPPING
              </button>
            </div>

            <p className="label-xs text-center text-zinc-600 tracking-widest">
              GST included · All drops are final
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
