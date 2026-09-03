<div align="center">

# ⚡ ZENJI

### *Anime-Inspired Streetwear — Wear the Arc.*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-zenji--shop--frontend.vercel.app-000000?style=for-the-badge&logoColor=white)](https://zenji-shop-frontend.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.3.3-000000?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

</div>

---

## 📖 About

**ZENJI** is a premium anime-inspired streetwear brand built for gamers and otaku. This is the full storefront frontend — a dark, cinematic, and performance-first e-commerce experience built with **Next.js 16** and **React 19**.

Every drop is limited. No restocks. Ever.

> *"Wear the Arc. Every piece tells a story from the anime universe — heavyweight cotton, oversized cut, screenprinted in the spirit of the blade."*

---

## ✨ Features

| Feature | Description |
|---|---|
| 🛒 **Slide-out Cart** | Persistent cart drawer with real-time quantity management, powered by `localStorage` |
| ❤️ **Wishlist** | Session-free wishlist that resets on new visits — save pieces across page navigations |
| 🎌 **Product Catalog** | 10 limited-edition drops with gallery, sizing, sale tags, and colorways |
| 📦 **Product Detail Pages** | Rich PDPs with image gallery, size selector, quantity control, accordion specs |
| 🖼️ **Lookbook** | Immersive full-screen lookbook gallery with lightbox-style navigation |
| 🌀 **Scroll Stack Animation** | Custom scroll-stacking homepage hero sections for cinematic storytelling |
| 💬 **First Visit Popup** | Anime-themed welcome modal for new visitors |
| 🔍 **Collection Filtering** | Filter drops by tags (Sale, New Arrival, Limited) |
| 📋 **Review Page** | Community reviews and ratings section |
| 🌐 **Our Story Page** | Brand origin and manifesto |
| 📜 **FAQ & Legal Pages** | Full FAQ, Privacy Policy, Terms of Service, and Return Policy |
| 🏁 **Checkout Page** | Multi-step checkout UI with order summary |
| 💻 **Custom Katana Cursor** | Unique cursor experience with a katana on hover across all interactive elements |
| 📱 **Fully Responsive** | Mobile-first design, optimised across all breakpoints |
| 🚀 **Static Generation** | All product and content pages are SSG via `generateStaticParams` |
| 🔔 **Toast Notifications** | Elegant Sonner toast system for cart and wishlist actions |

---

## 🛠️ Tech Stack

### Core
| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.3.3 | App framework with App Router & SSG |
| [React](https://react.dev) | 19.2.8 | UI library |
| [TypeScript](https://typescriptlang.org) | 5.x | Type safety |

### Styling
| Technology | Version | Purpose |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Utility-first styling |
| [tw-animate-css](https://github.com/jamiebuilds/tailwindcss-animate) | 1.4.0 | Animation utilities |
| [Oswald](https://fonts.google.com/specimen/Oswald) | — | Display / heading font (Google Fonts) |
| [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | — | Monospace body font (Google Fonts) |

### UI Components
| Technology | Version | Purpose |
|---|---|---|
| [Radix UI](https://radix-ui.com) | Various | Accessible headless components |
| [shadcn/ui](https://ui.shadcn.com) | 4.19.1 | Component system built on Radix |
| [Lucide React](https://lucide.dev) | 1.38.0 | Icon set |
| [Sonner](https://sonner.emilkowal.ski) | 2.0.8 | Toast notifications |
| [Embla Carousel](https://www.embla-carousel.com) | 8.6.0 | Product image carousels |
| [Vaul](https://vaul.emilkowal.ski) | 1.1.2 | Slide-out drawer (Cart) |
| [Lenis](https://lenis.darkroom.engineering) | 1.3.26 | Smooth scroll |

### Forms & Validation
| Technology | Version | Purpose |
|---|---|---|
| [React Hook Form](https://react-hook-form.com) | 7.87.0 | Form state management |
| [Zod](https://zod.dev) | 4.5.4 | Schema validation |

### State Management
> Pure React Context + `useSyncExternalStore` + `localStorage` — zero external state libraries.

---

## 📁 Project Structure

```
zenji-shop-frontend/
├── public/                     # Static assets (images, katana cursor, fonts)
│   ├── cursor-katana-135.png   # Custom katana cursor
│   ├── ZENJI-logo.png
│   ├── hero.mp4
│   └── *.avif / *.jpg          # Product & lookbook images
│
└── src/
    ├── app/                    # Next.js App Router pages
    │   ├── page.tsx            # Homepage (scroll stack hero)
    │   ├── layout.tsx          # Root layout (providers, fonts, metadata)
    │   ├── globals.css         # Global styles, design tokens, cursor rules
    │   ├── collection/         # Full collection grid with filters
    │   ├── drop/[slug]/        # Dynamic product detail pages (SSG)
    │   ├── lookbook/           # Lookbook gallery page
    │   ├── our-story/          # Brand story page
    │   ├── review/             # Customer reviews page
    │   ├── wishlist/           # Wishlist page
    │   ├── checkout/           # Checkout flow
    │   ├── login/              # Login page
    │   └── faq/                # FAQ / Help / Legal pages
    │
    ├── components/
    │   ├── site/               # Site-wide layout components
    │   │   ├── Header.tsx      # Sticky header, mobile nav, cart & wishlist icons
    │   │   ├── Footer.tsx      # Footer with ZENJI watermark, social links, nav
    │   │   ├── CartDrawer.tsx  # Slide-out cart with line items
    │   │   ├── ProductCard.tsx # Product card for grids
    │   │   ├── LookbookGallery.tsx
    │   │   ├── Marquee.tsx     # Scrolling promo marquee bar
    │   │   └── FirstVisitPopup.tsx
    │   ├── HomeScrollStack.tsx # Homepage stacked scroll animation
    │   └── ui/                 # shadcn/ui primitive components
    │
    └── lib/
        ├── cart.tsx            # Cart context + localStorage persistence
        ├── wishlist.tsx        # Wishlist context + localStorage persistence
        ├── products.ts         # Product data, types, and helpers
        └── utils.ts            # Tailwind merge utility (cn)
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `>= 18.x` — [Download](https://nodejs.org)
- **pnpm** `>= 9.x` — Recommended package manager

```bash
# Install pnpm globally if you don't have it
npm install -g pnpm
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/zenji-shop-frontend.git

# 2. Navigate to the project directory
cd zenji-shop-frontend/zenji-shop-frontend

# 3. Install dependencies
pnpm install
```

### Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app hot-reloads automatically on file changes.

### Build for Production

```bash
# Create an optimised production build
pnpm build

# Start the production server locally
pnpm start
```

### Linting

```bash
pnpm lint
```

---

## 🌍 Deployment

This project is deployed on **Vercel** via Git integration with zero configuration.

**Live URL:** [https://zenji-shop-frontend.vercel.app](https://zenji-shop-frontend.vercel.app)

To deploy your own instance:

1. Fork or clone this repo
2. Import the project into [Vercel](https://vercel.com/new)
3. Set the **Root Directory** to `zenji-shop-frontend` (if using the monorepo wrapper)
4. Vercel auto-detects Next.js — click **Deploy**

---

## 🎨 Design System

ZENJI uses a custom dark design system built on CSS custom properties:

| Token | Value | Usage |
|---|---|---|
| `--background` | `oklch(0.11 ...)` | Void black canvas |
| `--primary` | `oklch(0.55 0.235 27.5)` | Blood red accent |
| `--foreground` | `oklch(0.98 ...)` | Paper white text |
| `--ink` | `oklch(0.08 ...)` | Deepest black (header/footer) |
| `--font-display` | Oswald | Headers, all-caps display text |
| `--font-mono` | JetBrains Mono | Body, labels, UI copy |

---

## 📦 Available Pages

| Route | Page |
|---|---|
| `/` | Homepage — Scroll stack hero, featured drops |
| `/collection` | Full product collection with tag filters |
| `/drop` | Latest drop landing |
| `/drop/[slug]` | Product detail page (dynamic, SSG) |
| `/lookbook` | Lookbook gallery |
| `/our-story` | Brand story & manifesto |
| `/review` | Community reviews |
| `/wishlist` | Saved wishlist items |
| `/checkout` | Checkout flow |
| `/login` | Account login |
| `/faq` | FAQ, Help, Returns, Privacy, Terms |

---

## 🤝 Socials

| Platform | Link |
|---|---|
| TikTok | [@zenji_.shop](https://www.tiktok.com/@zenji_.shop) |
| Instagram | [@zenji_.shop](https://www.instagram.com/zenji_.shop) |
| Facebook | [ZENJI](https://www.facebook.com/people/ZENJI/61592433253702/) |

---

## 📄 License

This project is proprietary. All rights reserved © 2026 ZENJI.

> *All drops are final. No restocks. Ever.*

---

<div align="center">

**Built with 🗡️ by the Md Rokonuzzaman.**

*Anime-inspired. Gamer-built. Community-owned.*

</div>
