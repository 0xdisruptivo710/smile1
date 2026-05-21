import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { alopecias } from "@/content/capilar";

/**
 * Alopecias V2 — bg champagne dourado vibrante. Cards petróleo internos
 * pra contraste forte. Quebra cadência clara/escura com cor saturada.
 */
export function AlopeciasV2() {
  return (
    <section
      id="alopecias"
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
            {alopecias.numero}
          </span>
          <span className="whitespace-nowrap font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.18em] text-ink">
            {alopecias.label}
          </span>
          <span className="h-px flex-1 bg-ink/30" />
        </div>

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
            <p className="text-ink/82" style={{ fontSize: "var(--text-lede)" }}>
              {alopecias.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <article className="h-full rounded-[var(--radius-soft)] border border-ink/15 bg-ink p-7 text-paper shadow-[0_18px_50px_-30px_rgba(0,0,0,0.5)] sm:p-9">
              <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
                {alopecias.naoCicatriciais.titulo}
              </span>
              <p
                className="mt-3 text-paper/82"
                style={{ fontSize: "var(--text-body)" }}
              >
                {alopecias.naoCicatriciais.descricao}
              </p>
              <ul className="mt-5 border-t border-paper/15">
                {alopecias.naoCicatriciais.itens.map((item) => (
                  <li
                    key={item}
                    className="border-b border-paper/10 py-2.5 text-paper/78"
                    style={{ fontSize: "var(--text-body)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="flex h-full flex-col rounded-[var(--radius-soft)] border border-ink/15 bg-graphite p-7 text-paper shadow-[0_18px_50px_-30px_rgba(0,0,0,0.5)] sm:p-9">
              <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
                {alopecias.cicatriciais.titulo}
              </span>
              <p
                className="mt-3 text-paper/82"
                style={{ fontSize: "var(--text-body)" }}
              >
                {alopecias.cicatriciais.descricao}
              </p>
              <p
                className="mt-auto border-t border-paper/15 pt-4 text-paper/72"
                style={{ fontSize: "var(--text-body-sm)" }}
              >
                {alopecias.cicatriciais.nota}
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-10" delay={0.05}>
          <article className="rounded-[var(--radius-soft)] border-l-2 border-ink bg-paper p-7 sm:p-9">
            <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-pine">
              {alopecias.scalp.titulo}
            </span>
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

        <Reveal className="mt-10 grid gap-x-12 gap-y-6 lg:grid-cols-12" delay={0.05}>
          <div className="lg:col-span-5">
            <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-ink">
              {alopecias.outras.titulo}
            </span>
            <p
              className="mt-3 text-ink/82"
              style={{ fontSize: "var(--text-body)" }}
            >
              {alopecias.outras.descricao}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {alopecias.outras.regioes.map((r) => (
                <li
                  key={r}
                  className="rounded-full bg-ink px-4 py-1.5 font-mono text-[length:var(--text-body-sm)] text-champagne"
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-ink">
              {alopecias.outras.protocolosTitulo}
            </span>
            <ul className="mt-5 border-t border-ink/25">
              {alopecias.outras.protocolos.map((item) => (
                <li
                  key={item}
                  className="border-b border-ink/15 py-3 text-ink/82"
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
