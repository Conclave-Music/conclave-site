import type { Metadata } from "next";
import { contactFields, institutionalInfo } from "@/app/_data/site-content";
import { ButtonLink } from "@/app/_components/button-link";
import { EditorialHero } from "@/app/_components/editorial-hero";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Aplique um projeto para análise da Conclave. Formulário institucional estático para organizar informações iniciais.",
};

const applicationCriteria = [
  "Potencial criativo ou institucional claro",
  "Momento compatível com estruturação profissional",
  "Abertura para estratégia, processo e direção",
] as const;

export default function ContatoPage() {
  return (
    <>
      <EditorialHero
        eyebrow="Aplicação"
        title="Projetos selecionados. Análise séria antes de qualquer proposta."
        description="A Conclave trabalha com projetos que exigem direção, estrutura e visão de mercado. A aplicação inicial organiza contexto para entender potencial, momento, necessidade e viabilidade estratégica."
        visual={<ContactVisual />}
      >
        <ButtonLink href="/contato#aplicacao">Aplicar para análise</ButtonLink>
      </EditorialHero>

      <section
        className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
        id="aplicacao"
      >
        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
              Aplicar projeto
            </p>
            <h2 className="text-4xl font-semibold leading-[0.98] text-offwhite sm:text-5xl">
              Quanto melhor o contexto, melhor a análise.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
              A Conclave avalia se existe encaixe entre necessidade, momento,
              ambição criativa e capacidade de desenvolvimento. A seleção evita
              prometer estrutura onde não há rota clara.
            </p>

            <div className="application-criteria mt-10">
              {applicationCriteria.map((item, index) => (
                <article key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                Contato institucional
              </p>
              <a
                className="text-base font-semibold text-offwhite transition hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                href={institutionalInfo.emailHref}
              >
                {institutionalInfo.email}
              </a>
              <p className="mt-3 text-sm text-muted-foreground">
                {institutionalInfo.cnpjLabel}
              </p>
            </div>
          </div>

          <form className="application-form" aria-label="Aplicação para análise">
            <div className="grid gap-5 md:grid-cols-2">
              {contactFields.map((field) => (
                <label className="block" htmlFor={field.name} key={field.name}>
                  <span className="mb-2 block text-sm font-medium text-offwhite">
                    {field.label}
                  </span>
                  <input
                    autoComplete={field.name === "email" ? "email" : "off"}
                    className="application-input"
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    required
                    type={field.type}
                  />
                </label>
              ))}
              <label className="block md:col-span-2" htmlFor="mensagem">
                <span className="mb-2 block text-sm font-medium text-offwhite">
                  Mensagem
                </span>
                <textarea
                  className="application-textarea"
                  id="mensagem"
                  name="mensagem"
                  placeholder="Conte o momento do projeto, principais desafios, objetivos e o que você espera estruturar com a Conclave."
                  required
                />
              </label>
            </div>

            <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-6 text-muted-foreground">
                Formulário estático nesta versão. O canal de envio será
                conectado na próxima etapa operacional. Para contato direto,
                escreva para{" "}
                <a
                  className="text-offwhite transition hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                  href={institutionalInfo.emailHref}
                >
                  {institutionalInfo.email}
                </a>
                .
              </p>
              <button className="application-submit" type="button">
                <span>Aplicar para análise</span>
                <i aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function ContactVisual() {
  return (
    <div className="contact-application-visual relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2.5rem] border border-white/10 bg-champagne p-8 text-black shadow-[0_40px_140px_rgba(0,0,0,0.35)]">
      <div className="absolute inset-0 contact-paper" aria-hidden="true" />
      <div className="absolute inset-x-8 top-24 h-px bg-black/25" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
          Project application
        </p>

        <div>
          <p className="font-serif text-[6rem] font-semibold leading-none text-black/10 sm:text-[8rem]">
            01
          </p>
          <p className="mt-4 max-w-xs text-3xl font-semibold leading-tight">
            Potencial criativo precisa de uma leitura séria.
          </p>
        </div>

        <div className="space-y-4">
          {["Contexto", "Objetivo", "Estrutura"].map((item) => (
            <div className="contact-visual-line" key={item}>
              <span>{item}</span>
              <i aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
