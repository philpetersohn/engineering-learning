# 2. Functions, parameters, and return types

## Function contracts

A function is a reusable unit of behavior. Its signature describes what information it receives and what value it returns.

Example:

```ts
function isTaskOverdue(task: Task, today: string): boolean {
  // implementation
}
```

- `task: Task` is a parameter named `task` whose type is Task.
- `today: string` is a second parameter.
- `: boolean` says the function returns either `true` or `false`.
- The braces contain the implementation.

The return type helps callers understand what to expect and lets TypeScript detect a return value of the wrong type.

## Parameters versus arguments

- A **parameter** is the named input in the function definition, such as `task`.
- An **argument** is the actual value supplied when calling the function, such as `isTaskOverdue(myTask, '2026-11-16')`.

## Array parameter and return types

```ts
function updateTaskTitle(
  tasks: Task[],
  taskId: string,
  newTitle: string,
): Task[] {
  // implementation
}
```

- `Task[]` means an array containing Task values.
- The function receives an array, an ID, and a new title.
- It returns an array of Task values.

## Naming and single responsibility

A good function name describes the behavior. A function should ideally do one cohesive job. For example, `isTaskOverdue` answers one business question; a React component can decide how to display that answer.

Separating pure business rules from UI code makes the rule easier to reuse and test.

## Pure function idea

A pure function returns a result based on its inputs and does not change external state. The Task utilities in this study are designed to behave this way:
- They receive the current task data.
- They calculate or return a result.
- They do not directly update a database, mutate global state, or manipulate the DOM.

A function can be deterministic when the same inputs always produce the same output. Passing `today` as an argument to `isTaskOverdue` makes the date dependency explicit instead of reading the system clock inside the function.

## Practice

1. Write a function that accepts a Task and returns its title as a string.
2. Write a function that accepts Task[] and returns the number of tasks.
3. For each function, state its parameter types and return type.

**Status:** Practiced through `updateTaskTitle` and `isTaskOverdue`.
