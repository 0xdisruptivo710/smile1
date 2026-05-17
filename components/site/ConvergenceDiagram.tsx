"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const NODE = { x: 566, y: 210, r: 52 };

const fatores = [
  { label: "Genética", y: 44 },
  { label: "Hormônios", y: 110 },
  { label: "Emocional", y: 177 },
  { label: "Nutrição", y: 243 },
  { label: "Sistêmico", y: 310 },
  { label: "Couro cabeludo", y: 376 },
];

function caminho(y: number) {
  return `M 196 ${y} C 372 ${y}, 420 ${NODE.y}, ${NODE.x - NODE.r} ${NODE.y}`;
}

/**
 * Diagrama de convergência: vários fatores fluem para um único ponto.
 * Prova visual da tese multifatorial. Desenha no scroll; destaca no hover.
 */
export function ConvergenceDiagram() {
  const [ativo, setAtivo] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
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
            onMouseLeave={() => setAtivo(null)}
            style={{ cursor: "default" }}
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
  );
}
