import { Container } from "./Container";

/**
 * Divisor ornamental — linha ondulada com ponto central, entre réguas
 * em degradê. Respiração editorial entre seções (padrão do DNA SmileSkin).
 */
export function Divisor() {
  return (
    <Container>
      <div className="flex items-center justify-center gap-5 py-2 text-champagne-dark">
        <span
          aria-hidden
          className="h-px max-w-[90px] flex-1"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-champagne) 50%, transparent)",
          }}
        />
        <svg
          width="34"
          height="13"
          viewBox="0 0 34 13"
          fill="none"
          aria-hidden
          className="shrink-0"
        >
          <path
            d="M2 6.5 Q8.5 0.5, 17 6.5 T32 6.5"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="17" cy="6.5" r="1.7" fill="currentColor" />
        </svg>
        <span
          aria-hidden
          className="h-px max-w-[90px] flex-1"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-champagne) 50%, transparent)",
          }}
        />
      </div>
    </Container>
  );
}
