import Image from "next/image";
import { Container } from "../Container";
import { ButtonLink } from "../Button";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsappIcon, ArrowDown } from "../icons";
import { hero } from "@/content/capilar";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

/**
 * Hero V2 — foto cinematográfica em fullscreen com sobreposição editorial.
 * Tipografia massiva sobre overlay petróleo + champagne; vibe instituto premium.
 */
export function HeroV2() {
  const wa = whatsappLink(site.whatsapp, site.whatsappMensagem);

  return (
    <section
      id="topo"
      className="relative isolate overflow-hidden bg-ink pt-14 pb-10 sm:pt-16 sm:pb-12"
    >
      {/* Foto de fundo cinematográfica */}
      <Image
        src="/images/clinica/reais/tricoscopia-dr-deli.jpg"
        alt="Dr. Deli Brito realizando tricoscopia capilar no instituto SmileSkin"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 55%" }}
      />
      {/* Camadas de cor — overlay petróleo + viés dourado lateral */}
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/75 to-ink/30"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/85"
      />
      <span
        aria-hidden
        className="absolute -right-32 top-1/3 hidden h-[460px] w-[460px] rounded-full bg-champagne/20 blur-[160px] lg:block"
      />

      <Container className="relative">
        <Reveal className="mb-8 flex items-center justify-between gap-4">
          <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
            {hero.eyebrow}
          </span>
          <span className="hidden font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-paper/55 sm:inline">
            Est. SmileSkin · versão imersiva
          </span>
        </Reveal>

        {/* Bloco principal — título à esquerda, lede + CTAs à direita */}
        <div className="grid items-end gap-x-12 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h1
                className="max-w-[14ch] font-display font-normal leading-[0.95] tracking-[-0.025em] text-paper"
                style={{ fontSize: "var(--text-h1)" }}
              >
                {hero.titulo}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p
                className="mt-3 max-w-[16ch] font-display font-normal italic leading-[1.05] tracking-[-0.015em] text-champagne"
                style={{ fontSize: "var(--text-h2)" }}
              >
                {hero.tituloDestaque}
              </p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-5" delay={0.22}>
            <p
              className="max-w-[44ch] text-paper/82"
              style={{ fontSize: "var(--text-body)" }}
            >
              {hero.lede}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="#pre-avaliacao" variant="primary">
                {hero.ctaPrimario}
                <ArrowDown />
              </ButtonLink>
              <a
                href="#investigacao"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-paper/30 px-6 py-3 text-[0.74rem] font-medium uppercase tracking-[0.1em] text-paper transition-all duration-200 hover:-translate-y-0.5 hover:border-champagne hover:text-champagne"
              >
                {hero.ctaSecundario}
              </a>
            </div>
            <p
              className="mt-4 flex items-center gap-2 text-paper/65"
              style={{ fontSize: "var(--text-body-sm)" }}
            >
              <WhatsappIcon className="text-champagne" />
              {hero.nota}
            </p>
          </Reveal>
        </div>

        {/* Marcas em strip horizontal fino — toma pouca altura */}
        <Reveal className="mt-10 sm:mt-12" delay={0.32}>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 border-t border-paper/15 pt-5">
            {hero.marcas.map((marca, i) => (
              <li
                key={marca}
                className="flex items-baseline gap-2.5"
              >
                <span className="font-mono text-[length:var(--text-body-sm)] text-champagne">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-display font-normal tracking-[-0.01em] text-paper"
                  style={{ fontSize: "var(--text-body-sm)" }}
                >
                  {marca}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
