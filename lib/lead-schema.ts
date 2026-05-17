import { z } from "zod";

/** Schema do formulário de lead. Compartilhado entre cliente e API. */
export const leadSchema = z.object({
  nome: z.string().min(2, "Como podemos te chamar?"),
  whatsapp: z
    .string()
    .min(1, "Precisamos de um número para te retornar")
    .refine(
      (v) => {
        const d = v.replace(/\D/g, "");
        return d.length >= 10 && d.length <= 11;
      },
      "Confere o número? Algo como (11) 91234-5678",
    ),
  email: z
    .string()
    .min(1, "Deixe um e-mail para a gente registrar")
    .email("Esse e-mail não parece completo"),
  mensagem: z.string().optional(),
});

export type LeadData = z.infer<typeof leadSchema>;
