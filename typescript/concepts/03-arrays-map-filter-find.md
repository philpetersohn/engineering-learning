# 3. Arrays: map, filter, and find

Array methods let us work with collections declaratively: describe what result we want instead of manually managing indexes and loops.

## `.map()` — transform every item

`map` calls a callback for each array element and returns a **new array** containing the callback results. The output array has the same number of elements as the input array.

```ts
const taskTitles = tasks.map((task) => task.title)
```

For every Task, the callback returns its title. The result is a string array.

### Rendering a list in React

```tsx
{tasks.map((task) => (
  <div key={task.id}>
    <h3>{task.title}</h3>
  </div>
))}
```

Here the callback returns JSX for each task, so React receives an array of elements it can render.

Use `map` when each input item should produce a corresponding output item.

## `.filter()` — keep matching items

`filter` calls a callback for each item. It returns a **new array** containing only items for which the callback returns a truthy value.

```ts
const overdueTasks = tasks.filter((task) =>
  isTaskOverdue(task, today),
)
```

The callback checks each task. A task is included only when `isTaskOverdue` returns `true`.

Unlike `map`, filter does not transform each task into a different kind of value. It selects a subset of the original items.

Use `filter` when you want to show only tasks meeting a condition.

## `.find()` — get the first matching item

`find` returns the first element that satisfies the callback condition. If no element matches, it returns `undefined`.

```ts
const selectedTask = tasks.find((task) => task.id === taskId)
```

The return type is `Task | undefined`, because a matching task may not exist.

Use `find` when you need one matching item, not a list of all matching items.

## Comparison

| Method | Callback should return | Result | Typical use |
|---|---|---|---|
| `map` | A transformed value | New array, same length | Convert Tasks to titles or JSX |
| `filter` | true/false-like condition | New array, zero or more items | Keep overdue tasks |
| `find` | true/false-like condition | First match or `undefined` | Look up one task by ID |

## Why not duplicate JSX manually?

When rendering 10 users or tasks, writing 10 separate JSX blocks duplicates code. With `map`, one rendering rule adapts automatically to the data length.

## Common mistakes

- Using `map` when you actually want to remove items. Use `filter` for selection.
- Forgetting that `find` may return `undefined`.
- Forgetting a stable `key` when rendering lists in React.
- Assuming `map` or `filter` mutate the original array. They return new arrays.

## Practice

Given `Task[]`:
1. Use `map` to create an array of task titles.
2. Use `filter` to keep tasks whose status is `'done'`.
3. Use `find` to locate task ID `'t2'`.
4. Explain the possible return value of `find`.

**Status:** `map` and `filter` practiced. `find` introduced in the generic lookup example; continue practicing it with generic constraints.
