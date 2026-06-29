import type { Metadata } from "next";
import { methodSteps } from "@/app/_data/site-content";
import { ButtonLink } from "@/app/_components/button-link";
import { EditorialHero } from "@/app/_components/editorial-hero";
import { SectionHeading } from "@/app/_components/section-heading";

export const metadata: Metadata = {
  title: "Método",
  description:
    "O Método Conclave conduz projetos criativos por diagnóstico, estratégia, estruturação, produção, lançamento e escala.",
};

const methodPrinciples = [
  {
    title: "Leitura antes de execução",
    text: "A Conclave não começa pela peça. Começa pelo contexto, pelo problema e pela direção estratégica.",
  },
  {
    title: "Processo sem engessar criação",
    text: "O método organiza o caminho para preservar ambição estética, não para reduzir o projeto a burocracia.",
  },
  {
    title: "Evolução contínua",
    text: "Cada etapa gera informação para a próxima: produzir, lançar, medir, ajustar e abrir novas frentes.",
  },
] as const;

export default function MetodoPage() {
  return (
    <>
      <EditorialHero
        eyebrow="Método Conclave"
        title="Da visão ao mercado. Com método proprietário."
        description="O processo organiza a passagem entre intenção criativa, clareza estratégica, estrutura operacional, produção, lançamento e evolução comercial."
        visual={<MethodVisual />}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contato">Aplicar projeto</ButtonLink>
          <ButtonLink href="/servicos" variant="secondary">
            Ver serviços
          </ButtonLink>
        </div>
      </EditorialHero>

      <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Linha de processo"
            title="Seis etapas para transformar potencial em operação."
            description="O método não promete atalhos. Ele cria sequência, prioridade e critérios para que cada decisão seja tomada com mais clareza."
          />

          <div className="method-process-line mt-16 sm:mt-20">
            {methodSteps.map((step) => (
              <article className="method-process-step" key={step.number}>
                <div className="method-process-marker">
                  <span>{step.number}</span>
                </div>
                <div className="method-process-title">
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
                <div className="method-process-detail">
                  <p>{step.detail}</p>
                  <strong>{step.output}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-offwhite px-5 py-24 text-black sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.98] sm:text-6xl">
              Método é o que permite repetir qualidade sem depender de
              improviso.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-black/60">
              A Conclave usa processo para organizar leitura, criação, execução
              e evolução. O objetivo é preservar a ambição artística enquanto
              constrói operação profissional.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {methodPrinciples.map((principle, index) => (
              <article className="method-principle" key={principle.title}>
                <p>{String(index + 1).padStart(2, "0")}</p>
                <h3>{principle.title}</h3>
                <span>{principle.text}</span>
              </article>
            ))}
          </div>

          <ButtonLink className="mt-12" href="/contato">
            Começar aplicação
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

function MethodVisual() {
  return (
    <div className="method-cinema-visual relative mx-auto aspect-square max-w-lg overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-8 shadow-[0_40px_140px_rgba(0,0,0,0.35)]">
      <div className="absolute inset-0 method-lines" aria-hidden="true" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">
          Diagnostic to scale
        </p>

        <div className="method-visual-track">
          {methodSteps.map((step) => (
            <div className="method-visual-node" key={step.number}>
              <span>{step.number}</span>
              <p>{step.title}</p>
            </div>
          ))}
        </div>

        <p className="max-w-sm text-3xl font-semibold leading-tight text-offwhite">
          Cada etapa reduz ruído e aumenta precisão para a próxima decisão.
        </p>
      </div>
    </div>
  );
}
