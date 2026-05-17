"use client";

import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PlayIcon } from "./icons";

interface VideoPlayerProps {
  src: string;
  poster: string;
  /** "ambient" toca em loop, sem som; "player" exige clique e tem som. */
  mode?: "ambient" | "player";
  className?: string;
  /** Legenda mono opcional sobreposta. */
  label?: string;
}

export function VideoPlayer({
  src,
  poster,
  mode = "player",
  className,
  label,
}: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [tocando, setTocando] = useState(false);
  const reduce = useReducedMotion();

  // Com motion reduzido, o vídeo ambiente vira clique-para-tocar.
  const ambiente = mode === "ambient" && !reduce;

  function iniciar() {
    const v = ref.current;
    if (!v) return;
    v.play();
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-soft)] border border-line bg-paper-deep",
        className,
      )}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        playsInline
        muted={ambiente}
        loop={ambiente}
        autoPlay={ambiente}
        controls={!ambiente && tocando}
        preload={ambiente ? "metadata" : "none"}
        onPlay={() => setTocando(true)}
        onPause={() => setTocando(false)}
        className="h-full w-full object-cover"
      />

      {/* Camada de play — só no modo player, antes de tocar */}
      {!ambiente && !tocando && (
        <button
          type="button"
          onClick={iniciar}
          aria-label="Reproduzir vídeo"
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-ink/35 transition-colors duration-300 hover:bg-ink/45"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-paper text-pine shadow-[0_12px_30px_-12px_oklch(0.248_0.018_58/0.7)] transition-transform duration-300 group-hover:scale-105">
            <PlayIcon className="h-7 w-7" />
          </span>
          {label && (
            <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.16em] text-paper">
              {label}
            </span>
          )}
        </button>
      )}

      {/* Legenda discreta para o modo ambiente */}
      {ambiente && label && (
        <span className="absolute bottom-3 left-3 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-paper/85">
          {label}
        </span>
      )}
    </div>
  );
}
