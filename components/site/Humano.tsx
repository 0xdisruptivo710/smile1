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

        <div className="mt-16 grid items-center gap-x-12 gap-y-10 lg:grid-cols-12">
          {/* Depoimento em vídeo */}
          <Reveal className="lg:col-span-5" delay={0.05}>
            <div className="mx-auto max-w-[360px] lg:ml-0">
              <VideoPlayer
                src="/videos/depoimento.mp4"
                poster="/images/poster-depoimento.jpg"
                mode="player"
                label={humano.depoimento.label}
                className="aspect-[9/16] w-full"
              />
              <p
                className="mt-3 text-ink-faint"
                style={{ fontSize: "var(--text-body-sm)" }}
              >
                {humano.depoimento.nota}
              </p>
            </div>
          </Reveal>

          {/* Pontos */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <span className="eyebrow">{humano.depoimento.eyebrow}</span>
            </Reveal>
            <ul className="mt-5 border-t border-line">
              {humano.pontos.map((ponto, i) => (
                <Reveal
                  key={ponto}
                  delay={0.12 + i * 0.07}
                  className="flex items-baseline gap-4 border-b border-line py-5"
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
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
