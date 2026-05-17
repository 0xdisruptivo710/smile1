"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  /** Atraso em segundos para reveals em stagger. */
  delay?: number;
  /** Distância inicial do deslocamento vertical, em px. */
  shift?: number;
}

/**
 * Revela o conteúdo ao entrar na viewport: fade + leve subida.
 * Respeita prefers-reduced-motion (vira fade simples, sem deslocamento).
 */
export function Reveal({
  children,
  delay = 0,
  shift = 20,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : shift }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{
        duration: reduce ? 0.2 : 0.7,
        delay: reduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
