---
id: go
title: Go Track
sidebar_label: Go
sidebar_position: 2
---

### Weekly Goals

- **Machine Coding**
  - Implement 3–4 additional problems in Go:
    - In-memory DB.
    - Pub/sub system.
    - Notification service (simplified).
    - URL shortener or task scheduler.
  - Emphasize tests, edge cases, clean error handling.
- **DSA**
  - 2–3 problems/day.
- **Interview Skills**
  - Practice explaining design choices.

Use together with:
- [Machine Coding Bank](../../topic-banks/machine-coding-bank.md)
- [Interview Prep Playbook](../../interview/interview-prep-playbook.md)

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|--------------------------------------------------- |
| 1   | In-memory DB – design & implementation             |
| 2   | Pub/sub system – design & implementation           |
| 3   | Notification service – design & implementation     |
| 4   | URL shortener or task scheduler – implementation   |
| 5   | Refactor & write tests for all problems            |
| 6   | Mixed machine coding mock (2 short problems)       |
| 7   | Weekly review & integration with portfolio         |

---

### Day 1 – In-Memory Document Store

#### 4-Hour Plan

- **Block 1 (Design – 60–75 min)**
  - API: `Insert`, `Find`, `Update`, `Delete`.
  - Structs: `DocumentStore`, `Collection`.

- **Block 2 (Implementation – 60–75 min)**
  - Implement collections and basic operations.

- **Block 3 (Testing & Short DSA – 45–60 min)**
  - Test basic operations, 1 DSA problem.

#### 6-Hour Plan

- Add:
  - **Extensions (60 min)**: Simple equality index.

---

### Day 2 – Pub/Sub Event System

#### 4-Hour Plan

- **Block 1 (Design – 60–75 min)**
  - API: `Subscribe`, `Unsubscribe`, `Publish`.
  - Struct: `PubSub` with topic → handlers map.

- **Block 2 (Implementation – 60–75 min)**
  - Implement subscribe/unsubscribe, publish.

- **Block 3 (Testing & Short DSA – 45–60 min)**
  - Test multiple subscribers, 1 DSA problem.

#### 6-Hour Plan

- Add:
  - **Goroutine extension (60 min)**: Async handlers.

---

### Day 3 – Notification Service (Simplified)

#### 4-Hour Plan

- **Block 1 (Design – 60–75 min)**
  - Channels: in-app + email stub.
  - Structs: `NotificationService`, `Channel`, `EmailChannel`, `InAppChannel`.

- **Block 2 (Implementation – 60–75 min)**
  - Implement send logic, template rendering.

- **Block 3 (Testing & Short DSA – 45–60 min)**
  - Test notification types, 1 DSA problem.

#### 6-Hour Plan

- Add:
  - **Data storage (60 min)**: In-memory log.

---

### Day 4 – URL Shortener or Task Scheduler

#### 4-Hour Plan

- **Block 1 (Design – 60–75 min)**
  - Pick one: URL shortener or task scheduler.

- **Block 2 (Implementation – 60–75 min)**
  - Implement core logic and simple CLI.

- **Block 3 (Testing & Short DSA – 45–60 min)**
  - Test key flows, 1 DSA problem.

#### 6-Hour Plan

- Add:
  - **Additional scenarios (60 min)**.

---

### Day 5 – Refactor & Tests Across All Problems

#### 4-Hour Plan

- **Block 1 (Code Review – 60–75 min)**
  - Review all implementations.

- **Block 2 (Testing – 60–75 min)**
  - Add/strengthen tests.

- **Block 3 (DSA – 30–45 min)**
  - 1–2 problems.

#### 6-Hour Plan

- Add:
  - **Documentation (60 min)**: README for each.

---

### Day 6 – Mixed Machine Coding Mock

#### 4-Hour Plan

- **Block 1 (Mock 1 – 90 min)**
  - Time-box: 15 min design, 60 min code, 15 min tests.

- **Block 2 (Mock 2 – 60–75 min)**
  - Small second problem.

- **Block 3 (Review – 30 min)**
  - Analyze time usage.

#### 6-Hour Plan

- Add:
  - **Refactor (60 min)**.

---

### Day 7 – Weekly Review & Integration with Portfolio

#### 4-Hour Plan

- **Block 1 (Review – 60–75 min)**
  - Summarize patterns, gaps.
  - Update skill gap template.

- **Block 2 (Portfolio Integration – 60–75 min)**
  - Choose 2–3 projects to polish.

- **Block 3 (DSA – 30–45 min)**
  - Mixed problems.

#### 6-Hour Plan

- Add:
  - **Polish (60 min)**: Clean, document, ready to share.
