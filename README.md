# Conclave Site

Site institucional V1 da Conclave, criado em Next.js para publicacao via GitHub + Vercel.

## Stack

- Next.js 16.2.9
- React 19
- Tailwind CSS 4
- App Router em `app/`

## Rotas publicas

- `/`
- `/servicos`
- `/conclave-os`
- `/artist-lab`
- `/metodo`
- `/contato`

## Contato institucional

- E-mail: `contato@conclave.company`
- Link de e-mail: `mailto:contato@conclave.company`
- CNPJ: `67.708.343/0001-86`

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Verificacao antes de deploy

```bash
npm run lint
npm run build
```

O build de producao deve listar as rotas acima como rotas estaticas do App Router.

## Deploy na Vercel

1. Subir o repositorio para o GitHub.
2. Criar/importar o projeto na Vercel a partir do repositorio.
3. Manter o preset de framework como Next.js.
4. Usar os comandos padrao:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: padrao do Next.js, sem `output: "export"`
5. Publicar o deploy.
6. Depois de validar a URL gerada pela Vercel, conectar o dominio oficial quando estiver definido.

Nao ha variaveis de ambiente obrigatorias nesta V1. O projeto nao inclui backend, banco de dados, login ou area restrita.
