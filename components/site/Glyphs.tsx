/**
 * Glifos de tricologia — ilustrações de linha fina usadas como
 * assinatura visual e ornamento. Todas herdam currentColor.
 */

interface GlyphProps {
  className?: string;
  strokeWidth?: number;
}

/** Folículo piloso em corte: haste, canal folicular, bulbo e papila dérmica. */
export function FollicleGlyph({ className, strokeWidth = 1.4 }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 90 240"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* superfície do couro cabeludo */}
      <path d="M6 96 H32 M58 96 H84" />
      {/* haste do fio */}
      <path d="M45 12 C52 42 38 68 45 96 C51 124 41 158 45 192" />
      {/* parede do folículo */}
      <path d="M32 96 C28 132 27 162 36 198 C40 216 50 216 54 198 C61 162 62 132 58 96" />
      {/* papila dérmica */}
      <path d="M38 202 C41 192 49 192 52 202" />
      {/* glândula sebácea */}
      <circle cx="67" cy="120" r="3.4" />
      <circle cx="73" cy="129" r="3.4" />
      <circle cx="65" cy="132" r="3.4" />
    </svg>
  );
}

/** Corte transversal do fio: cutícula, córtex e medula. */
export function StrandSection({ className, strokeWidth = 1.4 }: GlyphProps) {
  const ticks = Array.from({ length: 20 }, (_, i) => {
    const a = (i / 20) * Math.PI * 2;
    const r1 = 40;
    const r2 = 46;
    return {
      x1: 50 + Math.cos(a) * r1,
      y1: 50 + Math.sin(a) * r1,
      x2: 50 + Math.cos(a) * r2,
      y2: 50 + Math.sin(a) * r2,
    };
  });
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      {ticks.map((t, i) => (
        <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} />
      ))}
      <circle cx="50" cy="50" r="40" />
      <circle cx="50" cy="50" r="25" />
      <circle cx="50" cy="50" r="9" />
    </svg>
  );
}

/** Ciclo capilar: anágena, catágena, telógena — anel com três fases. */
export function CycleGlyph({ className, strokeWidth = 1.4 }: GlyphProps) {
  const nodes = [-90, 30, 150].map((deg) => {
    const a = (deg * Math.PI) / 180;
    return { x: 50 + Math.cos(a) * 36, y: 50 + Math.sin(a) * 36 };
  });
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="50" cy="50" r="36" strokeDasharray="3 7" />
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="5.5" fill="currentColor" stroke="none" />
      ))}
      <circle cx="50" cy="50" r="14" />
    </svg>
  );
}
