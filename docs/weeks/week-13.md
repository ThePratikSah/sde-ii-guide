---
id: week-13
title: Week 13 – Machine Coding II - Advanced Problems & Production Readiness
sidebar_label: Week 13
sidebar_position: 13
---

### Weekly Goals

- **Machine Coding**
  - Implement 3–4 additional problems:
    - In-memory DB.
    - Pub/sub system.
    - Notification service (simplified).
    - URL shortener or task scheduler.
  - Emphasize:
    - Tests.
    - Edge cases.
    - Clean error handling.
- **DSA**
  - 2–3 problems/day, including graphs/heaps as needed.
- **Interview Skills**
  - Practice explaining design choices out loud.

Use with:
- [Machine Coding Bank](../topic-banks/machine-coding-bank.md)
- [Interview Prep Playbook](../interview/interview-prep-playbook.md)

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|----------------------------------------------------|
| 1   | In-memory DB – design & implementation             |
| 2   | Pub/sub system – design & implementation           |
| 3   | Notification service – design & implementation     |
| 4   | URL shortener or task scheduler – implementation   |
| 5   | Refactor & write tests for all problems            |
| 6   | Mixed machine coding mock (2 short problems)       |
| 7   | Weekly review & integration with portfolio         |

---

### Day 1 – In-Memory Document Store (Mini DB)

#### 4-Hour Plan

- **Block 1 (Design – 60–75 min)**
  - From [machine-coding-bank.md](../topic-banks/machine-coding-bank.md) (In-memory DB):
    - API: `insert`, `find`, `update`, `delete`.
  - Classes:
    - `DocumentStore`, `Collection`.

- **Block 2 (Implementation – 60–75 min)**
  - Implement:
    - Collections and basic operations.
    - Query predicates as functions.

- **Block 3 (Testing & Short DSA – 45–60 min)**
  - Test basic operations.
  - 1 DSA problem.

#### 6-Hour Plan

- Add:
  - **Extensions (60 min)**:
    - Optional simple equality index on a field.

---

### Day 2 – Pub/Sub Event System

#### 4-Hour Plan

- **Block 1 (Design – 60–75 min)**
  - From [machine-coding-bank.md](../topic-banks/machine-coding-bank.md) (Pub/Sub):
    - API: `subscribe`, `unsubscribe`, `publish`.
  - Class:
    - `PubSub` with topic → handlers map.

- **Block 2 (Implementation – 60–75 min)**
  - Implement:
    - Subscribe/unsubscribe semantics.
    - Publish that safely calls all handlers (handle errors).

- **Block 3 (Testing & Short DSA – 45–60 min)**
  - Test multiple subscribers.
  - 1 DSA problem.

#### 6-Hour Plan

- Add:
  - **Async extension (60 min)**:
    - Allow async handlers and ensure one failing doesn’t break others.

---

### Day 3 – Notification Service (Simplified)

#### 4-Hour Plan

- **Block 1 (Design – 60–75 min)**
  - From [machine-coding-bank.md](../topic-banks/machine-coding-bank.md) (Notification Service):
    - Channels: in-app + email stub.
    - Use patterns:
      - Strategy or Factory for channels.
  - Classes:
    - `NotificationService`, `Channel`, `EmailChannel`, `InAppChannel`.

- **Block 2 (Implementation – 60–75 min)**
  - Implement:
    - Basic send logic.
    - Template rendering (simple string replace).

- **Block 3 (Testing & Short DSA – 45–60 min)**
  - Test various notification types.
  - 1 DSA problem.

#### 6-Hour Plan

- Add:
  - **Data storage (60 min)**:
    - Store sent notifications in an in-memory log for querying.

---

### Day 4 – URL Shortener or Task Scheduler

#### 4-Hour Plan

- **Block 1 (Design – 60–75 min)**
  - Pick one:
    - URL shortener.
    - Task scheduler (delayed jobs).
  - Use [machine-coding-bank.md](../topic-banks/machine-coding-bank.md) specification.

- **Block 2 (Implementation – 60–75 min)**
  - Implement core logic and simple interface/CLI.

- **Block 3 (Testing & Short DSA – 45–60 min)**
  - Test key flows and constraints.
  - 1 DSA problem.

#### 6-Hour Plan

- Add:
  - **Additional scenarios (60 min)**:
    - For URL shortener: add click tracking.
    - For scheduler: handle cancellations.

---

### Day 5 – Refactor & Tests Across All Problems

#### 4-Hour Plan

- **Block 1 (Code Review – 60–75 min)**
  - Review code for:
    - In-memory DB.
    - Pub/sub.
    - Notification service.
    - URL shortener/scheduler.

- **Block 2 (Testing – 60–75 min)**
  - Add/strengthen tests:
    - Edge cases.
    - Error scenarios.

- **Block 3 (DSA – 30–45 min)**
  - 1–2 mixed problems.

#### 6-Hour Plan

- Add:
  - **Documentation (60 min)**:
    - Each mini-project: add README with design + how to run.

---

### Day 6 – Mixed Machine Coding Mock (2 Short Problems)

#### 4-Hour Plan

- **Block 1 (Mock 1 – 90 min)**
  - Choose an easier/medium problem (e.g., feature flag service).
  - Time-box: 15 min design, 60 min code, 15 min tests.

- **Block 2 (Mock 2 – 60–75 min)**
  - Choose a small second problem (e.g., shopping cart).

- **Block 3 (Review – 30 min)**
  - Analyze time usage and mistakes.

#### 6-Hour Plan

- Add:
  - **Little refactor (60 min)**:
    - Improve whichever mock was messiest.

---

### Day 7 – Weekly Review & Integration with Portfolio

#### 4-Hour Plan

- **Block 1 (Review – 60–75 min)**
  - Summarize:
    - Patterns used.
    - Gaps in your machine coding approach.
  - Update [skill gap template](../getting-started/skill-gap-template.md) (machine coding ability).

- **Block 2 (Portfolio Integration – 60–75 min)**
  - Decide:
    - Which 2–3 machine coding projects you’ll polish and showcase as GitHub repos.

- **Block 3 (DSA – 30–45 min)**
  - Mixed problems, light.

#### 6-Hour Plan

- Add:
  - **Polish (60 min)**:
    - For 1 project, ensure code is clean, documented, and ready to share.


