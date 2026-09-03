"use client";

import { useCart } from "@/lib/cart";
import { useWishlist } from "@/lib/wishlist";
import { ChevronDown, Heart, Menu, ShoppingCart, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Marquee } from "./Marquee";

const NAV = [
  { label: "DROP", to: "/drop" },
  { label: "COLLECTION", to: "/collection" },
  { label: "LOOKBOOK", to: "/lookbook" },
  { label: "OUR STORY", to: "/our-story" },
] as const;

const MORE = [
  { label: "FAQ", to: "/faq" },
  { label: "REVIEW", to: "/review" },
  { label: "LOGIN", to: "/login" },
] as const;

export function Header() {
  const [mobile, setMobile] = useState(false);
  const [more, setMore] = useState(false);
  const { count: cartCount, setOpen } = useCart();
  const { count: wishlistCount } = useWishlist();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <Marquee />
      <div className="border-b border-border bg-ink">
        <div className="mx-auto grid h-16 max-w-[1600px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6">
          <Link href="/" className="flex min-w-0 items-center">
            <Image
              src="/ZENJI-logo.png"
              alt="ZENJI"
              className="h-6 w-auto shrink-0 invert sm:h-7"
              width={200}
              height={48}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center justify-center gap-8 lg:flex">
            {NAV.map((n) => {
              const active = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  href={n.to}
                  className={`nav-link-glow label-xs font-bold transition-colors ${
                    active ? "text-primary" : "text-foreground hover:text-white"
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
              <button className="nav-link-glow label-xs flex items-center gap-1 font-bold text-foreground hover:text-white cursor-pointer py-1">
                MORE <ChevronDown className="h-3 w-3" />
              </button>
              {more && (
                <div className="absolute left-1/2 w-40 -translate-x-1/2 border border-border bg-card p-2 shadow-xl z-50">
                  {MORE.map((m) => (
                    <Link
                      key={m.to}
                      href={m.to}
                      className="nav-link-glow label-xs block w-full text-left px-3 py-2.5 hover:bg-accent hover:text-white"
                    >
                      {m.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center justify-end gap-3 sm:gap-4">
            <div className="hidden items-center border border-border md:flex">
              <input
                placeholder="SEARCH..."
                aria-label="Search products"
                className="label-xs w-36 bg-transparent px-3 py-2 outline-none placeholder:text-muted-foreground focus:w-48 transition-all"
              />
            </div>

            {/* Wishlist Heart Icon */}
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="nav-link-glow relative text-foreground transition-colors hover:text-primary cursor-pointer p-1.5"
            >
              <Heart
                className={`h-5 w-5 ${
                  wishlistCount > 0
                    ? "fill-primary text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Icon */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open cart"
              className="nav-link-glow relative text-foreground transition-colors hover:text-primary cursor-pointer p-1.5"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Account Icon */}
            <Link
              href="/login"
              aria-label="Account"
              className="nav-link-glow hover:text-primary transition-colors p-1.5"
            >
              <User className="h-5 w-5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobile((v) => !v)}
              aria-label="Toggle menu"
              className="lg:hidden cursor-pointer p-1.5"
            >
              {mobile ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobile && (
          <nav className="border-t border-border bg-ink px-4 py-4 lg:hidden space-y-1">
            {[
              ...NAV,
              ...MORE,
              { label: `WISHLIST (${wishlistCount})`, to: "/wishlist" },
            ].map((n) => (
              <Link
                key={n.to}
                href={n.to}
                onClick={() => setMobile(false)}
                className="nav-link-glow display block w-full text-left border-b border-border/50 py-3 text-lg tracking-wider hover:text-white"
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
