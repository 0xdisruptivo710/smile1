import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { alopecias } from "@/content/capilar";

/**
 * Seção educativa — Alopecias e Alterações Capilares. Conteúdo do PDF
 * (pg 6-8) apresentado em quatro blocos: não cicatriciais, cicatriciais,
 * alterações do couro cabeludo e outras regiões (barba/sobrancelhas).
 */
export function Alopecias() {
  return (
    <section
      id="alopecias"
      className="relative overflow-hidden bg-paper-warm py-20 sm:py-28"
    >
      <Container className="relative">
        <SectionHeader numero={alopecias.numero} label={alopecias.label} />

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-ink"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {alopecias.titulo}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p className="text-ink-soft" style={{ fontSize: "var(--text-lede)" }}>
              {alopecias.intro}
            </p>
          </Reveal>
        </div>

        {/* Não cicatriciais + Cicatriciais lado a lado */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <article className="h-full rounded-[var(--radius-soft)] border border-line bg-paper p-7 sm:p-9">
              <span className="eyebrow">{alopecias.naoCicatriciais.titulo}</span>
              <p
                className="mt-3 text-ink-soft"
                style={{ fontSize: "var(--text-body)" }}
              >
                {alopecias.naoCicatriciais.descricao}
              </p>
              <ul className="mt-5 border-t border-line">
                {alopecias.naoCicatriciais.itens.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line py-2.5 text-ink-soft"
                    style={{ fontSize: "var(--text-body)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="flex h-full flex-col rounded-[var(--radius-soft)] border border-line bg-paper p-7 sm:p-9">
              <span className="eyebrow">{alopecias.cicatriciais.titulo}</span>
              <p
                className="mt-3 text-ink-soft"
                style={{ fontSize: "var(--text-body)" }}
              >
                {alopecias.cicatriciais.descricao}
              </p>
              <p
                className="mt-auto border-t border-line pt-4 text-ink-soft"
                style={{ fontSize: "var(--text-body-sm)" }}
              >
                {alopecias.cicatriciais.nota}
              </p>
            </article>
          </Reveal>
        </div>

        {/* Alterações do scalp */}
        <Reveal className="mt-10" delay={0.05}>
          <article className="rounded-[var(--radius-soft)] border-l-2 border-pine bg-paper p-7 sm:p-9">
            <span className="eyebrow">{alopecias.scalp.titulo}</span>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {alopecias.scalp.itens.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-2 text-ink-soft"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  <span className="font-mono text-[length:var(--text-body-sm)] text-pine">
                    ◆
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        {/* Outras regiões */}
        <Reveal className="mt-10 grid gap-x-12 gap-y-6 lg:grid-cols-12" delay={0.05}>
          <div className="lg:col-span-5">
            <span className="eyebrow">{alopecias.outras.titulo}</span>
            <p
              className="mt-3 text-ink-soft"
              style={{ fontSize: "var(--text-body)" }}
            >
              {alopecias.outras.descricao}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {alopecias.outras.regioes.map((r) => (
                <li
                  key={r}
                  className="rounded-full border border-pine/40 bg-paper px-4 py-1.5 font-mono text-[length:var(--text-body-sm)] text-ink"
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <span className="eyebrow">{alopecias.outras.protocolosTitulo}</span>
            <ul className="mt-5 border-t border-line">
              {alopecias.outras.protocolos.map((item) => (
                <li
                  key={item}
                  className="border-b border-line py-3 text-ink-soft"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
