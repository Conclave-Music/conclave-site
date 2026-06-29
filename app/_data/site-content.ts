export const navigationLinks = [
  { label: "Serviços", href: "/servicos" },
  { label: "Conclave OS", href: "/conclave-os" },
  { label: "Artist Lab", href: "/artist-lab" },
  { label: "Método", href: "/metodo" },
  { label: "Contato", href: "/contato" },
] as const;

export const institutionalInfo = {
  email: "contato@conclave.company",
  emailHref: "mailto:contato@conclave.company",
  cnpj: "67.708.343/0001-86",
  cnpjLabel: "CNPJ 67.708.343/0001-86",
} as const;

export const homeHero = {
  eyebrow: "Conclave / Creative infrastructure",
  title: "A nova infraestrutura criativa.",
  supportLine:
    "Para transformar projetos, marcas e talentos em operações de mercado.",
  subtitle:
    "A Conclave integra estratégia, produção, marketing, gestão, tecnologia e inteligência artificial para estruturar projetos criativos com padrão profissional, visão comercial e potencial de escala.",
  primaryCta: "Aplicar projeto",
  secondaryCta: "Conhecer serviços",
} as const;

export const ecosystemPillars = [
  {
    title: "Estratégia",
    description: "Leitura de mercado, posicionamento, prioridade e direção de crescimento.",
  },
  {
    title: "Produção",
    description: "Direção artística, musical, audiovisual e criativa conectada à intenção do projeto.",
  },
  {
    title: "Marketing",
    description: "Campanhas, narrativas de lançamento, conteúdo e distribuição de atenção.",
  },
  {
    title: "Gestão",
    description: "Processos, documentos, rotinas, agenda, financeiro e tomada de decisão.",
  },
  {
    title: "Tecnologia",
    description: "Sistemas internos, automações e agentes de IA para aumentar consistência.",
  },
  {
    title: "Expansão",
    description: "Preparação para oportunidades comerciais, parcerias e novos mercados.",
  },
] as const;

export const marketFailures = [
  "Planejamento ausente",
  "Lançamentos improvisados",
  "Imagem desalinhada",
  "Marketing sem direção",
  "Gestão descentralizada",
  "Pouca previsibilidade comercial",
] as const;

export const commonModel = [
  "Serviço isolado",
  "Postagem sem estratégia",
  "Música sem plano",
  "Artista sem gestão",
  "Processo manual",
  "Decisão por gosto",
] as const;

export const conclaveModel = [
  "Ecossistema integrado",
  "Campanha com direção",
  "Lançamento estruturado",
  "Desenvolvimento de carreira",
  "Operação com sistema e IA",
  "Decisão por estratégia",
] as const;

export const services = [
  {
    title: "Produção Artística",
    kicker: "Direção",
    description:
      "Construção de identidade, repertório, narrativa, performance e presença pública para artistas e projetos criativos.",
    deliverables: [
      "Diagnóstico artístico",
      "Direção criativa",
      "Arquitetura de repertório",
      "Orientação de performance e presença",
    ],
    when:
      "Quando existe talento ou projeto com força criativa, mas ainda falta direção para transformar potencial em linguagem consistente.",
    scope: ["Identidade artística", "Direção criativa", "Repertório", "Performance"],
  },
  {
    title: "Produção Musical",
    kicker: "Som",
    description:
      "Desenvolvimento musical conectado à estratégia, do conceito ao acabamento, com leitura estética e comercial.",
    deliverables: [
      "Conceito musical",
      "Direção de gravação",
      "Acompanhamento de arranjo e acabamento",
      "Leitura de lançamento",
    ],
    when:
      "Quando a música precisa deixar de ser apenas uma faixa pronta e passar a funcionar como ativo de posicionamento.",
    scope: ["Concepção", "Direção musical", "Acabamento", "Lançamento"],
  },
  {
    title: "Marketing e Lançamentos",
    kicker: "Mercado",
    description:
      "Campanhas, conteúdo, narrativa e distribuição de atenção para transformar lançamento em operação.",
    deliverables: [
      "Plano de lançamento",
      "Narrativa de campanha",
      "Calendário de conteúdo",
      "Roteiro de canais e ativação",
    ],
    when:
      "Quando o projeto já tem algo a comunicar, mas precisa de cadência, narrativa e distribuição para não depender de improviso.",
    scope: ["Planejamento", "Campanhas", "Conteúdo", "Distribuição"],
  },
  {
    title: "Branding e Identidade",
    kicker: "Imagem",
    description:
      "Posicionamento, linguagem visual, mensagem, tom de voz e arquitetura de marca para elevar percepção de valor.",
    deliverables: [
      "Posicionamento",
      "Narrativa e tom de voz",
      "Direção visual",
      "Sistema de identidade aplicável",
    ],
    when:
      "Quando a percepção pública não acompanha a ambição do projeto, ou quando a marca precisa ganhar clareza antes de escalar.",
    scope: ["Posicionamento", "Linguagem", "Narrativa", "Sistema visual"],
  },
  {
    title: "Gestão e Operação",
    kicker: "Estrutura",
    description:
      "Rotina, documentos, financeiro, pipeline, cronogramas e processos para tirar o projeto do improviso.",
    deliverables: [
      "Mapeamento operacional",
      "Organização de documentos",
      "Cronograma e responsabilidades",
      "Rotina de acompanhamento",
    ],
    when:
      "Quando a energia criativa está sendo drenada por falta de processo, controle, registros e clareza de responsabilidades.",
    scope: ["Processos", "Documentos", "Financeiro", "Pipeline"],
  },
  {
    title: "Audiovisual e Conteúdo",
    kicker: "Imagem em movimento",
    description:
      "Direção de conteúdo, estética visual, formatos e materiais capazes de sustentar campanha e narrativa.",
    deliverables: [
      "Direção de linguagem audiovisual",
      "Arquitetura de formatos",
      "Roteiros e pautas",
      "Materiais de campanha",
    ],
    when:
      "Quando o projeto precisa aparecer com intenção, não apenas produzir peças soltas para preencher canais.",
    scope: ["Direção audiovisual", "Formatos", "Campanha", "Conteúdo"],
  },
  {
    title: "Selo e Distribuição",
    kicker: "Catálogo",
    description:
      "Estruturação de lançamentos, catálogo, distribuição e leitura de oportunidades para projetos musicais.",
    deliverables: [
      "Estrutura de lançamento",
      "Organização de catálogo",
      "Distribuição musical",
      "Leitura de oportunidades comerciais",
    ],
    when:
      "Quando o projeto musical precisa de estrutura de mercado para lançar, organizar catálogo e abrir novas possibilidades.",
    scope: ["Catálogo", "Distribuição", "Lançamento", "Oportunidades"],
  },
] as const;

export const osModules = [
  {
    title: "Projetos",
    description: "Visão centralizada de demandas, entregas, prioridades, etapas e responsáveis.",
  },
  {
    title: "Artistas",
    description: "Histórico, contexto, ativos, repertório, posicionamento e evolução de cada projeto.",
  },
  {
    title: "Documentos",
    description: "Briefings, propostas, contratos, materiais e registros operacionais preservados.",
  },
  {
    title: "Contratos",
    description: "Organização de compromissos, versões, status e pontos críticos de execução.",
  },
  {
    title: "Financeiro",
    description: "Controle operacional de previsões, compromissos, recebimentos e decisões comerciais.",
  },
  {
    title: "Pipeline",
    description: "Acompanhamento de oportunidades, negociações, status e próximas ações.",
  },
  {
    title: "Clientes",
    description: "Contexto comercial, relacionamento, necessidades, histórico e próximos movimentos.",
  },
  {
    title: "Serviços",
    description: "Frentes contratadas, escopo, entregas previstas, prioridades e conexão entre áreas.",
  },
  {
    title: "Agentes de IA",
    description: "Apoio em análise, documentação, organização, produção e leitura de contexto.",
  },
  {
    title: "Processos",
    description: "Fluxos internos para transformar intenção em rotina, controle e execução.",
  },
] as const;

export const artistLabFocus = [
  "Análise criteriosa",
  "Identidade",
  "Direção criativa",
  "Repertório",
  "Imagem",
  "Lançamento",
  "Audiência",
  "Performance",
  "Oportunidades comerciais",
] as const;

export const artistLabStages = [
  {
    title: "Leitura",
    description: "Entender potencial, maturidade, repertório, imagem, contexto, sinais de mercado e lacunas de desenvolvimento.",
  },
  {
    title: "Direção",
    description: "Definir identidade, narrativa, estética, prioridades, repertório e rota criativa antes de expor o artista ao mercado.",
  },
  {
    title: "Estrutura",
    description: "Organizar produção, imagem, materiais, processos, agenda e acompanhamento para transformar orientação em rotina.",
  },
  {
    title: "Mercado",
    description: "Preparar audiência, performance, lançamento, relacionamento e oportunidades comerciais com consistência pública.",
  },
] as const;

export const methodSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Leitura do momento atual, ativos, gargalos, riscos e potencial estratégico.",
    detail:
      "A primeira camada separa percepção de realidade: o que existe, o que falta, quais ativos já têm valor e quais fragilidades podem comprometer o projeto.",
    output: "Mapa de contexto, prioridades e pontos críticos.",
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Definição de posicionamento, prioridade, narrativa, oferta e rota de ação.",
    detail:
      "A estratégia transforma ambição em direção: posicionamento, narrativa, público, canais, momento, escopo e sequência de decisões.",
    output: "Rota estratégica com foco, mensagem e próximos movimentos.",
  },
  {
    number: "03",
    title: "Estruturação",
    description: "Organização de processos, materiais, documentos, cronograma e responsabilidades.",
    detail:
      "A estrutura cria o ambiente para executar com precisão: documentos, cronograma, responsabilidades, materiais, fluxos e critérios de acompanhamento.",
    output: "Base operacional para produzir sem depender de improviso.",
  },
  {
    number: "04",
    title: "Produção",
    description: "Construção dos ativos criativos, comerciais, visuais e operacionais do projeto.",
    detail:
      "A produção materializa a estratégia em linguagem, música, imagem, conteúdo, campanha, apresentação e ativos comerciais.",
    output: "Ativos prontos para sustentar comunicação e operação.",
  },
  {
    number: "05",
    title: "Lançamento",
    description: "Execução coordenada de campanha, comunicação, conteúdo e distribuição.",
    detail:
      "O lançamento organiza atenção, narrativa e timing. Cada ação deve reforçar o posicionamento e mover o projeto para o próximo estágio.",
    output: "Execução coordenada de campanha, canais e comunicação.",
  },
  {
    number: "06",
    title: "Escala",
    description: "Leitura de dados, ajustes, novas frentes comerciais e evolução do sistema.",
    detail:
      "A escala não é pressa: é leitura, ajuste, recorrência, novas oportunidades e expansão sem perder consistência.",
    output: "Evolução contínua com novas frentes e mais precisão.",
  },
] as const;

export const proofPoints = [
  "Documentação jurídica e operacional",
  "Sistema próprio de gestão",
  "Processos internos",
  "Pipeline comercial",
  "Estratégia de marca",
  "Desenvolvimento artístico",
  "Agentes de IA",
  "Visão internacional",
] as const;

export const contactFields = [
  { label: "Nome", name: "nome", type: "text", placeholder: "Seu nome" },
  { label: "E-mail", name: "email", type: "email", placeholder: "voce@email.com" },
  { label: "WhatsApp", name: "whatsapp", type: "tel", placeholder: "+55" },
  { label: "Tipo de projeto", name: "tipo-projeto", type: "text", placeholder: "Artista, marca, produtor, parceiro..." },
  { label: "Link de referência", name: "link-referencia", type: "url", placeholder: "Spotify, Instagram, site, portfólio..." },
  { label: "Objetivo principal", name: "objetivo", type: "text", placeholder: "Desenvolver, lançar, estruturar, escalar..." },
  { label: "Orçamento aproximado", name: "orcamento", type: "text", placeholder: "Faixa estimada para investimento" },
] as const;

export const footerFronts = [
  "Produção artística",
  "Produção musical",
  "Marketing e lançamentos",
  "Branding e identidade",
  "Gestão e operação",
  "Audiovisual e conteúdo",
  "Selo e distribuição",
] as const;
