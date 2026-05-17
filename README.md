# SmileSkin — Instituto de tricologia clínica

Landing page da SmileSkin, posicionada como instituto de tricologia clínica
e ciência capilar. Direção visual **Instituto**: clara, quente, editorial,
premium. Conversão por questionário de pré-avaliação, WhatsApp e formulário.

## Stack

Next.js 15 (App Router) · TypeScript strict · Tailwind CSS v4 · Framer Motion ·
react-hook-form + zod · next/font (Fraunces, Inter Tight, JetBrains Mono).

## Rodar

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

```bash
pnpm build      # build de produção
pnpm start      # serve o build
pnpm lint       # eslint
pnpm typecheck  # tsc --noEmit
```

## Estrutura da página (14 seções)

01 Hero · 02 A queda é multifatorial · 03 O que pode estar por trás ·
04 Questionário de pré-avaliação (interativo) · 05 A investigação ·
06 Protocolo individual · 07 Atuação multiprofissional · 08 O lado humano ·
09 Autoridade científica · 10 Quem cuida de você · 11 Quando procurar ·
12 FAQ · 13 Agendamento · 14 Rodapé.

## Pastas

```
app/
  layout.tsx            fontes, metadata, JSON-LD MedicalBusiness
  page.tsx              composição das 14 seções
  globals.css           tokens (OKLCH) — base/components em @layer
  api/lead/route.ts     recebe e valida os leads do formulário
components/
  site/                 seções e UI
  motion/               wrappers de animação (Reveal, RuleLine)
content/
  capilar.ts            copy das 13 seções
  questionario.ts       perguntas, fatores e textos do questionário
lib/                    utils, dados da clínica, schema do lead
public/images/placas/   registros de couro cabeludo (tratados em duotone)
```

`PRODUCT.md` e `DESIGN.md` na raiz são a fonte da verdade de estratégia e
sistema visual.

## Antes de publicar

- `lib/site.ts` — substituir o número de WhatsApp, e-mail e endereço
  (são placeholders).
- `app/api/lead/route.ts` — plugar o envio do lead no canal real da clínica
  (CRM, e-mail ou planilha). Hoje a rota valida e registra no log do servidor.
- Molduras de mídia (autoridade) e fotos de equipe/clínica usam tratamento
  intencional até a clínica enviar o material real. Sem stock photo.
- O questionário de pré-avaliação **não diagnostica**: apresenta fatores a
  investigar e conduz à avaliação presencial, respeitando os limites de
  atuação profissional.
