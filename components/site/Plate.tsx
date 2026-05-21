import Image from "next/image";
import { cn } from "@/lib/utils";

interface PlateProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Legenda mono opcional, sobreposta na base. */
  caption?: string;
}

/**
 * Foto de couro cabeludo com tratamento warm-duotone: a imagem em
 * escala de cinza recebe um viés sépia quente e uma sombra inferior.
 * Transforma o registro clínico em fotografia atmosférica.
 */
export function Plate({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 50vw, 33vw",
  priority,
  caption,
}: PlateProps) {
  return (
    <div
      className={cn("group relative overflow-hidden bg-paper-deep", className)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
      />
      {caption && (
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-graphite/55 to-transparent"
        />
      )}
      {caption && (
        <span className="absolute bottom-3 left-3 font-mono text-[0.66rem] tracking-[0.16em] text-paper/90">
          {caption}
        </span>
      )}
    </div>
  );
}
