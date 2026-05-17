"use client";

import { useRef, useState, type ReactNode } from "react";
import { Search } from "./icons";
import { cn } from "@/lib/utils";

type ZonaId = "frontal" | "vertex" | "occipital" | "couro";

interface Achado {
  tipo: string;
  texto: string;
  cor: string;
}

interface Zona {
  id: ZonaId;
  nome: string;
  selo: string;
  titulo: string;
  descricao: string;
  macro: string;
  achados: Achado[];
}

const ZONAS: Zona[] = [
  {
    id: "frontal",
    nome: "Zona frontal",
    selo: "Androgênica",
    titulo: "Zona frontal · linha de recuo",
    descricao:
      "Área sensível à ação hormonal (DHT). Ideal para observar os primeiros sinais de recuo das entradas.",
    macro: "Vista macro: recuo leve nas entradas bilaterais.",
    achados: [
      {
        tipo: "Miniaturização",
        texto:
          "Fios muito finos e curtos misturados a fios espessos no mesmo campo.",
        cor: "#c98a3e",
      },
      {
        tipo: "Unidades foliculares",
        texto:
          "Predomínio de 1 fio por unidade folicular, quando o normal são 2 a 3.",
        cor: "#bd5b48",
      },
      {
        tipo: "Pontos amarelos",
        texto:
          "Folículos vazios em repouso prolongado, visíveis como pequenos halos.",
        cor: "#b08c49",
      },
    ],
  },
  {
    id: "vertex",
    nome: "Vértice (coroa)",
    selo: "Rarefação",
    titulo: "Vértice · coroa da cabeça",
    descricao:
      "Topo da cabeça onde a perda de densidade costuma criar uma abertura circular progressiva.",
    macro: "Vista macro: rarefação visível sob luz direta.",
    achados: [
      {
        tipo: "Anisotricose",
        texto:
          "Grande variação no diâmetro de fios vizinhos, sinal clássico de calvície.",
        cor: "#c98a3e",
      },
      {
        tipo: "Pontos brancos",
        texto:
          "Pequenas áreas de fibrose onde o folículo cicatrizou e não produz mais fio.",
        cor: "#8a7f70",
      },
      {
        tipo: "Sinal peripilar",
        texto:
          "Halos acastanhados ao redor do poro indicando inflamação local ativa.",
        cor: "#bd5b48",
      },
    ],
  },
  {
    id: "occipital",
    nome: "Zona occipital",
    selo: "Zona saudável",
    titulo: "Zona occipital · doadora",
    descricao:
      "Região posterior, geneticamente protegida da calvície padrão. Serve de base de comparação saudável.",
    macro: "Vista macro: densidade robusta e fios uniformes.",
    achados: [
      {
        tipo: "Densidade ideal",
        texto:
          "Alta concentração de folículos por cm² com distribuição harmoniosa.",
        cor: "#5f7d52",
      },
      {
        tipo: "Unidades triplas",
        texto:
          "Predomínio de grupos com 3 a 4 fios espessos saindo do mesmo poro.",
        cor: "#5f7d52",
      },
      {
        tipo: "Couro saudável",
        texto:
          "Tom marfim uniforme, sem vermelhidão ou descamação visíveis.",
        cor: "#7a6f5c",
      },
    ],
  },
  {
    id: "couro",
    nome: "Saúde do couro",
    selo: "Solo clínico",
    titulo: "Solo clínico · oleosidade e descamação",
    descricao:
      "Análise do ambiente onde o fio nasce. Inflamação e descamação sufocam o crescimento saudável.",
    macro: "Vista macro: brilho excessivo e leve descamação.",
    achados: [
      {
        tipo: "Descamação perifolicular",
        texto: "Acúmulo de sebo seco ao redor da base dos fios.",
        cor: "#c98a3e",
      },
      {
        tipo: "Eritema",
        texto:
          "Microcirculação congestionada indicando processo inflamatório ou sensibilidade.",
        cor: "#bd5b48",
      },
      {
        tipo: "Hiperprodução sebácea",
        texto: "Glândulas sebáceas hiperativas obstruindo os poros capilares.",
        cor: "#b08c49",
      },
    ],
  },
];

/* Vista microscópica desenhada por zona — exibida dentro da lente. */
function vistaMicro(zona: ZonaId): ReactNode {
  if (zona === "occipital") {
    return (
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <rect width="200" height="200" fill="#f4ede0" />
        <circle cx="100" cy="100" r="95" fill="none" stroke="#ddd2bd" />
        {[
          [60, 50],
          [140, 90],
          [50, 130],
          [110, 150],
        ].map(([x, y], i) => (
          <g key={i} transform={`translate(${x}, ${y})`}>
            <ellipse cx="0" cy="0" rx="6" ry="4" fill="#dccbb0" />
            <path
              d="M 0 0 C 10 -20 25 -50 45 -80"
              fill="none"
              stroke="#2e2a24"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <path
              d="M -2 -1 C 5 -18 15 -42 30 -72"
              fill="none"
              stroke="#2e2a24"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <path
              d="M 2 1 C 12 -15 30 -38 55 -68"
              fill="none"
              stroke="#2e2a24"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        ))}
        <circle cx="26" cy="26" r="13" fill="#e4ebdc" />
        <text
          x="26"
          y="30"
          textAnchor="middle"
          fill="#5f7d52"
          fontSize="10"
          fontWeight="bold"
        >
          OK
        </text>
      </svg>
    );
  }

  if (zona === "frontal") {
    return (
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <rect width="200" height="200" fill="#f4ede0" />
        <circle cx="100" cy="100" r="95" fill="none" stroke="#ddd2bd" />
        <circle cx="100" cy="100" r="9" fill="#f0d99a" opacity="0.7" />
        <ellipse cx="100" cy="100" rx="4" ry="2" fill="#c98a3e" opacity="0.5" />
        <circle cx="52" cy="52" r="7" fill="#f0d99a" opacity="0.6" />
        <g transform="translate(100, 100)">
          <path
            d="M 0 0 C 5 -10 12 -22 18 -35"
            fill="none"
            stroke="#a99d8a"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="1 1"
          />
        </g>
        <g transform="translate(62, 120)">
          <ellipse cx="0" cy="0" rx="5" ry="3" fill="#dccbb0" />
          <path
            d="M 0 0 C 10 -20 22 -45 35 -70"
            fill="none"
            stroke="#2e2a24"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M -2 -1 C 2 -10 6 -20 8 -30"
            fill="none"
            stroke="#a99d8a"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </g>
        <g transform="translate(140, 62)">
          <ellipse cx="0" cy="0" rx="4" ry="2.5" fill="#dccbb0" />
          <path
            d="M 0 0 C 12 -18 22 -38 30 -60"
            fill="none"
            stroke="#2e2a24"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </g>
        <text
          x="100"
          y="118"
          textAnchor="middle"
          fill="#b08c49"
          fontSize="8"
          fontWeight="bold"
        >
          Ponto amarelo
        </text>
      </svg>
    );
  }

  if (zona === "vertex") {
    return (
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <rect width="200" height="200" fill="#f4ede0" />
        <circle cx="100" cy="100" r="95" fill="none" stroke="#ddd2bd" />
        <circle cx="80" cy="72" r="30" fill="#eccdbf" opacity="0.6" />
        <circle cx="130" cy="130" r="25" fill="#eccdbf" opacity="0.5" />
        <g transform="translate(60, 70)">
          <ellipse cx="0" cy="0" rx="4" ry="2.5" fill="#dccbb0" />
          <path
            d="M 0 0 C 10 -20 20 -40 28 -60"
            fill="none"
            stroke="#5a5247"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <g transform="translate(100, 110)">
          <ellipse
            cx="0"
            cy="0"
            rx="4"
            ry="2.5"
            fill="#e8c0b2"
            stroke="#bd5b48"
            strokeWidth="0.6"
          />
          <circle
            cx="0"
            cy="0"
            r="6"
            fill="none"
            stroke="#bd5b48"
            strokeWidth="1"
            opacity="0.5"
          />
          <path
            d="M 0 0 C 8 -18 18 -42 25 -65"
            fill="none"
            stroke="#2e2a24"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </g>
        <g transform="translate(140, 80)">
          <ellipse cx="0" cy="0" rx="3" ry="1.5" fill="#dccbb0" />
          <path
            d="M 0 0 C 5 -12 10 -25 12 -40"
            fill="none"
            stroke="#a99d8a"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
        </g>
        <circle
          cx="130"
          cy="140"
          r="6"
          fill="#faf7f2"
          stroke="#ddd2bd"
          strokeWidth="1"
        />
        <text
          x="100"
          y="128"
          textAnchor="middle"
          fill="#bd5b48"
          fontSize="8"
          fontWeight="bold"
        >
          Sinal peripilar
        </text>
      </svg>
    );
  }

  // couro — solo clínico
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full">
      <rect width="200" height="200" fill="#f3e9d3" />
      <circle cx="100" cy="100" r="95" fill="none" stroke="#dccdb0" />
      {[
        "M 10 30 Q 30 50 70 20 T 130 60",
        "M 40 160 Q 80 120 120 180 T 170 140",
        "M 15 100 Q 60 70 110 110 T 185 90",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="#cf7a68"
          strokeWidth="1.2"
          opacity="0.8"
        />
      ))}
      <g transform="translate(65, 120)">
        <ellipse
          cx="0"
          cy="0"
          rx="9"
          ry="5"
          fill="#f0d99a"
          stroke="#c98a3e"
          strokeWidth="1"
        />
        <path
          d="M 0 0 C 10 -25 20 -50 30 -75"
          fill="none"
          stroke="#2e2a24"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M -3 1 C 4 -22 10 -45 15 -68"
          fill="none"
          stroke="#2e2a24"
          strokeWidth="2.7"
          strokeLinecap="round"
        />
      </g>
      <g transform="translate(130, 78)">
        <ellipse
          cx="0"
          cy="0"
          rx="8"
          ry="4.5"
          fill="#f0d99a"
          stroke="#c98a3e"
          strokeWidth="1"
        />
        <path
          d="M 0 0 C 15 -15 25 -35 30 -55"
          fill="none"
          stroke="#2e2a24"
          strokeWidth="2.9"
          strokeLinecap="round"
        />
      </g>
      <text
        x="65"
        y="136"
        textAnchor="middle"
        fill="#a07a36"
        fontSize="8"
        fontWeight="bold"
      >
        Descamação
      </text>
      <text
        x="132"
        y="56"
        textAnchor="middle"
        fill="#bd5b48"
        fontSize="8"
        fontWeight="bold"
      >
        Eritema
      </text>
    </svg>
  );
}

export function Tricoscopia() {
  const [zonaId, setZonaId] = useState<ZonaId>("frontal");
  const [lente, setLente] = useState({ x: 50, y: 50 });
  const [ativo, setAtivo] = useState(false);
  const areaRef = useRef<HTMLDivElement>(null);

  const zona = ZONAS.find((z) => z.id === zonaId) ?? ZONAS[0];

  function mover(clientX: number, clientY: number) {
    const el = areaRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setLente({
      x: Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)),
      y: Math.max(0, Math.min(100, ((clientY - r.top) / r.height) * 100)),
    });
  }

  return (
    <div className="rounded-[var(--radius-soft)] border border-line bg-paper-warm p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line pb-5">
        <div>
          <span className="eyebrow text-ink-faint">
            Tricoscopia · microscópio virtual
          </span>
          <h3
            className="mt-1 font-display font-normal tracking-[-0.01em] text-ink"
            style={{ fontSize: "var(--text-h3)" }}
          >
            Explore o couro cabeludo de perto
          </h3>
        </div>
        <span className="rounded-full border border-line bg-paper px-2.5 py-1 font-mono text-[0.64rem] uppercase tracking-[0.08em] text-pine">
          Ampliação 60×
        </span>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Seletor de zonas */}
        <div className="flex flex-col gap-2.5 lg:col-span-4">
          {ZONAS.map((z) => (
            <button
              key={z.id}
              type="button"
              onClick={() => setZonaId(z.id)}
              className={cn(
                "flex items-center justify-between gap-3 rounded-[var(--radius-soft)] border px-4 py-3.5 text-left transition-colors",
                z.id === zonaId
                  ? "border-pine bg-pine-wash"
                  : "border-line bg-paper hover:border-pine",
              )}
            >
              <span
                className="font-medium text-ink"
                style={{ fontSize: "var(--text-body-sm)" }}
              >
                {z.nome}
              </span>
              <span
                className={cn(
                  "shrink-0 rounded-full px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.06em]",
                  z.id === zonaId
                    ? "bg-pine text-paper"
                    : "bg-paper-warm text-ink-faint",
                )}
              >
                {z.selo}
              </span>
            </button>
          ))}
          <p
            className="mt-2 rounded-[var(--radius-soft)] border border-line bg-paper p-4 text-ink-soft"
            style={{ fontSize: "0.76rem", lineHeight: 1.6 }}
          >
            A tricoscopia é um exame não invasivo que amplia o couro cabeludo em
            até 120×. Permite ver a qualidade de cada folículo antes que o fio
            caia em definitivo.
          </p>
        </div>

        {/* Simulador + achados */}
        <div className="lg:col-span-8">
          <div className="mb-4">
            <h4
              className="font-display font-normal tracking-[-0.01em] text-ink"
              style={{ fontSize: "var(--text-body)" }}
            >
              {zona.titulo}
            </h4>
            <p
              className="mt-1 text-ink-soft"
              style={{ fontSize: "var(--text-body-sm)" }}
            >
              {zona.descricao}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
            {/* Área interativa */}
            <div className="flex flex-col items-center">
              <span className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-ink-faint">
                Mova o cursor para focar
              </span>
              <div
                ref={areaRef}
                onMouseMove={(e) => mover(e.clientX, e.clientY)}
                onMouseEnter={() => setAtivo(true)}
                onMouseLeave={() => setAtivo(false)}
                onTouchStart={() => setAtivo(true)}
                onTouchMove={(e) => {
                  const t = e.touches[0];
                  if (t) mover(t.clientX, t.clientY);
                }}
                className="relative aspect-square w-full max-w-[260px] cursor-crosshair overflow-hidden rounded-full border border-line-strong bg-paper"
              >
                <div
                  className="absolute inset-0 opacity-[0.18]"
                  style={{
                    backgroundImage:
                      "radial-gradient(#d6cab1 1.2px, transparent 1.2px)",
                    backgroundSize: "16px 16px",
                  }}
                />
                <div className="absolute inset-0 flex flex-wrap content-around justify-around p-4">
                  {Array.from({ length: 44 }).map((_, i) => (
                    <span
                      key={i}
                      className="block w-[3px] rounded-full bg-ink"
                      style={{
                        height: "44px",
                        transform: `rotate(${((i * 13) % 25) - 12.5}deg) scaleY(${((i * 7) % 5) / 10 + 0.6})`,
                        opacity:
                          zonaId === "occipital"
                            ? 0.78
                            : zonaId === "couro"
                              ? 0.6
                              : 0.4,
                      }}
                    />
                  ))}
                </div>

                {/* Lente */}
                <div
                  className="pointer-events-none absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-pine bg-paper"
                  style={{
                    left: `${lente.x}%`,
                    top: `${lente.y}%`,
                    boxShadow: "0 0 22px oklch(0.5 0.06 75 / 0.3)",
                  }}
                >
                  <div className="h-full w-full scale-110">
                    {vistaMicro(zonaId)}
                  </div>
                </div>

                {!ativo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-graphite/10">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pine text-paper shadow-lg">
                      <Search />
                    </span>
                  </div>
                )}
              </div>
              <span
                className="mt-3 text-center italic text-ink-faint"
                style={{ fontSize: "0.72rem" }}
              >
                {zona.macro}
              </span>
            </div>

            {/* Achados clínicos */}
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-ink-faint">
                Principais achados clínicos
              </span>
              {zona.achados.map((a) => (
                <div
                  key={a.tipo}
                  className="flex items-start gap-3 rounded-[var(--radius-soft)] border border-line bg-paper p-3.5"
                >
                  <span
                    className="mt-1 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: a.cor }}
                    aria-hidden
                  />
                  <span>
                    <span
                      className="block font-medium text-ink"
                      style={{ fontSize: "var(--text-body-sm)" }}
                    >
                      {a.tipo}
                    </span>
                    <span
                      className="mt-0.5 block text-ink-soft"
                      style={{ fontSize: "0.74rem", lineHeight: 1.55 }}
                    >
                      {a.texto}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
