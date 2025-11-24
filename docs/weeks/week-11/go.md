---
id: go
title: Go Track
sidebar_label: Go
sidebar_position: 2
---

### Weekly Goals

- **System Design (HLD + LLD)**
  - Design:
    - **Rate limiter** service.
    - **Auth** service.
    - **File storage** service.
    - **Log processing pipeline**.
  - Practice **LLD**: structs, interfaces, patterns.
- **DSA**
  - Maintain 2–3 problems/day.
- **Prep**
  - Capture LLD diagrams/code skeletons for machine coding.

Use together with:
- [16-Week Roadmap](../roadmap/roadmap-16-weeks.md)
- [Machine Coding Bank](../topic-banks/machine-coding-bank.md)
- [Projects](../topic-banks/projects.md)

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|--------------------------------------------------- |
| 1   | Rate limiter service (HLD + LLD)                   |
| 2   | Auth service (HLD + LLD, tokens, sessions)         |
| 3   | File storage service (S3-style, presigned URLs)    |
| 4   | Log processing pipeline (ingest → store → query)   |
| 5   | LLD patterns & struct diagrams (SOLID, patterns)   |
| 6   | Consolidation: pick 1–2 services & refine designs  |
| 7   | Weekly review & final system design reflection     |

---

### Day 1 – Rate Limiter Service (HLD + LLD)

#### 4-Hour Plan

- **Block 1 (HLD – 60–75 min)**
  - Requirements, design, API.

- **Block 2 (LLD – 60 min)**
  - Sketch interfaces in Go:
    - `RateLimiter`, `TokenBucketRateLimiter`, `SlidingWindowRateLimiter`.
  - Apply **Strategy pattern**.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Save LLD sketch.

#### 6-Hour Plan

- Add:
  - **Pseudo-code (60 min)**: Go-like pseudo-code using Redis.

---

### Day 2 – Auth Service (HLD + LLD)

#### 4-Hour Plan

- **Block 1 (HLD – 60–75 min)**
  - Requirements, components, API.

- **Block 2 (LLD – 60 min)**
  - Interfaces:
    - `AuthService`, `TokenService`, `PasswordHasher`.
    - `UserRepository`.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Map to existing auth implementation.

#### 6-Hour Plan

- Add:
  - **Sequence diagram (60 min)**.

---

### Day 3 – File Storage Service (HLD + LLD)

#### 4-Hour Plan

- **Block 1 (HLD – 60–75 min)**
  - Requirements, components.

- **Block 2 (LLD – 60 min)**
  - Struct design:
    - `FileService`, `StorageProvider` (interface), `S3StorageProvider`.
  - Use **Repository** and **Adapter** patterns.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Document presigned URL flow.

#### 6-Hour Plan

- Add:
  - **Edge case discussion (60 min)**.

---

### Day 4 – Log Processing Pipeline (HLD + LLD)

#### 4-Hour Plan

- **Block 1 (HLD – 60–75 min)**
  - Requirements, components.

- **Block 2 (LLD – 60 min)**
  - Structs:
    - `LogIngestor`, `LogProcessor`, `LogRepository`.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Batch writes and backpressure.

#### 6-Hour Plan

- Add:
  - **Failure mode analysis (60 min)**.

---

### Day 5 – LLD Patterns & Struct Diagrams

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Review SOLID principles.
  - Patterns: Strategy, Factory, Adapter, Observer, Repository.

- **Block 2 (Practice – 60 min)**
  - Check SOLID in one service.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Update skill gap template.

#### 6-Hour Plan

- Add:
  - **Struct diagram sketches (60 min)**.

---

### Day 6 – Consolidation: Refine 1–2 Service Designs

#### 4-Hour Plan

- **Block 1 (Selection – 30 min)**
  - Choose 1–2 systems.

- **Block 2 (Refinement – 90 min)**
  - Refine APIs, data models, LLD.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Save refined designs.

#### 6-Hour Plan

- Add:
  - **Code skeletons (60 min)**: Go skeletons.

---

### Day 7 – Weekly Review & Final System Design Reflection

#### 4-Hour Plan

- **Block 1 (Review – 60–75 min)**
  - Review all systems designed.
  - Update skill gap template.

- **Block 2 (Reflection – 60 min)**
  - Write 3–5 key lessons.

- **Block 3 (DSA – 45–60 min)**
  - Mixed problems.

#### 6-Hour Plan

- Add:
  - **Mock design (45–60 min)**.
