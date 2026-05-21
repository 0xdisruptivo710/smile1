import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { seguranca } from "@/content/capilar";

/**
 * Segurança, ética e responsabilidade — bloco institucional conforme PDF
 * (pg 12). 6 fundamentos + aviso legal de variação individual de resposta.
 */
export function Seguranca() {
  return (
    <section
      id="seguranca"
      className="relative overflow-hidden bg-paper py-16 sm:py-20"
    >
      <Container>
        <SectionHeader numero={seguranca.numero} label={seguranca.label} />

        <div className="mt-10 grid gap-x-12 gap-y-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.05] tracking-[-0.02em] text-ink"
              style={{ fontSize: "var(--text-h3)" }}
            >
              {seguranca.titulo}
            </h2>
            <ul className="mt-6 grid gap-2">
              {seguranca.fundamentos.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 text-ink-soft"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  <span className="font-mono text-[length:var(--text-body-sm)] text-pine">
                    ◆
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.12}>
            <aside className="rounded-[var(--radius-soft)] border-l-2 border-pine bg-paper-warm p-6 sm:p-8">
              <span className="eyebrow">{seguranca.avisoTitulo}</span>
              <p
                className="mt-4 max-w-[72ch] text-ink-soft"
                style={{ fontSize: "var(--text-body)" }}
              >
                {seguranca.aviso}
              </p>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
