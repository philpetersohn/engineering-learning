# Backend Engineering — Node.js + TypeScript

Status: **Previous Express foundations studied; systematic Node.js + TypeScript study planned**

## First distinction: TypeScript versus Node.js

- **TypeScript** is a typed language that builds on JavaScript.
- **Node.js** is a runtime that executes JavaScript outside the browser and provides server-side capabilities such as networking, filesystem access, and asynchronous I/O.
- We write backend source in TypeScript. Our development/build tooling checks and transforms it into JavaScript that Node.js executes.
- **Express** is a web framework commonly used on Node.js to build HTTP APIs.

We do not need to learn a second backend language to use Node.js. We need to learn the Node runtime, server-side JavaScript behavior, HTTP, and backend architecture.

## A typical API request

1. A client sends an HTTP request.
2. Node.js handles the network I/O.
3. Express matches the request to a route.
4. Middleware performs shared work such as authentication or validation.
5. A controller/application service applies the use case.
6. A repository/data-access module runs SQL through a PostgreSQL driver.
7. The API returns an HTTP response, often JSON.

## Foundations previously discussed

- Express application and route structure.
- Separating routes, controllers, and middleware.
- Middleware execution and the role of `next()`.
- A middleware that neither calls `next()` nor sends a response can leave the request pending.
- Difference between ordinary middleware and error-handling middleware.
- Reusable middleware, including a shared authentication middleware design.
- Request validation and HTTP 400 / 409 responses.
- Environment variables for configuration and secrets.
- Vitest and Supertest for API tests.

## Mini Message Board experience

The user worked on:
- `POST /api/users` to create a user.
- `GET /api/users` to retrieve users.
- Duplicate-user handling using HTTP 409 Conflict.
- Missing-email validation using HTTP 400 Bad Request.

The user reported Vitest results during that earlier project, including an initial run with 6 passing tests and later additional route tests. These results belong to the Mini Message Board project, not the Task utility test examples in this repository.

## Planned Node.js + TypeScript learning sequence

### 1. Node runtime fundamentals
- Runtime versus programming language.
- Node standard library and the `process` object.
- Environment variables and process lifecycle.
- CommonJS versus ECMAScript modules.

### 2. Project setup and tooling
- npm, `package.json`, dependencies, and scripts.
- TypeScript configuration for a Node project.
- Development execution versus production build.
- Module imports and exports.

### 3. Asynchronous JavaScript and I/O
- Callbacks and Promises.
- `async` / `await`.
- Error propagation and rejected promises.
- Event loop and non-blocking I/O at a practical level.
- Concurrency and why blocking work can hurt throughput.

### 4. HTTP and REST
- Request and response, methods, headers, status codes, JSON.
- Resource-oriented endpoint design.
- Idempotency and appropriate status codes.
- Input validation and response contracts.

### 5. Express with TypeScript
- App setup and routing.
- Typed request/response boundaries.
- Middleware and error middleware.
- Controllers and service layer.
- Centralized error handling.

### 6. Runtime validation and security
- TypeScript types do not validate incoming JSON at runtime.
- Validate untrusted input before using it.
- Authentication versus authorization.
- Secrets, CORS, rate limiting, and SQL injection prevention.

### 7. Maintainable backend architecture
- Route/controller/service/repository responsibilities.
- Dependency boundaries and testability.
- Configuration and error classification.
- Avoiding unnecessary abstractions.

### 8. Testing and operations
- Unit tests and API integration tests.
- Database integration tests and test isolation.
- Logging, health checks, graceful shutdown.
- Observability, deployment, and debugging.

## TypeScript does not replace runtime validation

An interface describes what our code expects, but it does not stop an HTTP client from sending invalid JSON:

```ts
interface CreateTaskInput {
  title: string
  projectId: string
}
```

The interface is useful at compile time. At runtime, request data must still be validated. We'll study validation libraries and patterns as a separate lesson.

## PostgreSQL integration

We'll learn SQL directly before using an ORM. Then we'll connect the Node.js + TypeScript API to PostgreSQL using the `pg` (node-postgres) driver, parameterized queries, and a connection pool.

See [PostgreSQL and SQL](../postgresql/README.md).

## Official resources

- Node.js Learn: https://nodejs.org/en/learn
- Node.js API documentation: https://nodejs.org/api/
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/intro.html
- Express documentation: https://expressjs.com/
- node-postgres: https://node-postgres.com/

The Odin Project's Node.js path may be used as supplementary teaching and practice, especially when a project gives us a practical reason to apply these concepts.
