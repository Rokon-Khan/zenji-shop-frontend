const MESSAGES = [
  "FREE SHIPPING AUSTRALIA-WIDE ON ORDERS OVER A$150",
  "NEW DROP: BLUE FLAME TEE NOW AVAILABLE",
  "LIMITED STOCK",
  "THE_ORIGIN_DROP COLLECTION LIVE",
];

export function Marquee() {
  const strip = [...MESSAGES, ...MESSAGES, ...MESSAGES];
  return (
    <div className="overflow-hidden bg-primary text-primary-foreground">
      <div className="marquee-track py-1.5">
        {[0, 1].map((k) => (
          <span key={k} className="flex shrink-0 items-center">
            {strip.map((m, i) => (
              <span
                key={`${k}-${i}`}
                className="label-xs px-4 font-bold tracking-[0.2em] whitespace-nowrap"
              >
                {m} <span className="px-2 opacity-60">•</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
