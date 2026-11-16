# Progress snapshot — 2026-11-16

This snapshot gathers the progress confirmed in the study conversation up to this date. It is not a claim that every topic in the roadmap is complete.

## TypeScript and domain modelling

### Practiced
- Created a `TaskStatus` string union: `'todo' | 'in-progress' | 'done'`.
- Defined a `Task` interface with required properties and an optional `dueDate`.
- Wrote `updateTaskTitle` using `map`, a ternary expression, and object spread.
- Compared array and object references using `===`.
- Wrote `isTaskOverdue` with early returns and a canonical date-string comparison.
- Used `filter` to derive overdue tasks and `map` to render them.
- Practiced `Partial`, `Required`, `Pick`, `Omit`, union and intersection types.
- Discussed test cases for value behavior and reference identity.

### In progress
- Generics: introduced `<T>`, type inference, and `ApiResponse<T>`.
- Generic constraints with `T extends { id: string }` have not yet been taught in full or practiced.
- The `findById` exercise remains unfinished.

## React

Introduced:
- Mapping data to JSX.
- Rendering a list with stable keys.
- Why a plain JavaScript object cannot be rendered as a React child.
- Separating reusable business logic from component presentation.

React state and effects are not marked complete.

## Earlier backend and operations foundations

From earlier project work:
- Node.js and Express route/controller/middleware separation.
- Middleware flow and `next()`.
- Error-handling middleware.
- Request validation and HTTP 400 / 409 responses.
- Vitest and Supertest.
- PostgreSQL started locally.
- Health checks, multiple instances, CI/CD, and deployment concepts.

The Mini Message Board project had earlier reported passing Vitest runs. These are separate from the Task utility tests described in the current TypeScript notes.

## Original explanation preserved

**Original answer (unchanged):**

> to keep the code maintainable. also the function could be used in different places through the appa nd we just have to import the function and reuse it.

**Improved interview-ready answer:**

> I separate business logic from UI components to keep the code maintainable and reusable. A utility function can be imported wherever the same rule is needed, and it can be tested independently without rendering a component.

## Earlier system design answers preserved

The following are the learner's original answers, retained as written.

**What happens if one application instance crashes?**

> The entire app will be down because there is one point of failure.

**Why might we run multiple instances?**

> If one server goes down traffic can be redirected and the application on another server run.

**What is a health check, and why is it useful?**

> Useful to see if the connection is established. If an error is seen they know the health check is completed and they can look into it.

**Where should database credentials and API keys be stored?**

> in an .env file that they do not get pushed into GitHub.

**How would you deploy a new version without interrupting existing users?**

> with CI/CD. If an existing user is going to use the application again there should be a quick reload and the user does not even notice that something changed.

## Next study steps

1. Finish the generic constraint lesson conceptually.
2. Implement and explain `findById`.
3. Practice array method selection: `map`, `filter`, and `find`.
4. Run the Task utility tests locally and record the actual result.
