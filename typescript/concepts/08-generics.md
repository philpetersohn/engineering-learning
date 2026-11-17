# 8. Generics

Status: **Generic constraints and the findById exercise practiced; tests verified locally**

## The problem generics solve

If a function only accepted Task[], it would work only for Tasks. If it returned unknown or any, callers would lose useful type information.

A generic function lets the caller supply a type while keeping the relationship between input and output.

## First generic function

~~~ts
function getFirstItem<T>(items: T[]): T | undefined {
  return items[0]
}
~~~

- <T> declares a type parameter named T.
- T[] means an array of values of type T.
- T | undefined means the result is a T or undefined when the array is empty.
- TypeScript can usually infer T from the argument.

Examples:

~~~ts
const firstTask = getFirstItem(tasks) // Task | undefined
const firstName = getFirstItem(['Ada', 'Grace']) // string | undefined
const firstNumber = getFirstItem([10, 20, 30]) // number | undefined
~~~

One implementation works with different types while preserving the caller's type information.

## Generic interfaces

~~~ts
interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

type TaskResponse = ApiResponse<Task>
type UserResponse = ApiResponse<User>
type TaskListResponse = ApiResponse<Task[]>
~~~

The same response structure can wrap different data types. ApiResponse<Task> means its data property is a Task; ApiResponse<Task[]> means its data property is an array of Tasks.

The User type in this example is illustrative and must be defined in the application before use.

## Generic constraints

An unrestricted generic type parameter can represent almost any type:

~~~ts
function getId<T>(item: T): string {
  // TypeScript error: T does not guarantee an id property
  return item.id
}
~~~

TypeScript cannot permit item.id because T could be a string, number, or an object without an id.

A generic constraint adds a requirement:

~~~ts
function getId<T extends { id: string }>(item: T): string {
  return item.id
}
~~~

Read T extends { id: string } as: "T can be any type, provided it has at least an id property whose value is a string."

The constraint does **not** mean the object contains only an ID. A Task still has its title, status, and other properties. A User still has its name and other properties.

## Practical example: reusable findById

The goal is to look up an item by its ID without writing a separate function for every domain type.

~~~ts
export function findById<T extends { id: string }>(
  items: T[],
  id: string,
): T | undefined {
  return items.find((item) => item.id === id)
}
~~~

### Line-by-line explanation

- Generic constraint: the array element type must have a string ID.
- items: T[] accepts an array of that specific type.
- id: string is the ID we want to find.
- T | undefined means a matching object is returned, or undefined if there is no match.
- .find() visits items and returns the first item whose callback is true.

### Type inference preserves the specific object type

~~~ts
const task = findById(tasks, 't2') // Task | undefined
const user = findById(users, 'u1') // User | undefined

task?.title
user?.name
~~~

We do not need to manually supply Task or User as a type argument. TypeScript infers T from the array argument.

The return type includes undefined because an ID might not exist. Generics preserve the kind of object being searched for; they do not guarantee that the requested object exists at runtime.

### Safely using the result

Optional chaining avoids accessing a property when the result is undefined:

~~~ts
const result = findById(tasks, 't2')
console.log(result?.title)
~~~

Or use an explicit check:

~~~ts
if (result) {
  console.log(result.title)
}
~~~

Inside the if block TypeScript narrows the type from Task | undefined to Task. This is an example of **type narrowing**.

## Tests

The exercise was tested with both Task and User objects, and for missing and empty results:

~~~ts
it('finds an existing task', () => {
  expect(findById(tasks, 't2')?.title)
    .toBe('Build authentication API')
})

it('returns undefined for a missing task', () => {
  expect(findById(tasks, 'missing')).toBeUndefined()
})

it('finds an existing user', () => {
  expect(findById(users, 'u1')?.name).toBe('Phil')
})

it('returns undefined for an empty array', () => {
  expect(findById([], 't1')).toBeUndefined()
})
~~~

**Verified local test result:** the user's Vitest run reported 2 test files passed and 20 tests passed in total: 4 tests in findUtils.test.ts and 16 in taskUtils.test.ts. This result came from the user's local project, not from running the repository's example files in GitHub.

## Why use one generic function?

A single generic lookup function:
- avoids duplicating the same search algorithm for Tasks, Users, and other entities;
- preserves each caller's specific type, so Task results still expose Task properties and User results still expose User properties;
- states the minimum requirement explicitly: an object must have a string ID;
- centralizes behavior, so fixes and tests apply to every supported type.

A non-generic Task-specific function would only accept Task arrays. Separate Task and User functions would repeat the same logic.

## Common mistakes

- Assuming <T> automatically means an object. T could be any type until constrained.
- Thinking T extends { id: string } removes all properties except id. It only guarantees the minimum shape.
- Declaring the return type as just T even though .find() may return undefined.
- Assuming TypeScript knows whether a matching record exists at runtime.
- Using a type assertion to silence the compiler instead of expressing the real constraint.

## Practice questions

1. What does <T> represent?
2. Why can't an unrestricted T safely access item.id?
3. What does T extends { id: string } guarantee?
4. Why does findById return T | undefined?
5. Why is one generic function preferable to separate Task and User lookup functions?
6. What does TypeScript infer for findById(tasks, 't2') and findById(users, 'u1')?
7. Why can we safely access result.title inside if (result)?

**Next:** Continue practicing type narrowing and other generics patterns in the planned sequence. Do not skip directly to advanced generic types.
