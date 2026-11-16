# 6. TypeScript utility types

Utility types are built-in TypeScript type operators that help create related types from an existing type. They reduce repeated declarations and keep types aligned when a domain model changes.

We used four utility types: `Partial`, `Required`, `Pick`, and `Omit`.

## `Partial<T>`

Makes every property of T optional.

```ts
type TaskUpdate = Partial<Task>
```

This is useful for an update payload where a caller may provide only the fields being changed:

```ts
const changeTitle: TaskUpdate = { title: 'Write API docs' }
const changeStatus: TaskUpdate = { status: 'done' }
```

It does not mean every property will be present. Code consuming a TaskUpdate must account for missing values.

## `Required<T>`

Makes every property of T required.

```ts
type CompleteTask = Required<Task>
```

Because `dueDate` is optional in Task, it becomes required in CompleteTask.

This utility changes optionality in the type. It does not fill missing values at runtime.

## `Pick<T, K>`

Creates a type containing only the selected properties.

```ts
type TaskSummary = Pick<Task, 'id' | 'title' | 'status'>
```

The keys are combined with a **union** operator `|` inside the key argument. Here TaskSummary includes exactly `id`, `title`, and `status`.

Useful when a UI needs a small view of a larger domain object.

## `Omit<T, K>`

Creates a type containing all properties except the selected ones.

```ts
type NewTask = Omit<Task, 'id'>
```

This can describe data used to create a task when the server or database generates the ID.

## Combining utility types with intersections

```ts
type CreateTask =
  Pick<Task, 'title' | 'projectId'> &
  Partial<Pick<Task, 'id' | 'assigneeId' | 'status' | 'dueDate'>>
```

Read it in two parts:
- Required part: `title` and `projectId`.
- Optional part: `id`, `assigneeId`, `status`, and `dueDate`.

The ampersand `&` is an **intersection type**. It combines the requirements of both types.

## Union `|` versus intersection `&`

- A union `A | B` means a value can be A **or** B.
- An intersection `A & B` means a value must satisfy A **and** B.

Example:

```ts
type HasTitle = { title: string }
type HasStatus = { status: TaskStatus }

type TitleOrStatus = HasTitle | HasStatus
type TitleAndStatus = HasTitle & HasStatus
```

`TitleAndStatus` must contain both properties. A value of `TitleOrStatus` can satisfy either side of the union (and may satisfy both).

## Equivalent arrangements of Partial and Pick

These two forms produce equivalent results for the selected properties in this example:

```ts
type A = Partial<Pick<Task, 'title' | 'status'>>
type B = Pick<Partial<Task>, 'title' | 'status'>
```

Both create a type where only `title` and `status` are present in the shape, and both are optional.

## Common mistakes

- Writing `Pick<Task, 'id' & 'title'>`. Use `'id' | 'title'` to select multiple keys.
- Calling `Required<Task>` a union type. It is a utility type application.
- Assuming a utility type transforms a runtime object. These are compile-time type transformations.
- Using `Partial<Task>` for every API payload without thinking about which fields should actually be editable.

## Practice

1. Define a type containing only a Task's `id` and `title`.
2. Define an update type where `title` and `status` are optional.
3. Define a type where `dueDate` is required.
4. Explain why `CreateTask` uses `&` rather than `|`.

**Status:** Practiced. The user correctly created TaskUpdate, TaskSummary, NewTask, and CreateTask.
