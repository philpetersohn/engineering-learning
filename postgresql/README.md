# PostgreSQL and SQL

Status: **Local PostgreSQL setup started; systematic SQL learning planned**

## PostgreSQL versus SQL

- **PostgreSQL** is a relational database management system (the software that stores and manages the data).
- **SQL** is the language used to define database structures and query or modify the data.
- Our Node.js application connects to PostgreSQL through a database driver such as `pg` (node-postgres).

We will learn SQL directly before adding an ORM so that we understand the queries and data model beneath any abstraction.

## Why SQL matters for full-stack development

A backend often persists users, projects, and tasks, and needs to read and change related data safely. A full-stack engineer should understand how tables relate, how to query the data, how constraints protect it, and how indexes affect performance.

## Learning sequence

### 1. Relational database fundamentals
- Tables, rows, columns, and data types.
- Primary keys and foreign keys.
- Relationships between entities.
- Relational thinking versus storing everything in one large object.

### 2. Schema design
- One-to-one, one-to-many, and many-to-many relationships.
- Normalization and avoiding unnecessary duplicated data.
- Nullability, defaults, and constraints.
- Unique and check constraints.

### 3. CRUD
- `CREATE TABLE`
- `INSERT`
- `SELECT`
- `UPDATE`
- `DELETE`

### 4. Filtering and sorting
- `WHERE`, comparison operators, `AND`, `OR`, `IN`, `LIKE`.
- `ORDER BY`, `LIMIT`, and `OFFSET`.
- Handling `NULL` correctly.

### 5. Joins
- `INNER JOIN` and `LEFT JOIN`.
- Joining tasks to projects and assignees.
- Understanding why joins can create multiple rows.

### 6. Aggregation
- `COUNT`, `SUM`, and `AVG`.
- `GROUP BY` and `HAVING`.
- Counting tasks by status or project.

### 7. Data integrity
- Primary keys, foreign keys, unique constraints, check constraints.
- Referential actions such as restrict/cascade, and their consequences.

### 8. Transactions
- `BEGIN`, `COMMIT`, and `ROLLBACK`.
- Atomicity and why multiple related writes may need one transaction.
- Basic isolation concepts.

### 9. Indexes and performance
- What an index is and why it can speed up reads.
- The costs of indexes for writes and storage.
- `EXPLAIN` and query plans.
- Choosing indexes based on real query patterns.

### 10. Connect Node.js + TypeScript
- Install and configure `pg` (node-postgres).
- Use environment configuration for connection details.
- Understand connection pooling.
- Use parameterized queries.
- Understand how to use a checked-out client for transactions and release it reliably.
- Map rows into application types without assuming TypeScript validates database data at runtime.
- Add migrations and database integration tests.

## Task domain: practice schema

The Task domain will eventually be represented by tables such as:
- `projects`
- `users`
- `tasks`

Tasks will reference projects and assignees through foreign keys. We'll choose the exact columns, constraints, nullability, and deletion behavior during the schema-design lesson rather than treating this outline as a finished schema.

## Query safety: parameterized values

Do not concatenate raw user input into SQL. With node-postgres, use placeholders and pass values separately:

```ts
const result = await pool.query(
  'SELECT id, title FROM tasks WHERE project_id = $1',
  [projectId],
)
```

This separates the SQL statement from the supplied value and protects value positions from SQL injection. Ordinary value placeholders do not parameterize table or column identifiers; dynamic identifiers need separate safe handling.

## Practice deliverables

- Write SQL directly in `.sql` files.
- Create and seed a small Task database.
- Query tasks by status, project, and assignee.
- Join tasks to projects and users.
- Add constraints to protect data integrity.
- Use `EXPLAIN` to inspect a query plan once indexes are introduced.
- Connect queries to a Node.js + TypeScript API.
- Test successful and failing database operations.

## Official resources

- PostgreSQL Tutorial: https://www.postgresql.org/docs/current/tutorial.html
- PostgreSQL documentation: https://www.postgresql.org/docs/current/
- node-postgres: https://node-postgres.com/
- node-postgres queries: https://node-postgres.com/features/queries
- node-postgres pooling: https://node-postgres.com/features/pooling

The Odin Project's database curriculum can supplement the official docs with a structured sequence and exercises. We will select relevant parts and adapt the practice to our Task application.
