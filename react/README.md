# React

Status: **Foundations introduced; further curriculum planned**

## Rendering data with `.map()`

When an array of data needs to become a list of UI elements, use `.map()` to transform each item into JSX.

```tsx
function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <section>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
        </div>
      ))}
    </section>
  )
}
```

The function passed to `map` returns one React element for each Task.

## Why use a key?

The `key` helps React identify which list item corresponds to which data item when a list changes. Use a stable identifier such as `task.id` when available. Avoid using array indexes as keys when items can be inserted, removed, or reordered.

## Why a plain object cannot be rendered directly

A plain JavaScript object is not a valid React child. React can render values such as elements, strings, numbers, and arrays of renderable children, but an arbitrary object like `{ id: 't1', title: 'Write docs' }` must first be converted into UI.

For example, render `task.title` or map an array of tasks into elements. If you need to display an object's dynamic key/value pairs, `Object.entries(object)` converts its enumerable entries into an array that can be mapped.

## Keep business logic separate from presentation

A component should focus on displaying data and handling UI behavior. A reusable utility such as `isTaskOverdue` can calculate business rules outside the component. This makes the rule easier to reuse and test independently.

## Concepts not yet covered in this study sequence

State, effects, refs, context, advanced rendering, memoization, accessibility patterns, and React testing need dedicated lessons before being marked complete.
