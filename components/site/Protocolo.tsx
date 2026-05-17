import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { VideoPlayer } from "./VideoPlayer";
import { protocolo } from "@/content/capilar";

export function Protocolo() {
  return (
    <section id="protocolo" className="py-20 sm:py-28">
      <Container>
        <SectionHeader numero={protocolo.numero} label={protocolo.label} />

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-ink"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {protocolo.titulo}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p className="text-ink-soft" style={{ fontSize: "var(--text-lede)" }}>
              {protocolo.texto}
            </p>
          </Reveal>
        </div>

        {/* Vídeo de registro de evolução */}
        <Reveal className="mt-14" delay={0.1}>
          <div className="grid items-center gap-x-12 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <VideoPlayer
                src="/videos/evolucao.mp4"
                poster="/images/poster-evolucao.jpg"
                mode="player"
                label={protocolo.video.label}
                className="aspect-square w-full"
              />
            </div>
            <div className="lg:col-span-7">
              <span className="eyebrow">Acompanhamento documentado</span>
              <h3
                className="mt-3 font-display font-normal tracking-[-0.01em] text-ink"
                style={{ fontSize: "var(--text-h3)" }}
              >
                {protocolo.video.titulo}
              </h3>
              <p
                className="mt-3 max-w-[48ch] text-ink-soft"
                style={{ fontSize: "var(--text-body)" }}
              >
                {protocolo.video.texto}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid border-t border-line-strong sm:grid-cols-3">
          {protocolo.pilares.map((pilar, i) => (
            <Reveal
              key={pilar.titulo}
              delay={i * 0.08}
              className="flex flex-col gap-3 border-b border-line py-8 sm:border-b-0 sm:py-9 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-7 sm:[&:not(:last-child)]:pr-7"
            >
              <span className="font-mono text-[length:var(--text-body-sm)] text-pine">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="font-display font-normal tracking-[-0.01em] text-ink"
                style={{ fontSize: "var(--text-h3)" }}
              >
                {pilar.titulo}
              </h3>
              <p className="text-ink-soft" style={{ fontSize: "var(--text-body)" }}>
                {pilar.texto}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
