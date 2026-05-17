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
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <FollicleGlyph
        strokeWidth={1.1}
        className="pointer-events-none absolute -top-10 left-[-3rem] hidden h-[400px] w-auto text-line-strong opacity-40 lg:block"
      />
      <MarginNote
        text="O próximo passo — avaliação capilar presencial"
        side="right"
        className="top-40"
      />
      <Container className="relative">
        <SectionHeader numero={agendamento.numero} label={agendamento.label} />

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-ink"
              style={{ fontSize: "var(--text-h1)" }}
            >
              {agendamento.titulo}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:self-end" delay={0.12}>
            <p className="text-ink-soft" style={{ fontSize: "var(--text-lede)" }}>
              {agendamento.texto}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* WhatsApp — caminho direto, bloco grafite */}
          <Reveal delay={0.05} className="flex">
            <div className="relative flex w-full flex-col overflow-hidden rounded-[var(--radius-soft)] bg-graphite p-7 sm:p-9">
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
