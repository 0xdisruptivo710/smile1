import Image from "next/image";
import { Container } from "../Container";
import { Reveal } from "@/components/motion/Reveal";
import { LeadForm } from "../LeadForm";
import { WhatsappIcon, ArrowRight } from "../icons";
import { FollicleGlyph } from "../Glyphs";
import { agendamento } from "@/content/capilar";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

/**
 * Agendamento V2 — CTA final em três tons sobrepostos. Cabeçalho navy com
 * atmosfera fotográfica, card WhatsApp dourado sólido (inversão da V1),
 * formulário em ilha cream com sombra acentuada.
 */
export function AgendamentoV2() {
  const wa = whatsappLink(site.whatsapp, site.whatsappMensagem);

  return (
    <section
      id="agendar"
      className="sci-grid-dark relative overflow-hidden bg-ink py-24 sm:py-32"
    >
      <Image
        src="/images/clinica/reais/entrada-clinica.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-[0.18]"
        style={{ objectPosition: "center 35%" }}
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/72 to-ink/96"
      />
      <FollicleGlyph
        strokeWidth={1.1}
        className="pointer-events-none absolute -top-10 left-[-3rem] hidden h-[400px] w-auto text-paper opacity-[0.08] lg:block"
      />

      <Container className="relative">
        <div className="flex items-center gap-4 sm:gap-6">
          <span
            className="font-display font-normal leading-none text-champagne"
            style={{ fontSize: "var(--text-h3)" }}
          >
            {agendamento.numero}
          </span>
          <span className="whitespace-nowrap font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.18em] text-champagne">
            {agendamento.label}
          </span>
          <span className="h-px flex-1 bg-paper/25" />
        </div>

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1] tracking-[-0.025em] text-paper"
              style={{ fontSize: "var(--text-h1)" }}
            >
              {agendamento.titulo}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:self-end" delay={0.12}>
            <p className="text-paper/82" style={{ fontSize: "var(--text-lede)" }}>
              {agendamento.texto}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* WhatsApp — agora em dourado sólido (inversão da V1) */}
          <Reveal delay={0.05} className="flex">
            <div className="relative flex w-full flex-col overflow-hidden rounded-[var(--radius-soft)] bg-champagne p-7 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] sm:p-9">
              <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-ink/65">
                Caminho mais direto
              </span>
              <h3
                className="mt-3 font-display font-normal tracking-[-0.01em] text-ink"
                style={{ fontSize: "var(--text-h2)" }}
              >
                {agendamento.whatsapp.titulo}
              </h3>
              <p
                className="mt-3 max-w-[38ch] text-ink/80"
                style={{ fontSize: "var(--text-body)" }}
              >
                {agendamento.whatsapp.texto}
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-9">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-8 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-graphite"
                >
                  <WhatsappIcon />
                  {agendamento.whatsapp.cta}
                </a>
                <a
                  href="#pre-avaliacao"
                  className="inline-flex items-center gap-2 font-mono text-[length:var(--text-body-sm)] uppercase tracking-[0.1em] text-ink/70 transition-colors hover:text-ink"
                >
                  Fazer a pré-avaliação
                  <ArrowRight />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Formulário — ilha cream sobre fundo navy */}
          <Reveal delay={0.12} className="flex">
            <div className="w-full rounded-[var(--radius-soft)] border border-paper/15 bg-paper-warm p-7 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] sm:p-9">
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
