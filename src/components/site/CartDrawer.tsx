import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { money } from "@/lib/products";

export function CartDrawer() {
  const { lines, open, setOpen, remove, total } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="flex w-full flex-col border-border bg-ink sm:max-w-md">
        <SheetHeader className="border-b border-border">
          <SheetTitle className="display text-2xl tracking-tight">Your Cart</SheetTitle>
          <p className="label-xs text-muted-foreground">
            {lines.length === 0 ? "Empty — for now" : "All drops are final"}
          </p>
        </SheetHeader>

        <div className="flex-1 space-y-4 overflow-y-auto px-4">
          {lines.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Nothing here yet. Go claim a piece before it's gone.
            </p>
          )}
          {lines.map((l) => (
            <div key={`${l.slug}-${l.size}`} className="flex gap-3 border-b border-border pb-4">
              <img
                src={l.image}
                alt={l.name}
                loading="lazy"
                className="h-24 w-20 shrink-0 object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="display truncate text-sm">{l.name}</p>
                <p className="label-xs mt-1 text-muted-foreground">
                  Size {l.size} · Qty {l.qty}
                </p>
                <p className="mt-2 text-sm font-bold">{money(l.price * l.qty)}</p>
              </div>
              <button
                onClick={() => remove(l.slug, l.size)}
                aria-label={`Remove ${l.name}`}
                className="h-fit shrink-0 text-muted-foreground transition-colors hover:text-primary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="space-y-3 border-t border-border p-4">
          <div className="flex items-center justify-between">
            <span className="label-xs text-muted-foreground">Subtotal</span>
            <span className="display text-xl">{money(total)}</span>
          </div>
          <button
            disabled={lines.length === 0}
            className="display w-full bg-primary py-3 text-sm tracking-widest text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            Checkout →
          </button>
          <Link
            to="/collection"
            onClick={() => setOpen(false)}
            className="label-xs block text-center text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Continue shopping
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
