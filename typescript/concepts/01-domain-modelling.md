# 1. Domain modelling and the Task type

## What is domain modelling?

Domain modelling means describing the important things in an application and the data they need. In a task-management application, a task has an identity, a title, a project, an assignee, a status, and possibly a due date.

A TypeScript type or interface makes that expected shape explicit. The compiler can then help detect code that uses the data incorrectly.

## The Task model

```ts
export type TaskStatus = 'todo' | 'in-progress' | 'done'

export interface Task {
  id: string
  title: string
  projectId: string
  assigneeId: string
  status: TaskStatus
  dueDate?: string
}
```

### Every part explained

- `export`: makes the declaration available to other modules that import it.
- `type TaskStatus = ...`: creates a named type alias.
- `'todo' | 'in-progress' | 'done'`: a **union type**. A value must be one of these exact strings.
- `interface Task`: describes the expected shape of a Task object.
- `id: string`: a required property whose value must be a string.
- `dueDate?: string`: an optional property. A Task may omit it; when present, it must be a string.
- `projectId` and `assigneeId`: references to related domain entities.

## Why use a union for status?

Without a union, a plain `string` would allow misspellings and unknown status values:

```ts
const status: TaskStatus = 'in-progress' // valid
// const invalid: TaskStatus = 'inprogress' // TypeScript error
```

A finite union makes the allowed states visible to developers and catches invalid values during type checking.

## Type alias versus interface

Both can describe object shapes. In this example:
- `type` is used for the finite status union.
- `interface` is used for the Task object contract.

There are more differences between aliases and interfaces, but these examples demonstrate a common, readable use of each.

## Optional properties

The question mark in `dueDate?` means the property may be absent:

```ts
const taskWithoutDeadline: Task = {
  id: 't3',
  title: 'Write documentation',
  projectId: 'p1',
  assigneeId: 'u2',
  status: 'todo',
}
```

Code that reads an optional value must account for the possibility that it is missing.

## When this is useful

Domain types are useful at API boundaries, in component props, in business logic, in database mapping, and in tests. They make data contracts explicit and reduce accidental inconsistencies.

## Common mistakes

- Using a generic `string` for a small, known set of states when a union is more accurate.
- Assuming an optional property is always present.
- Treating TypeScript types as runtime validation. TypeScript checks code at compile time; untrusted API input still needs runtime validation.

## Practice

1. Add a `priority` union with `'low'`, `'medium'`, and `'high'`.
2. Add an optional `description` property to Task.
3. Explain why `status: string` is less precise than `status: TaskStatus`.

**Status:** Practiced using the Task model.
