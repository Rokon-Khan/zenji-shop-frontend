export type Product = {
  slug: string;
  name: string;
  colorway: string;
  price: number;
  compareAt?: number;
  image: string;
  gallery: string[];
  sku: string;
  tags: string[];
  sizes: string[];
  soldOutSizes: string[];
  details: string[];
};

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

export const products: Product[] = [
  {
    slug: "blue-flame-tee",
    name: "Blue Flame Tee",
    colorway: "Cobalt Blue",
    price: 33.99,
    compareAt: 39.99,
    image: "/tee-blue.jpg",
    gallery: ["/tee-blue.jpg", "/tee-purple.jpg", "/tee-cream.jpg"],
    sku: "ZNJ-BLF-001",
    tags: ["sale", "new_arrival"],
    sizes: SIZES,
    soldOutSizes: ["XS"],
    details: [
      "Burn cold. The flame that never asks permission.",
      "240gsm heavyweight cotton.",
      "Oversized fit. Garment washed.",
      "Anime graphic screenprint.",
    ],
  },
  {
    slug: "bushido-tee",
    name: "Bushido Tee",
    colorway: "Bone",
    price: 39.99,
    image: "/tee-cream.jpg",
    gallery: ["/tee-cream.jpg", "/tee-green.jpg", "/tee-blue.jpg"],
    sku: "ZNJ-BSD-002",
    tags: ["limited"],
    sizes: SIZES,
    soldOutSizes: ["XXL"],
    details: [
      "The way of the warrior, printed in ink.",
      "240gsm heavyweight cotton.",
      "Oversized fit. Garment washed.",
      "Japanese calligraphy screenprint.",
    ],
  },
  {
    slug: "demon-blood-tee",
    name: "Demon Blood Tee",
    colorway: "Sakura Pink",
    price: 33.99,
    compareAt: 39.99,
    image: "/tee-pink.jpg",
    gallery: ["/tee-pink.jpg", "/tee-purple.jpg", "/tee-yellow.jpg"],
    sku: "ZNJ-DMB-003",
    tags: ["sale", "kimetsu"],
    sizes: SIZES,
    soldOutSizes: [],
    details: [
      "Blood remembers. Petals fall the same way.",
      "240gsm heavyweight cotton.",
      "Oversized fit. Garment washed.",
      "Anime graphic screenprint.",
    ],
  },
  {
    slug: "domain-expansion-tee",
    name: "Domain Expansion Tee",
    colorway: "Void Purple",
    price: 39.99,
    image: "/tee-purple.jpg",
    gallery: ["/tee-purple.jpg", "/tee-blue.jpg", "/tee-green.jpg"],
    sku: "ZNJ-DOM-001",
    tags: ["new_arrival", "limited"],
    sizes: SIZES,
    soldOutSizes: ["XS", "XXL"],
    details: [
      "Infinite territory. The world bends to your technique.",
      "240gsm heavyweight cotton.",
      "Oversized fit. Garment washed.",
      "Anime graphic screenprint.",
    ],
  },
  {
    slug: "free-soul-tee",
    name: "Free Soul Tee",
    colorway: "Sand",
    price: 39.99,
    image: "/tee-cream.jpg",
    gallery: ["/tee-cream.jpg", "/tee-yellow.jpg", "/tee-pink.jpg"],
    sku: "ZNJ-FRS-004",
    tags: ["new_arrival"],
    sizes: SIZES,
    soldOutSizes: [],
    details: [
      "自由 — no master, no map.",
      "240gsm heavyweight cotton.",
      "Oversized fit. Garment washed.",
      "Anime graphic screenprint.",
    ],
  },
  {
    slug: "limitless-tee",
    name: "Limitless Tee",
    colorway: "Bone",
    price: 39.99,
    image: "/tee-cream.jpg",
    gallery: ["/tee-cream.jpg", "/tee-purple.jpg", "/tee-green.jpg"],
    sku: "ZNJ-LMT-005",
    tags: ["limited"],
    sizes: SIZES,
    soldOutSizes: ["S"],
    details: [
      "Infinity between you and everything else.",
      "240gsm heavyweight cotton.",
      "Oversized fit. Garment washed.",
      "Anime graphic screenprint.",
    ],
  },
  {
    slug: "paradise-spirit-tee",
    name: "Paradise Spirit Tee",
    colorway: "Olive",
    price: 39.99,
    image: "/tee-green.jpg",
    gallery: ["/tee-green.jpg", "/tee-cream.jpg", "/tee-blue.jpg"],
    sku: "ZNJ-PRS-006",
    tags: ["new_arrival"],
    sizes: SIZES,
    soldOutSizes: [],
    details: [
      "自由 — spirit of the island, cut loose.",
      "240gsm heavyweight cotton.",
      "Oversized fit. Garment washed.",
      "Anime graphic screenprint.",
    ],
  },
  {
    slug: "warrior-spirit-tee",
    name: "Warrior Spirit Tee",
    colorway: "Forest Green",
    price: 33.99,
    compareAt: 39.99,
    image: "/tee-green.jpg",
    gallery: ["/tee-green.jpg", "/tee-purple.jpg", "/tee-yellow.jpg"],
    sku: "ZNJ-WRS-007",
    tags: ["sale", "limited"],
    sizes: SIZES,
    soldOutSizes: ["XXL"],
    details: [
      "緑の呼吸. Breathe, then move.",
      "240gsm heavyweight cotton.",
      "Oversized fit. Garment washed.",
      "Anime graphic screenprint.",
    ],
  },
  {
    slug: "water-breathing-tee",
    name: "Water Breathing Tee",
    colorway: "Teal",
    price: 39.99,
    image: "/tee-blue.jpg",
    gallery: ["/tee-blue.jpg", "/tee-green.jpg", "/tee-cream.jpg"],
    sku: "ZNJ-WTB-008",
    tags: ["kimetsu"],
    sizes: SIZES,
    soldOutSizes: [],
    details: [
      "水の呼吸. Flow, never break.",
      "240gsm heavyweight cotton.",
      "Oversized fit. Garment washed.",
      "Anime graphic screenprint.",
    ],
  },
  {
    slug: "will-of-the-sun-tee",
    name: "Will of the Sun Tee",
    colorway: "Solar Yellow",
    price: 33.99,
    compareAt: 39.99,
    image: "/tee-yellow.jpg",
    gallery: ["/tee-yellow.jpg", "/tee-pink.jpg", "/tee-cream.jpg"],
    sku: "ZNJ-WOS-009",
    tags: ["sale", "new_arrival"],
    sizes: SIZES,
    soldOutSizes: ["XS"],
    details: [
      "太陽の意志. Keep burning until dawn.",
      "240gsm heavyweight cotton.",
      "Oversized fit. Garment washed.",
      "Anime graphic screenprint.",
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const money = (n: number) => `A$${n.toFixed(2)}`;
