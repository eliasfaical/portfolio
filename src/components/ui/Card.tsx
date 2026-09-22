import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
};

export function Card({ children, className = "", hoverEffect = true }: CardProps) {
  return (
    <div
      className={`
        relative overflow-hidden bg-surface border border-white/10 p-6 md:p-8
        shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
        ${
          hoverEffect
            ? "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-accent/35 hover:bg-surface-elevated hover:-translate-y-1"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
