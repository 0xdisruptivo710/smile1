import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Photo } from "./Photo";
import { Reveal } from "@/components/motion/Reveal";
import { curriculo } from "@/content/capilar";

/**
 * Currículo profissional do Dr. Deli Brito — bloco editorial completo
 * com toda a formação, registros, mestrado, áreas de aprofundamento,
 * abordagem, docência, Odontologia e Lattes (conforme PDF do briefing).
 */
export function Curriculo() {
  return (
    <section
      id="curriculo"
      className="relative overflow-hidden bg-paper-warm py-20 sm:py-28"
    >
      <Container className="relative">
        <SectionHeader numero={curriculo.numero} label={curriculo.label} />

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-ink"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {curriculo.titulo}
            </h2>
            <p
              className="mt-3 font-display italic text-pine"
              style={{ fontSize: "var(--text-lede)" }}
            >
              {curriculo.subtitulo}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p className="text-ink-soft" style={{ fontSize: "var(--text-body)" }}>
              {curriculo.trajetoria}
            </p>
          </Reveal>
        </div>

        {/* Identificação + foto */}
        <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <Photo
              src="/images/clinica/reais/dr-deli-escritorio.jpg"
              alt="Dr. Deli Brito em seu consultório no SS Hair Science Institute"
              marks
              sizes="(max-width: 1024px) 100vw, 40vw"
              caption={`${curriculo.nome} · ${curriculo.papel}`}
              className="aspect-[4/5] w-full"
              objectPosition="center 30%"
            />
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <span className="eyebrow">{curriculo.formacaoUneIntro}</span>
            <ul className="mt-4 flex flex-wrap gap-2">
              {curriculo.formacaoUne.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-pine/40 bg-paper px-4 py-1.5 font-mono text-[length:var(--text-body-sm)] text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 border-t border-line-strong pt-6">
              <span className="eyebrow">{curriculo.registrosTitulo}</span>
              <p
                className="mt-3 max-w-[58ch] text-ink-soft"
                style={{ fontSize: "var(--text-body)" }}
              >
                {curriculo.registrosTexto}
              </p>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                {curriculo.registros.map((r) => (
                  <div
                    key={r.rotulo}
                    className="flex flex-col gap-1 border-l-2 border-pine pl-4"
                  >
                    <dt className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.18em] text-ink-faint">
                      {r.rotulo}
                    </dt>
                    <dd
                      className="font-display font-normal tracking-[-0.01em] text-ink"
                      style={{ fontSize: "var(--text-h3)" }}
                    >
                      {r.valor}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        {/* Formação complementar + Mestrado */}
        <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <span className="eyebrow">{curriculo.formacaoComplementarTitulo}</span>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {curriculo.formacaoComplementar.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 border-b border-line py-3"
                >
                  <span className="font-mono text-[length:var(--text-body-sm)] text-pine">
                    ◆
                  </span>
                  <span
                    className="font-display font-normal tracking-[-0.01em] text-ink"
                    style={{ fontSize: "var(--text-body)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <aside className="rounded-[var(--radius-soft)] border border-line bg-paper p-6 sm:p-7">
              <span className="eyebrow">{curriculo.mestrado.titulo}</span>
              <p
                className="mt-3 text-ink-soft"
                style={{ fontSize: "var(--text-body)" }}
              >
                {curriculo.mestrado.texto}
              </p>
            </aside>
          </Reveal>
        </div>

        {/* Atuação + Aprofundamento */}
        <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6" delay={0.05}>
            <span className="eyebrow">{curriculo.atuacaoTricologiaTitulo}</span>
            <ul className="mt-5 border-t border-line">
              {curriculo.atuacaoTricologia.map((item) => (
                <li
                  key={item}
                  className="border-b border-line py-3 text-ink-soft"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={0.1}>
            <span className="eyebrow">{curriculo.aprofundamentoTitulo}</span>
            <ul className="mt-5 border-t border-line">
              {curriculo.aprofundamento.map((item) => (
                <li
                  key={item}
                  className="border-b border-line py-3 text-ink-soft"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Abordagem */}
        <Reveal className="mt-14 rounded-[var(--radius-soft)] border border-pine/35 bg-paper p-7 sm:p-9" delay={0.08}>
          <span className="eyebrow">{curriculo.abordagemTitulo}</span>
          <ul className="mt-5 flex flex-wrap gap-2">
            {curriculo.abordagem.map((item) => (
              <li
                key={item}
                className="rounded-full bg-champagne px-4 py-1.5 font-mono text-[length:var(--text-body-sm)] text-graphite"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Docência + Odontologia */}
        <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <span className="eyebrow">Docência</span>
            <p
              className="mt-4 max-w-[60ch] text-ink-soft"
              style={{ fontSize: "var(--text-body)" }}
            >
              {curriculo.docencia}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <aside className="rounded-[var(--radius-soft)] border-l-2 border-pine bg-paper p-6 sm:p-7">
              <span className="eyebrow">{curriculo.odontologia.titulo}</span>
              <p
                className="mt-3 text-ink-soft"
                style={{ fontSize: "var(--text-body)" }}
              >
                {curriculo.odontologia.texto}
              </p>
            </aside>
          </Reveal>
        </div>

        {/* Lattes / verificação */}
        <Reveal className="mt-12 border-t border-line-strong pt-6" delay={0.05}>
          <p
            className="max-w-[80ch] font-mono text-[length:var(--text-body-sm)] text-ink-faint"
          >
            {curriculo.lattes}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
