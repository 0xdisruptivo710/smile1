import { cn } from "@/lib/utils";

interface MarginNoteProps {
  text: string;
  side?: "left" | "right";
  /** Posição vertical via classe utilitária (ex.: top-40, bottom-32). */
  className?: string;
  dark?: boolean;
}

/**
 * Anotação científica vertical, fixada na margem da seção.
 * Só aparece em telas largas, onde há espaço fora do conteúdo.
 */
export function MarginNote({
  text,
  side = "left",
  className,
  dark,
}: MarginNoteProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute hidden font-mono text-[0.62rem] uppercase tracking-[0.34em] xl:block",
        dark ? "text-paper/35" : "text-ink-faint",
        side === "left" ? "left-5" : "right-5",
        className,
      )}
      style={{
        writingMode: "vertical-rl",
        transform: side === "left" ? "rotate(180deg)" : undefined,
      }}
    >
      {text}
    </span>
  );
}
