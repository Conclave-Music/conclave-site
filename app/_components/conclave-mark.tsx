import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

type ConclaveMarkProps = {
  compact?: boolean;
};

const logoCandidates = [
  {
    file: join(process.cwd(), "public", "brand", "conclave-logo.svg"),
    src: "/brand/conclave-logo.svg",
  },
  {
    file: join(process.cwd(), "public", "brand", "conclave-logo.png"),
    src: "/brand/conclave-logo.png",
  },
] as const;

const officialLogo = logoCandidates.find((logo) => existsSync(logo.file));

export function ConclaveMark({ compact = false }: ConclaveMarkProps) {
  if (officialLogo) {
    return (
      <span className="inline-flex items-center gap-3" aria-label="Conclave">
        <Image
          alt="Conclave"
          className="h-9 w-9 rounded-full object-contain shadow-[0_0_26px_rgba(216,194,139,0.12)]"
          height={36}
          src={officialLogo.src}
          unoptimized
          width={36}
        />
        {!compact && (
          <span className="hidden text-base font-semibold leading-none text-offwhite sm:inline">
            Conclave
          </span>
        )}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-3" aria-label="Conclave">
      <span
        className="relative flex size-9 items-center justify-center rounded-full border border-champagne/50 bg-champagne/[0.06] shadow-[0_0_28px_rgba(216,194,139,0.12)]"
        aria-hidden="true"
      >
        <span className="absolute h-px w-5 bg-champagne/80" />
        <span className="absolute h-5 w-px bg-champagne/80" />
        <span className="size-2 rounded-full bg-offwhite" />
      </span>
      {!compact && (
        <span className="flex flex-col">
          <span className="font-serif text-xl font-semibold leading-none text-offwhite">
            Conclave
          </span>
          <span className="mt-1 hidden text-[0.58rem] font-medium uppercase tracking-[0.24em] text-muted-foreground sm:block">
            Culture / System
          </span>
        </span>
      )}
    </span>
  );
}
