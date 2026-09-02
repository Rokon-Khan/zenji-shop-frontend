import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import { money, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add, setOpen } = useCart();
  const onSale = Boolean(product.compareAt);

  return (
    <article className="group border border-border bg-card">
      <Link
        to="/drop/$slug"
        params={{ slug: product.slug }}
        className="relative block overflow-hidden"
      >
        {onSale && (
          <span className="label-xs absolute top-4 -left-8 z-10 w-32 rotate-[-45deg] bg-primary py-1 text-center font-bold text-primary-foreground">
            Sale
          </span>
        )}
        <img
          src={product.image}
          alt={`${product.name} — ${product.colorway}`}
          loading="lazy"
          width={900}
          height={1100}
          className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="label-xs absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 py-3 text-center font-bold transition-transform duration-300 group-hover:translate-y-0">
          Quick view →
        </span>
      </Link>

      <div className="space-y-2 p-3">
        <Link to="/drop/$slug" params={{ slug: product.slug }} className="display block text-sm">
          {product.name}
        </Link>
        <div className="flex items-baseline gap-2">
          {onSale && (
            <span className="text-xs text-muted-foreground line-through">
              {money(product.compareAt!)}
            </span>
          )}
          <span
            className={`display text-lg ${onSale ? "text-primary" : "text-foreground"}`}
          >
            {money(product.price)}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => toast.success(`${product.name} saved to wishlist`)}
            className="label-xs flex items-center justify-center gap-1 border border-border py-2 hover:border-primary hover:text-primary"
          >
            <Heart className="h-3 w-3" /> Wishlist
          </button>
          <button
            onClick={() => {
              const size = product.sizes.find((s) => !product.soldOutSizes.includes(s)) ?? "M";
              add({
                slug: product.slug,
                name: product.name,
                size,
                price: product.price,
                image: product.image,
                qty: 1,
              });
              setOpen(true);
            }}
            className="label-xs bg-paper py-2 font-bold text-paper-foreground hover:bg-primary hover:text-primary-foreground"
          >
            Add to cart →
          </button>
        </div>
      </div>
    </article>
  );
}
