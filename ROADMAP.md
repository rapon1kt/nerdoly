# Roadmap de desenvolvimento — Nerdoly

Baseado na estrutura atual do repositório (`turborepo` + `pnpm workspaces`, TypeScript, com `apps/` e `packages/shared` já criados). O objetivo deste roadmap é ir do esqueleto atual até um beta funcional com aluno, rascunhos, IA e professor.

---

## Fase 0 — Fundação técnica (1–2 semanas)

Antes de qualquer feature, o monorepo precisa de mais estrutura do que `apps/` + `packages/shared`.

**Pacotes a criar:**
- `packages/ui` — design system compartilhado (componentes usados por web e, futuramente, mobile)
- `packages/db` — schema do banco + client (Prisma ou Drizzle) + migrations
- `packages/config` — ESLint, TSConfig, variáveis de ambiente compartilhadas
- `packages/ai` — camada de integração com a IA (prompts, chamadas ao modelo, parsing de resposta)

**Apps a definir:**
- `apps/web` — o app principal (aluno + professor, com rotas separadas por papel)
- `apps/api` — se o backend for separado do frontend (recomendado se pensar em app mobile depois)

**Decisões técnicas a fechar nesta fase:**
- Banco de dados (Postgres é a escolha natural para dados relacionais + relação aluno/professor/turma)
- Autenticação (papéis: aluno, professor, admin)
- Onde a IA vai rodar (API própria chamando um provedor de modelo, function calling, etc.)
- Hospedagem (Vercel para o web, Railway/Fly.io para API + banco, por exemplo)

**Entregável da fase:** monorepo com apps rodando localmente, CI básico (lint + build) e schema inicial do banco.

---

## Fase 1 — MVP do núcleo: aluno + rascunhos (3–4 semanas)

Foco: provar a ideia central, sem IA ainda e sem professor.

- Autenticação de aluno (cadastro/login)
- CRUD de rascunhos (criar, editar, publicar como público ou privado)
- Upload de imagem/PDF no rascunho (caderno escaneado)
- Feed simples de rascunhos (sem recomendação inteligente ainda — ordenação cronológica ou por matéria)
- Categorização manual do rascunho (matéria, tópico) — a IA assume isso na Fase 2
- Perfil básico do aluno

**Entregável da fase:** aluno consegue se cadastrar, publicar um rascunho e ver rascunhos de outros alunos.

---

## Fase 2 — IA própria (3–4 semanas)

Aqui entra o diferencial do produto.

- `packages/ai`: pipeline que recebe o rascunho e extrai matéria/tópico/nível automaticamente
- Recomendação de rascunhos com base no histórico de estudo do aluno
- Chat de tira-dúvidas (IA responde perguntas com base no conteúdo da plataforma)
- Diagnóstico inicial (quiz de onboarding, como o protótipo que já desenhamos) gerando a primeira trilha

**Entregável da fase:** ao publicar um rascunho, ele já entra categorizado; o aluno recebe recomendações e pode tirar dúvidas com a IA.

---

## Fase 3 — Espaço do professor (3 semanas)

- Autenticação com papel de professor
- Dashboard de turmas (criar turma, adicionar alunos)
- Publicação de aulas/material oficial (separado visualmente do conteúdo de aluno)
- Fila de curadoria: professor valida rascunhos populares
- Fila de dúvidas escaladas pela IA quando ela não consegue responder

**Entregável da fase:** professor consegue organizar uma turma e validar conteúdo de alunos.

---

## Fase 4 — Confiança e qualidade (2 semanas)

- Selo de "validado por professor" nos rascunhos
- Sistema de reputação do autor (não só curtidas — precisão histórica)
- Sinalização automática de inconsistências pela IA antes da validação humana
- Moderação básica (denúncia de conteúdo)

**Entregável da fase:** o feed distingue visualmente conteúdo validado de não validado.

---

## Fase 5 — Beta fechado (2–3 semanas)

- Simulados gerados a partir dos rascunhos + banco de questões
- Polimento de UI/UX, responsividade mobile
- Métricas básicas (quantos rascunhos, quantos alunos ativos, taxa de validação)
- Onboarding de um grupo piloto (uma turma real ou um grupo de estudo)

**Entregável da fase:** produto pronto para os primeiros usuários reais fora do time.

---

## Resumo em sequência

| Fase | Foco | Duração estimada |
|------|------|-------------------|
| 0 | Fundação técnica do monorepo | 1–2 semanas |
| 1 | Aluno + rascunhos (sem IA) | 3–4 semanas |
| 2 | IA própria | 3–4 semanas |
| 3 | Espaço do professor | 3 semanas |
| 4 | Confiança e validação | 2 semanas |
| 5 | Beta fechado | 2–3 semanas |

**Total estimado: ~14–19 semanas** até um beta fechado, considerando um time pequeno (1–3 devs). Esse número varia bastante conforme o tamanho do time — se for só você, é razoável dobrar as estimativas.

## Observação sobre ordem

A Fase 1 antes da Fase 2 é proposital: lançar o núcleo social (rascunhos) sem IA primeiro permite validar se as pessoas realmente querem compartilhar seus cadernos antes de investir tempo pesado na camada de IA, que é a parte mais cara de construir e manter.
