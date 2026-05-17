/**
 * Configuração do questionário de pré-avaliação capilar.
 * Cada opção pode sinalizar fatores (F1–F7). A tela final agrega os
 * fatores sinalizados. NÃO é diagnóstico — orienta e conduz à avaliação.
 */

export type FatorCodigo =
  | "F1"
  | "F2"
  | "F3"
  | "F4"
  | "F5"
  | "F6"
  | "F7";

export interface Opcao {
  label: string;
  fatores: FatorCodigo[];
}

export interface Pergunta {
  id: string;
  pergunta: string;
  opcoes: Opcao[];
}

export const fatoresInfo: Record<FatorCodigo, { titulo: string; nota: string }> = {
  F1: {
    titulo: "Predisposição genética",
    nota: "Vale mapear na tricoscopia sinais de miniaturização dos fios.",
  },
  F2: {
    titulo: "Eixo hormonal",
    nota: "Alterações hormonais ou de tireoide merecem ser cruzadas com a queda.",
  },
  F3: {
    titulo: "Fator emocional",
    nota: "Estresse e sofrimento prolongado influenciam o ciclo capilar.",
  },
  F4: {
    titulo: "Nutrição e emagrecimento",
    nota: "Restrição alimentar e perda de peso podem privar o fio de nutrientes.",
  },
  F5: {
    titulo: "Quadro sistêmico recente",
    nota: "Doenças com febre, infecção ou covid deixam marca meses depois.",
  },
  F6: {
    titulo: "Saúde do couro cabeludo",
    nota: "Oleosidade, descamação e sensibilidade afetam o ambiente do fio.",
  },
  F7: {
    titulo: "Tração e processos químicos",
    nota: "Mega hair, química e penteados de tração agridem a raiz.",
  },
};

export const perguntas: Pergunta[] = [
  {
    id: "percebe",
    pergunta: "O que você mais percebe no seu cabelo hoje?",
    opcoes: [
      { label: "Aumento na queda de fios", fatores: [] },
      { label: "Os fios mais finos e fracos", fatores: ["F1"] },
      { label: "Coroa ou entradas mais visíveis", fatores: ["F1"] },
      { label: "Perda de densidade no geral", fatores: [] },
    ],
  },
  {
    id: "tempo",
    pergunta: "Há quanto tempo você percebe esse sinal?",
    opcoes: [
      { label: "Menos de 3 meses", fatores: [] },
      { label: "Entre 3 e 12 meses", fatores: [] },
      { label: "Mais de 1 ano", fatores: ["F1"] },
      { label: "Não sei dizer ao certo", fatores: [] },
    ],
  },
  {
    id: "familia",
    pergunta: "Há histórico de calvície ou rarefação na sua família?",
    opcoes: [
      { label: "Sim, em parente próximo", fatores: ["F1"] },
      { label: "Sim, mais distante", fatores: ["F1"] },
      { label: "Não", fatores: [] },
      { label: "Não sei", fatores: [] },
    ],
  },
  {
    id: "emocional",
    pergunta:
      "Passou por estresse intenso, luto ou uma grande mudança nos últimos meses?",
    opcoes: [
      { label: "Sim, foi um período difícil", fatores: ["F3"] },
      { label: "Um pouco", fatores: ["F3"] },
      { label: "Não", fatores: [] },
    ],
  },
  {
    id: "peso",
    pergunta:
      "Houve emagrecimento, dieta restritiva ou mudança alimentar importante?",
    opcoes: [
      { label: "Sim, significativo", fatores: ["F4"] },
      { label: "Alguma mudança", fatores: ["F4"] },
      { label: "Não", fatores: [] },
    ],
  },
  {
    id: "hormonal",
    pergunta:
      "Passou por parto, menopausa, alteração de tireoide ou oscilação hormonal?",
    opcoes: [
      { label: "Sim", fatores: ["F2"] },
      { label: "Estou investigando", fatores: ["F2"] },
      { label: "Não", fatores: [] },
      { label: "Não se aplica", fatores: [] },
    ],
  },
  {
    id: "sistemico",
    pergunta: "Teve covid, infecção ou doença com febre nos últimos meses?",
    opcoes: [
      { label: "Sim", fatores: ["F5"] },
      { label: "Não", fatores: [] },
    ],
  },
  {
    id: "couro",
    pergunta: "Como está o seu couro cabeludo?",
    opcoes: [
      { label: "Oleoso, com coceira ou descamação", fatores: ["F6"] },
      { label: "Sensível ou irritado às vezes", fatores: ["F6"] },
      { label: "Sem queixas", fatores: [] },
    ],
  },
  {
    id: "tracao",
    pergunta:
      "Usa ou já usou mega hair, apliques, química forte ou penteados de tração?",
    opcoes: [
      { label: "Sim, com frequência", fatores: ["F7"] },
      { label: "Já usei", fatores: ["F7"] },
      { label: "Não", fatores: [] },
    ],
  },
];

export const resultado = {
  titulo: "Sua orientação inicial",
  introComFatores:
    "A partir das suas respostas, estes eixos merecem ser investigados na sua avaliação capilar presencial:",
  introSemFatores:
    "Suas respostas não destacaram um eixo isolado, e isso é comum: a queda costuma ser multifatorial e sutil. Uma avaliação presencial com tricoscopia é o caminho para enxergar o que não aparece num questionário.",
  aviso:
    "Esta orientação foi gerada a partir das suas respostas e não é um diagnóstico. Diagnóstico, causa e protocolo dependem da avaliação presencial com tricoscopia.",
  cta: "Agendar avaliação capilar",
  refazer: "Refazer a pré-avaliação",
};
