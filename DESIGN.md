# Design

Sistema visual da landing page da SmileSkin — instituto de tricologia
clínica. Direção: **Instituto** — claro, quente, editorial, premium.

## Visual Theme

Tema **claro e quente**. Frase de cena: *alguém pesquisando a sério a própria
queda capilar, à tarde, querendo descobrir um instituto de verdade, não mais
uma clínica de cabelo.* Luz do dia, calma, confiança, profundidade.

A estética é a de um instituto científico internacional: papel quente,
tipografia editorial, muito ar, um acento verde profundo. Luxo discreto —
sofisticação por restrição e respiro, nunca por ostentação. Sem cara de
hospital (sem azul clínico), sem cara de página de harmonização.

Estratégia de cor: **Restrained** — neutros quentes de papel + tinta, com um
único acento verde-pinheiro usado abaixo de 10% da superfície. O acento marca
ciência, ação e ênfase; nunca decora.

## Color Palette

OKLCH, tingidas para o matiz quente do papel. Nunca `#000` nem `#fff`.

| Token | OKLCH | Uso |
|---|---|---|
| `--paper` | `oklch(0.967 0.011 82)` | Superfície base |
| `--paper-warm` | `oklch(0.942 0.015 80)` | Painéis, faixas alternadas |
| `--paper-deep` | `oklch(0.910 0.018 78)` | Wells, molduras, hover |
| `--ink` | `oklch(0.248 0.018 58)` | Texto principal, near-black quente |
| `--ink-soft` | `oklch(0.452 0.018 56)` | Texto secundário |
| `--ink-faint` | `oklch(0.598 0.016 54)` | Metadados, texto terciário |
| `--line` | `oklch(0.862 0.012 78)` | Réguas hairline, bordas |
| `--line-strong` | `oklch(0.742 0.015 76)` | Divisores de ênfase |
| `--pine` | `oklch(0.388 0.069 156)` | Acento: CTA, marcas, ciência |
| `--pine-deep` | `oklch(0.318 0.060 156)` | Hover/active do acento |
| `--pine-soft` | `oklch(0.560 0.070 156)` | Acento sobre fundo escuro |
| `--pine-wash` | `oklch(0.950 0.022 156)` | Fundo tênue de destaque |

Modo: somente claro (a cena é diurna). O acento verge-pinheiro é a
assinatura — científico e natural (biologia capilar), nunca azul-hospital.

## Typography

Fontes fixadas pela identidade do projeto (`claude.md`).

| Papel | Fonte | Observações |
|---|---|---|
| Display | **Fraunces** | Editorial, peso 300–500, optical size. Reto; itálico só em ênfase rara |
| Texto / UI | **Inter Tight** | Peso 400–600, tracking levemente negativo nos títulos |
| Mono / dados | **JetBrains Mono** | Labels científicos, números de seção, códigos de fator, referências |

- Fraunces carrega as afirmações grandes e os números — voz de instituto.
- Inter Tight faz títulos médios e todo o corpo. Medida 62–72ch.
- JetBrains Mono é disciplinada: dado e label curto, nunca corpo de texto.
- Caixa-alta só em eyebrows e labels mono curtos.

Escala fluida, `clamp()`, razão ≥1.25:

```
--text-eyebrow : clamp(0.72rem, 0.70rem + 0.1vw, 0.78rem)
--text-body-sm : clamp(0.88rem, 0.85rem + 0.15vw, 0.96rem)
--text-body    : clamp(1.02rem, 0.98rem + 0.25vw, 1.15rem)
--text-lede    : clamp(1.20rem, 1.05rem + 0.6vw,  1.52rem)
--text-h3      : clamp(1.40rem, 1.18rem + 1.0vw,  2.05rem)
--text-h2      : clamp(2.05rem, 1.55rem + 2.3vw,  3.55rem)
--text-h1      : clamp(2.80rem, 1.95rem + 4.2vw,  6.10rem)
--text-mega    : clamp(4.50rem, 2.80rem + 8vw,   10.0rem)
```

## Layout

- Composição **editorial**: grade de 12 colunas, alinhamento à esquerda,
  assimetria deliberada, muito ar. Nada de stack centralizado genérico.
- Seções numeradas `01`–`14`, abertas por um cabeçalho de régua.
- Largura máxima `--measure: 1240px`. Gutter fluido.
- Espaçamento fluido com `clamp()`, ritmo variado entre e dentro das seções.
- Raio suave e contido: `--radius: 6px`. Premium, não arredondado-fofo.
- Faixas alternadas `--paper` / `--paper-warm` dão ritmo. Uma ou duas seções
  podem inverter para um fundo escuro (`--ink`) — ciência/tecnologia — para
  contraste e foco. Consistência de voz acima de consistência de tratamento.
- Cards usados com parcimônia; preferir listas regradas e blocos editoriais.

## Components

- **Régua de seção** — número + label mono + linha hairline até a borda.
- **Placa tratada** — foto de couro cabeludo em duotone verde/sépia quente
  (a imagem dessaturada recebe camada de cor + sombra). Registro clínico vira
  fotografia atmosférica, nunca catálogo médico.
- **Moldura de mídia** — onde vídeo/foto entrarão depois: moldura desenhada,
  intencional, com label mono (`VÍDEO · TRICOSCOPIA`). Nunca caixa cinza vazia.
- **Lista de fatores** — item regrado, código mono + título + texto.
- **Etapa de protocolo / linha do tempo** — sequência numerada regrada.
- **Questionário** — multi-etapas, cartões de opção selecionáveis, barra de
  progresso, tela final com fatores a investigar. Não diagnostica.
- **Botão primário** — fundo `--pine`, texto papel, raio suave.
- **Botão secundário** — borda `--line-strong`, texto `--ink`.
- **Barra WhatsApp persistente** — discreta, canto inferior, borda hairline.
- **Acordeão de FAQ** — anima `grid-template-rows`.
- **Bloco de autoridade** — grade de credenciais (artigos, mídia, aulas).

## Motion

- Curva padrão ease-out-expo `cubic-bezier(0.16,1,0.3,1)`, 0.5–0.7s.
- Reveal on scroll: `opacity` + `translateY(20px)`, stagger curto.
- Réguas "desenham" da esquerda (`scaleX`).
- Questionário: transição suave entre etapas.
- Nunca animar propriedades de layout. `transform`/`opacity` apenas.
- `prefers-reduced-motion` respeitado: vira fade simples ou nada.

## Anti-patterns (não fazer)

- Cara de hospital: azul clínico, branco duro, estética fria.
- Promessa milagrosa, antes/depois apelativo, linguagem agressiva de venda.
- Caixa cinza vazia onde falta imagem — usar moldura de mídia intencional.
- Card-grid de ícone+título+texto repetido.
- Itálico de Fraunces como manchete; mono como enfeite.
- Gradiente roxo, glassmorphism decorativo, texto com gradiente.
- Stock photo (regra do `claude.md`).
