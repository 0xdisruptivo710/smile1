import { Container } from "../Container";
import { Reveal } from "@/components/motion/Reveal";
import { paraQuem } from "@/content/capilar";

/**
 * Para quem V2 — bloco champagne sólido com sinais em grade,
 * cada sinal ganha número grande e divisória forte.
 */
export function ParaQuemV2() {
  return (
    <section
      id="para-quem"
      className="relative overflow-hidden bg-champagne py-20 sm:py-28"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(20,64,80,1) 1px, transparent 1.2px)",
          backgroundSize: "32px 32px",
        }}
      />
      <Container className="relative">
        <div className="flex items-center gap-4 sm:gap-6">
          <span
            className="font-display font-normal leading-none text-ink"
            style={{ fontSize: "var(--text-h3)" }}
          >
            {paraQuem.numero}
          </span>
          <span className="whitespace-nowrap font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.18em] text-ink">
            {paraQuem.label}
          </span>
          <span className="h-px flex-1 bg-ink/30" />
        </div>

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-ink"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {paraQuem.titulo}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p className="text-ink/82" style={{ fontSize: "var(--text-lede)" }}>
              {paraQuem.texto}
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-x-10 gap-y-0 border-t border-ink/25 sm:grid-cols-2">
          {paraQuem.sinais.map((sinal, i) => (
            <Reveal
              key={sinal}
              delay={i * 0.06}
              className="flex items-baseline gap-5 border-b border-ink/20 py-6"
            >
              <span
                className="font-display font-normal leading-none text-ink/45"
                style={{ fontSize: "var(--text-h2)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p
                className="font-display font-normal leading-[1.2] tracking-[-0.01em] text-ink"
                style={{ fontSize: "var(--text-h3)" }}
              >
                {sinal}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
