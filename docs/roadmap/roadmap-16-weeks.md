## 16-Week Backend SDE-II Preparation Roadmap (Node.js / TypeScript)



> **Goal of this file**: Give you a **phase-wise roadmap** (8, 12, 16-week options) that coordinates JS/TS, Node.js, DBs, Redis/queues, system design, machine coding, DSA, and theory.

---

### Roadmap Overview

- **Phase 1 (Weeks 1–3)**: JavaScript & TypeScript Deep Dive
- **Phase 2 (Weeks 4–5)**: Node.js Backend Engineering
- **Phase 3 (Weeks 6–7)**: Databases – MongoDB + MySQL
- **Phase 4 (Week 8)**: Redis + Queues
- **Phase 5 (Weeks 9–11)**: System Design (HLD + LLD)
- **Phase 6 (Weeks 12–13)**: Machine Coding Rounds
- **Phase 7 (Weeks 14–15)**: DSA for Backend Interviews
- **Phase 8 (Week 16)**: Theory, Infra, AWS, and Revision

Parallel tracks throughout:

- **DSA**: 3–5 problems/day (focused set).
- **Theory**: short daily/alternate-day sessions.
- **Projects**: 1–2 substantial backend projects across the 16 weeks.

---

### Timeline Options

| Track       | Recommended For                             | How to Use This Roadmap                                  |
|------------|----------------------------------------------|----------------------------------------------------------|
| **16-week**| You want deep mastery + side projects        | Follow phases exactly as mapped to `week-01` to `week-16`|
| **12-week**| You have prior backend experience            | Merge some phases (TS+Node, DB+Redis, DSA+Theory)        |
| **8-week** | You are experienced and just polishing       | Take **core topics only** and aggressively compress      |

#### 12-Week Compression Hint

- Combine:
  - Phase 1 + Phase 2 → 4 weeks total
  - Phase 3 + Phase 4 → 3 weeks total
  - Phase 5 → 3 weeks
  - Phase 6 + Phase 7 + Phase 8 → 2 weeks (intense revision)

#### 8-Week Compression Hint

- Phase 1 + 2 → 2 weeks  
- Phase 3 + 4 → 1.5 weeks  
- Phase 5 → 2 weeks  
- Phase 6 + 7 + 8 → 2.5 weeks (heavy practice + revision)

Use `week-XX.md` files to pick which days to drop/merge.

---

### Phase 1 (Weeks 1–3): JavaScript & TypeScript Deep Dive

**Focus**: Build a **rock-solid foundation** in JS/TS so Node.js + system design become easier.

- **Key Topics**
  - **JS Internals**
    - Memory model, call stack, heap.
    - Event loop internals, macrotasks vs microtasks.
    - Closures, lexical scope, `this`, prototype chain, inheritance.
  - **TS Essentials**
    - Types, interfaces, enums, generics.
    - Union, intersection, literal types.
  - **TS Advanced**
    - Utility types (`Partial`, `Pick`, `Omit`, `Record`, `Readonly`, etc.).
    - Discriminated unions, type narrowing.
    - Conditional types (high-level understanding).
  - **Async Patterns**
    - Promises, async/await, error handling.
    - Streams (readable/writable/transform), backpressure.

- **Outcomes by End of Phase**
  - You can **read and write** modern TypeScript confidently.
  - You understand **why** async bugs happen and can debug them.
  - You can explain the **event loop** with a simple diagram.

**Cross-links**
- Day-wise plan: `week-01.md`, `week-02.md`, `week-03.md`.
- DSA: start with arrays/strings/hash maps (see `dsa-backend-plan.md`).

---

### Phase 2 (Weeks 4–5): Node.js Backend Engineering

**Focus**: Build real, production-like backend services with Node.js and TypeScript.

- **Key Topics**
  - **Node Internals**
    - Process model, event loop in Node context, libuv basics.
    - Clustering, worker threads (overview), multi-process patterns.
  - **API Development**
    - Express vs Fastify: design choices and trade-offs.
    - Routing, controllers, services, repository layers.
    - Middleware architecture and error handling.
  - **Auth & Security**
    - JWT vs sessions, refresh tokens, OAuth2 basics.
    - OWASP basics: input validation, SQL/NoSQL injection, XSS, CSRF.
    - Rate limiting, IP blocking, and API keys.
  - **File Handling & Streams**
    - Handling uploads/downloads, streaming large files.
  - **Logging & Monitoring**
    - Structured logs, correlation IDs, log levels.
    - Basic metrics (latency, throughput, error rate).

- **Outcomes by End of Phase**
  - You can build a **multi-route REST API** with good structure.
  - You can add **auth, validation, error handling, and logging**.
  - You know how to **profile basic performance issues**.

**Cross-links**
- Day-wise plan: `week-04.md`, `week-05.md`.
- Machine coding: start simple problems (see `machine-coding-bank.md`).

---

### Phase 3 (Weeks 6–7): Databases (MongoDB + MySQL)

**Focus**: Design schemas, optimize queries, and understand trade-offs.

- **Key Topics**
  - **Data Modeling**
    - Normalization (1NF, 2NF, 3NF) vs denormalization.
    - One-to-many, many-to-many, polymorphic associations.
  - **Indexes & Query Plans**
    - B-tree indexes, composite indexes, covering indexes.
    - EXPLAIN (MySQL), query planner basics.
  - **Transactions**
    - MySQL: ACID, isolation levels, locks.
    - MongoDB: multi-document transactions (when & why).
  - **ORM/ODM vs Raw**
    - Mongoose vs raw MongoDB driver: pros/cons.
    - MySQL drivers, query builders.
  - **N+1 Problems**
    - How N+1 occurs (ORM & manual queries).
    - Techniques: joins, batching, preloading, caching.
  - **Caching & Replication Basics**
    - Read replicas, primary/secondary.
    - Simple caching strategies for hot reads.

- **Outcomes by End of Phase**
  - You can design **schemas** for typical web apps.
  - You can read query plans and **optimize slow queries**.
  - You understand **ACID vs CAP** at a practical level.

**Cross-links**
- Day-wise plan: `week-06.md`, `week-07.md`.
- Projects: start DB-heavy parts (see `projects.md`).

---

### Phase 4 (Week 8): Redis + Queues

**Focus**: Understand caching, rate limiting, and background processing.

- **Key Topics**
  - **Redis Fundamentals**
    - Strings, lists, sets, sorted sets, hashes, TTL.
    - Eviction policies, persistence (RDB/AOF).
  - **Caching Strategies**
    - Cache-aside, write-through, write-back.
    - Dealing with cache stampedes, thundering herds.
  - **Rate Limiting**
    - Token bucket, leaky bucket, sliding window counters.
    - Implementing with Redis (Lua scripts or primitives).
  - **Queues**
    - BullMQ (Redis-based), RabbitMQ, SQS overview.
    - Producer/consumer patterns.
    - Dead-letter queues, retries, backoff strategies.
  - **Job Scheduling**
    - Delayed jobs, CRON-like scheduling.

- **Outcomes by End of Phase**
  - You can build a **rate limiter** and **basic cache**.
  - You can design and implement a **job processing pipeline**.

**Cross-links**
- Day-wise plan: `week-08.md`.
- Machine coding: rate limiter, pub/sub, job queue problems.

---

### Phase 5 (Weeks 9–11): System Design (HLD + LLD)

**Focus**: Design complete systems, not just endpoints.

- **Key Topics (HLD)**
  - **Scalable REST APIs**
    - API gateway, service boundaries, versioning.
    - Pagination, filtering, idempotency.
  - **Real Systems**
    - Uber/Swiggy: location, matching, pricing, surge, driver status.
    - Instagram: media storage, feed generation, notifications.
    - Notification system: fanout, retries, multi-channel.
    - Auth service: token management, sessions, SSO basics.
    - Rate limiter service: global vs per-service/per-endpoint.
    - File storage service: S3, CDN, presigned URLs.
    - Log processing pipeline: ingestion, buffering, storage, search.

- **Key Topics (LLD)**
  - Class diagrams, interfaces, layering.
  - SOLID principles and patterns (Factory, Strategy, Adapter, Observer, Repository).
  - Clean boundaries: controller/service/repository/domain.

- **Outcomes by End of Phase**
  - You can **explain and draw** system designs with trade-offs.
  - You can propose **LLD for core components** with patterns.

**Cross-links**
- Day-wise plan: `week-09.md`, `week-10.md`, `week-11.md`.
- Reference systems: `projects.md`.

---

### Phase 6 (Weeks 12–13): Machine Coding Rounds

**Focus**: Implement well-designed solutions quickly under interview constraints.

- **Key Topics**
  - Translating requirements → APIs/classes/data models.
  - Making **assumptions explicit**, clarifying constraints.
  - Writing **clean, modular, testable** Node.js/TS code.
  - Applying patterns & SOLID.

- **Core Problems (see `machine-coding-bank.md` for full specs)**
  - Parking lot, Splitwise, Rate limiter, Cache implementation.
  - In-memory DB, Pub/sub system, Notification service.
  - URL shortener, Task scheduler, Feature flag system, etc.

- **Outcomes by End of Phase**
  - You can complete 1–2 machine coding problems in 60–90 minutes each.
  - You have a **portfolio of small, well-structured codebases**.

**Cross-links**
- Day-wise plan: `week-12.md`, `week-13.md`.

---

### Phase 7 (Weeks 14–15): DSA for Backend Interviews

**Focus**: Targeted practice on backend-relevant problems.

- **Key Topics**
  - Arrays, strings, hash maps, sets.
  - Trees, graphs (BFS/DFS, shortest path, topological sort).
  - Two pointers, sliding window.
  - Heaps/priority queues.

- **Plan**
  - Solve **3–5 problems per day**.
  - Rotate topics: arrays/strings → sliding window → trees → graphs → heaps.
  - Revisit **earlier mistakes** and write a **"patterns" cheat sheet**.

- **Outcomes by End of Phase**
  - You can solve **medium-level problems** consistently.
  - You have a **repertoire of patterns** to apply rapidly.

**Cross-links**
- Day-wise plan: `week-14.md`, `week-15.md`.
- Topic details: `dsa-backend-plan.md`.

---

### Phase 8 (Week 16): Theory, Infra, AWS, and Final Revision

**Focus**: Tie everything together, polish weak areas, and prepare for interviews.

- **Key Topics**
  - **OS**: processes, threads, scheduling, memory management.
  - **Networking**: TCP/UDP, HTTP, DNS, proxies, SSL/TLS.
  - **DBMS**: indexing, normalization, transactions, isolation.
  - **CAP, ACID, BASE, consistency models**.
  - **AWS basics**: EC2, S3, RDS, SQS, CloudWatch.
  - **CI/CD & Observability**: pipelines, monitors, alerts.

- **Final Week Activities**
  - Mock interviews (see `interview-prep-playbook.md`).
  - Re-solve key machine coding and DSA problems.
  - Review system design notes and practice **whiteboarding**.

**Cross-links**
- Day-wise plan: `week-16.md`.
- Theory details: `theory-round.md`.
- Schedules & metrics: `schedules-and-metrics.md`.


 | [Next guide →](../roadmap/schedules-and-metrics.md)