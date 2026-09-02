import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, money, products } from "@/lib/products";
import { ProductDetailClient } from "./ProductDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Piece Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = `${product.name} — ${product.colorway}`;
  const description = `${product.name} in ${product.colorway}. ${money(product.price)}. 240gsm heavyweight cotton, oversized fit, limited run.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ZENJI`,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return <ProductDetailClient product={product} related={related} />;
}
