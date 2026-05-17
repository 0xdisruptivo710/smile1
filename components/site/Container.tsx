import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/** Limita a largura ao --measure e aplica o gutter horizontal fluido. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full", className)}
      style={{
        maxWidth: "var(--measure)",
        paddingInline: "var(--gutter)",
      }}
    >
      {children}
    </div>
  );
}
