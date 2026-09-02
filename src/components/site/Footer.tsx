import Link from "next/link";

const FOUR_COLUMNS = [
  {
    title: "DROPS",
    links: [
      { label: "Home", to: "/" },
      { label: "Drop", to: "/drop" },
      { label: "Collection", to: "/collection" },
    ],
  },
  {
    title: "EXPLORE",
    links: [
      { label: "Lookbook", to: "/lookbook" },
      { label: "Our Story", to: "/our-story" },
      { label: "Collection", to: "/collection" },
    ],
  },
  {
    title: "COMMUNITY",
    links: [
      { label: "TikTok", to: "https://www.tiktok.com/@zenji_.shop", external: true },
      { label: "Instagram", to: "https://www.instagram.com/zenji_.shop", external: true },
      { label: "Facebook", to: "https://www.facebook.com/people/ZENJI/61592433253702/", external: true },
    ],
  },
  {
    title: "CONTACT",
    links: [
      { label: "FAQ", to: "/faq" },
      { label: "Review", to: "/review" },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms", to: "/terms" },
      { label: "Help", to: "/faq" },
      { label: "Return Policy", to: "/faq" },
      { label: "Contact Us", to: "/faq" },
    ],
  },
] as const;

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.38 0 .74.07 1.07.2v-3.53a6.34 6.34 0 0 0-1.07-.09A6.33 6.33 0 0 0 3 15.67 6.33 6.33 0 0 0 9.33 22a6.33 6.33 0 0 0 6.33-6.33V8.89a8.28 8.28 0 0 0 3.93 1.09V6.69z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-ink">
      <div className="relative mx-auto max-w-[1600px] px-4 py-14 sm:px-6 md:py-20 z-10">
        {/* Main Grid: Left info / socials, Right 4 navigation columns */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          {/* Left brand area */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img
                src="/ZENJI-logo-mono.png"
                alt="ZENJI mark"
                width={64}
                height={56}
                loading="lazy"
                className="h-10 w-auto invert"
              />
            </Link>
            <p className="max-w-sm text-xs leading-relaxed text-muted-foreground font-mono">
              Wear the Arc. Anime-inspired streetwear for gamers and otaku. Every drop limited. No
              restocks. Ever.
            </p>

            <div className="pt-2">
              <p className="label-xs text-xs text-muted-foreground tracking-[0.25em]">
                FOLLOW THE LORE
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5 max-w-md">
                <a
                  href="https://www.tiktok.com/@zenji_.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 min-w-[100px] items-center justify-center gap-2 bg-white px-4 py-2.5 text-xs font-bold text-black transition-opacity hover:opacity-90"
                >
                  <TikTokIcon className="h-4 w-4" /> TikTok
                </a>
                <a
                  href="https://www.instagram.com/zenji_.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 min-w-[100px] items-center justify-center gap-2 bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] px-4 py-2.5 text-xs font-bold text-white transition-opacity hover:opacity-90"
                >
                  <InstagramIcon className="h-4 w-4" /> Instagram
                </a>
                <a
                  href="https://www.facebook.com/people/ZENJI/61592433253702/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 min-w-[100px] items-center justify-center gap-2 bg-[#1877F2] px-4 py-2.5 text-xs font-bold text-white transition-opacity hover:opacity-90"
                >
                  <FacebookIcon className="h-4 w-4" /> Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Right Navigation 4 Columns with Central Watermark */}
          <div className="relative">
            {/* Responsive Centered Background ZENJI Watermark */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
            >
              <span
                className="display text-[26vw] sm:text-[22vw] lg:text-[14vw] font-black uppercase tracking-tight text-white/[0.07] sm:text-white/[0.05]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ZENJI
              </span>
            </div>

            {/* 4 Navigation Columns (2x2 on Mobile, 4 Cols on Desktop) */}
            <div className="relative z-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-6">
              {FOUR_COLUMNS.map((col) => (
                <div key={col.title}>
                  <p className="label-xs text-xs font-bold tracking-[0.25em] text-muted-foreground">
                    {col.title}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        {"external" in l && l.external ? (
                          <a
                            href={l.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs sm:text-sm font-mono text-zinc-300 hover:text-white hover:underline transition-colors"
                          >
                            {l.label}
                          </a>
                        ) : (
                          <Link
                            href={l.to}
                            className="text-xs sm:text-sm font-mono text-zinc-300 hover:text-white hover:underline transition-colors"
                          >
                            {l.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer copyright and info */}
      <div className="relative border-t border-border/70 bg-black/40 px-4 py-6 sm:px-6 z-10">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="label-xs text-[11px] text-muted-foreground">
            © 2026 ZENJI. All drops are final. No restocks. Ever.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/privacy-policy"
              className="label-xs text-[11px] text-muted-foreground hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="label-xs text-[11px] text-muted-foreground hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy-policy#cookies"
              className="label-xs text-[11px] text-muted-foreground hover:text-white transition-colors"
            >
              Cookies
            </Link>
            <span className="label-xs text-[11px] text-muted-foreground hidden sm:inline">
              <span className="text-primary">●</span> Anime-inspired. Gamer-built. Community-owned.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
