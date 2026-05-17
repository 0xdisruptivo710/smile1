import { RuleLine } from "@/components/motion/RuleLine";
import { Reveal } from "@/components/motion/Reveal";
import { StrandSection } from "./Glyphs";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  numero: string;
  label: string;
  /** Verdadeiro quando a seção tem fundo escuro. */
  dark?: boolean;
}

/** Abertura de seção: número, label mono, régua e marca de tricologia. */
export function SectionHeader({ numero, label, dark }: SectionHeaderProps) {
  return (
    <Reveal className="flex items-center gap-4 sm:gap-6">
      <span
        className={cn(
          "font-display font-normal leading-none",
          dark ? "text-pine-soft" : "text-pine",
        )}
        style={{ fontSize: "var(--text-h3)" }}
      >
        {numero}
      </span>
      <span
        className={cn(
          "whitespace-nowrap font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.18em]",
          dark ? "text-pine-soft" : "text-pine",
        )}
      >
        {label}
      </span>
      <span className="flex-1">
        <RuleLine tone={dark ? "bg-paper/20" : "bg-line-strong"} delay={0.15} />
      </span>
      <StrandSection
        strokeWidth={2}
        className={cn(
          "h-6 w-6 shrink-0",
          dark ? "text-pine-soft" : "text-pine",
        )}
      />
    </Reveal>
  );
}
