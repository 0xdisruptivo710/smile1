import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { equipe } from "@/content/capilar";

function iniciais(nome: string) {
  return nome
    .replace(/^(Dr|Dra)\.?\s+/i, "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export function Equipe() {
  return (
    <section id="equipe" className="py-20 sm:py-28">
      <Container>
        <SectionHeader numero={equipe.numero} label={equipe.label} />

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-ink"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {equipe.titulo}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p className="text-ink-soft" style={{ fontSize: "var(--text-lede)" }}>
              {equipe.texto}
            </p>
          </Reveal>
        </div>

        <div
          className={
            equipe.pessoas.length > 1
              ? "mt-14 grid gap-5 sm:grid-cols-2"
              : "mt-14 grid gap-5 sm:mx-auto sm:max-w-2xl"
          }
        >
          {equipe.pessoas.map((pessoa, i) => (
            <Reveal key={pessoa.nome} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-[var(--radius-soft)] border border-line bg-paper-warm p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_18px_40px_-24px_oklch(0.248_0.018_58/0.45)] sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-soft)] bg-champagne font-display font-normal text-graphite">
                    <span style={{ fontSize: "var(--text-h3)" }}>
                      {iniciais(pessoa.nome)}
                    </span>
                  </span>
                  <span className="flex flex-col">
                    <span className="eyebrow">{pessoa.papel}</span>
                    <span
                      className="mt-1 font-display font-normal tracking-[-0.01em] text-ink"
                      style={{ fontSize: "var(--text-h3)" }}
                    >
                      {pessoa.nome}
                    </span>
                  </span>
                </div>
                <p
                  className="mt-5 text-ink-soft"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  {pessoa.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
