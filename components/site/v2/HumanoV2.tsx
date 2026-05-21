import { Container } from "../Container";
import { Reveal } from "@/components/motion/Reveal";
import { VideoPlayer } from "../VideoPlayer";
import { humano } from "@/content/capilar";

/**
 * Humano V2 — bloco champagne sólido (dourado vibrante). Pull-quote enorme em
 * petróleo, depoimento em vídeo lateral. Quebra a cadência das seções escuras
 * trazendo calor humano e cor saturada.
 */
export function HumanoV2() {
  return (
    <section
      id="humano"
      className="relative overflow-hidden bg-champagne py-24 sm:py-32"
    >
      {/* Padrão sutil de pontos petróleo */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(20,64,80,1) 1px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />
      <Container className="relative">
        <div className="flex items-center gap-4 sm:gap-6">
          <span
            className="font-display font-normal leading-none text-ink"
            style={{ fontSize: "var(--text-h3)" }}
          >
            {humano.numero}
          </span>
          <span className="whitespace-nowrap font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.18em] text-ink">
            {humano.label}
          </span>
          <span className="h-px flex-1 bg-ink/30" />
        </div>

        <div className="mt-14 grid gap-x-14 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h2
                className="font-display font-normal leading-[1] tracking-[-0.025em] text-ink"
                style={{ fontSize: "var(--text-h1)" }}
              >
                {humano.titulo}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p
                className="mt-7 max-w-[58ch] text-ink/82"
                style={{ fontSize: "var(--text-lede)" }}
              >
                {humano.texto}
              </p>
            </Reveal>
          </div>

          <ul className="lg:col-span-5">
            {humano.pontos.map((ponto, i) => (
              <Reveal
                key={ponto}
                delay={0.12 + i * 0.07}
                className="flex items-baseline gap-4 border-b border-ink/20 py-5 first:border-t first:border-ink/25"
              >
                <span className="font-mono text-[length:var(--text-body-sm)] text-ink/60">
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

        {/* Grade de 3 depoimentos em vídeo */}
        <Reveal className="mt-14" delay={0.05}>
          <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-ink">
            {humano.depoimento.eyebrow}
          </span>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {humano.depoimentos.map((dep, i) => (
            <Reveal key={dep.slug} delay={i * 0.08}>
              <figure className="flex flex-col gap-3">
                <div className="relative">
                  {/* Moldura offsetada petróleo — assinatura editorial V2 */}
                  <span
                    aria-hidden
                    className="absolute -inset-2.5 -z-10 rounded-[var(--radius-soft)] border border-ink/35"
                  />
                  <VideoPlayer
                    src={dep.src}
                    poster={dep.poster}
                    mode="player"
                    label={dep.label}
                    className="aspect-[9/16] w-full"
                  />
                </div>
                <figcaption
                  className="mt-2 text-ink/72"
                  style={{ fontSize: "var(--text-body-sm)" }}
                >
                  {dep.legenda}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p
          className="mt-6 font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.18em] text-ink/65"
        >
          {humano.depoimento.nota}
        </p>
      </Container>
    </section>
  );
}
