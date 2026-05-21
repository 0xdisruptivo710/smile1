import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { seguranca } from "@/content/capilar";

/**
 * Segurança V2 — paper-deep cream com fundamentos em pílulas e aviso
 * legal em card destacado. Versão menos sombria que a V1.
 */
export function SegurancaV2() {
  return (
    <section
      id="seguranca"
      className="relative overflow-hidden bg-paper-deep py-16 sm:py-20"
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
            <ul className="mt-6 flex flex-wrap gap-2">
              {seguranca.fundamentos.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-champagne px-4 py-1.5 font-mono text-[length:var(--text-body-sm)] text-graphite"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.12}>
            <aside className="rounded-[var(--radius-soft)] border-l-2 border-pine bg-paper p-6 shadow-[0_18px_50px_-30px_rgba(20,64,80,0.4)] sm:p-8">
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
