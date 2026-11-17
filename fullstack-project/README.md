# Full-Stack Integration Project

Status: **Planned — build after the relevant foundations**

## Goal

Build one small, understandable application that connects:
- React + TypeScript frontend.
- Node.js + TypeScript backend.
- Express HTTP API.
- PostgreSQL relational database.
- Vitest / Supertest tests.

The Task domain from the TypeScript lessons becomes the shared product context.

## Initial feature scope

1. List tasks.
2. Create a task.
3. View one task by ID.
4. Update a task title and status.
5. Filter tasks by project and status.
6. Persist tasks in PostgreSQL rather than an in-memory array.

We will first make this basic data flow reliable. Authentication, AI features, real-time updates, and elaborate UI can come later.

## Architecture

```text
React + TypeScript
      |
      | HTTP / JSON
      v
Node.js + TypeScript + Express
      |
      | service / repository boundary
      v
PostgreSQL
```

## Milestones

- [ ] Define requirements and API contracts.
- [ ] Design projects, users, and tasks relationally.
- [ ] Create schema and seed data using SQL.
- [ ] Implement typed Express routes.
- [ ] Add runtime request validation and consistent errors.
- [ ] Connect API to PostgreSQL with `pg`.
- [ ] Use parameterized SQL and connection pooling.
- [ ] Add API and database integration tests.
- [ ] Build the React UI and connect it to the API.
- [ ] Add loading, empty, and error states.
- [ ] Document how to run the project locally.

## Learning rule

We should be able to explain every layer and trace a request from the React component to the API handler, service, SQL query, PostgreSQL result, and HTTP response. The project is a learning artifact, not a race to add features.
