# Engineering Learning

My journey toward becoming a senior full-stack and AI application engineer.

This repository is the durable record of the concepts we study, the code we write, the exercises we complete, and the explanations I can use in engineering interviews.

## How to use this repository

Every topic should include:
1. **What it is** — a clear definition in plain language.
2. **Why it exists** — the problem it solves.
3. **How it works** — a small example, preferably from the Task domain below.
4. **When to use it** — practical engineering situations.
5. **Common mistakes** — misunderstandings and edge cases.
6. **Practice** — a small exercise before a larger implementation.
7. **Interview explanation** — explain the concept and trade-offs in my own words.

We learn concepts before using them in larger projects. A topic is not "complete" just because a note exists.

## Progress language

- **Introduced:** We have discussed the concept.
- **Practiced:** I have implemented or worked through an exercise.
- **Verified:** Tests or a review have provided evidence that the implementation works.
- **Interview-ready:** I can explain and apply the concept independently.

Statuses in this repository reflect what has actually happened. Test examples are not claimed to have passed unless a test run is confirmed.

## Roadmap

| Area | Topics | Status |
|---|---|---|
| TypeScript | Domain modelling, functions, arrays, objects, immutability, utility types, generics | In progress |
| React | Rendering lists, JSX, keys, component boundaries, state and effects | Foundations introduced; curriculum ahead |
| Frontend system design | Real-time UI, data flow, performance, resilience, observability | Planned / ongoing practice |
| Backend engineering | Node.js, Express, APIs, validation, middleware, errors, databases, tests | Prior foundations studied; further study planned |
| Cloud and distributed systems | Configuration, health checks, deployments, scaling, reliability | Some foundations studied; further study planned |
| Algorithms | Data structures, problem-solving patterns, complexity | Ongoing practice |
| AI application engineering | LLM APIs, structured output, embeddings, RAG, agents, evaluation | Planned |

The Odin Project curriculum is currently paused; this repository records concepts already learned and follows the active study plan rather than restarting that curriculum.

## Repository structure

- `typescript/` — TypeScript concepts, functions, examples, and tests
- `react/` — rendering and UI concepts
- `backend/` — server-side engineering
- `cloud/` — deployment and cloud foundations
- `system-design/` — architecture practice and explanations
- `algorithms/` — data structures and algorithms
- `ai-engineering/` — LLM application engineering
- `learning-journal/` — progress and original/improved answers

## Current working example: Task domain

We use a small project-management domain to make TypeScript concepts concrete:

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

The same model is used throughout the TypeScript notes. It gives us a consistent example for functions, object updates, filtering, business rules, utility types, and generics.

## Learning journal

Original explanations are kept unchanged. An improved interview-ready version is added separately so progress is visible and the learner's original thinking is not overwritten.
