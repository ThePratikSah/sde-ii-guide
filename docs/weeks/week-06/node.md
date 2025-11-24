---
id: node
title: Node.js / TypeScript
sidebar_label: Node.js
sidebar_position: 1
---

### Weekly Goals

- **Backend**
  - Learn MongoDB basics: collections, documents, CRUD operations.
  - Design schemas for one of your projects (e.g., URL shortener, SaaS app).
  - Integrate MongoDB with your Node.js API (via driver or Mongoose).
- **DSA**
  - Practice arrays/strings, sliding window, and some tree basics.
- **Theory**
  - Start reading DBMS concepts: normalization, indexes ([theory-round.md](../topic-banks/theory-round.md)).

Use with:
- [16-Week Roadmap](../roadmap/roadmap-16-weeks.md)
- [Projects](../topic-banks/projects.md)
- [Theory Round](../topic-banks/theory-round.md)

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|----------------------------------------------------|
| 1   | MongoDB basics & data modeling                     |
| 2   | CRUD operations & basic queries                    |
| 3   | Indexes & performance basics                       |
| 4   | Integrate MongoDB with Node.js API                 |
| 5   | MongoDB schema design for chosen project           |
| 6   | Aggregation framework basics                       |
| 7   | Weekly review & DBMS theory tie-in                 |

---

### Day 1 – MongoDB Basics & Data Modeling

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Collections, documents, BSON.
    - Difference between relational and document databases.

- **Block 2 (Hands-On – 60 min)**
  - Use Mongo shell or GUI:
    - Create a database and a couple of collections.
    - Insert sample documents.

- **Block 3 (Design – 60 min)**
  - Design initial schemas for one project:
    - Example: URL shortener:
      - `short_urls`: `shortCode`, `longUrl`, `createdAt`, `clickCount`.

- **Block 4 (Review – 30 min)**
  - Note pros/cons of flexible schema vs strict schema.

#### 6-Hour Plan

- Add:
  - **Additional modeling (60 min)**:
    - Sketch schemas for 1 more domain (e.g., notification service).

---

### Day 2 – CRUD Operations & Basic Queries

#### 4-Hour Plan

- **Block 1 (Hands-On – 60–75 min)**
  - Practice:
    - `insertOne`, `insertMany`.
    - `find`, `findOne`, query filters, projections.
    - `updateOne`, `updateMany`, `$set`, `$inc`.
    - `deleteOne`, `deleteMany`.

- **Block 2 (Node Integration – 60 min)**
  - In your Node project:
    - Add MongoDB connection.
    - Implement basic CRUD using the native driver or Mongoose.

- **Block 3 (DSA – 60 min)**
  - 2–3 DSA problems (arrays/strings or trees intro).

- **Block 4 (Review – 30 min)**
  - Document Mongo connection setup and basic CRUD examples.

#### 6-Hour Plan

- Add:
  - **Extra integration (60 min)**:
    - Replace in-memory storage for one API with MongoDB.

---

### Day 3 – Indexes & Performance Basics

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - What is an index?
    - Single-field vs compound indexes.
    - How indexes affect reads and writes.

- **Block 2 (Hands-On – 60 min)**
  - In Mongo:
    - Create indexes on fields you query often.
    - Use `explain()` to see query plans (high-level).

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (trees or maps, tying to index concepts).

- **Block 4 (Review – 30 min)**
  - Write short notes: when to index and when not to.

#### 6-Hour Plan

- Add:
  - **Optimization exercise (60 min)**:
    - Compare query times with and without index on a modest dataset.

---

### Day 4 – Integrate MongoDB with Node.js API

#### 4-Hour Plan

- **Block 1 (Refactor – 60–75 min)**
  - Choose 1–2 endpoints from your API (e.g., `POST /items`, `GET /items`):
    - Replace in-memory persistence with Mongo persistence.

- **Block 2 (Error Handling – 60 min)**
  - Add:
    - Proper error handling for DB operations.
    - Timeouts or simple safeguards (e.g., not crashing on connection issues in dev).

- **Block 3 (DSA – 60 min)**
  - 2–3 mixed problems.

- **Block 4 (Review – 30 min)**
  - Update project README with data persistence details.

#### 6-Hour Plan

- Add:
  - **Simple repository pattern (60 min)**:
    - Introduce `Repository` classes to abstract Mongo operations.

---

### Day 5 – MongoDB Schema Design for Chosen Project

#### 4-Hour Plan

- **Block 1 (Design – 60–75 min)**
  - Deep dive on schema for your core project:
    - Example: Multitenant SaaS backend:
      - `tenants`, `users`, `projects`, `tasks`.
  - Decide references vs embedding.

- **Block 2 (Implementation – 60 min)**
  - Implement schema in code (driver or Mongoose models).

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Document reasons for references vs embedded documents.

#### 6-Hour Plan

- Add:
  - **Data seeding script (60 min)**:
    - Create script to insert sample data for dev/testing.

---

### Day 6 – Aggregation Framework Basics

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Aggregation pipeline basics: `$match`, `$group`, `$project`, `$sort`, `$limit`.

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - Example: Count clicks per day for URL shortener.
    - Example: Count tasks per project.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems, ideally involving counting/grouping logic.

- **Block 4 (Review – 30 min)**
  - Note where aggregation can replace complex application logic.

#### 6-Hour Plan

- Add:
  - **Integrate one aggregation** into your API as a stats endpoint.

---

### Day 7 – Weekly Review & DBMS Theory Tie-In

#### 4-Hour Plan

- **Block 1 (Review – 60–75 min)**
  - Revisit:
    - CRUD, indexing, schema design, aggregation.
  - Update [skill gap template](../getting-started/skill-gap-template.md) (MongoDB, DB basics).

- **Block 2 (Theory – 60 min)**
  - From [theory-round.md](../topic-banks/theory-round.md):
    - Read about normalization, ACID, indexing in relational DBs.
  - Compare with Mongo concepts.

- **Block 3 (DSA – 45–60 min)**
  - Mixed problems.

#### 6-Hour Plan

- Add:
  - **Reflection (45–60 min)**:
    - Write 1–2 paragraphs: when would you choose MongoDB over a relational DB for a backend service?


