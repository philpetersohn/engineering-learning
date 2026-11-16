# 8. Generics — lesson in progress

## The problem generics solve

Imagine writing a function that returns the first element of an array.

If the function only accepted `Task[]`, it would work only for Tasks. If it returned `unknown` or `any`, callers would lose useful type information.

A generic function lets the caller supply a type while keeping the relationship between input and output.

## First generic function

```ts
function getFirstItem<T>(items: T[]): T | undefined {
  return items[0]
}
```

- `<T>` declares a type parameter named T.
- `T[]` means an array of values of type T.
- `T | undefined` means the result is a T or undefined when the array is empty.
- TypeScript can usually infer T from the argument.

Examples:

```ts
const firstTask = getFirstItem(tasks) // Task | undefined
const firstName = getFirstItem(['Ada', 'Grace']) // string | undefined
const firstNumber = getFirstItem([10, 20, 30]) // number | undefined
```

One implementation works with different types while preserving the caller's type information.

## Generic interfaces

```ts
interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

type TaskResponse = ApiResponse<Task>
type UserResponse = ApiResponse<User>
type TaskListResponse = ApiResponse<Task[]>
```

The same response structure can wrap different data types. `ApiResponse<Task>` means its data property is a Task; `ApiResponse<Task[]>` means its data property is an array of Tasks.

The `User` type in this example is illustrative and must be defined in the application before use.

## Generic constraints — next concept, not yet practiced

The next example introduces a constraint:

```ts
function findById<T extends { id: string }>(
  items: T[],
  id: string,
): T | undefined {
  // implementation comes after learning the constraint
}
```

`extends { id: string }` says T must be a type that has an `id` property whose value is a string. This allows the function to safely read `item.id` without knowing every property on T.

The intended exercise is to use `.find()` to return the first item with the matching ID.

Do not treat this lesson as complete yet. The meaning and purpose of the constraint must be explained and the exercise practiced before moving on.

## Practice questions

1. What does `<T>` represent?
2. Why does `getFirstItem` return `T | undefined` instead of just T?
3. What does the generic function preserve that a function returning `any` would lose?
4. What does `T extends { id: string }` guarantee?
5. Why should the `findById` result allow `undefined`?

**Status:** Generic type parameters and generic response types introduced. Generic constraints and `findById` exercise not yet completed.
