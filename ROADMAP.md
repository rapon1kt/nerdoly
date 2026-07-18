# Roadmap de desenvolvimento — do zero

Este roadmap não assume nenhum código existente. Começa na decisão de stack e vai até o beta fechado.

---

## Fase 0 — Validação e planejamento (1–2 semanas)

Antes de escrever código, vale confirmar que o produto resolve um problema real.

- Entrevistar 10–15 estudantes de vestibular: como estudam hoje, o que compartilham, por que compartilhariam um "rascunho" com estranhos
- Entrevistar 3–5 professores: topam validar conteúdo de aluno? o que os motivaria a usar a plataforma
- Definir o público inicial (ENEM? um vestibular específico? uma cidade/escola piloto?)
- Fechar o escopo do MVP em uma frase: o que o produto faz na v1, e o que fica explicitamente de fora

**Entregável da fase:** documento curto de escopo + validação de que existe demanda real, antes de qualquer investimento técnico.

---

## Fase 1 — Decisões técnicas e fundação (1–2 semanas)

**Stack sugerida** (ajuste conforme a experiência do time):
- Frontend web: Next.js (React) — bom custo-benefício para SEO da landing + app autenticado no mesmo projeto
- Backend: API dentro do próprio Next.js (route handlers) no início; separar em serviço próprio só se a IA ou a escala exigirem
- Banco de dados: PostgreSQL (dados relacionais: aluno, professor, turma, rascunho)
- ORM: Prisma ou Drizzle
- Autenticação: NextAuth/Auth.js ou Clerk, com papéis (aluno, professor, admin)
- Armazenamento de arquivo (imagens/PDF dos rascunhos): S3-compatível (Cloudflare R2, por exemplo)
- IA: chamadas a um provedor de modelo (via API) encapsuladas numa camada própria — não acoplar a lógica de negócio ao provedor específico, para poder trocar depois

**Estrutura de projeto:**
- Se o time é pequeno (1–3 pessoas): um único repositório Next.js full-stack é suficiente. Monorepo com múltiplos pacotes só compensa quando existir mais de um app real (web + mobile, por exemplo)
- Definir desde já: pastas para `components`, `lib/ai`, `lib/db`, `app` (rotas)

**Infra:**
- Hospedagem: Vercel (frontend/API) + banco gerenciado (Supabase, Neon ou Railway)
- CI básico: lint + typecheck + build a cada push

**Entregável da fase:** projeto inicializado, rodando localmente, com banco conectado e deploy automático configurado.

---

## Fase 2 — MVP núcleo: aluno + rascunhos (3–4 semanas)

Sem IA e sem professor ainda — só provar o núcleo social.

- Cadastro/login de aluno
- Criar, editar e publicar rascunho (texto, imagem, PDF)
- Definir visibilidade do rascunho (privado ou público)
- Categorização manual (matéria, tópico) — a IA assume isso na próxima fase
- Feed simples (cronológico ou filtrado por matéria)
- Perfil básico do aluno

**Entregável da fase:** aluno se cadastra, publica um rascunho e navega pelos rascunhos de outros.

---

## Fase 3 — IA própria (3–4 semanas)

- Categorização automática do rascunho (matéria, tópico, nível) ao ser publicado
- Recomendação de rascunhos com base no histórico do aluno
- Chat de tira-dúvidas contextualizado no conteúdo da plataforma
- Diagnóstico de onboarding (quiz curto) gerando a primeira trilha personalizada

**Entregável da fase:** rascunhos entram categorizados automaticamente; aluno recebe recomendações e pode tirar dúvidas com a IA.

---

## Fase 4 — Espaço do professor (2–3 semanas)

- Cadastro/login de professor, papel diferenciado
- Criar turma e adicionar alunos
- Publicar aula/material oficial (visualmente distinto do conteúdo gerado por aluno)
- Fila de curadoria: validar rascunhos populares
- Fila de dúvidas escaladas pela IA quando ela não resolve

**Entregável da fase:** professor organiza uma turma e valida conteúdo.

---

## Fase 5 — Confiança e qualidade (1–2 semanas)

- Selo de "validado por professor" nos rascunhos
- Reputação do autor (baseada em precisão, não só engajamento)
- Sinalização automática de inconsistências pela IA antes da validação humana

**Entregável da fase:** o feed diferencia visualmente conteúdo validado de não validado.

---

## Fase 6 — Beta fechado (2–3 semanas)

- Simulados gerados a partir dos rascunhos + banco de questões
- Polimento de UI/UX e responsividade mobile
- Métricas básicas (rascunhos publicados, alunos ativos, taxa de validação)
- Piloto com uma turma ou grupo real

**Entregável da fase:** produto pronto para os primeiros usuários reais.

---

## Resumo em sequência

| Fase | Foco | Duração estimada |
|------|------|-------------------|
| 0 | Validação e planejamento | 1–2 semanas |
| 1 | Decisões técnicas e fundação | 1–2 semanas |
| 2 | Aluno + rascunhos (sem IA) | 3–4 semanas |
| 3 | IA própria | 3–4 semanas |
| 4 | Espaço do professor | 2–3 semanas |
| 5 | Confiança e validação | 1–2 semanas |
| 6 | Beta fechado | 2–3 semanas |

**Total estimado: ~13–20 semanas** até um beta fechado, com time pequeno (1–3 devs). Se for uma pessoa só, é razoável dobrar as estimativas.

## Por que essa ordem

A Fase 0 existe porque construir sem validar é o maior risco de um app social — ninguém compartilha rascunho num app vazio. A Fase 2 vem antes da Fase 3 (IA) pelo mesmo motivo: a IA organiza o que os alunos publicam, então não adianta construí-la antes de saber se as pessoas vão publicar. O professor entra só na Fase 4 porque a curadoria só faz sentido quando já existe volume de conteúdo para curar.
