import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";

/**
 * Recebe os leads do formulário de avaliação capilar.
 *
 * Hoje a rota valida e registra o lead no log do servidor. A integração
 * com o canal final da clínica (CRM, e-mail ou planilha) é o próximo
 * passo: basta plugar o envio no ponto indicado abaixo.
 */
export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, erro: "Corpo da requisição inválido." },
      { status: 400 },
    );
  }

  const parsed = leadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, erros: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const lead = parsed.data;

  // Ponto de integração: encaminhar `lead` para o canal da clínica.
  console.info("[lead capilar]", {
    nome: lead.nome,
    whatsapp: lead.whatsapp,
    email: lead.email,
    recebidoEm: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
