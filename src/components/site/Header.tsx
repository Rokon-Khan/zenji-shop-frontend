"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, ShoppingCart, User, X } from "lucide-react";
import { Marquee } from "./Marquee";
import { useCart } from "@/lib/cart";

const NAV = [
  { label: "Drop", to: "/drop" },
  { label: "Collection", to: "/collection" },
  { label: "Lookbook", to: "/lookbook" },
  { label: "Our Story", to: "/our-story" },
] as const;

const MORE = [
  { label: "FAQ", to: "/faq" },
  { label: "Review", to: "/review" },
  { label: "Login", to: "/login" },
] as const;

export function Header() {
  const [mobile, setMobile] = useState(false);
  const [more, setMore] = useState(false);
  const { count, setOpen } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <Marquee />
      <div className="border-b border-border bg-ink">
        <div className="mx-auto grid h-16 max-w-[1600px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6">
          <Link href="/" className="flex min-w-0 items-center">
            <img
              src="/ZENJI-logo.png"
              alt="ZENJI"
              className="h-6 w-auto shrink-0 invert sm:h-7"
              width={200}
              height={48}
            />
          </Link>

          <nav className="hidden items-center justify-center gap-7 lg:flex">
            {NAV.map((n) => {
              const active = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  href={n.to}
                  className={`label-xs font-bold transition-colors ${
                    active ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
            <div
              className="relative"
              onMouseEnter={() => setMore(true)}
              onMouseLeave={() => setMore(false)}
            >
              <button className="label-xs flex items-center gap-1 font-bold text-foreground hover:text-primary">
                More <ChevronDown className="h-3 w-3" />
              </button>
              {more && (
                <div className="absolute left-1/2 w-40 -translate-x-1/2 border border-border bg-card p-2 shadow-lg">
                  {MORE.map((m) => (
                    <Link
                      key={m.to}
                      href={m.to}
                      className="label-xs block px-3 py-2 hover:bg-accent hover:text-primary"
                    >
                      {m.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center justify-end gap-3">
            <div className="hidden items-center border border-border md:flex">
              <input
                placeholder="SEARCH..."
                aria-label="Search products"
                className="label-xs w-40 bg-transparent px-3 py-2 outline-none placeholder:text-muted-foreground focus:w-56"
              />
            </div>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open cart"
              className="relative text-foreground transition-colors hover:text-primary cursor-pointer"
            >
              <ShoppingCart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 min-w-4 items-center justify-center bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                  {count}
                </span>
              )}
            </button>
            <Link href="/login" aria-label="Account" className="hover:text-primary">
              <User className="h-5 w-5" />
            </Link>
            <button
              onClick={() => setMobile((v) => !v)}
              aria-label="Toggle menu"
              className="lg:hidden cursor-pointer"
            >
              {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobile && (
          <nav className="border-t border-border bg-ink px-4 py-4 lg:hidden">
            {[...NAV, ...MORE].map((n) => (
              <Link
                key={n.to}
                href={n.to}
                onClick={() => setMobile(false)}
                className="display block border-b border-border py-3 text-lg tracking-wide hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
