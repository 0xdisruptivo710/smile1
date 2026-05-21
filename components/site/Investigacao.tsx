import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Plate } from "./Plate";
import { Photo } from "./Photo";
import { Tricoscopia } from "./Tricoscopia";
import { VideoPlayer } from "./VideoPlayer";
import { CycleGlyph } from "./Glyphs";
import { MarginNote } from "./MarginNote";
import { investigacao } from "@/content/capilar";

/** Registros de tricoscopia exibidos como faixa em cor natural,
 *  ordenados por progressão anatômica: frente → topo → trás → difuso. */
const registros = [
  { ref: "05", regiao: "Frontal" },
  { ref: "06", regiao: "Topo" },
  { ref: "04", regiao: "Partição" },
  { ref: "02", regiao: "Vértice" },
  { ref: "01", regiao: "Coroa" },
  { ref: "08", regiao: "Difuso" },
];

export function Investigacao() {
  return (
    <section
      id="investigacao"
      className="sci-grid-dark relative overflow-hidden bg-ink py-20 sm:py-28"
    >
      <CycleGlyph
        strokeWidth={1.1}
        className="pointer-events-none absolute -right-16 top-16 hidden h-[260px] w-[260px] text-paper opacity-[0.07] lg:block"
      />
      <MarginNote
        text="Cyclus pili — anágena · catágena · telógena"
        side="right"
        className="top-44"
        dark
      />
      <Container className="relative">
        <SectionHeader
          numero={investigacao.numero}
          label={investigacao.label}
          dark
        />

        <div className="mt-12 grid items-center gap-x-12 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal delay={0.05}>
              <h2
                className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-paper"
                style={{ fontSize: "var(--text-h2)" }}
              >
                {investigacao.titulo}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p
                className="mt-5 max-w-[46ch] text-paper/72"
                style={{ fontSize: "var(--text-lede)" }}
              >
                {investigacao.texto}
              </p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-6" delay={0.16}>
            <Photo
              src="/images/clinica/reais/dr-deli-escritorio.jpg"
              alt="Dr. Deli Brito em seu consultório SmileSkin — biblioteca científica, troféus e estação de trabalho"
              dark
              marks
              sizes="(max-width: 1024px) 100vw, 48vw"
              caption="Dr. Deli Brito · Responsável clínico"
              className="aspect-[3/2] w-full"
            />
          </Reveal>
        </div>

        {/* Vídeo do atendimento na clínica */}
        <Reveal className="mt-14" delay={0.1}>
          <VideoPlayer
            src="/videos/tricoscopia-real.mp4"
            poster="/images/poster-tricoscopia-real.jpg"
            mode="ambient"
            label={investigacao.videoLabel}
            className="aspect-video w-full"
          />
        </Reveal>

        {/* Faixa de registros tratados */}
        <Reveal className="mt-6" delay={0.1}>
          <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-6">
            {registros.map((r) => (
              <figure key={r.ref}>
                <Plate
                  src={`/images/placas/placa-${r.ref}.jpeg`}
                  alt={`Registro de tricoscopia do couro cabeludo, região ${r.regiao.toLowerCase()}`}
                  sizes="(max-width: 640px) 33vw, 16vw"
                  className="aspect-[3/4] w-full rounded-[var(--radius-soft)]"
                />
                <figcaption className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-paper/55">
                  {r.regiao}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        {/* Microscópio virtual de tricoscopia */}
        <Reveal className="mt-6" delay={0.1}>
          <Tricoscopia />
        </Reveal>

        {/* Etapas da investigação */}
        <div className="mt-16 border-t border-paper/15">
          {investigacao.etapas.map((etapa, i) => (
            <Reveal key={etapa.passo} delay={i * 0.06}>
              <article className="grid gap-x-10 gap-y-3 border-b border-paper/12 py-9 md:grid-cols-12">
                <div className="md:col-span-3">
                  <span
                    className="font-display font-normal leading-none text-pine-soft"
                    style={{ fontSize: "var(--text-h2)" }}
                  >
                    {etapa.passo}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h3
                    className="font-display font-normal tracking-[-0.01em] text-paper"
                    style={{ fontSize: "var(--text-h3)" }}
                  >
                    {etapa.titulo}
                  </h3>
                  <p
                    className="mt-2.5 max-w-[58ch] text-paper/70"
                    style={{ fontSize: "var(--text-body)" }}
                  >
                    {etapa.texto}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* 16 itens completos da avaliação (PDF pg 6) */}
        <Reveal className="mt-14" delay={0.05}>
          <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
            {investigacao.itensTitulo}
          </span>
          <ul className="mt-5 grid gap-x-8 gap-y-0 border-t border-paper/15 sm:grid-cols-2 lg:grid-cols-3">
            {investigacao.itens.map((item) => (
              <li
                key={item}
                className="border-b border-paper/10 py-2.5 text-paper/78"
                style={{ fontSize: "var(--text-body)" }}
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* 6 critérios de estratégia */}
        <Reveal className="mt-10 rounded-[var(--radius-soft)] border border-paper/15 bg-graphite p-6 sm:p-8" delay={0.05}>
          <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
            {investigacao.criteriosTitulo}
          </span>
          <ul className="mt-5 flex flex-wrap gap-2">
            {investigacao.criterios.map((c) => (
              <li
                key={c}
                className="rounded-full border border-champagne/45 bg-paper/8 px-4 py-1.5 font-mono text-[length:var(--text-body-sm)] text-paper"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
