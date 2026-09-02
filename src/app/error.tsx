"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display text-3xl font-bold tracking-tight text-foreground">
          This page didn&apos;t load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => reset()}
            className="label-xs inline-flex items-center justify-center bg-primary px-6 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90 cursor-pointer"
          >
            Try again
          </button>
          <Link
            href="/"
            className="label-xs inline-flex items-center justify-center border border-border bg-background px-6 py-3 font-bold text-foreground transition-colors hover:bg-accent hover:text-primary"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
