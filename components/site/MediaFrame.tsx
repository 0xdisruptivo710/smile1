import { cn } from "@/lib/utils";
import { PlayIcon } from "./icons";

interface MediaFrameProps {
  label: string;
  className?: string;
  /** Classe de proporção (ex.: aspect-video, aspect-[4/5]). */
  ratio?: string;
}

/** Marca de canto, estilo registro fotográfico. */
function Corner({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute h-3.5 w-3.5 border-line-strong",
        className,
      )}
    />
  );
}

/**
 * Moldura desenhada para mídia que entra depois (vídeo, tricoscopia).
 * Intencional e elegante — nunca uma caixa cinza vazia.
 */
export function MediaFrame({
  label,
  className,
  ratio = "aspect-video",
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-[var(--radius-soft)] border border-line bg-paper-warm",
        ratio,
        className,
      )}
    >
      <Corner className="left-3 top-3 border-l border-t" />
      <Corner className="right-3 top-3 border-r border-t" />
      <Corner className="bottom-3 left-3 border-b border-l" />
      <Corner className="bottom-3 right-3 border-b border-r" />
      <div className="flex flex-col items-center gap-3 px-6 text-center text-ink-faint">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line-strong text-pine">
          <PlayIcon />
        </span>
        <span className="eyebrow text-ink-faint">{label}</span>
      </div>
    </div>
  );
}
