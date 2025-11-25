---
id: node
title: Node.js / TypeScript
sidebar_label: Node.js
sidebar_position: 1
---

### Weekly Goals

- **Backend**
  - Learn **Redis** basics: data structures, TTL, persistence.
  - Implement caching (`cache-aside`) for at least one API.
  - Build a more **robust rate limiter** using Redis.
  - Get introduced to **queues** (e.g., BullMQ) and background jobs.
- **DSA**
  - Practice heaps/priority queues and continue mixed revision.
- **Theory**
  - Understand trade-offs of caching and eventual consistency.

Use with:
- [16-Week Roadmap](../../roadmap/roadmap-16-weeks.md)
- [Projects](../../topic-banks/projects.md)
- [Machine Coding Bank](../../topic-banks/machine-coding-bank.md) (rate limiter, cache problems)

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|----------------------------------------------------|
| 1   | Redis basics: data types, TTL, persistence         |
| 2   | Caching strategies & cache-aside implementation    |
| 3   | Redis-based rate limiter (fixed/sliding window)    |
| 4   | Intro to queues (BullMQ/RabbitMQ/SQS concepts)     |
| 5   | Implement background jobs (email/notification stub)|
| 6   | Integrate caching + queues into project            |
| 7   | Weekly review & system design tie-in               |

---

### Day 1 – Redis Basics: Data Types, TTL, Persistence

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Strings, lists, sets, sorted sets, hashes.
    - TTL for keys; basic persistence options (RDB, AOF) at high level.

- **Block 2 (Hands-On – 60 min)**
  - Using Redis CLI:
    - `SET`, `GET`, `INCR`, `EXPIRE`.
    - Work with hash for simple objects.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems focusing on heaps/priority queues or maps.

- **Block 4 (Review – 30 min)**
  - Note where each Redis data type might be useful in backend services.

#### 6-Hour Plan

- Add:
  - **Node integration (60 min)**:
    - Connect to Redis from Node and perform basic operations.

---

### Day 2 – Caching Strategies & Cache-Aside

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Understand caching strategies:
    - Cache-aside.
    - Write-through.
    - Write-back (conceptual).
  - Learn about cache stampede and thundering herd basics.

- **Block 2 (Hands-On – 60 min)**
  - Implement cache-aside in your API:
    - Example: `GET /items/:id`:
      - Check Redis first.
      - If miss, load from DB, store in cache.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (can include LRU cache-style questions conceptually).

- **Block 4 (Review – 30 min)**
  - Document your cache key strategy and TTL decisions.

#### 6-Hour Plan

- Add:
  - **Metrics experiment (60 min)**:
    - Log when cache hit vs miss and inspect behavior.

---

### Day 3 – Redis-Based Rate Limiter

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Review rate limiting algorithms:
    - Fixed window.
    - Sliding window.
    - Token bucket (conceptual).

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - A per-IP or per-user rate limiter using Redis.
    - Start with fixed window; if time, explore sliding window.

- **Block 3 (DSA – 60 min)**
  - 2–3 sliding window problems (ties well with concept).

- **Block 4 (Review – 30 min)**
  - Note pros/cons of fixed window vs sliding window in your implementation.

#### 6-Hour Plan

- Add:
  - **Refinement (60 min)**:
    - Add route-specific limits (e.g., stricter on login).

---

### Day 4 – Intro to Queues & Background Jobs

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Why queues? Decoupling, reliability.
    - Basic queue semantics (push, pop, ACK).
    - DLQ (dead-letter queue) concept.

- **Block 2 (Hands-On – 60 min)**
  - Use BullMQ or similar:
    - Create a simple queue.
    - Producer: push jobs (e.g., send email).
    - Worker: processes jobs and logs output.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (queues/graphs BFS).

- **Block 4 (Review – 30 min)**
  - Draw a simple ASCII diagram of producer → queue → consumer.

```text
Producer Service ---> Queue (Redis) ---> Worker (Job Processor)
```

#### 6-Hour Plan

- Add:
  - **Retry logic (60 min)**:
    - Configure retries and backoff for failed jobs.

---

### Day 5 – Background Jobs for Notifications / Emails

#### 4-Hour Plan

- **Block 1 (Design – 45–60 min)**
  - Choose use case:
    - Notification email sending, log processing, or report generation.
  - Define job payload structure.

- **Block 2 (Implementation – 90 min)**
  - Add:
    - API endpoint to enqueue job.
    - Worker to process jobs (stubbed email/notification).

- **Block 3 (Review – 30–45 min)**
  - Note:
    - How you’d handle job failures in production (DLQ, alerts).

#### 6-Hour Plan

- Add:
  - **Extra testing (60 min)**:
    - Simulate failures and confirm retries/backoff behavior.

---

### Day 6 – Integrate Caching + Queues into Project

#### 4-Hour Plan

- **Block 1 (Integration – 90 min)**
  - For your main project:
    - Add Redis caching for one hot-read endpoint.
    - Add job queue for one write-heavy or async-heavy operation (e.g., sending notification).

- **Block 2 (Manual Testing – 60 min)**
  - Test:
    - End-to-end flow of job creation and processing.
    - Cache hit/miss behavior.

- **Block 3 (Review – 30–45 min)**
  - Update project README with:
    - Caching and queue architecture sections.

#### 6-Hour Plan

- Add:
  - **Observability (60 min)**:
    - Log job timings and counts.

---

### Day 7 – Weekly Review & System Design Tie-In

#### 4-Hour Plan

- **Block 1 (Review – 60–75 min)**
  - Revisit Redis basics, caching, rate limiting, and queues.
  - Update [skill gap template](../../getting-started/skill-gap-template.md) (Redis, queues).

- **Block 2 (System Design – 60 min)**
  - Design on paper:
    - A **rate limiter service** or **notification service**, referencing:
      - Redis for counters/cache.
      - Queues for async processing.

- **Block 3 (DSA – 45–60 min)**
  - Mixed problems (heaps, sliding window, queues).

#### 6-Hour Plan

- Add:
  - **Self-interview (45–60 min)**:
    - Explain your Redis and queue-based designs out loud as if in a system design round.


