# Generic constraints and reusable lookup — 2026-11-17

## What was studied

- Generic type parameters <T>.
- Why an unconstrained generic cannot safely access item.id.
- Generic constraints using T extends { id: string }.
- How constraints require a minimum object shape without removing additional properties.
- Type inference from function arguments.
- The return type T | undefined when using .find().
- Optional chaining and the idea of type narrowing.
- Testing a single generic function with different object types.

## Implementation completed

~~~ts
export function findById<T extends { id: string }>(
  items: T[],
  id: string,
): T | undefined {
  return items.find((item) => item.id === id)
}
~~~

The same function was used with Task[] and User[]. TypeScript inferred Task | undefined for Task input and User | undefined for User input, preserving their respective properties.

## Tests

The learner supplied four tests:
1. Find an existing task and read its title.
2. Return undefined for a missing task ID.
3. Find an existing user and read its name.
4. Return undefined for an empty Task array.

**Observed local Vitest result:**
- Test files: 2 passed.
- Tests: 20 passed, 0 failed.
- findUtils.test.ts: 4 passed.
- taskUtils.test.ts: 16 passed.
- Duration reported by Vitest: 100 ms.

This is the user's local run output. It is not a test execution performed by GitHub.

## Original answers preserved

**Question: What return type is inferred for the result when looking up a Task?**

Original:

> We will get a string back because typescript infers the type

Improved understanding:

> TypeScript infers the generic type from the array argument. The function returns the original object type, not a string: for a Task array the return type is Task | undefined.

**Question: What happens when searching for an ID that is missing?**

Original:

> Typescriot returns an object Task because we created the generic object from Task.

Improved understanding:

> TypeScript still infers T as Task, but it cannot guarantee the search finds a matching object. The return type is Task | undefined.

**Question: Why can the return type include undefined?**

Original:

> Becaue typescript does not know if the object exists.

Improved understanding:

> The search runs at runtime. A matching ID may not exist in the array, so .find() can return undefined. The type T | undefined makes the caller handle both possibilities.

## Progress

- Generic constraints: practiced.
- Generic findById: implemented and reviewed.
- Task and User inference: demonstrated.
- Missing ID and empty array behavior: tested.
- Local test result: 20 passed across 2 files.
- Type narrowing: introduced through optional chaining and an explicit existence check; continue practicing separately.

## Next interview question

Explain why a single generic findById<T extends { id: string }> is preferable to writing separate Task and User lookup functions. Focus on code reuse, type safety, and preserving each specific object type.
