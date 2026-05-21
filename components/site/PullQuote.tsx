import { Container } from "./Container";

interface PullQuoteProps {
  text: string;
  /** Variante de cor — claro (paper) ou escuro (ink). Default: claro. */
  tone?: "light" | "dark" | "gold";
}

/**
 * Pull-quote editorial — frase distribuída do briefing usada como divisor
 * conceitual entre seções. Tipografia grande, centralizada, em cor de marca.
 */
export function PullQuote({ text, tone = "light" }: PullQuoteProps) {
  const bg =
    tone === "dark"
      ? "bg-ink"
      : tone === "gold"
        ? "bg-champagne"
        : "bg-paper-warm";
  const fg =
    tone === "dark"
      ? "text-paper"
      : tone === "gold"
        ? "text-ink"
        : "text-ink";
  const accent =
    tone === "dark"
      ? "text-champagne"
      : tone === "gold"
        ? "text-ink/65"
        : "text-pine";

  return (
    <section className={`relative overflow-hidden ${bg} py-16 sm:py-20`}>
      <Container>
        <div className="mx-auto max-w-[64ch] text-center">
          <span
            aria-hidden
            className={`font-display font-normal italic leading-none ${accent}`}
            style={{ fontSize: "var(--text-h2)" }}
          >
            “
          </span>
          <p
            className={`font-display font-normal italic leading-[1.1] tracking-[-0.015em] ${fg}`}
            style={{ fontSize: "var(--text-h2)" }}
          >
            {text}
          </p>
        </div>
      </Container>
    </section>
  );
}
