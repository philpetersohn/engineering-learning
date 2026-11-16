# 5. Overdue business logic and guard clauses

## The business rule

For this exercise, a Task is overdue when:
1. It has a due date.
2. It is not completed.
3. Its due date is earlier than today.

A task due today is not overdue.

## The function

```ts
export function isTaskOverdue(task: Task, today: string): boolean {
  if (!task.dueDate) {
    return false
  }

  if (task.status === 'done') {
    return false
  }

  return task.dueDate < today
}
```

## Line-by-line explanation

### 1. Function signature

`task: Task` supplies the task being evaluated. `today: string` supplies today's date. The function returns a boolean.

Passing today's date as an argument makes the function predictable and easy to test. The function does not need to read the current clock itself.

### 2. Check for a missing due date

```ts
if (!task.dueDate) {
  return false
}
```

The `!` operator means logical NOT. If `task.dueDate` is falsy, the function returns false immediately.

For the declared `dueDate?: string` property, the expected missing case is `undefined`. An empty string is also falsy, so this check returns false for it too.

### 3. Ignore completed tasks

```ts
if (task.status === 'done') {
  return false
}
```

A completed task is not considered overdue under this business rule, even if its due date is in the past.

### 4. Compare dates

```ts
return task.dueDate < today
```

The comparison is correct when both strings use the canonical `YYYY-MM-DD` format, for example `2026-11-14`. In that fixed-width format, lexicographic string ordering corresponds to chronological date ordering.

This assumption matters. Arbitrary date strings such as `11/14/2026` should not be compared this way.

## Guard clauses

A guard clause checks a condition that lets the function exit early:

```ts
if (!task.dueDate) return false
if (task.status === 'done') return false
```

Guard clauses keep the main rule easy to see and avoid deeply nested `if` blocks.

## Combining the function with filter

```ts
const overdueTasks = tasks.filter((task) =>
  isTaskOverdue(task, today),
)
```

The business rule stays in a reusable utility function. The component or caller decides what to do with the resulting array.

## React rendering example

```tsx
<ul>
  {overdueTasks.map((task) => (
    <li key={task.id}>{task.title}</li>
  ))}
</ul>
```

`filter` selects which tasks should appear. `map` converts each selected task into a list item.

## Why keep the rule outside the component?

- The same business rule can be reused in multiple parts of the application.
- It can be tested without mounting React components.
- UI code focuses on presentation.
- The rule has explicit inputs and output.

## Edge cases to test

| Situation | Expected result |
|---|---|
| Due date is yesterday, status in progress | true |
| Due date is today | false |
| Due date is tomorrow | false |
| No due date | false |
| Empty due-date string | false |
| Past due date, status done | false |
| Past due date, status todo | true |

## Practice

1. Explain why a task due today returns false.
2. Explain why completed tasks return false before comparing dates.
3. Change the function to treat a task due today as overdue, then explain exactly which comparison changed. Do not keep that behavior unless the product rule requires it.

**Status:** Practiced with the Task utility and edge-case test design.
