type InfoGridItem = {
  title: string;
  description?: string;
};

type InfoGridProps = {
  items: readonly InfoGridItem[];
  variant?: "two" | "three" | "four";
  ordered?: boolean;
};

const gridVariants = {
  two: "md:grid-cols-2",
  three: "md:grid-cols-2 xl:grid-cols-3",
  four: "sm:grid-cols-2 xl:grid-cols-4",
};

export function InfoGrid({
  items,
  variant = "three",
  ordered = false,
}: InfoGridProps) {
  return (
    <div className={`grid gap-3 ${gridVariants[variant]}`}>
      {items.map((item, index) => (
        <article
          className="group border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-champagne/40 hover:bg-white/[0.055]"
          key={item.title}
        >
          <div className="mb-7 flex items-center justify-between gap-4">
            <h3 className="text-base font-semibold text-offwhite">{item.title}</h3>
            {ordered && (
              <span className="text-xs font-medium text-champagne/70">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
          </div>
          {item.description && (
            <p className="text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
