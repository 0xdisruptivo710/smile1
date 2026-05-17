"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { Play, Pause } from "./icons";
import { cn } from "@/lib/utils";

/* Paleta da ilustração — derivada dos tokens champagne do site. */
const C = {
  surface: "#d6cab1", // linha do couro cabeludo
  canal: "#f7f0e1", // interior do canal folicular
  canalStroke: "#d6cab1",
  bulbo: "#dcc9a3", // bulbo folicular
  bulboStroke: "#c9a560",
  fio: "#2e2a24", // haste terminal saudável
  fioFino: "#a99d8a", // haste miniaturizada
  vaso: "#bd5b48", // vaso sanguíneo / papila dérmica
  vasoSoft: "#cf7a68",
  inerte: "#cdbfa6", // estrutura sem nutrição
  clava: "#ece4d4", // raiz queratinizada
  faint: "#8a7f70",
};

interface FaseInfo {
  fase: string;
  duracao: string;
  desc: string;
  profundidade: string;
  espessura: string;
  progresso: number;
  svg: ReactNode;
}

const VELOCIDADES = [
  { label: "Lento", ms: 220 },
  { label: "Normal", ms: 120 },
  { label: "Rápido", ms: 45 },
];

export function CicloCapilar() {
  const reduce = useReducedMotion();
  const [progresso, setProgresso] = useState(0);
  const [miniatura, setMiniatura] = useState(false);
  const [tocando, setTocando] = useState(false);
  const [velocidade, setVelocidade] = useState(120);

  useEffect(() => {
    if (!tocando) return;
    const id = window.setInterval(() => {
      setProgresso((p) => (p >= 100 ? 0 : p + 1));
    }, velocidade);
    return () => window.clearInterval(id);
  }, [tocando, velocidade]);

  const info = getFase(progresso, miniatura, reduce ?? false);

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      {/* Controles */}
      <div className="flex flex-col gap-5 lg:col-span-5">
        <div className="flex flex-1 flex-col rounded-[var(--radius-soft)] border border-line bg-paper p-6 sm:p-7">
          <span className="eyebrow text-ink-faint">Compreender a fisiologia</span>
          <h3
            className="mt-2 font-display font-normal tracking-[-0.01em] text-ink"
            style={{ fontSize: "var(--text-h3)" }}
          >
            O ciclo de vida do fio
          </h3>
          <p
            className="mt-3 text-ink-soft"
            style={{ fontSize: "var(--text-body-sm)" }}
          >
            Cada fio nasce, cresce, regride e cai de forma cíclica. Arraste a
            linha do tempo ou inicie o ciclo automático para ver a transformação.
          </p>

          {/* Ciclo automático */}
          <div className="mt-6 rounded-[var(--radius-soft)] border border-line bg-paper-warm p-4">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[length:var(--text-body-sm)] text-pine">
                Ciclo automático
              </span>
              <button
                type="button"
                onClick={() => setTocando((v) => !v)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.12em] transition-colors",
                  tocando
                    ? "bg-champagne text-graphite hover:bg-champagne-dark"
                    : "bg-ink text-paper hover:bg-graphite",
                )}
              >
                {tocando ? <Pause /> : <Play />}
                {tocando ? "Pausar" : "Iniciar"}
              </button>
            </div>
            {tocando && (
              <div className="mt-3 flex items-center justify-between gap-3 border-t border-line pt-3">
                <span
                  className="text-ink-faint"
                  style={{ fontSize: "var(--text-body-sm)" }}
                >
                  Velocidade
                </span>
                <div className="flex gap-1.5">
                  {VELOCIDADES.map((v) => (
                    <button
                      key={v.ms}
                      type="button"
                      onClick={() => setVelocidade(v.ms)}
                      className={cn(
                        "rounded-full px-2.5 py-1 font-mono text-[0.66rem] uppercase tracking-[0.08em] transition-colors",
                        velocidade === v.ms
                          ? "bg-pine text-paper"
                          : "bg-paper text-ink-soft hover:text-ink",
                      )}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Linha do tempo */}
          <div className="mt-6 border-t border-line pt-6">
            <div className="flex items-baseline justify-between">
              <label
                htmlFor="ciclo-progresso"
                className="font-medium text-ink"
                style={{ fontSize: "var(--text-body-sm)" }}
              >
                Arraste para ver a evolução
              </label>
              <span className="rounded bg-pine-wash px-2 py-0.5 font-mono text-[0.7rem] font-medium text-pine">
                {progresso}%
              </span>
            </div>
            <input
              id="ciclo-progresso"
              type="range"
              min={0}
              max={100}
              value={progresso}
              onChange={(e) => {
                setTocando(false);
                setProgresso(Number(e.target.value));
              }}
              className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-line accent-pine"
            />
            <div className="mt-2 flex justify-between font-mono text-[0.62rem] uppercase tracking-[0.08em] text-ink-faint">
              <span className={cn(progresso < 40 && "font-bold text-pine")}>
                Anágena
              </span>
              <span
                className={cn(
                  progresso >= 40 && progresso < 70 && "font-bold text-pine",
                )}
              >
                Catágena
              </span>
              <span className={cn(progresso >= 70 && "font-bold text-pine")}>
                Telógena
              </span>
            </div>
          </div>

          {/* Toggle miniaturização */}
          <button
            type="button"
            onClick={() => setMiniatura((v) => !v)}
            className="mt-5 flex items-center justify-between gap-4 rounded-[var(--radius-soft)] border border-line bg-paper-warm p-4 text-left transition-colors hover:border-line-strong"
          >
            <span className="flex flex-col gap-0.5">
              <span
                className="font-medium text-ink"
                style={{ fontSize: "var(--text-body-sm)" }}
              >
                Simular calvície (miniaturização)
              </span>
              <span className="text-ink-faint" style={{ fontSize: "0.72rem" }}>
                Atrofia o folículo e afina o fio
              </span>
            </span>
            <span
              className={cn(
                "flex h-6 w-11 shrink-0 items-center rounded-full p-1 transition-colors",
                miniatura ? "bg-champagne-dark" : "bg-line-strong",
              )}
              aria-hidden
            >
              <span
                className={cn(
                  "h-4 w-4 rounded-full bg-paper shadow transition-transform duration-300",
                  miniatura ? "translate-x-5" : "translate-x-0",
                )}
              />
            </span>
          </button>
        </div>

        <div className="rounded-[var(--radius-soft)] border border-line bg-pine-wash p-5">
          <span
            className="font-medium text-pine"
            style={{ fontSize: "var(--text-body-sm)" }}
          >
            Observação clínica
          </span>
          <p
            className="mt-1.5 text-ink-soft"
            style={{ fontSize: "0.78rem", lineHeight: 1.6 }}
          >
            Na alopecia androgenética o folículo não morre de imediato: ele
            encolhe de forma invisível ao longo de anos. Intervir enquanto o
            folículo ainda está vivo é o pilar do acompanhamento na SmileSkin.
          </p>
        </div>
      </div>

      {/* Visualização */}
      <div className="lg:col-span-7">
        <div className="flex h-full flex-col rounded-[var(--radius-soft)] border border-line bg-paper p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line pb-4">
            <div>
              <span className="eyebrow text-ink-faint">Fase biológica ativa</span>
              <h3
                className="mt-1 font-display font-normal tracking-[-0.01em] text-ink"
                style={{ fontSize: "var(--text-h3)" }}
              >
                {info.fase}
              </h3>
            </div>
            <span className="rounded-full border border-line bg-paper-warm px-2.5 py-1 font-mono text-[0.64rem] uppercase tracking-[0.08em] text-pine">
              {info.duracao}
            </span>
          </div>

          <div className="relative my-5 flex flex-1 items-center justify-center rounded-[var(--radius-soft)] border border-line bg-paper-warm">
            <span className="absolute left-4 top-4 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ink-faint">
              Epiderme
            </span>
            <span className="absolute bottom-4 left-4 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ink-faint">
              Derme profunda
            </span>
            <svg
              viewBox="0 0 200 240"
              className="h-auto w-full max-w-[280px] py-4"
              role="img"
              aria-label={`Folículo capilar na fase ${info.fase}`}
            >
              <line
                x1="0"
                y1="60"
                x2="200"
                y2="60"
                stroke={C.surface}
                strokeWidth="2"
                strokeDasharray="4 2"
              />
              {info.svg}
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-4 rounded-[var(--radius-soft)] border border-line bg-paper-warm p-4">
            <div>
              <span className="block font-mono text-[0.62rem] uppercase tracking-[0.08em] text-ink-faint">
                Profundidade do bulbo
              </span>
              <span
                className="font-medium text-ink"
                style={{ fontSize: "var(--text-body-sm)" }}
              >
                {info.profundidade}
              </span>
            </div>
            <div>
              <span className="block font-mono text-[0.62rem] uppercase tracking-[0.08em] text-ink-faint">
                Espessura do fio
              </span>
              <span
                className="font-medium text-ink"
                style={{ fontSize: "var(--text-body-sm)" }}
              >
                {info.espessura}
              </span>
            </div>
            <div className="col-span-2 border-t border-line pt-3">
              <p
                className="text-ink-soft"
                style={{ fontSize: "0.78rem", lineHeight: 1.6 }}
              >
                {info.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Lógica de fase do ciclo — gera o SVG dinâmico do folículo. */
function getFase(progresso: number, mini: boolean, reduce: boolean): FaseInfo {
  const profMax = mini ? 130 : 185;
  const profMin = mini ? 95 : 115;
  const espessura = mini ? 1.6 : 5;
  const corFio = mini ? C.fioFino : C.fio;

  if (progresso < 40) {
    // Anágena — crescimento
    const r = progresso / 40;
    const bulbo = profMax;
    const topoMax = mini ? 40 : -40;
    const topo = profMax - r * (profMax - topoMax);
    return {
      fase: "Anágena · crescimento",
      duracao: mini ? "3 a 9 meses" : "2 a 7 anos",
      desc: "O bulbo está ancorado no fundo da derme e nutrido por uma rede vascular ativa. Sob miniaturização, esta fase encurta e o fio não chega a ganhar comprimento nem calibre.",
      profundidade: mini ? "Superficial" : "Profundo",
      espessura: mini ? "Fio fino (veloso)" : "Fio terminal espesso",
      progresso: Math.round(r * 100),
      svg: (
        <g>
          <path
            d={`M 85,222 Q 100,212 115,222 Q 100,206 100,${bulbo + 12}`}
            fill="none"
            stroke={C.vaso}
            strokeWidth="2.5"
            opacity={mini ? 0.4 : 1}
          />
          <circle
            cx="100"
            cy={bulbo + 10}
            r="5"
            fill={C.vaso}
            opacity={mini ? 0.5 : 1}
          />
          <path
            d={`M 90,60 C 90,90 85,130 85,${bulbo} C 85,${bulbo + 16} 115,${bulbo + 16} 115,${bulbo} C 115,130 110,90 110,60`}
            fill={C.canal}
            stroke={C.canalStroke}
            strokeWidth="1.5"
          />
          <ellipse
            cx="100"
            cy={bulbo}
            rx={mini ? 10 : 15}
            ry={mini ? 8 : 13}
            fill={C.bulbo}
            stroke={C.bulboStroke}
            strokeWidth="1.5"
          />
          {topo < bulbo && (
            <path
              d={`M 100,${bulbo} Q 98,${(bulbo + topo) / 2} 100,${topo}`}
              fill="none"
              stroke={corFio}
              strokeWidth={espessura}
              strokeLinecap="round"
            />
          )}
          {!mini && !reduce && (
            <g className="animate-pulse">
              <circle cx="98" cy={bulbo + 4} r="2.5" fill={C.vasoSoft} />
              <circle cx="102" cy={bulbo + 2} r="1.5" fill={C.vasoSoft} />
            </g>
          )}
        </g>
      ),
    };
  }

  if (progresso < 70) {
    // Catágena — regressão
    const r = (progresso - 40) / 30;
    const bulbo = profMax - r * (profMax - profMin);
    const topo = mini ? 40 : -40;
    const papilaY = profMax + 10;
    return {
      fase: "Catágena · regressão",
      duracao: "2 a 3 semanas",
      desc: "O crescimento cessa. O bulbo desliga-se do suprimento de sangue e regride para cima, enquanto a base da raiz se queratiniza e enrijece formando a clava.",
      profundidade: "Em ascensão",
      espessura: "Estável, sem nutrição",
      progresso: Math.round(r * 100),
      svg: (
        <g>
          <path
            d="M 85,222 Q 100,212 115,222"
            fill="none"
            stroke={C.inerte}
            strokeWidth="2"
          />
          <circle
            cx="100"
            cy={papilaY}
            r="3"
            fill={C.vasoSoft}
            opacity={0.6 - r * 0.4}
          />
          <line
            x1="100"
            y1={papilaY}
            x2="100"
            y2={bulbo + 8}
            stroke={C.inerte}
            strokeWidth="2"
            strokeDasharray="3 3"
          />
          <path
            d={`M 92,60 C 92,80 88,110 88,${bulbo} C 88,${bulbo + 10} 112,${bulbo + 10} 112,${bulbo} C 112,110 108,80 108,60`}
            fill={C.canal}
            stroke={C.canalStroke}
            strokeWidth="1"
          />
          <ellipse
            cx="100"
            cy={bulbo}
            rx={mini ? 8 : 11}
            ry={mini ? 6 : 9}
            fill={C.bulbo}
            stroke={C.inerte}
            strokeWidth="1"
          />
          <path
            d={`M 100,${bulbo} Q 98,${(bulbo + topo) / 2} 100,${topo}`}
            fill="none"
            stroke={corFio}
            strokeWidth={espessura}
            strokeLinecap="round"
          />
          <path
            d="M 100,206 L 100,196 M 97,200 L 100,196 L 103,200"
            fill="none"
            stroke={C.faint}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      ),
    };
  }

  // Telógena / exógena — repouso e queda
  const r = (progresso - 70) / 30;
  const bulbo = profMin;
  const topoInicial = mini ? 40 : -40;
  const queda = r > 0.7;
  const quedaR = queda ? (r - 0.7) / 0.3 : 0;
  const offset = queda ? quedaR * 120 : 0;
  const opac = queda ? 1 - quedaR : 1;
  const novoBulbo = profMax;
  const novoTopo = profMax - r * 20;

  return {
    fase: queda ? "Exógena · queda ativa" : "Telógena · repouso",
    duracao: "3 a 4 meses",
    desc: queda
      ? "O ciclo recomeça: um novo fio anágeno cresce na base profunda e empurra fisiologicamente o fio antigo para fora do poro, resultando na queda visível."
      : "O folículo permanece inativo e encolhido. O fio fica preso apenas por atrito na epiderme — qualquer escovação ou lavagem pode liberá-lo.",
    profundidade: "Muito superficial",
    espessura: 'Raiz seca (clava)',
    progresso: Math.round(r * 100),
    svg: (
      <g>
        <g opacity={r}>
          <circle cx="100" cy={novoBulbo + 10} r="4" fill={C.vaso} />
          <path
            d={`M 92,100 C 92,130 88,160 88,${novoBulbo} C 88,${novoBulbo + 8} 112,${novoBulbo + 8} 112,${novoBulbo} C 112,160 108,130 108,100`}
            fill={C.canal}
            stroke={C.canalStroke}
            strokeWidth="1"
            strokeDasharray="2 2"
          />
          <path
            d={`M 100,${novoBulbo} L 100,${novoTopo}`}
            fill="none"
            stroke={corFio}
            strokeWidth={espessura * 0.7}
            strokeLinecap="round"
          />
        </g>
        <path
          d={`M 92,60 C 92,75 90,95 90,${bulbo} C 90,${bulbo + 8} 110,${bulbo + 8} 110,${bulbo} C 110,95 108,75 108,60`}
          fill={C.canal}
          stroke={C.canalStroke}
          strokeWidth="1"
        />
        <circle
          cx="100"
          cy={bulbo - offset}
          r={mini ? 5 : 8}
          fill={C.clava}
          stroke={C.inerte}
          strokeWidth="1.5"
          opacity={opac}
        />
        <path
          d={`M 100,${bulbo - offset} Q 98,${(bulbo + topoInicial - offset * 2) / 2} 100,${topoInicial - offset}`}
          fill="none"
          stroke={C.fioFino}
          strokeWidth={espessura}
          strokeLinecap="round"
          opacity={opac}
        />
        {queda && (
          <g opacity={opac}>
            <path
              d="M 116,32 l 7,-5 M 116,27 l 5,3"
              stroke={C.vaso}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        )}
      </g>
    ),
  };
}
