# TypeScript

Status: **In progress — foundational concepts practiced; more TypeScript topics remain**

This section is the detailed reference for the TypeScript concepts and functions covered so far.

## Concepts and status

| Topic | Main ideas | Status |
|---|---|---|
| Domain modelling | type, interface, object shapes, required and optional properties | Practiced |
| Union types | A value must match one of several allowed types | Practiced |
| Function signatures | Parameters, return types, input/output contracts | Practiced |
| Arrays | Task[], iteration and derived arrays | Practiced |
| .map() | Transform each item into a new value | Practiced |
| .filter() | Keep only items that pass a condition | Practiced |
| .find() | Return the first matching item or undefined | Practiced |
| Ternary operator | Choose between two expressions | Practiced |
| Object spread | Copy properties into a new object | Practiced |
| Immutability | Avoid changing existing arrays and objects | Practiced |
| Equality and references | === compares object identity for objects/arrays | Practiced |
| Guard clauses | Return early when a condition means no further work is needed | Practiced |
| Date string comparison | Compare canonical YYYY-MM-DD strings | Practiced with stated assumption |
| Utility types | Partial, Required, Pick, Omit, intersections | Practiced |
| Generics | <T>, type inference, generic response types | Practiced |
| Generic constraints | T extends { id: string } and reusable lookup function | Practiced; local tests verified |
| Type narrowing | T | undefined, optional chaining, explicit existence checks | Introduced and practiced in the lookup example |

## Notes in learning order

1. [Domain modelling and the Task type](concepts/01-domain-modelling.md)
2. [Functions, parameters, and return types](concepts/02-functions-and-types.md)
3. [Arrays: map, filter, and find](concepts/03-arrays-map-filter-find.md)
4. [Object spread, immutability, and references](concepts/04-spread-immutability-references.md)
5. [Overdue business logic and guard clauses](concepts/05-overdue-business-logic.md)
6. [Utility types](concepts/06-utility-types.md)
7. [Testing the Task utilities](concepts/07-testing-task-utils.md)
8. [Generics and generic constraints](concepts/08-generics.md)

## Example code

- [taskUtils.ts](examples/taskUtils.ts) — the Task model and functions discussed.
- [taskUtils.test.ts](examples/taskUtils.test.ts) — Task utility test examples.
- [findUtils.ts](examples/findUtils.ts) — reusable generic lookup function.
- [findUtils.test.ts](examples/findUtils.test.ts) — tests for Task, User, missing IDs, and empty arrays.

The user reported a local Vitest run with 20 passing tests across two test files (4 generic lookup tests and 16 Task utility tests). The example files stored here are learning references; the GitHub repository itself has not been run in the user's local environment.
