## Week 11 – System Design III: Rate Limiter, Auth Service, File Storage, Log Pipeline (HLD + LLD)

[← Back to main guide](README.md)

<!-- Week 11 finishes the system design phase with smaller but deep systems, emphasizing both HLD and LLD (class design, patterns). -->

### Weekly Goals

- **System Design (HLD + LLD)**
  - Design:
    - **Rate limiter** service.
    - **Auth** service.
    - **File storage** service.
    - **Log processing pipeline**.
  - Practice **LLD**: classes, interfaces, patterns (Strategy, Repository, etc.).
- **DSA**
  - Maintain 2–3 problems/day.
- **Prep**
  - Capture LLD diagrams/code skeletons for use in machine coding rounds.

Use with:
- `roadmap-16-weeks.md`
- `machine-coding-bank.md`
- `projects.md`

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|----------------------------------------------------|
| 1   | Rate limiter service (HLD + LLD)                   |
| 2   | Auth service (HLD + LLD, tokens, sessions)         |
| 3   | File storage service (S3-style, presigned URLs)    |
| 4   | Log processing pipeline (ingest → store → query)   |
| 5   | LLD patterns & class diagrams (SOLID, patterns)    |
| 6   | Consolidation: pick 1–2 services & refine designs  |
| 7   | Weekly review & final system design reflection     |

---

### Day 1 – Rate Limiter Service (HLD + LLD)

#### 4-Hour Plan

- **Block 1 (HLD – 60–75 min)**
  - Requirements:
    - Per-API key or per-user limits.
    - Configurable limit per time window.
  - Design:

```text
Client Service -> Rate Limiter Service -> Redis (counters/buckets)
```

  - API: `POST /check` with `{ apiKey, route }` → `{ allowed: boolean }`.

- **Block 2 (LLD – 60 min)**
  - Sketch classes/interfaces in TS:
    - `IRateLimiter`, `TokenBucketRateLimiter`, `SlidingWindowRateLimiter`.
    - `RateLimitConfigRepository`.
  - Apply **Strategy pattern** for algorithms.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Save LLD sketch for re-use in machine coding.

#### 6-Hour Plan

- Add:
  - **Pseudo-code (60 min)**:
    - Write TypeScript-like pseudo-code for `checkLimit(key)` using Redis.

---

### Day 2 – Auth Service (HLD + LLD)

#### 4-Hour Plan

- **Block 1 (HLD – 60–75 min)**
  - Requirements:
    - User registration, login, token issuance, token validation.
  - Components:
    - User store (DB).
    - Token store (for refresh tokens if used).
    - Auth API.

```text
Client -> Auth API -> User DB / Token DB
```

- **Block 2 (LLD – 60 min)**
  - Class interfaces:
    - `AuthService`, `TokenService`, `PasswordHasher`.
    - `UserRepository`.
  - Consider **Strategy** for different token types (JWT vs opaque).

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Note where this maps to your existing auth implementation.

#### 6-Hour Plan

- Add:
  - **Sequence diagram (60 min)**:
    - Show login flow: user → auth → DB → token returned.

---

### Day 3 – File Storage Service (HLD + LLD)

#### 4-Hour Plan

- **Block 1 (HLD – 60–75 min)**
  - Requirements:
    - Upload and download files.
    - Use object storage (e.g., S3) with presigned URLs.
  - Components:

```text
Client -> File Service -> S3 (or similar)
                     \
                      -> Metadata DB
```

- **Block 2 (LLD – 60 min)**
  - Class design:
    - `FileService`, `StorageProvider` (interface), `S3StorageProvider`.
    - `FileMetadataRepository`.
  - Use **Repository** and **Adapter** patterns.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Document presigned URL flow.

#### 6-Hour Plan

- Add:
  - **Edge case discussion (60 min)**:
    - Large files, partial uploads, retries.

---

### Day 4 – Log Processing Pipeline (HLD + LLD)

#### 4-Hour Plan

- **Block 1 (HLD – 60–75 min)**
  - Requirements:
    - Ingest logs, buffer, process, store, and query.
  - Components:

```text
App Services -> Log Ingestor API -> Queue -> Log Processor -> Storage -> Query API
```

- **Block 2 (LLD – 60 min)**
  - Classes:
    - `LogIngestor`, `LogProcessor`, `LogRepository`.
    - `LogQueryService`.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (queues/graphs).

- **Block 4 (Review – 30 min)**
  - Note opportunities for using batch writes and backpressure.

#### 6-Hour Plan

- Add:
  - **Failure mode analysis (60 min)**:
    - What happens if queue is down? DB is slow? Processor crashes?

---

### Day 5 – LLD Patterns & Class Diagrams (SOLID, Patterns)

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Review:
    - SOLID principles.
    - Patterns: Strategy, Factory, Adapter, Observer, Repository.

- **Block 2 (Practice – 60 min)**
  - For one service (e.g., rate limiter or auth), check:
    - Where SOLID is satisfied or violated.
    - Where patterns are applied.

- **Block 3 (DSA – 60 min)**
  - 2–3 mixed problems.

- **Block 4 (Review – 30 min)**
  - Update `skill-gap-template.md` (design patterns familiarity).

#### 6-Hour Plan

- Add:
  - **Class diagram sketches (60 min)**:
    - Draw ASCII UML-like diagrams for 1–2 services.

---

### Day 6 – Consolidation: Refine 1–2 Service Designs

#### 4-Hour Plan

- **Block 1 (Selection – 30 min)**
  - Choose 1–2 systems:
    - E.g., notification service + rate limiter.

- **Block 2 (Refinement – 90 min)**
  - Refine:
    - APIs, data models, and LLD for these systems.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Save refined designs for use in upcoming machine coding rounds (Weeks 12–13).

#### 6-Hour Plan

- Add:
  - **Code skeletons (60 min)**:
    - Create TypeScript skeletons for key classes/interfaces in a project folder.

---

### Day 7 – Weekly Review & Final System Design Reflection

#### 4-Hour Plan

- **Block 1 (Review – 60–75 min)**
  - Review:
    - All systems designed in Weeks 9–11.
  - Update `skill-gap-template.md` (system design intuition, LLD).

- **Block 2 (Reflection – 60 min)**
  - Write:
    - 3–5 key lessons about designing scalable, maintainable backend systems.

- **Block 3 (DSA – 45–60 min)**
  - Mixed problems, timed if possible.

#### 6-Hour Plan

- Add:
  - **Mock design (45–60 min)**:
    - Do a timed design of one smaller system (rate limiter or file storage) from scratch using your template.


