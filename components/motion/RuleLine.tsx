"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RuleLineProps {
  className?: string;
  /** Cor da régua via classe de fundo (ex.: bg-line). */
  tone?: string;
  delay?: number;
}

/** Régua hairline que "desenha" da esquerda para a direita ao entrar na viewport. */
export function RuleLine({
  className,
  tone = "bg-line",
  delay = 0,
}: RuleLineProps) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      aria-hidden
      className={cn("block h-px w-full origin-left", tone, className)}
      initial={{ scaleX: reduce ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: reduce ? 0.2 : 0.9,
        delay: reduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    />
  );
}
