## Week 7 – Databases Part 2: MySQL, Transactions, N+1, ACID vs CAP

[← Back to main guide](../README.md)

<!-- Week 7 focuses on relational DBs (MySQL), transactions, N+1 issues, and connecting DB theory with practice. -->

### Weekly Goals

- **Backend**
  - Learn MySQL basics: tables, schemas, joins.
  - Implement simple transactions and understand isolation levels (high-level).
  - Recognize and fix **N+1 query** problems.
- **DSA**
  - Trees basics (BFS/DFS), continue arrays/strings review.
- **Theory**
  - Deepen DBMS knowledge: ACID, CAP (via `theory-round.md`).

Use with:
- `roadmap-16-weeks.md`
- `theory-round.md`

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|----------------------------------------------------|
| 1   | MySQL setup, tables, basic SQL                     |
| 2   | Joins & normalization basics                       |
| 3   | Transactions & isolation levels (conceptual)       |
| 4   | Integrate MySQL with Node.js (simple service)      |
| 5   | N+1 issues & optimization strategies               |
| 6   | Compare Mongo vs MySQL for a project               |
| 7   | Weekly review & ACID vs CAP reflection             |

---

### Day 1 – MySQL Setup & Basic SQL

#### 4-Hour Plan

- **Block 1 (Setup – 60–75 min)**
  - Install MySQL (or use Docker / cloud instance).
  - Create a database and a couple of tables.

- **Block 2 (SQL Basics – 60 min)**
  - Practice:
    - `CREATE TABLE`, `INSERT`, `SELECT`.
    - Simple `WHERE` filters, `ORDER BY`, `LIMIT`.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (trees intro with BFS/DFS).

- **Block 4 (Review – 30 min)**
  - Note how relational schema differs from your Mongo schemas.

#### 6-Hour Plan

- Add:
  - **More queries (60 min)**:
    - Practice simple `UPDATE` and `DELETE`.

---

### Day 2 – Joins & Normalization

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - `INNER JOIN`, `LEFT JOIN`.
    - Basic normalization (1NF, 2NF, 3NF).

- **Block 2 (Hands-On – 60 min)**
  - Create:
    - Two or three related tables (e.g., `users`, `orders`, `order_items`).
  - Practice join queries.

- **Block 3 (DSA – 60 min)**
  - 2–3 tree traversal problems (BFS/DFS).

- **Block 4 (Review – 30 min)**
  - Note where you’d use joins in your projects.

#### 6-Hour Plan

- Add:
  - **Small modeling exercise (60 min)** for one project using MySQL.

---

### Day 3 – Transactions & Isolation Levels (Conceptual)

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Understand:
    - Transactions and ACID properties.
    - Isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable).
    - Common anomalies (dirty read, non-repeatable read, phantom read).

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - A simple transaction that transfers balance between two accounts.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (trees or graphs base).

- **Block 4 (Review – 30 min)**
  - Relate isolation levels to real-world backend use cases.

#### 6-Hour Plan

- Add:
  - **Experiment (60 min)**:
    - Use two connections (if possible) to visualize simple transactional behavior.

---

### Day 4 – Integrate MySQL with Node.js

#### 4-Hour Plan

- **Block 1 (Integration – 60–75 min)**
  - Set up:
    - MySQL driver or query builder in your Node project.
  - Implement:
    - A simple service using MySQL for persistent storage.

- **Block 2 (Repository Layer – 60 min)**
  - Introduce:
    - `Repository` classes for MySQL operations.

- **Block 3 (DSA – 60 min)**
  - 2–3 mixed problems.

- **Block 4 (Review – 30 min)**
  - Document connection handling and any pooling used.

#### 6-Hour Plan

- Add:
  - **Transaction usage (60 min)**:
    - Implement one endpoint that uses a DB transaction (e.g., order creation with multiple inserts).

---

### Day 5 – N+1 Issues & Optimizations

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - What is the **N+1 query problem**?
    - How it happens in ORMs and manual queries.
    - Fix strategies: joins, IN queries, pre-loading.

- **Block 2 (Hands-On – 60 min)**
  - Simulate N+1:
    - E.g., for each user, query orders separately.
  - Optimize using join or batched queries.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Record one N+1 pattern and its fix.

#### 6-Hour Plan

- Add:
  - **Refactor (60 min)**:
    - Audit a few API endpoints for potential N+1 issues and optimize.

---

### Day 6 – MongoDB vs MySQL for Your Project

#### 4-Hour Plan

- **Block 1 (Comparison – 60–75 min)**
  - Compare for one project:
    - Schema flexibility.
    - Query patterns.
    - Consistency needs.

- **Block 2 (Design Decision – 60 min)**
  - Decide:
    - For each core entity, which DB makes more sense and why.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (trees/graphs).

- **Block 4 (Review – 30 min)**
  - Document your decision and trade-offs (store in project README or a design doc).

#### 6-Hour Plan

- Add:
  - **Hybrid experiment (60 min)**:
    - Use Mongo for one subsystem and MySQL for another (conceptual or basic implementation).

---

### Day 7 – Weekly Review & ACID vs CAP Reflection

#### 4-Hour Plan

- **Block 1 (Review – 60–75 min)**
  - Revisit:
    - MySQL basics, joins, transactions.
    - N+1 detection and fixes.
  - Update `skill-gap-template.md` (MySQL, DB basics).

- **Block 2 (Theory – 60 min)**
  - From `theory-round.md`:
    - Read CAP theorem and consistency models.
  - Reflect on:
    - Where your apps can tolerate eventual consistency vs require strong consistency.

- **Block 3 (DSA – 45–60 min)**
  - Mixed problems.

#### 6-Hour Plan

- Add:
  - **Essay (45–60 min)**:
    - Write 1–2 paragraphs comparing ACID in relational DBs vs eventual consistency in distributed systems for a sample use case (e.g., analytics counters vs money transfers).


[← Back to main guide](../README.md) | [Next guide →](week-08.md)