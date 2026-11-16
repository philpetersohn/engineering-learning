# TypeScript

Status: **In progress**

This section is the detailed reference for the TypeScript concepts and functions covered so far. Read the concept notes in order. The generics lesson is currently unfinished.

## Concepts and status

| Topic | Main ideas | Status |
|---|---|---|
| Domain modelling | `type`, `interface`, object shapes, required and optional properties | Practiced |
| Union types | A value must match one of several allowed types | Practiced |
| Function signatures | Parameters, return types, input/output contracts | Practiced |
| Arrays | `Task[]`, iteration and derived arrays | Practiced |
| `.map()` | Transform each item into a new value | Practiced |
| `.filter()` | Keep only items that pass a condition | Practiced |
| Ternary operator | Choose between two expressions | Practiced |
| Object spread | Copy properties into a new object | Practiced |
| Immutability | Avoid changing existing arrays and objects | Practiced |
| Equality and references | `===` compares object identity for objects/arrays | Practiced |
| Guard clauses | Return early when a condition means no further work is needed | Practiced |
| Date string comparison | Compare canonical `YYYY-MM-DD` strings | Practiced with stated assumption |
| Utility types | `Partial`, `Required`, `Pick`, `Omit`, intersections | Practiced |
| Generics | `<T>`, type inference, generic response types | Introduced; not finished |
| Generic constraints | `T extends ...` | Introduced as next concept; not practiced yet |

## Notes in learning order

1. [Domain modelling and the Task type](concepts/01-domain-modelling.md)
2. [Functions, parameters, and return types](concepts/02-functions-and-types.md)
3. [Arrays: map, filter, and find](concepts/03-arrays-map-filter-find.md)
4. [Object spread, immutability, and references](concepts/04-spread-immutability-references.md)
5. [Overdue business logic and guard clauses](concepts/05-overdue-business-logic.md)
6. [Utility types](concepts/06-utility-types.md)
7. [Testing the Task utilities](concepts/07-testing-task-utils.md)
8. [Generics](concepts/08-generics.md)

## Example code

- [taskUtils.ts](examples/taskUtils.ts) — the Task model and functions discussed.
- [taskUtils.test.ts](examples/taskUtils.test.ts) — illustrative Vitest tests for the discussed behavior.

The example test file is a learning reference. It has not been run in this repository, so it is not being represented as a confirmed passing test suite.
