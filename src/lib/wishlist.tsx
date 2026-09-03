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
const KEY = "zenji_wishlist_v2";

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
let cachedItems: string[] = [];

function getWishlistSnapshot(): string[] {
  if (typeof window === "undefined") return [];
  try {
    // Clear old legacy key with hardcoded demo items
    if (localStorage.getItem("zenji_wishlist_v1")) {
      localStorage.removeItem("zenji_wishlist_v1");
    }
    const raw = localStorage.getItem(KEY);
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      cachedItems = raw ? JSON.parse(raw) : [];
    }
    return cachedItems;
  } catch {
    return [];
  }
}

const SERVER_SNAPSHOT: string[] = [];

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
