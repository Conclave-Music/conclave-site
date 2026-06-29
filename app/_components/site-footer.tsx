import Link from "next/link";
import {
  footerFronts,
  institutionalInfo,
  navigationLinks,
} from "@/app/_data/site-content";
import { ButtonLink } from "@/app/_components/button-link";
import { ConclaveMark } from "@/app/_components/conclave-mark";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-black py-16 sm:py-20">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-deep-blue/20 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.75fr_0.9fr_0.8fr]">
        <div>
          <Link
            className="inline-flex rounded-full outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            href="/"
          >
            <ConclaveMark />
          </Link>
          <p className="mt-7 max-w-sm text-sm leading-7 text-muted-foreground">
            Produtora, selo, agência, hub criativo, operação artística e
            ecossistema de gestão para projetos criativos que precisam de
            estrutura profissional.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-semibold text-offwhite">Navegação</h2>
          <ul className="space-y-3">
            <li>
              <Link
                className="text-sm text-muted-foreground transition hover:text-offwhite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                href="/"
              >
                Conclave
              </Link>
            </li>
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="text-sm text-muted-foreground transition hover:text-offwhite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-semibold text-offwhite">
            Frentes de atuação
          </h2>
          <ul className="space-y-3">
            {footerFronts.map((front) => (
              <li className="text-sm text-muted-foreground" key={front}>
                {front}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-semibold text-offwhite">Contato</h2>
          <div className="space-y-3 text-sm leading-7 text-muted-foreground">
            <p>Contato institucional e comercial da Conclave.</p>
            <p>
              <a
                className="text-offwhite transition hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                href={institutionalInfo.emailHref}
              >
                {institutionalInfo.email}
              </a>
            </p>
            <p>{institutionalInfo.cnpjLabel}</p>
          </div>
          <ButtonLink className="mt-6 h-10 px-5" href="/contato" variant="secondary">
            Aplicar projeto
          </ButtonLink>
        </div>
      </div>

      <div className="relative mx-auto mt-14 flex w-full max-w-7xl flex-col gap-3 px-5 text-xs text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>&copy; 2026 Conclave. Todos os direitos reservados.</p>
        <p>Site institucional. Sem área restrita, login ou coleta automatizada.</p>
      </div>
    </footer>
  );
}
