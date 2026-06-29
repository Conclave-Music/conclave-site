import type { Metadata } from "next";
import { ButtonLink } from "@/app/_components/button-link";

export const metadata: Metadata = {
  title: "Conclave OS",
  description:
    "O Conclave OS é a infraestrutura operacional interna da Conclave para organizar criação, gestão, documentação, inteligência e escala.",
};

const centralizedItems = [
  {
    title: "Projetos",
    text: "Demandas, etapas, prioridades, responsáveis e próximos movimentos.",
  },
  {
    title: "Artistas e clientes",
    text: "Histórico, contexto, relacionamento, ativos e leitura de evolução.",
  },
  {
    title: "Documentos e contratos",
    text: "Briefings, propostas, versões, registros, compromissos e pontos críticos.",
  },
  {
    title: "Pipeline comercial",
    text: "Oportunidades, negociações, status, riscos e ações comerciais.",
  },
  {
    title: "Financeiro",
    text: "Previsões, compromissos, recebimentos e decisões operacionais.",
  },
  {
    title: "Serviços e entregas",
    text: "Escopo, frentes contratadas, entregáveis e conexão entre áreas.",
  },
  {
    title: "Agentes de IA",
    text: "Apoio em análise, documentação, produção, organização e leitura de contexto.",
  },
  {
    title: "Processos internos",
    text: "Fluxos para transformar intenção em rotina, controle e execução.",
  },
] as const;

const operationalBenefits = [
  "mais precisão",
  "menos improviso",
  "mais organização",
  "mais rastreabilidade",
  "mais capacidade de escala",
  "melhor tomada de decisão",
] as const;

export default function ConclaveOsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-36">
        <div className="absolute inset-0 cinematic-wash" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-champagne/35 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.98fr_0.82fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
              CONCLAVE OS / INFRAESTRUTURA OPERACIONAL
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] text-offwhite sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem]">
              O sistema interno que sustenta criação, operação e escala.
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-offwhite/85 sm:text-2xl sm:leading-9">
              Uma base proprietária para centralizar projetos, documentos,
              processos, pipeline, financeiro e agentes de IA.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              O Conclave OS organiza a operação interna da Conclave para que
              decisões criativas, comerciais e estratégicas sejam acompanhadas
              com método, rastreabilidade e precisão.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contato">Aplicar projeto</ButtonLink>
              <ButtonLink href="/metodo" variant="secondary">
                Conhecer método
              </ButtonLink>
            </div>
          </div>

          <OperationalCoreVisual />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
              Por que existe
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] text-offwhite sm:text-4xl lg:text-[2.9rem]">
              Operações criativas perdem valor quando dependem de memória solta.
            </h2>
          </div>

          <div className="border-t border-white/10">
            {[
              "Conversas dispersas, arquivos espalhados e decisões improvisadas tornam a operação frágil.",
              "Projetos culturais e criativos precisam preservar contexto para que direção, gestão e execução caminhem juntas.",
              "O Conclave OS existe para transformar conhecimento interno em processo: menos ruído, mais continuidade e mais clareza de decisão.",
            ].map((text) => (
              <p
                className="border-b border-white/10 py-6 text-lg leading-8 text-muted-foreground"
                key={text}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-offwhite px-5 py-20 text-black sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-black/50">
                O que centraliza
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] sm:text-4xl lg:text-[2.9rem]">
                Uma única camada de leitura para a operação inteira.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-black/60">
              A função do OS não é aparecer como produto. É fazer a Conclave
              operar com mais memória, método e coordenação entre frentes.
            </p>
          </div>

          <div className="mt-14 grid border-t border-black/10 md:grid-cols-2">
            {centralizedItems.map((item, index) => (
              <article
                className="grid gap-5 border-b border-black/10 py-6 md:grid-cols-[3.5rem_1fr] md:pr-8 even:md:border-l even:md:pl-8"
                key={item.title}
              >
                <span className="text-sm font-semibold text-black/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-black/60">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
                O que isso muda
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] text-offwhite sm:text-4xl lg:text-[2.9rem]">
                A operação ganha precisão sem perder direção criativa.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                A tecnologia interna sustenta a cultura de decisão da Conclave:
                contexto antes de ação, registro antes de ruído, processo antes
                de improviso.
              </p>
            </div>

            <div className="grid gap-x-10 border-t border-white/10 sm:grid-cols-2">
              {operationalBenefits.map((benefit, index) => (
                <div
                  className="border-b border-white/10 py-6"
                  key={benefit}
                >
                  <span className="text-sm font-semibold text-champagne/75">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-2xl font-semibold leading-tight text-offwhite">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-offwhite px-5 py-20 text-black sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <h2 className="max-w-4xl text-3xl font-semibold leading-[1.05] sm:text-4xl lg:text-[3rem]">
            Projetos criativos precisam de operação, não apenas intenção.
          </h2>
          <div>
            <p className="text-lg leading-8 text-black/60">
              O Conclave OS é uma vantagem operacional interna: organiza o que
              precisa ser lembrado, acompanhado e decidido para que projetos
              avancem com mais consistência.
            </p>
            <ButtonLink className="mt-8" href="/contato">
              Aplicar projeto
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function OperationalCoreVisual() {
  const layers = ["criação", "gestão", "documentação", "inteligência"];

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-[27rem]">
      <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-white/[0.025] p-6 shadow-[0_34px_110px_rgba(0,0,0,0.22)] sm:aspect-[5/4] sm:p-8">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(244,239,230,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(244,239,230,0.03)_1px,transparent_1px)] bg-[size:54px_54px] opacity-70" />
        <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-champagne/45 to-transparent" />
        <div className="absolute inset-y-8 left-1/2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute left-8 top-8 h-20 w-20 border-l border-t border-champagne/35" />
        <div className="absolute bottom-8 right-8 h-20 w-20 border-b border-r border-champagne/35" />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-6">
            <p className="max-w-[10rem] text-xs font-semibold uppercase tracking-[0.26em] text-champagne">
              núcleo operacional
            </p>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-offwhite/35">
              interno
            </span>
          </div>

          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-champagne/35 bg-black/30 text-center shadow-[0_0_80px_rgba(216,194,139,0.09)] backdrop-blur sm:h-40 sm:w-40">
            <span className="max-w-24 text-sm font-semibold uppercase tracking-[0.2em] text-offwhite">
              método em operação
            </span>
          </div>

          <div className="space-y-3">
            {layers.map((layer) => (
              <div
                className="grid grid-cols-[7rem_1fr] items-center gap-4"
                key={layer}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {layer}
                </span>
                <i className="h-px bg-gradient-to-r from-champagne/45 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
