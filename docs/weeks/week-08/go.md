---
id: go
title: Go Track
sidebar_label: Go
sidebar_position: 2
---

### Weekly Goals

- **Backend**
  - Learn **Redis** basics: data structures, TTL, persistence.
  - Implement caching (`cache-aside`) for at least one API.
  - Build a **robust rate limiter** using Redis.
  - Get introduced to **queues** and background jobs.
- **DSA**
  - Practice heaps/priority queues and continue mixed revision.
- **Theory**
  - Caching trade-offs and eventual consistency.

Use together with:
- [16-Week Roadmap](../roadmap/roadmap-16-weeks.md)
- [Projects](../topic-banks/projects.md)
- [Machine Coding Bank](../topic-banks/machine-coding-bank.md)

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|--------------------------------------------------- |
| 1   | Redis basics: data types, TTL, persistence         |
| 2   | Caching strategies & cache-aside implementation    |
| 3   | Redis-based rate limiter (fixed/sliding window)    |
| 4   | Intro to queues (concepts)                         |
| 5   | Implement background jobs with channels/goroutines |
| 6   | Integrate caching + background jobs into project   |
| 7   | Weekly review & system design tie-in               |

---

### Day 1 – Redis Basics: Data Types, TTL, Persistence

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Strings, lists, sets, sorted sets, hashes.
    - TTL for keys; persistence (RDB, AOF).

- **Block 2 (Hands-On – 60 min)**
  - Using Redis CLI:
    - `SET`, `GET`, `INCR`, `EXPIRE`.
    - Work with hash.

- **Block 3 (DSA – 60 min)**
  - 2–3 heap/priority queue problems.

- **Block 4 (Review – 30 min)**
  - Where each Redis data type is useful.

#### 6-Hour Plan

- Add:
  - **Go integration (60 min)**: Connect to Redis from Go using `go-redis/redis`.

---

### Day 2 – Caching Strategies & Cache-Aside

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Understand:
    - Cache-aside, write-through, write-back.
    - Cache stampede.

- **Block 2 (Hands-On – 60 min)**
  - Implement cache-aside:
    - `GET /items/:id`: Check Redis → DB → Store in cache.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (LRU cache-style).

- **Block 4 (Review – 30 min)**
  - Document cache key strategy and TTL.

#### 6-Hour Plan

- Add:
  - **Metrics (60 min)**: Log cache hit vs miss.

---

### Day 3 – Redis-Based Rate Limiter

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Review:
    - Fixed window, sliding window, token bucket.

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - Per-IP rate limiter using Redis.
    - Fixed window; explore sliding window.

- **Block 3 (DSA – 60 min)**
  - 2–3 sliding window problems.

- **Block 4 (Review – 30 min)**
  - Pros/cons of fixed vs sliding window.

#### 6-Hour Plan

- Add:
  - **Refinement (60 min)**: Route-specific limits.

---

### Day 4 – Intro to Queues & Background Jobs

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Why queues? Decoupling, reliability.
    - Queue semantics (push, pop, ACK).
    - DLQ concept.

- **Block 2 (Hands-On – 60 min)**
  - In Go:
    - Use channels + goroutines as a simple queue.
    - Producer: push jobs.
    - Worker: processes jobs.

- **Block 3 (DSA – 60 min)**
  - 2–3 queue/BFS problems.

- **Block 4 (Review – 30 min)**
  - Draw producer → queue → consumer diagram.

#### 6-Hour Plan

- Add:
  - **Retry logic (60 min)**: Implement retries with backoff.

---

### Day 5 – Background Jobs for Notifications

#### 4-Hour Plan

- **Block 1 (Design – 45–60 min)**
  - Choose use case:
    - Email sending, log processing.
  - Define job payload.

- **Block 2 (Implementation – 90 min)**
  - Add:
    - API endpoint to enqueue job (via channel).
    - Worker goroutines to process jobs.

- **Block 3 (Review – 30–45 min)**
  - How to handle job failures in production.

#### 6-Hour Plan

- Add:
  - **Testing (60 min)**: Simulate failures and retries.

---

### Day 6 – Integrate Caching + Background Jobs

#### 4-Hour Plan

- **Block 1 (Integration – 90 min)**
  - Add:
    - Redis caching for hot-read endpoint.
    - Job queue for async operation.

- **Block 2 (Manual Testing – 60 min)**
  - Test:
    - Job creation and processing.
    - Cache hit/miss.

- **Block 3 (Review – 30–45 min)**
  - Update README.

#### 6-Hour Plan

- Add:
  - **Observability (60 min)**: Log job timings.

---

### Day 7 – Weekly Review & System Design Tie-In

#### 4-Hour Plan

- **Block 1 (Review – 60–75 min)**
  - Revisit Redis, caching, rate limiting, queues.
  - Update skill gap template.

- **Block 2 (System Design – 60 min)**
  - Design:
    - **Rate limiter service** or **notification service**.

- **Block 3 (DSA – 45–60 min)**
  - Mixed problems.

#### 6-Hour Plan

- Add:
  - **Self-interview (45–60 min)**: Explain designs out loud.
