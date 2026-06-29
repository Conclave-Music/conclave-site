import type { Metadata } from "next";
import { services } from "@/app/_data/site-content";
import { ButtonLink } from "@/app/_components/button-link";
import { EditorialHero } from "@/app/_components/editorial-hero";
import { SectionHeading } from "@/app/_components/section-heading";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Frentes de atuação da Conclave em produção artística, produção musical, marketing, branding, gestão, audiovisual, selo e distribuição.",
};

export default function ServicosPage() {
  return (
    <>
      <EditorialHero
        eyebrow="Serviços"
        title="Frentes de atuação para transformar criação em operação."
        description="A Conclave atua onde arte, imagem, mercado e gestão precisam operar em conjunto. Cada frente pode ser contratada como serviço, mas o valor central está na integração entre direção, execução e inteligência operacional."
        visual={<ServiceEditorialVisual />}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contato">Aplicar projeto</ButtonLink>
          <ButtonLink href="/metodo" variant="secondary">
            Ver método
          </ButtonLink>
        </div>
      </EditorialHero>

      <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <SectionHeading
              eyebrow="Oferta integrada"
              title="Não é uma prateleira de entregáveis. É uma arquitetura de atuação."
              description="As frentes abaixo funcionam como camadas de um ecossistema. A combinação certa depende do momento do projeto, da maturidade criativa e da estrutura necessária para avançar."
            />
            <p className="max-w-2xl text-xl font-semibold leading-9 text-offwhite/85">
              O serviço certo não termina na entrega. Ele organiza o próximo
              movimento: posicionamento, produção, lançamento, leitura e escala.
            </p>
          </div>

          <div className="service-ledger mt-16 sm:mt-20">
            {services.map((service, index) => (
              <article className="service-ledger-row" key={service.title}>
                <div className="service-ledger-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="service-ledger-title">
                  <p>{service.kicker}</p>
                  <h2>{service.title}</h2>
                </div>

                <div className="service-ledger-copy">
                  <p>{service.description}</p>
                </div>

                <div className="service-ledger-detail">
                  <span>Principais entregas</span>
                  <ul>
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-ledger-fit">
                  <span>Quando faz sentido</span>
                  <p>{service.when}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-offwhite px-5 py-24 text-black sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.98] sm:text-6xl">
              Cada frente existe para proteger o valor cultural e aumentar a
              precisão comercial do projeto.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-black/60">
              A Conclave conecta diagnóstico, estratégia, produção e operação
              para que a entrega não fique isolada. A prioridade é construir
              contexto, coerência e continuidade.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Direção",
                text: "Clareza sobre identidade, linguagem, narrativa e intenção antes da execução.",
              },
              {
                title: "Execução",
                text: "Produção criativa, conteúdo, campanha e materiais conectados à estratégia.",
              },
              {
                title: "Operação",
                text: "Processos, documentação, cronograma e leitura para sustentar o crescimento.",
              },
            ].map((item, index) => (
              <article className="ecosystem-principle" key={item.title}>
                <p>{String(index + 1).padStart(2, "0")}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
              </article>
            ))}
          </div>

          <ButtonLink className="mt-12" href="/contato">
            Aplicar para análise
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

function ServiceEditorialVisual() {
  const labels = ["Arte", "Som", "Imagem", "Gestão", "Mercado"];

  return (
    <div className="service-constellation relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-8 shadow-[0_40px_140px_rgba(0,0,0,0.35)]">
      <div className="absolute inset-0 service-film" aria-hidden="true" />
      <div className="service-constellation-rings" aria-hidden="true" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">
          Creative ecosystem
        </p>

        <div className="service-constellation-core">
          <span>Conclave</span>
          <small>frentes conectadas</small>
        </div>

        <div className="space-y-3">
          {labels.map((label) => (
            <div className="service-constellation-line" key={label}>
              <span>{label}</span>
              <i aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
