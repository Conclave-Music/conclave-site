type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${
        align === "center" ? "mx-auto text-center" : ""
      } max-w-4xl ${className}`}
    >
      {eyebrow && (
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-semibold leading-[0.98] text-offwhite sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
