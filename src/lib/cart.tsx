"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type CartLine = {
  slug: string;
  name: string;
  size: string;
  price: number;
  image: string;
  qty: number;
};

type CartCtx = {
  lines: CartLine[];
  add: (line: CartLine) => void;
  remove: (slug: string, size: string) => void;
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "zenji_cart_v1";

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
let cachedLines: CartLine[] = [];

function getCartSnapshot(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      cachedLines = raw ? JSON.parse(raw) : [];
    }
    return cachedLines;
  } catch {
    return [];
  }
}

const SERVER_SNAPSHOT: CartLine[] = [];

function getServerSnapshot(): CartLine[] {
  return SERVER_SNAPSHOT;
}

function saveCart(lines: CartLine[]) {
  try {
    const raw = JSON.stringify(lines);
    cachedRaw = raw;
    cachedLines = lines;
    localStorage.setItem(KEY, raw);
    emitChange();
  } catch {
    /* ignore */
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const lines = useSyncExternalStore(subscribe, getCartSnapshot, getServerSnapshot);
  const [open, setOpen] = useState(false);

  const value = useMemo<CartCtx>(
    () => ({
      lines,
      open,
      setOpen,
      add: (line) => {
        const i = lines.findIndex((l) => l.slug === line.slug && l.size === line.size);
        if (i === -1) {
          saveCart([...lines, line]);
        } else {
          const next = [...lines];
          next[i] = { ...next[i], qty: next[i].qty + line.qty };
          saveCart(next);
        }
      },
      remove: (slug, size) => {
        saveCart(lines.filter((l) => !(l.slug === slug && l.size === size)));
      },
      count: lines.reduce((a, l) => a + l.qty, 0),
      total: lines.reduce((a, l) => a + l.qty * l.price, 0),
    }),
    [lines, open],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
