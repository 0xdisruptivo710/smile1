import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.1em] transition-all duration-200 ease-out";

const variants: Record<Variant, string> = {
  primary:
    "border border-champagne bg-champagne text-graphite hover:border-champagne-dark hover:bg-champagne-dark hover:text-paper",
  secondary:
    "border border-graphite text-graphite hover:bg-graphite hover:text-paper",
};

/** CTA da SmileSkin — pílula, caixa-alta, champagne. Renderiza um <a>. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
