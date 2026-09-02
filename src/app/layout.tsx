import type { Metadata } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { CartProvider } from "@/lib/cart";
import { Toaster } from "@/components/ui/sonner";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zenji.shop"),
  title: {
    default: "ZENJI — Anime Streetwear Australia",
    template: "%s | ZENJI",
  },
  description:
    "ZENJI: limited-edition anime-inspired graphic tees. Heavyweight cotton, oversized fit, no restocks.",
  authors: [{ name: "ZENJI" }],
  openGraph: {
    title: "ZENJI — Anime Streetwear Australia",
    description: "Limited-edition anime-inspired streetwear. Wear the Arc.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased dark",
        oswald.variable,
        jetbrainsMono.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-mono">
        <CartProvider>
          <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CartDrawer />
          <Toaster position="bottom-right" />
        </CartProvider>
      </body>
    </html>
  );
}
