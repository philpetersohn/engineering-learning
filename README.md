# Engineering Learning

My journey toward becoming a senior full-stack and AI application engineer.

This repository records the concepts we study, code we write, exercises we complete, and explanations we can use in engineering interviews.

## Core full-stack stack

| Layer | Technology | Responsibility |
|---|---|---|
| Frontend | React + TypeScript | User interface and client-side behavior |
| Backend | Node.js + TypeScript | HTTP APIs, business logic, validation, authentication |
| Database | PostgreSQL + SQL | Relational persistence, queries, transactions |
| Testing | Vitest / Supertest | Unit and API-level verification |

**TypeScript is the language; Node.js is the runtime.** We write backend source in TypeScript and use TypeScript-aware tooling to check/build it into JavaScript that Node.js executes. PostgreSQL is the database server, and SQL is the language used to define, query, and modify relational data.

## Learning principles

- Understand concepts before implementing them.
- Learn in a deliberate sequence; don't skip foundations.
- Practice with small exercises before larger implementations.
- Use official documentation as the primary technical reference.
- Use The Odin Project selectively for additional explanations, sequencing, and exercises—especially its Node.js and database material. We adapt relevant exercises to TypeScript and our goals rather than following its full curriculum blindly.
- Preserve original answers in the Learning Journal and add improved interview-ready answers separately.
- Mark work complete only when it has actually been practiced or verified.

## Roadmap

| Area | Focus | Status |
|---|---|---|
| TypeScript | Domain modelling, functions, arrays, immutability, utility types, generics | In progress |
| React | Rendering, components, props, state, effects, forms, API integration | Foundations introduced; curriculum ahead |
| Node.js + TypeScript | Runtime, modules, async I/O, Express APIs, middleware, validation, tests | Previous Express foundations; deeper study planned |
| PostgreSQL + SQL | Relational modelling, CRUD, joins, constraints, indexes, transactions | Local setup started; systematic study planned |
| Full-stack integration | React + TypeScript, Node + TypeScript, PostgreSQL | Planned |
| System design and cloud | API design, caching, scaling, resilience, deployment, observability | Ongoing practice |
| Algorithms | Data structures, problem-solving patterns, complexity | Ongoing practice |
| AI application engineering | LLM APIs, structured output, embeddings, RAG, agents, evaluation | Longer-term phase |

## Learning resource policy

Official documentation is the source of truth for technical behavior:
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/intro.html
- Node.js Learn: https://nodejs.org/en/learn
- PostgreSQL Tutorial: https://www.postgresql.org/docs/current/tutorial.html
- Express documentation: https://expressjs.com/
- node-postgres documentation: https://node-postgres.com/
- Vitest documentation: https://vitest.dev/guide/

The Odin Project is a supporting resource. We can use a relevant lesson when it provides a particularly clear explanation or useful project, but the active curriculum is organized around becoming job-ready with React, TypeScript, Node.js, and SQL.

## Repository structure

- `typescript/` — language concepts, examples, and tests
- `react/` — React fundamentals and UI patterns
- `backend/` — Node.js, TypeScript, APIs, and server-side engineering
- `postgresql/` — SQL, relational modelling, PostgreSQL, and query practice
- `fullstack-project/` — integration project connecting frontend, API, and database
- `cloud/` — deployment and cloud foundations
- `system-design/` — architecture practice and explanations
- `algorithms/` — data structures and algorithm practice
- `ai-engineering/` — LLM application engineering
- `learning-journal/` — dated progress and original/improved answers

## Current working example: Task domain

We use a small project-management domain to make concepts concrete:

```ts
type TaskStatus = 'todo' | 'in-progress' | 'done'

interface Task {
  id: string
  title: string
  projectId: string
  assigneeId: string
  status: TaskStatus
  dueDate?: string
}
```

This Task domain will eventually connect a React UI, typed Node API, and PostgreSQL tables. We'll build those layers in order rather than introducing the full stack all at once.

## Progress language

- **Introduced:** We have discussed the concept.
- **Practiced:** I have implemented or worked through an exercise.
- **Verified:** Tests or a review have provided evidence that it works.
- **Interview-ready:** I can explain and apply it independently.

Test examples are not claimed to have passed unless a test run is confirmed.
