import type { Metadata } from "next";
import { ButtonLink } from "@/app/_components/button-link";

export const metadata: Metadata = {
  title: "Artist Lab",
  description:
    "O Conclave Artist Lab é uma frente seletiva de desenvolvimento artístico para talentos com potencial real de mercado.",
};

const evaluationItems = [
  "Potencial artístico",
  "Originalidade",
  "Identidade",
  "Repertório",
  "Imagem",
  "Comunicação",
  "Disciplina operacional",
  "Potencial de mercado",
] as const;

const developmentItems = [
  "Direção criativa",
  "Posicionamento",
  "Repertório",
  "Estética",
  "Performance",
  "Lançamentos",
  "Audiência",
  "Oportunidades comerciais",
] as const;

export default function ArtistLabPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-36">
        <div className="absolute inset-0 cinematic-wash" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-champagne/35 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.98fr_0.82fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
              CONCLAVE ARTIST LAB / DESENVOLVIMENTO ARTÍSTICO
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] text-offwhite sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem]">
              Um laboratório para transformar potencial artístico em direção de
              mercado.
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-offwhite/85 sm:text-2xl sm:leading-9">
              Seleção, identidade, repertório, imagem, performance e lançamento
              com método.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              O Artist Lab analisa artistas com potencial real e estrutura um
              caminho de desenvolvimento para transformar talento bruto em
              projeto artístico mais claro, competitivo e comercialmente
              preparado.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contato">Aplicar para análise</ButtonLink>
            </div>
          </div>

          <ArtistLabEditorialVisual />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
              Não é apenas lançar música
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] text-offwhite sm:text-4xl lg:text-[2.9rem]">
              O foco é desenvolvimento de artista, não campanha isolada.
            </h2>
          </div>

          <div className="border-t border-white/10">
            {[
              "O Artist Lab trabalha a construção do artista como operação: identidade, narrativa, repertório, imagem, performance e comunicação.",
              "Lançamento é consequência de uma direção mais profunda. Antes de expor o projeto, é preciso entender o que ele sustenta culturalmente e comercialmente.",
              "A Conclave combina leitura criativa e visão de mercado para transformar potencial em presença mais clara, consistente e competitiva.",
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
                O que avaliamos
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] sm:text-4xl lg:text-[2.9rem]">
                A seleção começa pela possibilidade real de construção.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-black/60">
              A análise não procura apenas talento bruto. Ela observa clareza,
              singularidade, repertório, disciplina e sinais de mercado que
              indiquem capacidade de desenvolvimento.
            </p>
          </div>

          <div className="mt-14 grid border-t border-black/10 md:grid-cols-2 lg:grid-cols-4">
            {evaluationItems.map((item, index) => (
              <article
                className="min-h-32 border-b border-black/10 py-6 md:pr-6"
                key={item}
              >
                <span className="text-sm font-semibold text-black/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-semibold leading-tight">
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.05fr] lg:items-start">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
                O que desenvolvemos
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] text-offwhite sm:text-4xl lg:text-[2.9rem]">
                Identidade, repertório e mercado precisam caminhar no mesmo
                plano.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                O Lab organiza a passagem entre intuição artística e projeto
                profissional: o artista não perde singularidade, mas ganha
                direção.
              </p>
            </div>

            <div className="grid gap-x-10 border-t border-white/10 sm:grid-cols-2">
              {developmentItems.map((item, index) => (
                <div className="border-b border-white/10 py-6" key={item}>
                  <span className="text-sm font-semibold text-champagne/75">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-2xl font-semibold leading-tight text-offwhite">
                    {item}
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
            O artista entra com potencial. A Conclave entra com método,
            estrutura e visão de mercado.
          </h2>
          <div>
            <p className="text-lg leading-8 text-black/60">
              A aplicação é uma primeira leitura de encaixe. O Lab só faz
              sentido quando existe material artístico, abertura para direção e
              possibilidade real de desenvolvimento.
            </p>
            <ButtonLink className="mt-8" href="/contato">
              Aplicar para análise
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function ArtistLabEditorialVisual() {
  const pillars = [
    "IDENTIDADE",
    "REPERTÓRIO",
    "IMAGEM",
    "PERFORMANCE",
    "MERCADO",
  ] as const;

  return (
    <div className="relative mx-auto w-full max-w-[25rem]">
      <div className="relative min-h-[27rem] overflow-hidden rounded-lg border border-white/10 bg-[#070707] p-8 shadow-[0_34px_110px_rgba(0,0,0,0.22)] sm:min-h-[29rem] sm:p-10">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(216,194,139,0.12),transparent_18rem),linear-gradient(180deg,rgba(244,239,230,0.045),transparent_34%),linear-gradient(180deg,transparent,rgba(16,33,63,0.18))]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-champagne/45 via-white/10 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 flex min-h-[23rem] flex-col justify-between sm:min-h-[24.5rem]">
          <div className="flex items-start justify-between gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
              Conclave Artist Lab
            </p>
            <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.22em] text-offwhite/40">
              Seleção 01
            </span>
          </div>

          <div className="max-w-[18rem]">
            <p className="text-3xl font-semibold leading-[1.08] text-offwhite sm:text-[2.35rem]">
              Potencial artístico precisa de direção.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-x-4 gap-y-3">
              {pillars.map((pillar) => (
                <span
                  className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-offwhite/50"
                  key={pillar}
                >
                  {pillar}
                </span>
              ))}
            </div>
            <p className="mt-8 border-t border-white/10 pt-5 text-sm font-medium leading-6 text-muted-foreground">
              Curadoria, desenvolvimento e mercado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
