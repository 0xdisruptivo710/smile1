import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { Photo } from "../Photo";
import { Reveal } from "@/components/motion/Reveal";
import { curriculo } from "@/content/capilar";

/**
 * Currículo V2 — versão imersiva. Bloco navy escuro com cards de cor saturada,
 * tipografia massiva, registros em vidro fosco, abordagem em pílulas douradas.
 */
export function CurriculoV2() {
  return (
    <section
      id="curriculo"
      className="sci-grid-dark relative overflow-hidden bg-ink py-20 sm:py-28"
    >
      <Container className="relative">
        <SectionHeader numero={curriculo.numero} label={curriculo.label} dark />

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-paper"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {curriculo.titulo}
            </h2>
            <p
              className="mt-3 font-display italic text-champagne"
              style={{ fontSize: "var(--text-lede)" }}
            >
              {curriculo.subtitulo}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p className="text-paper/78" style={{ fontSize: "var(--text-body)" }}>
              {curriculo.trajetoria}
            </p>
          </Reveal>
        </div>

        {/* Identificação + foto */}
        <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <Photo
              src="/images/clinica/reais/dr-deli-escritorio.jpg"
              alt={`${curriculo.nome} — ${curriculo.papel}`}
              dark
              marks
              sizes="(max-width: 1024px) 100vw, 40vw"
              caption={`${curriculo.nome} · ${curriculo.papel}`}
              className="aspect-[4/5] w-full"
              objectPosition="center 30%"
            />
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
              {curriculo.formacaoUneIntro}
            </span>
            <ul className="mt-4 flex flex-wrap gap-2">
              {curriculo.formacaoUne.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-champagne/45 bg-paper/8 px-4 py-1.5 font-mono text-[length:var(--text-body-sm)] text-paper backdrop-blur-sm"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 border-t border-paper/20 pt-6">
              <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
                {curriculo.registrosTitulo}
              </span>
              <p
                className="mt-3 max-w-[58ch] text-paper/72"
                style={{ fontSize: "var(--text-body)" }}
              >
                {curriculo.registrosTexto}
              </p>
              <dl className="mt-5 grid gap-px overflow-hidden rounded-[var(--radius-soft)] border border-paper/15 bg-paper/12 sm:grid-cols-2">
                {curriculo.registros.map((r) => (
                  <div
                    key={r.rotulo}
                    className="flex flex-col gap-1 bg-graphite p-4"
                  >
                    <dt className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.18em] text-champagne/85">
                      {r.rotulo}
                    </dt>
                    <dd
                      className="font-display font-normal tracking-[-0.01em] text-paper"
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
            <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
              {curriculo.formacaoComplementarTitulo}
            </span>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {curriculo.formacaoComplementar.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 border-b border-paper/15 py-3"
                >
                  <span className="font-mono text-[length:var(--text-body-sm)] text-champagne">
                    ◆
                  </span>
                  <span
                    className="font-display font-normal tracking-[-0.01em] text-paper"
                    style={{ fontSize: "var(--text-body)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <aside className="rounded-[var(--radius-soft)] border border-champagne/45 bg-champagne p-6 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.5)] sm:p-7">
              <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-graphite">
                {curriculo.mestrado.titulo}
              </span>
              <p
                className="mt-3 text-graphite/82"
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
            <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
              {curriculo.atuacaoTricologiaTitulo}
            </span>
            <ul className="mt-5 border-t border-paper/20">
              {curriculo.atuacaoTricologia.map((item) => (
                <li
                  key={item}
                  className="border-b border-paper/12 py-3 text-paper/78"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={0.1}>
            <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
              {curriculo.aprofundamentoTitulo}
            </span>
            <ul className="mt-5 border-t border-paper/20">
              {curriculo.aprofundamento.map((item) => (
                <li
                  key={item}
                  className="border-b border-paper/12 py-3 text-paper/78"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Abordagem em pílulas douradas */}
        <Reveal className="mt-14 rounded-[var(--radius-soft)] border border-champagne/40 bg-graphite p-7 sm:p-9" delay={0.08}>
          <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
            {curriculo.abordagemTitulo}
          </span>
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
            <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
              Docência
            </span>
            <p
              className="mt-4 max-w-[60ch] text-paper/78"
              style={{ fontSize: "var(--text-body)" }}
            >
              {curriculo.docencia}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <aside className="rounded-[var(--radius-soft)] border-l-2 border-champagne bg-graphite p-6 sm:p-7">
              <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
                {curriculo.odontologia.titulo}
              </span>
              <p
                className="mt-3 text-paper/78"
                style={{ fontSize: "var(--text-body)" }}
              >
                {curriculo.odontologia.texto}
              </p>
            </aside>
          </Reveal>
        </div>

        {/* Lattes / verificação */}
        <Reveal className="mt-12 border-t border-paper/20 pt-6" delay={0.05}>
          <p className="max-w-[80ch] font-mono text-[length:var(--text-body-sm)] text-paper/65">
            {curriculo.lattes}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
