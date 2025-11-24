---
id: go
title: Go Track
sidebar_label: Go
sidebar_position: 2
---

### Weekly Goals

- **Backend**
  - Learn **MongoDB** basics with Go driver.
  - Design schemas for one of your projects.
  - Integrate MongoDB with your Go API.
- **DSA**
  - Practice arrays/strings, sliding window, and some tree basics.
- **Theory**
  - DBMS concepts: normalization, indexes.

Use together with:
- [16-Week Roadmap](../roadmap/roadmap-16-weeks.md)
- [Projects](../topic-banks/projects.md)
- [Theory Round](../topic-banks/theory-round.md)

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|--------------------------------------------------- |
| 1   | MongoDB basics & data modeling                     |
| 2   | CRUD operations with Go driver                     |
| 3   | Indexes & performance basics                       |
| 4   | Integrate MongoDB with Go API                      |
| 5   | MongoDB schema design for chosen project           |
| 6   | Aggregation framework basics                       |
| 7   | Weekly review & DBMS theory tie-in                 |

---

### Day 1 – MongoDB Basics & Data Modeling

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Collections, documents, BSON.
    - Document vs relational databases.

- **Block 2 (Hands-On – 60 min)**
  - Use Mongo shell or GUI:
    - Create database and collections.
    - Insert sample documents.

- **Block 3 (Design – 60 min)**
  - Design schemas for URL shortener:
    - `short_urls`: `shortCode`, `longUrl`, `createdAt`, `clickCount`.

- **Block 4 (Review – 30 min)**
  - Note pros/cons of flexible schema.

#### 6-Hour Plan

- Add:
  - **Additional modeling (60 min)**.

---

### Day 2 – CRUD Operations with Go Driver

#### 4-Hour Plan

- **Block 1 (Hands-On – 60–75 min)**
  - Practice:
    - `InsertOne`, `InsertMany`.
    - `Find`, `FindOne`, filters, projections.
    - `UpdateOne`, `UpdateMany`.
    - `DeleteOne`, `DeleteMany`.

- **Block 2 (Go Integration – 60 min)**
  - In your Go project:
    - Add MongoDB connection using `go.mongodb.org/mongo-driver`.
    - Implement basic CRUD.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Document connection setup.

#### 6-Hour Plan

- Add:
  - **Extra integration (60 min)**:
    - Replace in-memory storage with MongoDB.

---

### Day 3 – Indexes & Performance Basics

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - What is an index?
    - Single-field vs compound indexes.
    - Impact on reads and writes.

- **Block 2 (Hands-On – 60 min)**
  - Create indexes on frequently queried fields.
  - Use `Explain()` to see query plans.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - When to index and when not to.

#### 6-Hour Plan

- Add:
  - **Optimization exercise (60 min)**.

---

### Day 4 – Integrate MongoDB with Go API

#### 4-Hour Plan

- **Block 1 (Refactor – 60–75 min)**
  - Replace in-memory persistence with MongoDB for 1–2 endpoints.

- **Block 2 (Error Handling – 60 min)**
  - Add proper error handling for DB operations.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Update README.

#### 6-Hour Plan

- Add:
  - **Repository pattern (60 min)**.

---

### Day 5 – MongoDB Schema Design for Chosen Project

#### 4-Hour Plan

- **Block 1 (Design – 60–75 min)**
  - Deep dive on schema:
    - Example: SaaS backend: `tenants`, `users`, `projects`, `tasks`.
  - Decide references vs embedding.

- **Block 2 (Implementation – 60 min)**
  - Implement schema in Go structs with BSON tags.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Document reasons for design choices.

#### 6-Hour Plan

- Add:
  - **Data seeding script (60 min)**.

---

### Day 6 – Aggregation Framework Basics

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Aggregation pipeline: `$match`, `$group`, `$project`, `$sort`, `$limit`.

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - Count clicks per day for URL shortener.
    - Count tasks per project.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Where aggregation can replace app logic.

#### 6-Hour Plan

- Add:
  - **Integrate aggregation (60 min)**:
    - Add stats endpoint.

---

### Day 7 – Weekly Review & DBMS Theory Tie-In

#### 4-Hour Plan

- **Block 1 (Review – 60–75 min)**
  - Revisit:
    - CRUD, indexing, schema design, aggregation.
  - Update skill gap template.

- **Block 2 (Theory – 60 min)**
  - From theory-round.md:
    - Read about normalization, ACID, indexing.
  - Compare with MongoDB.

- **Block 3 (DSA – 45–60 min)**
  - Mixed problems.

#### 6-Hour Plan

- Add:
  - **Reflection (45–60 min)**:
    - When to choose MongoDB vs relational DB?
