## Curated Resources – Backend SDE-II (Node.js / TypeScript)

[← Back to main guide](README.md)

> **Goal of this file**: List **high-signal resources** (videos, blogs, repos, books) mapped to the roadmap phases. Use this as a menu, not a checklist to finish entirely.

---

### 1. JavaScript & TypeScript

- **Books / Long-Form**
  - **You Don't Know JS Yet** (series) – deep dive into JS mechanics.
  - **Effective TypeScript** – practical TS patterns and pitfalls.

- **Videos / Playlists**
  - Modern JS and TS tutorials from well-reviewed channels (search for latest versions).
  - Event loop & microtasks talks (search: "JS event loop talk").

- **Blogs**
  - JavaScript event loop explained articles.
  - TypeScript advanced types and utility types guide.

- **Repos / Code**
  - Example TS starter projects:
    - Minimal Node/TS starter with ESLint + Jest.

---

### 2. Node.js Backend Engineering

- **Books**
  - **Node.js Design Patterns** – patterns and best practices for scalable Node services.

- **Topics to Search / Watch**
  - Node.js event loop and libuv internals.
  - Building REST APIs with Express and Fastify.
  - Logging and error handling in production Node apps.

- **Blogs**
  - Guides on structuring large Node/TS backends (layered architecture).
  - JWT vs sessions, refresh tokens, and secure auth flows.

- **Repos**
  - Example Node/TS clean architecture repos.
  - Express/Fastify boilerplates with tests and Docker.

---

### 3. Databases – MongoDB, MySQL

- **Docs / Guides**
  - MongoDB manual (queries, aggregation, indexes).
  - MySQL indexing and EXPLAIN tutorials.

- **Videos**
  - SQL basics and advanced query tuning.
  - NoSQL vs SQL talks and real-world trade-offs.

- **Blogs**
  - N+1 query problem explanations and solutions.
  - Designing schemas for common app patterns.

---

### 4. Redis, Queues, Caching

- **Docs**
  - Redis official documentation for data structures and persistence.

- **Blogs**
  - Caching patterns: cache-aside, write-through, write-back.
  - Implementing rate limiting with Redis.

- **Repos**
  - BullMQ (or similar) examples for job queues in Node.

---

### 5. System Design (HLD + LLD)

- **Books**
  - **Designing Data-Intensive Applications** – fundamentals of storage, streams, distributed systems.

- **Videos / Playlists**
  - System design interview playlists (search for "system design for backend").
  - Talks on building large-scale systems like notification services, feeds, and rate limiters.

- **Blogs**
  - Architectures of large-scale systems (e.g., how big companies design their services).
  - API design best practices (versioning, pagination, error handling).

---

### 6. Machine Coding & LLD

- **Resources**
  - Collections of LLD / machine coding interview problems.
  - Example implementations in TypeScript/Java/C++ for:
    - Parking lot, Splitwise, cache, pub/sub, etc.

- **Practice Strategy**
  - Use `machine-coding-bank.md` as your main list.
  - For any problem, search for **one reference solution after** you’ve implemented your own.

---

### 7. DSA

- **Platforms**
  - Use one major coding platform for:
    - Arrays, strings, hash maps, trees, graphs, heaps.

- **Strategy**
  - Follow patterns from `dsa-backend-plan.md`.
  - Bookmark problems where you **learn a new pattern**.

---

### 8. Theory, Infra, Cloud, CI/CD

- **OS & Networking**
  - Online course notes or video series on OS fundamentals.
  - Networking primers covering TCP/IP, HTTP, DNS, TLS.

- **DBMS, CAP, Consistency**
  - ACID and isolation levels tutorials.
  - CAP and consistency models blog series.

- **Cloud (AWS Preferred)**
  - AWS docs and introductory tutorials:
    - EC2, S3, RDS, SQS, CloudWatch, IAM basics.
  - Step-by-step guides to deploy a Node/TS app on AWS.

- **CI/CD & DevOps**
  - Tutorials on GitHub Actions or GitLab CI pipelines for Node apps.
  - Dockerizing Node.js applications.

---

### 9. Production Debugging, Logs, Profiling

- **Topics**
  - Node.js logging best practices.
  - Using structured logs and correlation IDs.
  - Basics of monitoring (metrics, dashboards, alerts).
  - Profiling CPU and memory usage in Node.

- **Practice**
  - Add logging and basic metrics to your own projects (see `projects.md`).
  - Simulate failures and timeouts, then debug them.

Use this file as a **pointer** to search for the latest, high-quality resources while relying on the rest of the repo (`roadmap-16-weeks.md`, `week-XX.md`, etc.) for **what** to study and in which order.


