/**
 * Dados fixos da clínica e da conversão.
 * WhatsApp e endereço extraídos do site oficial da SmileSkin.
 * Confirmar e-mail e Instagram com a clínica antes de publicar.
 */

export const site = {
  nome: "SmileSkin",
  unidade: "Moema, São Paulo",
  // Formato internacional, só dígitos.
  whatsapp: "5511916460110",
  whatsappMensagem:
    "Olá! Vim pela página de tricologia e gostaria de agendar uma avaliação capilar.",
  email: "contato@smileskin.com.br",
  endereco: "Av. Bem-te-vi, 333 — Moema, São Paulo/SP",
  instagram: "https://instagram.com/smileskin",
} as const;
