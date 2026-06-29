import Link from "next/link";
import { navigationLinks } from "@/app/_data/site-content";
import { ButtonLink } from "@/app/_components/button-link";
import { ConclaveMark } from "@/app/_components/conclave-mark";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl rounded-full border border-white/10 bg-black/70 shadow-[0_18px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
        <div className="flex h-16 items-center justify-between gap-5 px-4 sm:px-5">
          <Link
            className="shrink-0 rounded-full outline-none transition opacity-95 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-champagne"
            href="/"
          >
            <ConclaveMark />
          </Link>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-7 lg:flex"
          >
            {navigationLinks.map((link) => (
              <Link
                className="text-sm text-muted-foreground transition duration-300 hover:text-offwhite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <ButtonLink className="hidden h-10 px-5 sm:inline-flex" href="/contato">
            Aplicar projeto
          </ButtonLink>
        </div>

        <nav
          aria-label="Navegação principal mobile"
          className="no-scrollbar overflow-x-auto border-t border-white/10 lg:hidden"
        >
          <div className="flex min-w-max gap-6 px-5 py-3">
            {navigationLinks.map((link) => (
              <Link
                className="text-xs font-medium text-muted-foreground transition hover:text-offwhite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
