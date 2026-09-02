import Link from "next/link";

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
      <span
        aria-hidden
        className="display pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 text-[22vw] leading-[0.8] text-foreground/[0.04] select-none"
      >
        ZENJI
      </span>
      <div className="relative mx-auto grid max-w-[1600px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img
            src="/ZENJI-logo-mono.png"
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
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-paper px-4 py-2 text-xs font-bold text-paper-foreground transition-opacity hover:opacity-90"
            >
              <TikTokIcon className="h-4 w-4" /> TikTok
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[linear-gradient(90deg,oklch(0.7_0.18_50),oklch(0.55_0.25_340))] px-4 py-2 text-xs font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <InstagramIcon className="h-4 w-4" /> Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[oklch(0.55_0.2_260)] px-4 py-2 text-xs font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <FacebookIcon className="h-4 w-4" /> Facebook
            </a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="label-xs text-muted-foreground">{col.title}</p>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.to} className="text-sm hover:text-primary transition-colors">
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
                <Link href={l.to} className="text-sm hover:text-primary transition-colors">
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
