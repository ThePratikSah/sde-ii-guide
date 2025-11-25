---
id: go
title: Go Track
sidebar_label: Go
sidebar_position: 2
---

### Weekly Goals

- **Backend**
  - Learn **PostgreSQL** basics: tables, schemas, joins.
  - Implement transactions and understand isolation levels.
  - Recognize and fix **N+1 query** problems.
- **DSA**
  - Trees basics (BFS/DFS), continue arrays/strings review.
- **Theory**
  - ACID, CAP theorem.

Use together with:
- [16-Week Roadmap](../../roadmap/roadmap-16-weeks.md)
- [Theory Round](../../topic-banks/theory-round.md)

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|--------------------------------------------------- |
| 1   | PostgreSQL setup, tables, basic SQL                |
| 2   | Joins & normalization basics                       |
| 3   | Transactions & isolation levels                    |
| 4   | Integrate PostgreSQL with Go (pgx driver)          |
| 5   | N+1 issues & optimization strategies               |
| 6   | Compare MongoDB vs PostgreSQL for a project        |
| 7   | Weekly review & ACID vs CAP reflection             |

---

### Day 1 – PostgreSQL Setup & Basic SQL

#### 4-Hour Plan

- **Block 1 (Setup – 60–75 min)**
  - Install PostgreSQL (or use Docker).
  - Create database and tables.

- **Block 2 (SQL Basics – 60 min)**
  - Practice:
    - `CREATE TABLE`, `INSERT`, `SELECT`.
    - `WHERE`, `ORDER BY`, `LIMIT`.

- **Block 3 (DSA – 60 min)**
  - 2–3 tree problems (BFS/DFS).

- **Block 4 (Review – 30 min)**
  - Note differences from MongoDB schemas.

#### 6-Hour Plan

- Add:
  - **More queries (60 min)**: `UPDATE`, `DELETE`.

---

### Day 2 – Joins & Normalization

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - `INNER JOIN`, `LEFT JOIN`.
    - Normalization (1NF, 2NF, 3NF).

- **Block 2 (Hands-On – 60 min)**
  - Create related tables (`users`, `orders`, `order_items`).
  - Practice join queries.

- **Block 3 (DSA – 60 min)**
  - 2–3 tree traversal problems.

- **Block 4 (Review – 30 min)**
  - Where to use joins in projects.

#### 6-Hour Plan

- Add:
  - **Modeling exercise (60 min)**.

---

### Day 3 – Transactions & Isolation Levels

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Understand:
    - Transactions and ACID.
    - Isolation levels.
    - Anomalies (dirty read, phantom read).

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - Balance transfer transaction.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Relate isolation levels to backend use cases.

#### 6-Hour Plan

- Add:
  - **Experiment (60 min)**: Two connections to visualize transactional behavior.

---

### Day 4 – Integrate PostgreSQL with Go

#### 4-Hour Plan

- **Block 1 (Integration – 60–75 min)**
  - Set up:
    - `pgx` driver in Go project.
  - Implement:
    - Simple service using PostgreSQL.

- **Block 2 (Repository Layer – 60 min)**
  - Create repository classes for PostgreSQL operations.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Document connection handling and pooling.

#### 6-Hour Plan

- Add:
  - **Transaction usage (60 min)**: Endpoint with DB transaction.

---

### Day 5 – N+1 Issues & Optimizations

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - **N+1 query problem**.
    - Fix strategies: joins, IN queries.

- **Block 2 (Hands-On – 60 min)**
  - Simulate N+1 and optimize.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Record N+1 pattern and fix.

#### 6-Hour Plan

- Add:
  - **Refactor (60 min)**: Audit endpoints for N+1.

---

### Day 6 – MongoDB vs PostgreSQL for Your Project

#### 4-Hour Plan

- **Block 1 (Comparison – 60–75 min)**
  - Compare:
    - Schema flexibility.
    - Query patterns.
    - Consistency needs.

- **Block 2 (Design Decision – 60 min)**
  - Decide which DB for each entity.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Document decision and trade-offs.

#### 6-Hour Plan

- Add:
  - **Hybrid experiment (60 min)**: Mongo + PostgreSQL.

---

### Day 7 – Weekly Review & ACID vs CAP Reflection

#### 4-Hour Plan

- **Block 1 (Review – 60–75 min)**
  - Revisit:
    - PostgreSQL basics, joins, transactions.
    - N+1 detection.
  - Update skill gap template.

- **Block 2 (Theory – 60 min)**
  - Read CAP theorem.
  - Reflect on consistency trade-offs.

- **Block 3 (DSA – 45–60 min)**
  - Mixed problems.

#### 6-Hour Plan

- Add:
  - **Essay (45–60 min)**: Compare ACID vs eventual consistency.
