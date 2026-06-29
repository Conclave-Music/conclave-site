import type { ReactNode } from "react";

type EditorialHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  visual?: ReactNode;
};

export function EditorialHero({
  eyebrow,
  title,
  description,
  children,
  visual,
}: EditorialHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pt-32 sm:pt-36 lg:pt-40">
      <div className="absolute inset-0 cinematic-wash" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:pb-28">
        <div>
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
            {eyebrow}
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] text-offwhite sm:text-6xl lg:text-7xl xl:text-8xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
            {description}
          </p>
          {children && <div className="mt-10">{children}</div>}
        </div>
        {visual && <div className="relative">{visual}</div>}
      </div>
    </section>
  );
}
