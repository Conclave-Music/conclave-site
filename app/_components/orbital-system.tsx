import { ecosystemPillars } from "@/app/_data/site-content";

export function OrbitalSystem() {
  return (
    <div
      className="orbital-system relative mx-auto aspect-square w-full max-w-[34rem]"
      aria-label="Conclave como núcleo central conectando estratégia, produção, marketing, gestão, tecnologia e expansão"
    >
      <div className="orbital-halo orbital-halo-one" aria-hidden="true" />
      <div className="orbital-halo orbital-halo-two" aria-hidden="true" />
      <div className="orbital-halo orbital-halo-three" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 z-10 flex size-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-champagne/50 bg-black/70 text-center shadow-[0_0_90px_rgba(216,194,139,0.16)] backdrop-blur-xl sm:size-44">
        <span className="text-xs uppercase tracking-[0.28em] text-champagne">
          Núcleo
        </span>
        <span className="mt-2 font-serif text-2xl font-semibold text-offwhite">
          Conclave
        </span>
      </div>

      {ecosystemPillars.map((pillar, index) => (
        <div className={`orbit-node orbit-node-${index + 1}`} key={pillar.title}>
          <span className="text-[0.68rem] uppercase tracking-[0.2em] text-champagne/80">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="mt-1 text-sm font-semibold text-offwhite">
            {pillar.title}
          </span>
        </div>
      ))}
    </div>
  );
}
