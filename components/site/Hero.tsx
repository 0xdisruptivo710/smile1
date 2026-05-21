import { Container } from "./Container";
import { ButtonLink } from "./Button";
import { Photo } from "./Photo";
import { Reveal } from "@/components/motion/Reveal";
import { RuleLine } from "@/components/motion/RuleLine";
import { WhatsappIcon, ArrowDown } from "./icons";
import { FollicleGlyph, StrandSection } from "./Glyphs";
import { MarginNote } from "./MarginNote";
import { hero } from "@/content/capilar";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

export function Hero() {
  const wa = whatsappLink(site.whatsapp, site.whatsappMensagem);

  return (
    <section
      id="topo"
      className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24"
    >
      {/* glifos de tricologia — ornamento de fundo */}
      <FollicleGlyph
        strokeWidth={1.1}
        className="pointer-events-none absolute -top-14 right-[-3rem] hidden h-[460px] w-auto text-line-strong opacity-55 lg:block"
      />
      <StrandSection
        strokeWidth={1.1}
        className="pointer-events-none absolute bottom-10 left-[-3.5rem] hidden h-[200px] w-[200px] text-line-strong opacity-45 lg:block"
      />
      <MarginNote
        text="Instituto de tricologia clínica — SmileSkin"
        side="left"
        className="top-40"
      />

      <Container className="relative">
        <Reveal className="mb-12 flex items-center justify-between gap-4 sm:mb-16">
          <span className="eyebrow">{hero.eyebrow}</span>
          <span className="eyebrow hidden text-ink-faint sm:inline">
            Est. SmileSkin
          </span>
        </Reveal>

        <div className="grid items-end gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal delay={0.05}>
              <h1
                className="font-display font-normal leading-[0.98] tracking-[-0.025em] text-ink"
                style={{ fontSize: "var(--text-h1)" }}
              >
                {hero.titulo}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p
                className="mt-3 max-w-[16ch] font-display font-normal italic leading-[1.05] tracking-[-0.015em] text-pine"
                style={{ fontSize: "var(--text-h2)" }}
              >
                {hero.tituloDestaque}
              </p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6" delay={0.32}>
            <Photo
              src="/images/clinica/reais/tricoscopia-dr-deli.jpg"
              alt="Dr. Deli Brito realizando tricoscopia capilar com dermatoscópio no atendimento da SmileSkin"
              priority
              marks
              sizes="(max-width: 1024px) 100vw, 50vw"
              caption="Dr. Deli Brito · tricoscopia em atendimento"
              className="aspect-[16/10] w-full lg:aspect-[4/3]"
              objectPosition="center 60%"
            />
          </Reveal>
        </div>

        <div className="mt-10 grid gap-x-12 gap-y-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.18}>
            <p
              className="max-w-[52ch] text-ink-soft"
              style={{ fontSize: "var(--text-lede)" }}
            >
              {hero.lede}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="#pre-avaliacao" variant="primary">
                {hero.ctaPrimario}
                <ArrowDown />
              </ButtonLink>
              <ButtonLink href="#investigacao" variant="secondary">
                {hero.ctaSecundario}
              </ButtonLink>
            </div>
            <p
              className="mt-5 flex items-center gap-2 text-ink-faint"
              style={{ fontSize: "var(--text-body-sm)" }}
            >
              <WhatsappIcon className="text-pine" />
              {hero.nota}
            </p>
          </Reveal>
        </div>

        {/* Faixa de marcas do instituto */}
        <Reveal className="mt-14 sm:mt-20" delay={0.1}>
          <RuleLine tone="bg-line-strong" />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
            {hero.marcas.map((marca, i) => (
              <li
                key={marca}
                className="flex items-baseline gap-3 border-line py-5 [&:not(:last-child)]:border-b lg:[&:not(:last-child)]:border-b-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-6"
              >
                <span className="font-mono text-[length:var(--text-body-sm)] text-pine">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-display font-normal tracking-[-0.01em] text-ink"
                  style={{ fontSize: "var(--text-h3)" }}
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
