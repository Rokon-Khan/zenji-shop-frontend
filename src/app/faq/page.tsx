import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What does 'no restocks' actually mean?",
    a: "Each drop is printed once in a fixed run. When a size sells out, it's gone permanently — we don't reprint past arcs.",
  },
  {
    q: "How do ZENJI tees fit?",
    a: "Oversized boxy cut on 240gsm combed cotton, garment washed. Our model is 183cm in a size L. Size down for a regular fit.",
  },
  {
    q: "Where do you ship from and how long does it take?",
    a: "All orders dispatch from Melbourne within 2 business days. Metro Australia lands in 2-4 days, regional 4-7. Free shipping over A$100.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes — New Zealand, UK, US, Canada and most of the EU. International delivery typically takes 7-14 business days.",
  },
  {
    q: "What's your returns policy?",
    a: "30 days on unworn pieces with tags attached. Start a return from your account and we'll email a label. Sale pieces are exchange only.",
  },
  {
    q: "Is the artwork licensed?",
    a: "No. Every graphic is drawn in-house by the ZENJI studio — original interpretations, never licensed characters or traced art.",
  },
  {
    q: "How do I care for the print?",
    a: "Cold wash inside out, hang dry, no ironing directly on the print. Done right, the screenprint outlives the trend cycle.",
  },
  {
    q: "When is the next drop?",
    a: "Drops are announced by email first. Join the list or create an account for 24-hour early access.",
  },
];

export const metadata: Metadata = {
  title: "FAQ — Shipping, Sizing & Returns | ZENJI",
  description:
    "Answers on ZENJI sizing, heavyweight cotton care, Australian shipping times, returns and the no-restock drop policy.",
  openGraph: {
    title: "ZENJI FAQ",
    description: "Sizing, shipping, returns and the no-restock policy explained.",
  },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="border-b border-border bg-ink px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-[1600px]">
          <p className="label-xs text-primary">{"Support_Index // Read_First"}</p>
          <h1 className="display mt-3 text-4xl leading-[0.88] sm:text-6xl">FAQ</h1>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            Sizing, shipping, returns and why we never restock.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Accordion type="single" collapsible className="border-t border-border">
          {FAQS.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-border">
              <AccordionTrigger className="display text-left text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 border border-border bg-ink p-8 text-center">
          <h2 className="display text-2xl sm:text-3xl">Still_Stuck?</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Email support@zenji.store — we answer within one business day.
          </p>
          <Link
            href="/collection"
            className="label-xs mt-6 inline-block bg-primary px-8 py-4 font-bold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Browse the collection →
          </Link>
        </div>
      </section>
    </>
  );
}
