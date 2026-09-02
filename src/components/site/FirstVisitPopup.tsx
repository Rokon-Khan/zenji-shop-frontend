"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

const OPTIONS = [
  "JUJUTSU KAISEN",
  "DEMON SLAYER",
  "ONE PIECE",
  "NARUTO",
  "DRAGON BALL",
  "OTHER",
];

const STORAGE_KEY = "zenji_popup_seen";

export function FirstVisitPopup() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem(STORAGE_KEY);
      if (seen) return;
    } catch {
      /* ignore */
    }

    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      /* ignore */
    }
  };

  const handleOptionClick = (option: string) => {
    handleClose();
    // Optional: could pass query param or navigate directly to lookbook
    router.push("/lookbook");
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome Offer"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
    >
      {/* Dark semi-transparent backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      {/* Modal Card */}
      <div
        className="relative z-10 w-full max-w-[460px] overflow-hidden border p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-300"
        style={{
          background: "#0c0c0c",
          borderColor: "rgba(255, 255, 255, 0.2)",
          color: "#ffffff",
        }}
      >
        {/* Top-Right Square Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close popup"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center border transition-colors hover:bg-white hover:text-black cursor-pointer"
          style={{
            borderColor: "rgba(255, 255, 255, 0.4)",
            color: "#ffffff",
          }}
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1 mt-2">
          <h2
            className="display text-3xl sm:text-4xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ZENJI
          </h2>
          <p
            className="display text-xl sm:text-2xl font-bold uppercase tracking-wide text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            FREE SHIPPING ON FIRST ORDER
          </p>
          <p className="label-xs text-xs tracking-[0.25em] text-zinc-400 pt-1">
            CHOOSE YOUR FIGHTER
          </p>
        </div>

        {/* Options Stack */}
        <div className="mt-6 space-y-2.5">
          {OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => handleOptionClick(opt)}
              className="display w-full border py-3 text-xs sm:text-sm tracking-[0.2em] font-bold uppercase transition-all hover:bg-white hover:text-black cursor-pointer"
              style={{
                borderColor: "rgba(255, 255, 255, 0.35)",
                background: "transparent",
                color: "#ffffff",
                fontFamily: "var(--font-mono)",
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
