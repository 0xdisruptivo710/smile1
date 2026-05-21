import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Photo } from "./Photo";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "./icons";
import { autoridade } from "@/content/capilar";
import { site } from "@/lib/site";

export function Autoridade() {
  return (
    <section
      id="autoridade"
      className="sci-grid-dark relative overflow-hidden bg-ink py-20 sm:py-28"
    >
      <Container className="relative">
        <SectionHeader numero={autoridade.numero} label={autoridade.label} dark />

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-paper"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {autoridade.titulo}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p className="text-paper/72" style={{ fontSize: "var(--text-lede)" }}>
              {autoridade.texto}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12" delay={0.1}>
          <aside className="rounded-[var(--radius-soft)] border-l-2 border-champagne bg-graphite p-6 sm:p-8">
            <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
              {autoridade.distincao.eyebrow}
            </span>
            <h3
              className="mt-3 max-w-[28ch] font-display font-normal leading-[1.08] tracking-[-0.01em] text-paper"
              style={{ fontSize: "var(--text-h3)" }}
            >
              {autoridade.distincao.titulo}
            </h3>
            <p
              className="mt-4 max-w-[68ch] text-paper/72"
              style={{ fontSize: "var(--text-body)" }}
            >
              {autoridade.distincao.texto}
            </p>
          </aside>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <Photo
              src="/images/clinica/reais/dr-deli-docencia.jpg"
              alt="Dr. Deli Brito ministrando palestra científica sobre alopecias não cicatriciais"
              dark
              marks
              sizes="(max-width: 1024px) 100vw, 40vw"
              caption="Dr. Deli Brito · ensino e divulgação científica"
              className="aspect-[4/5] w-full"
              objectPosition="center 30%"
            />
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.12}>
            <ul className="border-t border-paper/20">
              {autoridade.itens.map((item) => (
                <li
                  key={item.rotulo}
                  className="flex items-baseline justify-between gap-6 border-b border-paper/12 py-5"
                >
                  <span className="flex flex-col gap-0.5">
                    <span
                      className="font-display font-normal tracking-[-0.01em] text-paper"
                      style={{ fontSize: "var(--text-h3)" }}
                    >
                      {item.rotulo}
                    </span>
                    <span
                      className="text-paper/65"
                      style={{ fontSize: "var(--text-body-sm)" }}
                    >
                      {item.nota}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[length:var(--text-body-sm)] uppercase tracking-[0.1em] text-champagne transition-colors hover:text-champagne-soft"
            >
              Acompanhar no Instagram
              <ArrowUpRight />
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
