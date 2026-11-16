# 4. Object spread, immutability, and references

## The object spread syntax

The spread syntax `...` copies an object's enumerable own properties into a new object.

```ts
const updatedTask = { ...task, title: 'Build authentication API' }
```

This creates a new object:
1. Copy the properties from `task`.
2. Set `title` to the new value.
3. Return the resulting object.

### Property order matters

In an object literal, later properties override earlier properties with the same key:

```ts
const updated = { ...task, title: newTitle }
```

The new `title` wins because it appears after the spread.

If the order were reversed, the original title would overwrite `newTitle`:

```ts
const notWhatWeWant = { title: newTitle, ...task }
```

## Immutability

In this context, immutability means we avoid changing the existing array or task object. Instead, we create new data representing the updated state.

```ts
export function updateTaskTitle(
  tasks: Task[],
  taskId: string,
  newTitle: string,
): Task[] {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, title: newTitle } : task,
  )
}
```

Step by step:
1. `map` visits every Task.
2. `task.id === taskId` checks whether the current item is the one to update.
3. `?` selects the expression used when the condition is true.
4. `{ ...task, title: newTitle }` creates a new object for the matching task.
5. `:` selects the expression used when the condition is false.
6. `task` is returned unchanged for all other items.
7. `map` returns a new array.

## Ternary operator

The general syntax is:

```ts
condition ? valueWhenTrue : valueWhenFalse
```

It is an expression that chooses one of two values. In our function, it chooses between a copied/updated Task and the original Task reference.

## Reference equality with `===`

For primitive values such as strings and numbers, `===` compares values. For objects and arrays, it compares whether both variables refer to the **same object in memory**.

```ts
const original = { title: 'Plan API' }
const copy = { ...original }

console.log(original === copy) // false: two different objects
console.log(original.title === copy.title) // true: same string value
```

With the update function:
- `updatedTasks === tasks` is false because `map` returns a new array.
- The updated task object is a new object, so its reference differs.
- An unchanged task object is returned as-is, so its reference is the same.
- If the ID does not exist, the array is still new, but every task element can retain its old reference.

These comparisons test identity. They do not mean "React rendered" or "React did not render."

## Why this matters in React

React applications commonly rely on reference changes to detect updated state and decide what needs work. Mutating an existing object while keeping the same reference can make changes harder for React and memoized components to detect. Creating new references for changed data makes the update explicit.

## Important limitation: spread is shallow

Spread copies the top-level properties. It does not recursively clone nested objects.

```ts
const original = {
  title: 'Plan API',
  metadata: { priority: 'high' },
}
const copy = { ...original }

copy.metadata === original.metadata // true
```

The nested `metadata` object is still shared. If a nested property needs updating immutably, copy each object along the path to the changed value.

## Practice

1. Create a new Task object with a changed title using spread.
2. Explain why the original Task remains unchanged.
3. Predict which references are equal after `updateTaskTitle`.
4. Explain why a new array does not mean every element is a new object.

**Status:** Practiced with `updateTaskTitle` and reference comparisons.
