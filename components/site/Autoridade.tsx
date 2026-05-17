import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { MediaFrame } from "./MediaFrame";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "./icons";
import { autoridade } from "@/content/capilar";
import { site } from "@/lib/site";

export function Autoridade() {
  return (
    <section
      id="autoridade"
      className="sci-grid bg-paper-warm py-20 sm:py-28"
    >
      <Container>
        <SectionHeader numero={autoridade.numero} label={autoridade.label} />

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-ink"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {autoridade.titulo}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p className="text-ink-soft" style={{ fontSize: "var(--text-lede)" }}>
              {autoridade.texto}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <MediaFrame label={autoridade.moldura} ratio="aspect-[4/5]" />
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.12}>
            <ul className="border-t border-line-strong">
              {autoridade.itens.map((item) => (
                <li
                  key={item.rotulo}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-5"
                >
                  <span className="flex flex-col gap-0.5">
                    <span
                      className="font-display font-normal tracking-[-0.01em] text-ink"
                      style={{ fontSize: "var(--text-h3)" }}
                    >
                      {item.rotulo}
                    </span>
                    <span
                      className="text-ink-soft"
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
              className="mt-6 inline-flex items-center gap-2 font-mono text-[length:var(--text-body-sm)] uppercase tracking-[0.1em] text-pine transition-colors hover:text-pine-deep"
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
