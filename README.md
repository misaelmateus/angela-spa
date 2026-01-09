# Angela Spa & Estética - Website

Sistema de landing pages focado em conversão para WhatsApp, com analytics customizado e A/B testing integrado.

## Stack Tecnológica

- **Frontend**: Next.js 14 App Router, React 18, Tailwind CSS
- **Backend**: Express, Node.js
- **Database**: PostgreSQL + Prisma ORM
- **Deploy**: Vercel (frontend) + Railway (backend + DB)
- **Analytics**: Sistema customizado com tracking completo
- **A/B Testing**: Sistema integrado com admin dashboard

## Estrutura do Projeto

```
angela/
├── apps/
│   ├── web/          # Next.js frontend
│   └── api/          # Express backend
├── packages/
│   └── shared/       # Types compartilhados
├── identidade visual/ # Brand assets
├── fotos/            # Fotos profissionais da clínica
└── catalogo/         # Imagens do catálogo
```

## Desenvolvimento

### Pré-requisitos

- Node.js 20+
- npm 10+
- PostgreSQL 15+ (para desenvolvimento local ou Railway)

### Setup Inicial

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env

# Rodar migrations do banco
npm run db:migrate -w apps/api

# Iniciar desenvolvimento
npm run dev
```

### Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev                # Inicia todos os apps
npm run web:dev            # Apenas frontend
npm run api:dev            # Apenas backend

# Build
npm run build              # Build de todos os apps
npm run web:build          # Build do frontend
npm run api:build          # Build do backend

# Linting e formatação
npm run lint               # Lint em todos os workspaces
npm run format             # Formata código
npm run format:check       # Verifica formatação
```

## Landing Pages

1. **Principal** (`/`) - Clínica geral
2. **Depilação a Laser** (`/depilacao-laser`)
3. **Tratamentos Corporais** (`/tratamentos-corporais`)
4. **Massagens** (`/massagens`)

## Admin Dashboard

Acesse `/admin` para:
- Ver analytics em tempo real
- Gerenciar conteúdo das páginas
- Criar e monitorar testes A/B
- Exportar dados

## Deployment

### Frontend (Vercel)

```bash
vercel --prod
```

### Backend (Railway)

O deploy é automático via Railway CLI ou push para o repositório conectado.

## Documentação

Ver `/Users/misaelmoraes/.claude/plans/virtual-coalescing-canyon.md` para plano de implementação completo.

## Licença

Privado - Angela Spa & Estética
