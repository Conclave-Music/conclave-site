import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "border-champagne bg-champagne text-black shadow-[0_18px_60px_rgba(216,194,139,0.2)] hover:bg-offwhite",
  secondary:
    "border-white/15 bg-white/[0.03] text-offwhite hover:border-champagne/70 hover:bg-champagne/[0.08] hover:text-champagne",
  ghost:
    "border-transparent text-muted-foreground hover:border-white/10 hover:bg-white/[0.04] hover:text-offwhite",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      className={`group inline-flex h-12 items-center justify-center rounded-full border px-6 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne ${variants[variant]} ${className}`}
      href={href}
    >
      <span>{children}</span>
      <span
        className="ml-3 h-px w-6 bg-current opacity-50 transition group-hover:w-9"
        aria-hidden="true"
      />
    </Link>
  );
}
