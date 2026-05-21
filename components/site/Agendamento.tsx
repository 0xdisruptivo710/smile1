import Image from "next/image";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { LeadForm } from "./LeadForm";
import { WhatsappIcon, ArrowRight } from "./icons";
import { FollicleGlyph } from "./Glyphs";
import { MarginNote } from "./MarginNote";
import { agendamento } from "@/content/capilar";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

export function Agendamento() {
  const wa = whatsappLink(site.whatsapp, site.whatsappMensagem);

  return (
    <section
      id="agendar"
      className="sci-grid-dark relative overflow-hidden bg-ink py-20 sm:py-28"
    >
      {/* Atmosfera da clínica como textura sutil */}
      <Image
        src="/images/clinica/reais/entrada-clinica.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-[0.12]"
        style={{ objectPosition: "center 30%" }}
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink/95"
      />
      <FollicleGlyph
        strokeWidth={1.1}
        className="pointer-events-none absolute -top-10 left-[-3rem] hidden h-[400px] w-auto text-paper opacity-[0.08] lg:block"
      />
      <MarginNote
        text="O próximo passo — avaliação capilar presencial"
        side="right"
        className="top-40"
        dark
      />
      <Container className="relative">
        <SectionHeader numero={agendamento.numero} label={agendamento.label} dark />

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-paper"
              style={{ fontSize: "var(--text-h1)" }}
            >
              {agendamento.titulo}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:self-end" delay={0.12}>
            <p className="text-paper/72" style={{ fontSize: "var(--text-lede)" }}>
              {agendamento.texto}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* WhatsApp — caminho direto, bloco grafite com atmosfera da clínica */}
          <Reveal delay={0.05} className="flex">
            <div className="relative flex w-full flex-col overflow-hidden rounded-[var(--radius-soft)] bg-graphite p-7 sm:p-9">
              <Image
                src="/images/clinica/reais/lounge-clinica.jpg"
                alt=""
                aria-hidden
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: "65% center" }}
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(100deg,var(--color-graphite)_0%,var(--color-graphite)_42%,rgba(19,63,79,0.55)_62%,rgba(19,63,79,0)_100%)]"
              />
              <div className="relative flex flex-1 flex-col">
                <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
                  Caminho mais direto
                </span>
                <h3
                  className="mt-3 font-display font-normal tracking-[-0.01em] text-paper"
                  style={{ fontSize: "var(--text-h2)" }}
                >
                  {agendamento.whatsapp.titulo}
                </h3>
                <p
                  className="mt-3 max-w-[38ch] text-paper/75"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  {agendamento.whatsapp.texto}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-9">
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border border-champagne bg-champagne px-8 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-graphite transition-all duration-200 hover:-translate-y-0.5 hover:bg-champagne-dark"
                  >
                    <WhatsappIcon />
                    {agendamento.whatsapp.cta}
                  </a>
                  <a
                    href="#pre-avaliacao"
                    className="inline-flex items-center gap-2 font-mono text-[length:var(--text-body-sm)] uppercase tracking-[0.1em] text-paper/70 transition-colors hover:text-champagne"
                  >
                    Fazer a pré-avaliação
                    <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Formulário */}
          <Reveal delay={0.12} className="flex">
            <div className="w-full rounded-[var(--radius-soft)] border border-line bg-paper-warm p-7 sm:p-9">
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
