import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhotoProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Legenda mono opcional, sobreposta na base. */
  caption?: string;
  /** Marcas de canto, estilo registro clínico. */
  marks?: boolean;
  /** Verdadeiro quando a foto fica sobre fundo escuro. */
  dark?: boolean;
}

/** Marca de canto fina — registro fotográfico. */
function Corner({ className, tone }: { className: string; tone: string }) {
  return (
    <span
      aria-hidden
      className={cn("absolute h-3.5 w-3.5", tone, className)}
    />
  );
}

/**
 * Fotografia clínica em cor natural — atendimento, equipamento, tricoscopia.
 * Diferente de <Plate/>, que aplica duotone aos registros de couro cabeludo:
 * aqui a imagem mantém a cor, com moldura discreta e leve sombra para a legenda.
 */
export function Photo({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
  caption,
  marks,
  dark,
}: PhotoProps) {
  const corner = dark ? "border-paper/30" : "border-line-strong";
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-soft)] border",
        dark ? "border-paper/12 bg-ink" : "border-line bg-paper-deep",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-graphite/55"
      />
      {marks && (
        <>
          <Corner className="left-2.5 top-2.5 border-l border-t" tone={corner} />
          <Corner className="right-2.5 top-2.5 border-r border-t" tone={corner} />
          <Corner
            className="bottom-2.5 left-2.5 border-b border-l"
            tone={corner}
          />
          <Corner
            className="bottom-2.5 right-2.5 border-b border-r"
            tone={corner}
          />
        </>
      )}
      {caption && (
        <span className="absolute bottom-3 left-3.5 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-paper/90">
          {caption}
        </span>
      )}
    </div>
  );
}
