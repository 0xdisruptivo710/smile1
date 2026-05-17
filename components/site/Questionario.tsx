"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowRight, ArrowDown, Check } from "./icons";
import { questionarioIntro } from "@/content/capilar";
import {
  perguntas,
  fatoresInfo,
  resultado,
  type FatorCodigo,
} from "@/content/questionario";
import { cn } from "@/lib/utils";

const ORDEM: FatorCodigo[] = ["F1", "F2", "F3", "F4", "F5", "F6", "F7"];

export function Questionario() {
  const [step, setStep] = useState(0);
  const [respostas, setRespostas] = useState<(number | null)[]>(() =>
    perguntas.map(() => null),
  );
  const [travado, setTravado] = useState(false);
  const reduce = useReducedMotion();

  const total = perguntas.length;
  const noResultado = step >= total;
  const progresso = noResultado
    ? 100
    : Math.round((step / total) * 100);

  function escolher(qi: number, oi: number) {
    if (travado) return;
    setTravado(true);
    setRespostas((r) => {
      const n = [...r];
      n[qi] = oi;
      return n;
    });
    // pequena pausa para o usuário ver a seleção registrar
    window.setTimeout(
      () => {
        setStep(qi + 1);
        setTravado(false);
      },
      reduce ? 0 : 340,
    );
  }

  function refazer() {
    setRespostas(perguntas.map(() => null));
    setStep(0);
  }

  const fatores = ORDEM.filter((f) =>
    perguntas.some((q, qi) => {
      const oi = respostas[qi];
      return oi != null && q.opcoes[oi].fatores.includes(f);
    }),
  );

  const slide = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, x: 24 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -24 },
      };

  return (
    <section
      id="pre-avaliacao"
      className="sci-grid bg-paper-warm py-20 sm:py-28"
    >
      <Container>
        <SectionHeader
          numero={questionarioIntro.numero}
          label={questionarioIntro.label}
        />

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-ink"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {questionarioIntro.titulo}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p className="text-ink-soft" style={{ fontSize: "var(--text-lede)" }}>
              {questionarioIntro.texto}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12" delay={0.1}>
          <div className="mx-auto max-w-[760px] rounded-[var(--radius-soft)] border border-line-strong bg-paper-warm p-6 shadow-[0_24px_60px_-32px_oklch(0.248_0.018_58/0.4)] sm:p-10">
            {/* Progresso */}
            <div className="flex items-center justify-between gap-4">
              <span className="eyebrow text-ink-faint">
                {noResultado
                  ? "Pré-avaliação concluída"
                  : `Pergunta ${step + 1} de ${total}`}
              </span>
              <span className="font-mono text-[length:var(--text-body-sm)] text-pine">
                {noResultado ? "100%" : `${progresso}%`}
              </span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-line">
              <motion.div
                className="h-full rounded-full bg-pine"
                animate={{ width: `${progresso}%` }}
                transition={{ duration: reduce ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {/* Conteúdo */}
            <div className="relative mt-8 min-h-[300px]">
              <AnimatePresence mode="wait">
                {!noResultado ? (
                  <motion.div
                    key={`q-${step}`}
                    {...slide}
                    transition={{ duration: reduce ? 0.2 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <fieldset>
                      <legend
                        className="font-display font-normal tracking-[-0.01em] text-ink"
                        style={{ fontSize: "var(--text-h3)" }}
                      >
                        {perguntas[step].pergunta}
                      </legend>
                      <div className="mt-6 flex flex-col gap-2.5">
                        {perguntas[step].opcoes.map((opcao, oi) => {
                          const ativa = respostas[step] === oi;
                          return (
                            <button
                              key={opcao.label}
                              type="button"
                              onClick={() => escolher(step, oi)}
                              className={cn(
                                "group flex items-center justify-between gap-4 rounded-[var(--radius-soft)] border px-5 py-4 text-left transition-all duration-150",
                                ativa
                                  ? "border-pine bg-pine-wash"
                                  : "border-line-strong bg-paper hover:-translate-y-0.5 hover:border-pine hover:bg-pine-wash hover:shadow-[0_8px_20px_-12px_oklch(0.248_0.018_58/0.5)]",
                              )}
                            >
                              <span
                                className="text-ink"
                                style={{ fontSize: "var(--text-body)" }}
                              >
                                {opcao.label}
                              </span>
                              <span
                                className={cn(
                                  "shrink-0 transition-all duration-200",
                                  ativa
                                    ? "text-paper"
                                    : "text-pine opacity-35 group-hover:opacity-100",
                                )}
                                aria-hidden
                              >
                                {ativa ? (
                                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-champagne text-graphite">
                                    <Check className="h-3 w-3" />
                                  </span>
                                ) : (
                                  <ArrowRight />
                                )}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>

                    {step > 0 && (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="mt-6 font-mono text-[length:var(--text-body-sm)] uppercase tracking-[0.1em] text-ink-faint transition-colors hover:text-ink"
                      >
                        ← Voltar
                      </button>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="resultado"
                    {...slide}
                    transition={{ duration: reduce ? 0.2 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="eyebrow">{resultado.titulo}</span>
                    <p
                      className="mt-3 text-ink"
                      style={{ fontSize: "var(--text-lede)" }}
                    >
                      {fatores.length > 0
                        ? resultado.introComFatores
                        : resultado.introSemFatores}
                    </p>

                    {fatores.length > 0 && (
                      <ul className="mt-6 border-t border-line">
                        {fatores.map((f, i) => (
                          <motion.li
                            key={f}
                            initial={{ opacity: 0, x: reduce ? 0 : -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: reduce ? 0.2 : 0.45,
                              delay: reduce ? 0 : 0.25 + i * 0.09,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="flex items-start gap-3.5 border-b border-line py-4"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-champagne text-graphite">
                              <Check className="h-3 w-3" />
                            </span>
                            <span>
                              <span
                                className="font-display font-normal tracking-[-0.01em] text-ink"
                                style={{ fontSize: "var(--text-h3)" }}
                              >
                                {fatoresInfo[f].titulo}
                              </span>
                              <span
                                className="mt-0.5 block text-ink-soft"
                                style={{ fontSize: "var(--text-body-sm)" }}
                              >
                                {fatoresInfo[f].nota}
                              </span>
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    <p
                      className="mt-6 rounded-[var(--radius-soft)] bg-paper-warm p-4 text-ink-soft"
                      style={{ fontSize: "var(--text-body-sm)" }}
                    >
                      {resultado.aviso}
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <a
                        href="#agendar"
                        className="inline-flex items-center justify-center gap-2.5 rounded-full bg-champagne px-8 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-graphite transition-colors hover:bg-champagne-dark hover:text-paper"
                      >
                        {resultado.cta}
                        <ArrowDown />
                      </a>
                      <button
                        type="button"
                        onClick={refazer}
                        className="font-mono text-[length:var(--text-body-sm)] uppercase tracking-[0.1em] text-ink-faint transition-colors hover:text-ink"
                      >
                        {resultado.refazer}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <p
            className="mx-auto mt-4 max-w-[760px] text-center text-ink-faint"
            style={{ fontSize: "var(--text-body-sm)" }}
          >
            {questionarioIntro.aviso}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
