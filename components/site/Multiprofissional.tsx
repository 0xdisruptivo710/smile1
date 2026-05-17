import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { multiprofissional } from "@/content/capilar";

export function Multiprofissional() {
  return (
    <section
      id="multiprofissional"
      className="sci-grid bg-paper-warm py-20 sm:py-28"
    >
      <Container>
        <SectionHeader
          numero={multiprofissional.numero}
          label={multiprofissional.label}
        />

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-ink"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {multiprofissional.titulo}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p className="text-ink-soft" style={{ fontSize: "var(--text-lede)" }}>
              {multiprofissional.texto}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-soft)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {multiprofissional.areas.map((area, i) => (
            <Reveal key={area.nome} delay={(i % 3) * 0.07}>
              <article className="flex h-full flex-col gap-1.5 bg-paper p-6 transition-colors duration-300 hover:bg-pine-wash sm:p-7">
                <span className="font-mono text-[length:var(--text-body-sm)] text-pine">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="font-display font-normal tracking-[-0.01em] text-ink"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  {area.nome}
                </h3>
                <p
                  className="text-ink-soft"
                  style={{ fontSize: "var(--text-body-sm)" }}
                >
                  {area.nota}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
