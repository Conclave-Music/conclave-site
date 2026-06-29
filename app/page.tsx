import Link from "next/link";
import {
  commonModel,
  conclaveModel,
  ecosystemPillars,
  homeHero,
  institutionalInfo,
  marketFailures,
  methodSteps,
  osModules,
  services,
} from "@/app/_data/site-content";
import { ButtonLink } from "@/app/_components/button-link";
import { SectionHeading } from "@/app/_components/section-heading";

export default function Home() {
  return (
    <>
      <HomeHero />
      <MarketThesisSection />
      <EcosystemSection />
      <DifferenceSection />
      <ConclaveOsPreview />
      <ArtistLabPreview />
      <ServicesShowcase />
      <MethodNarrative />
      <FinalCtaSection />
    </>
  );
}

function HomeHero() {
  return (
    <section className="home-hero relative flex min-h-[100svh] items-center overflow-hidden border-b border-white/10 px-5 pb-14 pt-36 sm:px-8 sm:pb-16 sm:pt-32 lg:pt-28">
      <div className="absolute inset-0 home-hero-wash" aria-hidden="true" />
      <div className="absolute inset-0 home-hero-vignette" aria-hidden="true" />
      <HeroCoreVisual />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-champagne sm:mb-7">
          {homeHero.eyebrow}
        </p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] text-offwhite sm:text-6xl lg:text-7xl xl:text-8xl">
          {homeHero.title}
        </h1>
        <p className="mt-5 max-w-4xl text-2xl font-semibold leading-tight text-offwhite/85 sm:mt-6 sm:text-3xl lg:text-4xl">
          {homeHero.supportLine}
        </p>
        <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
          {homeHero.subtitle}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row">
          <ButtonLink href="/contato">{homeHero.primaryCta}</ButtonLink>
          <ButtonLink href="/servicos" variant="secondary">
            {homeHero.secondaryCta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function HeroCoreVisual() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 top-20 z-0 mx-auto max-w-7xl"
      aria-hidden="true"
    >
      <div className="creative-core absolute left-1/2 top-1/2 aspect-square w-[34rem] max-w-[88vw] -translate-x-1/2 -translate-y-1/2 rounded-full sm:w-[42rem] lg:w-[52rem]">
        <span className="core-ring core-ring-one" />
        <span className="core-ring core-ring-two" />
        <span className="core-ring core-ring-three" />
        <span className="core-axis core-axis-horizontal" />
        <span className="core-axis core-axis-vertical" />
        <span className="core-glow" />
      </div>
    </div>
  );
}

function MarketThesisSection() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-champagne/5 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
            Tese de mercado
          </p>
          <h2 className="max-w-4xl text-4xl font-semibold leading-[0.98] text-offwhite sm:text-5xl lg:text-6xl">
            Talento, criatividade e boas ideias não bastam.
          </h2>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">
            Sem estrutura, projetos perdem força, consistência e valor de
            mercado. A Conclave organiza a passagem entre potencial criativo e
            operação profissional.
          </p>
        </div>

        <div className="market-reading relative">
          <p className="mb-9 max-w-xl text-2xl font-semibold leading-10 text-offwhite">
            O problema raramente é falta de ambição. É falta de sistema para
            sustentar a ambição.
          </p>
          <div className="space-y-0">
            {marketFailures.map((failure, index) => (
              <div
                className="group grid grid-cols-[3rem_1fr] items-center gap-5 border-t border-white/10 py-5 last:border-b"
                key={failure}
              >
                <span className="text-sm font-semibold text-champagne/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-medium text-offwhite/85 transition group-hover:text-offwhite">
                  {failure}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EcosystemSection() {
  return (
    <section className="ecosystem-section relative overflow-hidden bg-offwhite px-5 py-24 text-black sm:px-8 sm:py-32">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-champagne/35 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-black/55">
              Ecossistema Conclave
            </p>
            <h2 className="text-4xl font-semibold leading-[0.98] sm:text-5xl lg:text-6xl">
              Uma operação integrada, não uma lista de serviços.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-9 text-black/60">
            Estratégia, produção, marketing, gestão, tecnologia e expansão se
            conectam como frentes de uma mesma arquitetura criativa.
          </p>
        </div>

        <div className="ecosystem-map mt-20">
          <div className="ecosystem-core">
            <span>Conclave</span>
            <small>estrutura criativa</small>
          </div>
          <div className="ecosystem-routes" aria-hidden="true" />
          <div className="grid gap-5 lg:grid-cols-3">
            {ecosystemPillars.map((pillar, index) => (
              <article
                className={`ecosystem-node ecosystem-node-${index + 1}`}
                key={pillar.title}
              >
                <p className="text-sm font-semibold text-black/35">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-8 text-2xl font-semibold">{pillar.title}</h3>
                <p className="mt-4 text-base leading-7 text-black/60">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DifferenceSection() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          description="O modelo comum fragmenta o projeto. O modelo Conclave conecta direção, execução, tecnologia e mercado em uma mesma operação."
          eyebrow="Diferencial"
          title="A Conclave não entrega peças soltas. Entrega estrutura."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <ComparisonEditorial
            eyebrow="Modelo comum"
            items={commonModel}
            tone="quiet"
          />
          <ComparisonEditorial
            eyebrow="Modelo Conclave"
            items={conclaveModel}
            tone="strong"
          />
        </div>
      </div>
    </section>
  );
}

function ComparisonEditorial({
  eyebrow,
  items,
  tone,
}: {
  eyebrow: string;
  items: readonly string[];
  tone: "quiet" | "strong";
}) {
  const isStrong = tone === "strong";

  return (
    <div
      className={`relative overflow-hidden rounded-[2.25rem] p-7 sm:p-9 ${
        isStrong
          ? "bg-champagne text-black shadow-[0_38px_110px_rgba(216,194,139,0.14)]"
          : "border border-white/10 bg-white/[0.025] text-offwhite"
      }`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.28em] ${
          isStrong ? "text-black/55" : "text-champagne"
        }`}
      >
        {eyebrow}
      </p>
      <div
        className={`mt-10 space-y-0 divide-y ${
          isStrong ? "divide-black/15" : "divide-white/10"
        }`}
      >
        {items.map((item, index) => (
          <div className="grid grid-cols-[2.5rem_1fr] gap-4 py-4" key={item}>
            <span
              className={`text-sm font-semibold ${
                isStrong ? "text-black/45" : "text-muted-foreground"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <p
              className={`text-lg font-medium ${
                isStrong ? "text-black/80" : "text-offwhite/80"
              }`}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConclaveOsPreview() {
  return (
    <section className="relative overflow-hidden bg-deep-blue/20 px-5 py-24 sm:px-8 sm:py-32">
      <div className="absolute inset-0 os-atmosphere" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Conclave OS"
            title="Infraestrutura operacional interna para sustentar a criação."
            description="O Conclave OS centraliza projetos, artistas, documentos, contratos, financeiro, pipeline, agentes de IA e processos. Tecnologia como base de operação, não como fachada."
          />
          <ButtonLink className="mt-9" href="/conclave-os" variant="secondary">
            Entender o Conclave OS
          </ButtonLink>
        </div>

        <div className="os-editorial-panel">
          <div className="os-editorial-core">
            <span>OS</span>
            <small>operação interna</small>
          </div>
          <div className="relative space-y-3">
            {osModules.slice(0, 6).map((module, index) => (
              <div className="os-editorial-row" key={module.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{module.title}</strong>
                <p>{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArtistLabPreview() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="artist-lab-poster">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-champagne">
              Artist Lab
            </p>
            <p className="font-serif text-[6rem] font-semibold leading-none text-offwhite/10 sm:text-[9rem]">
              LAB
            </p>
            <p className="max-w-sm text-2xl font-semibold leading-9 text-offwhite">
              Potencial artístico precisa de direção, método e visão de mercado.
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Conclave Artist Lab"
            title="Seleção, desenvolvimento e estrutura para artistas com potencial real."
            description="O Artist Lab trabalha identidade, direção criativa, repertório, lançamento, audiência, performance e oportunidades comerciais com olhar de mercado."
          />
          <div className="mt-9 flex flex-col gap-5 border-l border-white/10 pl-6">
            <p className="text-xl font-semibold leading-8 text-offwhite">
              O artista entra com potencial.
            </p>
            <p className="text-xl font-semibold leading-8 text-champagne">
              A Conclave entra com método, estrutura e visão.
            </p>
          </div>
          <ButtonLink className="mt-9" href="/artist-lab" variant="secondary">
            Conhecer o Artist Lab
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function ServicesShowcase() {
  return (
    <section className="bg-offwhite px-5 py-24 text-black sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-black/55">
              Serviços
            </p>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.98] sm:text-6xl">
              Frentes de atuação de um ecossistema criativo.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-9 text-black/60">
            A oferta da Conclave não funciona como catálogo barato. Cada frente
            existe para dar forma, mercado e operação ao projeto.
          </p>
        </div>

        <div className="services-showcase mt-16">
          {services.slice(0, 7).map((service, index) => (
            <Link
              className="service-line group"
              href="/servicos"
              key={service.title}
            >
              <span className="service-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="service-title">{service.title}</span>
              <span className="service-description">{service.description}</span>
            </Link>
          ))}
        </div>

        <ButtonLink className="mt-12" href="/servicos">
          Conhecer serviços
        </ButtonLink>
      </div>
    </section>
  );
}

function MethodNarrative() {
  const homeMethodSteps = methodSteps.map((step) =>
    step.title === "Escala"
      ? {
          ...step,
          description:
            "Otimização, novas oportunidades, parcerias, recorrência e expansão.",
        }
      : step,
  );

  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          description="O método organiza a passagem entre intenção criativa, clareza estratégica, produção, lançamento e evolução comercial."
          eyebrow="Método Conclave"
          title="Da visão ao mercado. Com método."
        />

        <div className="method-flow mt-20">
          {homeMethodSteps.map((step) => (
            <Link className="method-step group" href="/metodo" key={step.number}>
              <div className="method-number">{step.number}</div>
              <div className="method-copy">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-champagne/35 to-transparent" />
      <div className="final-cta relative mx-auto max-w-5xl p-8 text-center sm:p-12 lg:p-16">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
          Aplicação
        </p>
        <h2 className="text-4xl font-semibold leading-[0.98] text-offwhite sm:text-6xl">
          Seu projeto precisa de uma operação à altura do seu potencial?
        </h2>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
          A Conclave trabalha com projetos selecionados. Cada oportunidade é
          analisada com base em potencial criativo, viabilidade estratégica,
          momento de carreira e possibilidade real de desenvolvimento.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/contato">Aplicar para análise</ButtonLink>
          <ButtonLink href={institutionalInfo.emailHref} variant="secondary">
            Falar com a Conclave
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
