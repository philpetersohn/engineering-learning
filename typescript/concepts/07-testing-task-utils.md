# 7. Testing the Task utilities with Vitest

## Why test utility functions?

A unit test checks one small unit of behavior in isolation. The Task utilities are good unit-test candidates because they accept data and return results without requiring a React browser environment.

Tests help document expected behavior and protect edge cases when implementation changes.

## Vitest structure

```ts
import { describe, expect, it } from 'vitest'

describe('isTaskOverdue', () => {
  it('returns true for a past-due unfinished task', () => {
    expect(isTaskOverdue(task, '2026-11-16')).toBe(true)
  })
})
```

- `describe` groups related tests.
- `it` (also commonly written as `test`) defines one behavior to verify.
- `expect` receives the actual value.
- `.toBe(...)` checks strict equality; it is appropriate for booleans, strings, numbers, and reference identity.
- `.toEqual(...)` checks that object/array values have the same structure and values.

## Test fixtures and helpers

A fixture is reusable sample data for tests. A helper function can create a default Task and allow a test to override selected properties.

```ts
function task(
  overrides: Partial<Task> & Pick<Task, 'id' | 'title'>,
): Task {
  return {
    projectId: 'p1',
    assigneeId: 'u1',
    status: 'todo',
    ...overrides,
  }
}
```

This helper requires the test to provide `id` and `title`, while other Task fields can be overridden. It applies defaults first and then spreads the overrides so the supplied values win.

This is a practical use of the utility types introduced earlier:
- `Partial<Task>` makes the properties optional.
- `Pick<Task, 'id' | 'title'>` requires id and title.
- `&` combines both constraints.

## What we designed tests for

### `isTaskOverdue`

- Past-due unfinished task returns true.
- Due today returns false.
- Future due date returns false.
- Missing due date returns false.
- Empty due-date string returns false.
- Completed task with a past due date returns false.
- Todo task with a past due date returns true.

### `updateTaskTitle`

- The matching task gets the new title.
- The input array remains unchanged.
- A new array is returned.
- The updated task is a new object.
- Unchanged task objects retain their references.
- A missing ID leaves item values unchanged, though `map` still returns a new array.

## Reference identity tests

For immutable update behavior, test both values and references:

```ts
expect(updatedTasks).not.toBe(originalTasks)
expect(updatedTasks[0]).toBe(originalTasks[0]) // unchanged item
expect(updatedTasks[1]).not.toBe(originalTasks[1]) // updated item
```

The indexes above assume the second item is the one being updated. These assertions test reference identity, not just structural equality.

## Important progress note

We reviewed and expanded the test cases together. The conversation record confirms that the user ran tests at earlier stages of the Mini Message Board project, but it does **not** confirm that this exact Task utility test suite was executed. Do not claim this example suite passes until it is run locally.

## Practice

1. Add one test for each business-rule edge case.
2. Test that the original Task array is not mutated.
3. Explain the difference between `toBe` and `toEqual`.
4. Run the tests and record the exact command and result in the Learning Journal.
