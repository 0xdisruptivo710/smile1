import Image from "next/image";
import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { equipe } from "@/content/capilar";

/**
 * Equipe V2 — bloco petróleo com card único do Dr. Deli em destaque,
 * acompanhado de foto institucional ao lado. Substitui card pequeno isolado
 * por uma composição editorial maior, com mais peso visual.
 */
export function EquipeV2() {
  const pessoa = equipe.pessoas[0];

  return (
    <section id="equipe" className="relative overflow-hidden bg-graphite py-20 sm:py-28">
      <Container className="relative">
        <SectionHeader numero={equipe.numero} label={equipe.label} dark />

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-paper"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {equipe.titulo}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p className="text-paper/72" style={{ fontSize: "var(--text-lede)" }}>
              {equipe.texto}
            </p>
          </Reveal>
        </div>

        {pessoa ? (
          <Reveal className="mt-14" delay={0.1}>
            <article className="grid gap-0 overflow-hidden rounded-[var(--radius-soft)] border border-paper/15 bg-ink shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] lg:grid-cols-12">
              <div className="relative aspect-[3/4] lg:col-span-5 lg:aspect-auto">
                <Image
                  src="/images/clinica/reais/dr-deli-escritorio.jpg"
                  alt="Dr. Deli Brito em seu consultório no SS Hair Science Institute"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  style={{ objectPosition: "center 30%" }}
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-tr from-ink/60 via-transparent to-transparent"
                />
              </div>
              <div className="flex flex-col justify-center gap-5 p-8 sm:p-12 lg:col-span-7">
                <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
                  {pessoa.papel}
                </span>
                <h3
                  className="font-display font-normal leading-[1.02] tracking-[-0.015em] text-paper"
                  style={{ fontSize: "var(--text-h1)" }}
                >
                  {pessoa.nome}
                </h3>
                <p
                  className="max-w-[60ch] text-paper/78"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  {pessoa.bio}
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-paper/15 pt-5 font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.18em] text-paper/65">
                  <span>CRF/SP 52.349</span>
                  <span>RQE Tricologia 11810-92</span>
                  <span>Mestre em Nanotecnologia</span>
                </div>
              </div>
            </article>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
