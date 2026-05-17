import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Check } from "./icons";
import { paraQuem } from "@/content/capilar";

export function ParaQuem() {
  return (
    <section
      id="quando-procurar"
      className="sci-grid bg-paper-warm py-20 sm:py-28"
    >
      <Container>
        <SectionHeader numero={paraQuem.numero} label={paraQuem.label} />

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
            <p className="text-ink-soft" style={{ fontSize: "var(--text-lede)" }}>
              {paraQuem.texto}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid border-t border-line-strong md:grid-cols-2">
          {paraQuem.sinais.map((sinal, i) => (
            <Reveal
              key={sinal}
              delay={(i % 2) * 0.07}
              className="flex items-start gap-3.5 border-b border-line py-6 md:[&:nth-child(even)]:border-l md:[&:nth-child(even)]:pl-8 md:[&:nth-child(odd)]:pr-8"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-champagne text-graphite">
                <Check className="h-3 w-3" />
              </span>
              <span className="text-ink" style={{ fontSize: "var(--text-body)" }}>
                {sinal}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
