import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section
      className={`relative border-b border-white/10 py-20 sm:py-24 lg:py-28 ${className}`}
      id={id}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            {eyebrow && (
              <p className="mb-4 text-xs font-medium uppercase text-champagne">
                {eyebrow}
              </p>
            )}
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.04] text-offwhite sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>
          {intro && (
            <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">
              {intro}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
