"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { leadSchema, type LeadData } from "@/lib/lead-schema";
import { agendamento } from "@/content/capilar";

const campos = agendamento.form.campos;

type Status = "idle" | "success" | "error";

interface FieldProps {
  id: keyof LeadData;
  label: string;
  type?: string;
  textarea?: boolean;
  error?: string;
  register: ReturnType<typeof useForm<LeadData>>["register"];
}

function Field({ id, label, type = "text", textarea, error, register }: FieldProps) {
  const shared = cn(
    "w-full border-b bg-transparent py-3 text-ink outline-none transition-colors placeholder:text-ink-faint",
    error ? "border-pine" : "border-line-strong focus:border-pine",
  );
  return (
    <div>
      <label htmlFor={id} className="eyebrow text-ink-faint">
        {label}
      </label>
      <div className="mt-1.5">
        {textarea ? (
          <textarea id={id} rows={2} className={cn(shared, "resize-none")} {...register(id)} />
        ) : (
          <input id={id} type={type} className={shared} {...register(id)} />
        )}
      </div>
      {error && (
        <p
          role="alert"
          className="mt-1.5 text-pine"
          style={{ fontSize: "var(--text-body-sm)" }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadData>({ resolver: zodResolver(leadSchema) });

  async function onSubmit(data: LeadData) {
    setStatus("idle");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("falha no envio");
      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div>
        <span className="eyebrow">Contato registrado</span>
        <h3
          className="mt-3 font-display font-normal tracking-[-0.01em] text-ink"
          style={{ fontSize: "var(--text-h3)" }}
        >
          {agendamento.form.sucessoTitulo}
        </h3>
        <p
          className="mt-3 text-ink-soft"
          style={{ fontSize: "var(--text-body)" }}
        >
          {agendamento.form.sucessoTexto}
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <h3
        className="font-display font-normal tracking-[-0.01em] text-ink"
        style={{ fontSize: "var(--text-h3)" }}
      >
        {agendamento.form.titulo}
      </h3>
      <p
        className="mt-2 text-ink-soft"
        style={{ fontSize: "var(--text-body-sm)" }}
      >
        {agendamento.form.texto}
      </p>

      <div className="mt-7 flex flex-col gap-6">
        <Field id="nome" label={campos.nome} error={errors.nome?.message} register={register} />
        <Field
          id="whatsapp"
          label={campos.whatsapp}
          type="tel"
          error={errors.whatsapp?.message}
          register={register}
        />
        <Field
          id="email"
          label={campos.email}
          type="email"
          error={errors.email?.message}
          register={register}
        />
        <Field
          id="mensagem"
          label={campos.mensagem}
          textarea
          error={errors.mensagem?.message}
          register={register}
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 text-pine"
          style={{ fontSize: "var(--text-body-sm)" }}
        >
          {agendamento.form.erro}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 inline-flex w-full items-center justify-center rounded-full border border-champagne bg-champagne px-8 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-graphite transition-all duration-200 hover:border-champagne-dark hover:bg-champagne-dark hover:text-paper disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? agendamento.form.enviando : agendamento.form.enviar}
      </button>
    </form>
  );
}
