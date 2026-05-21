import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { VideoPlayer } from "./VideoPlayer";
import { humano } from "@/content/capilar";

export function Humano() {
  return (
    <section id="humano" className="py-20 sm:py-32">
      <Container>
        <SectionHeader numero={humano.numero} label={humano.label} />

        <div className="mx-auto mt-14 max-w-[860px] text-center">
          <Reveal delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.04] tracking-[-0.02em] text-ink"
              style={{ fontSize: "var(--text-h1)" }}
            >
              {humano.titulo}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p
              className="mx-auto mt-7 max-w-[60ch] text-ink-soft"
              style={{ fontSize: "var(--text-lede)" }}
            >
              {humano.texto}
            </p>
          </Reveal>
        </div>

        {/* Grade de 3 depoimentos em vídeo */}
        <div className="mt-16">
          <Reveal delay={0.05}>
            <span className="eyebrow">{humano.depoimento.eyebrow}</span>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {humano.depoimentos.map((dep, i) => (
              <Reveal key={dep.slug} delay={i * 0.08}>
                <figure className="flex flex-col gap-3">
                  <VideoPlayer
                    src={dep.src}
                    poster={dep.poster}
                    mode="player"
                    label={dep.label}
                    className="aspect-[9/16] w-full"
                  />
                  <figcaption
                    className="text-ink-faint"
                    style={{ fontSize: "var(--text-body-sm)" }}
                  >
                    {dep.legenda}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p
            className="mt-6 max-w-[60ch] text-ink-faint"
            style={{ fontSize: "var(--text-body-sm)" }}
          >
            {humano.depoimento.nota}
          </p>
        </div>

        {/* Pontos editoriais — em linha horizontal */}
        <Reveal className="mt-12 grid gap-x-10 border-t border-line sm:grid-cols-3" delay={0.05}>
          {humano.pontos.map((ponto, i) => (
            <div
              key={ponto}
              className="flex items-baseline gap-4 border-b border-line py-5 sm:border-b-0 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-6"
            >
              <span className="font-mono text-[length:var(--text-body-sm)] text-pine">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p
                className="font-display font-normal leading-[1.2] tracking-[-0.01em] text-ink"
                style={{ fontSize: "var(--text-h3)" }}
              >
                {ponto}
              </p>
            </div>
          ))}
        </Reveal>

        {/* 8 áreas de impacto + alerta "isso é normal" — PDF pg 3, 11 */}
        <Reveal className="mt-20 border-t border-line-strong pt-12" delay={0.05}>
          <span className="eyebrow">{humano.impactoTitulo}</span>
          <ul className="mt-5 flex flex-wrap gap-2">
            {humano.impacto.map((item) => (
              <li
                key={item}
                className="rounded-full border border-pine/40 bg-paper px-4 py-1.5 font-mono text-[length:var(--text-body-sm)] text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-10" delay={0.05}>
          <aside className="rounded-[var(--radius-soft)] border-l-2 border-pine bg-paper-warm p-7 sm:p-9">
            <span className="eyebrow">{humano.alerta.eyebrow}</span>
            <p
              className="mt-3 font-display font-normal italic leading-[1.1] tracking-[-0.015em] text-ink"
              style={{ fontSize: "var(--text-h2)" }}
            >
              “{humano.alerta.aspas}”
            </p>
            <p
              className="mt-4 max-w-[68ch] text-ink-soft"
              style={{ fontSize: "var(--text-body)" }}
            >
              {humano.alerta.contraponto}
            </p>
          </aside>
        </Reveal>

        {/* 5 áreas dos psicólogos parceiros */}
        <Reveal className="mt-10" delay={0.05}>
          <div className="grid gap-x-12 gap-y-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="eyebrow">{humano.psicologos.titulo}</span>
            </div>
            <ul className="grid gap-2 lg:col-span-5">
              {humano.psicologos.itens.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 border-b border-line py-2.5 text-ink-soft"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  <span className="font-mono text-[length:var(--text-body-sm)] text-pine">
                    ◆
                  </span>
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
