"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type WishlistCtx = {
  items: string[];
  add: (slug: string) => void;
  remove: (slug: string) => void;
  toggle: (slug: string) => void;
  has: (slug: string) => boolean;
  count: number;
};

const Ctx = createContext<WishlistCtx | null>(null);
const KEY = "zenji_wishlist_v1";

// Default initial items if no previous wishlist exists in localStorage
const DEFAULT_INITIAL_WISHLIST: string[] = [
  "paradise-spirit-tee",
  "warrior-spirit-tee",
  "bushido-tee",
];

let listeners: Array<() => void> = [];

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

let cachedRaw: string | null = null;
let cachedItems: string[] = DEFAULT_INITIAL_WISHLIST;

function getWishlistSnapshot(): string[] {
  if (typeof window === "undefined") return DEFAULT_INITIAL_WISHLIST;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw === null) {
      // First time initialization
      localStorage.setItem(KEY, JSON.stringify(DEFAULT_INITIAL_WISHLIST));
      cachedRaw = JSON.stringify(DEFAULT_INITIAL_WISHLIST);
      cachedItems = DEFAULT_INITIAL_WISHLIST;
      return cachedItems;
    }
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      cachedItems = JSON.parse(raw);
    }
    return cachedItems;
  } catch {
    return DEFAULT_INITIAL_WISHLIST;
  }
}

const SERVER_SNAPSHOT: string[] = DEFAULT_INITIAL_WISHLIST;

function getServerSnapshot(): string[] {
  return SERVER_SNAPSHOT;
}

function saveWishlist(items: string[]) {
  try {
    const raw = JSON.stringify(items);
    cachedRaw = raw;
    cachedItems = items;
    localStorage.setItem(KEY, raw);
    emitChange();
  } catch {
    /* ignore */
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(
    subscribe,
    getWishlistSnapshot,
    getServerSnapshot
  );

  const value = useMemo<WishlistCtx>(
    () => ({
      items,
      add: (slug) => {
        if (!items.includes(slug)) {
          saveWishlist([...items, slug]);
        }
      },
      remove: (slug) => {
        saveWishlist(items.filter((s) => s !== slug));
      },
      toggle: (slug) => {
        if (items.includes(slug)) {
          saveWishlist(items.filter((s) => s !== slug));
        } else {
          saveWishlist([...items, slug]);
        }
      },
      has: (slug) => items.includes(slug),
      count: items.length,
    }),
    [items]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useWishlist() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useWishlist must be used inside WishlistProvider");
  return ctx;
}
