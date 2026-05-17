/**
 * Camada de fundo fixa: grade de calibração científica + grão fino.
 * Fica atrás de todo o conteúdo; aparece nas seções de fundo transparente.
 */
export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
    >
      <div className="sci-grid absolute inset-0" />
      <div className="grain absolute inset-0" />
      {/* leve aquecimento radial nos cantos */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 55%, oklch(0.893 0.02 77 / 0.5) 100%)",
        }}
      />
    </div>
  );
}
