import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Music2 } from "lucide-react";
import mono from "@/assets/zenji-mono.png.asset.json";

const COLUMNS = [
  {
    title: "Drops",
    links: [
      { label: "Home", to: "/" },
      { label: "Drop", to: "/drop" },
      { label: "Collection", to: "/collection" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Lookbook", to: "/lookbook" },
      { label: "Our Story", to: "/our-story" },
      { label: "Collection", to: "/collection" },
    ],
  },
] as const;

const CONTACT = [
  { label: "FAQ", to: "/faq" },
  { label: "Review", to: "/review" },
  { label: "Login", to: "/login" },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-ink">
      <span
        aria-hidden
        className="display pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 text-[22vw] leading-[0.8] text-foreground/[0.04] select-none"
      >
        ZENJI
      </span>
      <div className="relative mx-auto grid max-w-[1600px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img
            src={mono.url}
            alt="ZENJI mark"
            width={64}
            height={56}
            loading="lazy"
            className="h-10 w-auto invert"
          />
          <p className="mt-5 max-w-xs text-xs leading-relaxed text-muted-foreground">
            Wear the Arc. Anime-inspired streetwear for gamers and otaku. Every drop limited. No
            restocks. Ever.
          </p>
          <p className="label-xs mt-6 text-muted-foreground">Follow the lore</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href="https://tiktok.com"
              className="flex items-center gap-2 bg-paper px-4 py-2 text-xs font-bold text-paper-foreground"
            >
              <Music2 className="h-4 w-4" /> TikTok
            </a>
            <a
              href="https://instagram.com"
              className="flex items-center gap-2 bg-[linear-gradient(90deg,oklch(0.7_0.18_50),oklch(0.55_0.25_340))] px-4 py-2 text-xs font-bold text-primary-foreground"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a
              href="https://facebook.com"
              className="flex items-center gap-2 bg-[oklch(0.55_0.2_260)] px-4 py-2 text-xs font-bold text-primary-foreground"
            >
              <Facebook className="h-4 w-4" /> Facebook
            </a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="label-xs text-muted-foreground">{col.title}</p>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="label-xs text-muted-foreground">Contact</p>
          <ul className="mt-5 space-y-3">
            {CONTACT.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="text-sm text-muted-foreground">support@zenji.shop</li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[1600px] flex-col gap-3 border-t border-border px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="label-xs text-muted-foreground">
          © 2026 ZENJI. All drops are final. No restocks. Ever.
        </p>
        <p className="label-xs text-muted-foreground">
          <span className="text-primary">●</span> Anime-inspired. Gamer-built. Community-owned.
        </p>
      </div>
    </footer>
  );
}
