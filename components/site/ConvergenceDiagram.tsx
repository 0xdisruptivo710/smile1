"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const NODE = { x: 566, y: 210, r: 52 };

const fatores = [
  {
    label: "Genética",
    y: 44,
    explicacao:
      "Folículos sensíveis a hormônios miniaturizam de forma progressiva. Cada novo ciclo nasce um fio mais fino e mais curto, até o folículo entrar em repouso. Comum — mas raramente age sozinha.",
  },
  {
    label: "Hormônios",
    y: 110,
    explicacao:
      "Tireoide, pós-parto, menopausa, ovário policístico. Quando o eixo hormonal se desorganiza, a fase de crescimento encurta e a queda aparece semanas depois do gatilho, dificultando associar causa e efeito.",
  },
  {
    label: "Emocional",
    y: 177,
    explicacao:
      "Estresse agudo, luto e burnout sincronizam vários folículos na fase de queda ao mesmo tempo. O eflúvio costuma surgir dois a três meses depois do evento e tende a ser reversível quando o gatilho é reconhecido.",
  },
  {
    label: "Nutrição",
    y: 243,
    explicacao:
      "Dietas restritivas e perda de peso acelerada privam o fio de proteína e micronutrientes. Ferro, vitamina D, zinco e ferritina aparecem com frequência no centro do quadro — correção costuma ser feita com nutrição.",
  },
  {
    label: "Sistêmico",
    y: 310,
    explicacao:
      "Quadros febris, infecções relevantes (incluindo covid) e doenças sistêmicas funcionam como choque para o ciclo capilar. A queda costuma aparecer bem depois da recuperação, e só a linha do tempo da anamnese conecta os pontos.",
  },
  {
    label: "Couro cabeludo",
    y: 376,
    explicacao:
      "Inflamação, dermatite seborreica, oleosidade excessiva e desequilíbrio do microbioma comprometem o ambiente onde o fio nasce. Antes de pensar no fio, é preciso olhar o solo — o microambiente folicular é a primeira frente.",
  },
];

function caminho(y: number) {
  return `M 196 ${y} C 372 ${y}, 420 ${NODE.y}, ${NODE.x - NODE.r} ${NODE.y}`;
}

/**
 * Diagrama de convergência: vários fatores fluem para um único ponto.
 * Prova visual da tese multifatorial. Desenha no scroll; destaca no hover/tap
 * e abre o detalhe técnico do fator selecionado.
 */
export function ConvergenceDiagram() {
  const [ativo, setAtivo] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const fatorAtivo = ativo !== null ? fatores[ativo] : null;

  return (
    <div className="relative">
    <svg
      viewBox="0 0 760 420"
      className="h-auto w-full"
      role="img"
      aria-label="Diagrama: múltiplos fatores convergindo para a queda capilar"
    >
      {fatores.map((f, i) => {
        const on = ativo === i;
        return (
          <g
            key={f.label}
            onMouseEnter={() => setAtivo(i)}
            onMouseLeave={() => setAtivo((v) => (v === i ? null : v))}
            onClick={() => setAtivo((v) => (v === i ? null : i))}
            tabIndex={0}
            onFocus={() => setAtivo(i)}
            onBlur={() => setAtivo((v) => (v === i ? null : v))}
            role="button"
            aria-label={`Saiba mais sobre o fator ${f.label}`}
            style={{ cursor: "pointer", outline: "none" }}
          >
            {/* área de hover */}
            <rect x="0" y={f.y - 26} width="210" height="52" fill="transparent" />
            <motion.path
              d={caminho(f.y)}
              fill="none"
              stroke={on ? "var(--color-pine)" : "var(--color-line-strong)"}
              strokeWidth={on ? 2.4 : 1.2}
              initial={{ pathLength: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{
                duration: reduce ? 0.2 : 1.1,
                delay: reduce ? 0 : 0.15 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
            <motion.circle
              cx="196"
              cy={f.y}
              r={on ? 6 : 4.5}
              fill={on ? "var(--color-pine)" : "var(--color-line-strong)"}
              initial={{ opacity: reduce ? 1 : 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : 0.15 * i + 0.3 }}
            />
            <text
              x="172"
              y={f.y + 5}
              textAnchor="end"
              className="font-mono"
              fontSize="15"
              letterSpacing="0.02em"
              fill={on ? "var(--color-pine)" : "var(--color-ink)"}
            >
              {f.label}
            </text>
          </g>
        );
      })}

      {/* nó central */}
      <motion.g
        initial={{ scale: reduce ? 1 : 0.6, opacity: reduce ? 1 : 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: reduce ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: `${NODE.x}px ${NODE.y}px` }}
      >
        <circle
          cx={NODE.x}
          cy={NODE.y}
          r={NODE.r + 12}
          fill="none"
          stroke="var(--color-line)"
          strokeWidth="1"
        />
        <circle
          cx={NODE.x}
          cy={NODE.y}
          r={NODE.r}
          fill="var(--color-champagne)"
        />
        <text
          x={NODE.x}
          y={NODE.y - 3}
          textAnchor="middle"
          className="font-display font-normal"
          fontSize="23"
          fill="var(--color-graphite)"
        >
          A sua
        </text>
        <text
          x={NODE.x}
          y={NODE.y + 23}
          textAnchor="middle"
          className="font-display font-normal"
          fontSize="23"
          fill="var(--color-graphite)"
        >
          queda
        </text>
      </motion.g>
    </svg>

    {/* Painel de explicação técnica do fator ativo */}
    <div
      className="mt-6 min-h-[7.5rem] rounded-[var(--radius-soft)] border border-line bg-paper-warm p-5 sm:p-6"
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        {fatorAtivo ? (
          <motion.div
            key={fatorAtivo.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">Fator · {fatorAtivo.label}</span>
            <p
              className="mt-2 max-w-[72ch] text-ink-soft"
              style={{ fontSize: "var(--text-body)" }}
            >
              {fatorAtivo.explicacao}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="eyebrow text-ink-faint">
              Passe o cursor ou toque em um fator
            </span>
            <p
              className="mt-2 max-w-[60ch] text-ink-faint"
              style={{ fontSize: "var(--text-body)" }}
            >
              Cada fator carrega um mecanismo biológico distinto. Selecione um nome
              à esquerda para ver o que ele costuma fazer com o ciclo capilar.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
}
