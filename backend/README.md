# Backend Engineering

Status: **Prior foundations studied; further study planned**

This section records backend concepts already discussed in earlier hands-on work and provides a place to build on them. It does not mean every backend topic is complete.

## Node.js and Express foundations previously covered

- Express application and route structure.
- Separating routes, controllers, and middleware.
- Middleware execution and the role of `next()`.
- What happens when middleware does not call `next()` or send a response: the request can remain pending.
- Difference between ordinary middleware and error-handling middleware.
- Reusable middleware, including a shared authentication middleware design.
- Request validation and appropriate HTTP error responses.
- Environment variables for secrets and configuration.
- API tests with Vitest and Supertest.

## API behavior discussed in the Mini Message Board exercise

The user worked on tests and behavior for:
- `POST /api/users` to create a user.
- `GET /api/users` to retrieve users.
- Duplicate user handling using HTTP 409 Conflict.
- Missing email validation using HTTP 400 Bad Request.

The user reported Vitest results during that project, including an initial run with 6 passing tests and later additional route tests. Those were earlier Mini Message Board results; they are not test results for the TypeScript Task utilities in this repository.

## Configuration and secrets

Credentials and API keys should not be committed to source control. A local `.env` file can be used for development configuration when it is excluded from Git. In deployed environments, use the platform's secret/configuration management rather than relying on a developer's local file.

## Database and persistence

PostgreSQL was started locally as part of earlier study. Database fundamentals and deeper query work remain learning objectives.

## Next areas to deepen

- REST API design and resource modelling.
- Runtime request validation.
- Authentication versus authorization.
- Database schema design, indexes, and transactions.
- Error classification and consistent API responses.
- Integration testing and test databases.
- Logging, tracing, and observability.
- Security, rate limiting, and operational reliability.
