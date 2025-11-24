---
id: go
title: Go Track
sidebar_label: Go
sidebar_position: 2
---

### Weekly Goals

- **Machine Coding**
  - Implement 3–4 core problems end-to-end in Go:
    - Parking lot.
    - Splitwise.
    - Cache with expiry/LRU.
    - Rate limiter.
  - Practice:
    - Requirements clarification.
    - Struct/interface design (LLD).
    - Clean Go implementation.
- **DSA**
  - 2–3 problems/day (shorter sessions).
- **Interview Skills**
  - Focus on **communication** and **time management**.

Use together with:
- [Machine Coding Bank](../topic-banks/machine-coding-bank.md)
- [Interview Prep Playbook](../interview/interview-prep-playbook.md)
- [DSA Backend Plan](../topic-banks/dsa-backend-plan.md)

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|--------------------------------------------------- |
| 1   | Parking lot – design & partial implementation      |
| 2   | Parking lot – finish implementation & tests        |
| 3   | Splitwise – design & implementation                |
| 4   | Cache with expiry/LRU – design & implementation    |
| 5   | Rate limiter – design & implementation             |
| 6   | Refactor & consolidate patterns                    |
| 7   | Weekly review & timed mock machine coding          |

---

### General Machine Coding Structure

- **15–20 min**: Clarify requirements, design structs/interfaces, edge cases.
- **45–60 min**: Implement core logic in Go.
- **15–20 min**: Test with sample cases, handle edge cases, refactors.

---

### Day 1 – Parking Lot (Design & Start Implementation)

#### 4-Hour Plan

- **Block 1 (Requirements & Design – 60–75 min)**
  - Clarify features.
  - Draw struct diagram:
    - `ParkingLot`, `Level`, `Slot`, `Vehicle`, `Ticket`, `PricingStrategy`.

- **Block 2 (Implementation – 60–75 min)**
  - Set up Go project.
  - Implement core domain structs.

- **Block 3 (DSA – 45–60 min)**
  - 2 problems.

#### 6-Hour Plan

- Add:
  - **Tests (60 min)**: Basic unit tests.

---

### Day 2 – Parking Lot (Finish Implementation & Tests)

#### 4-Hour Plan

- **Block 1 (Implementation – 60–75 min)**
  - Finish pricing logic, error handling.

- **Block 2 (Interface Layer – 60 min)**
  - Add simple CLI or function-based interface.

- **Block 3 (Testing & Review – 60 min)**
  - Add more tests, refactor.

- **Block 4 (Short DSA – 30 min)**
  - 1 problem.

#### 6-Hour Plan

- Add:
  - **Reflection (45–60 min)**.

---

### Day 3 – Splitwise (Design & Implementation)

#### 4-Hour Plan

- **Block 1 (Requirements & Design – 60–75 min)**
  - Clarify split types.
  - Structs:
    - `User`, `Expense`, `Split`, `BalanceSheet`.
  - Use **Strategy pattern**.

- **Block 2 (Implementation – 60–75 min)**
  - Implement core logic.

- **Block 3 (Testing & Short DSA – 45–60 min)**
  - Tests, 1 DSA problem.

#### 6-Hour Plan

- Add:
  - **More features (60 min)**: `ShowBalance` logic.

---

### Day 4 – Cache with Expiry & LRU

#### 4-Hour Plan

- **Block 1 (Design – 60–75 min)**
  - APIs: `Set`, `Get`, `Delete`.
  - Features: TTL, LRU eviction.
  - Design: map + doubly linked list.

- **Block 2 (Implementation – 60–75 min)**
  - Implement core data structures, TTL handling.

- **Block 3 (Testing & DSA – 45–60 min)**
  - Test eviction, 1 DSA problem.

#### 6-Hour Plan

- Add:
  - **Refactor (60 min)**: Ensure O(1) operations.

---

### Day 5 – Rate Limiter (Token Bucket or Sliding Window)

#### 4-Hour Plan

- **Block 1 (Design – 60–75 min)**
  - Define interface: `IsAllowed(key string) bool`.
  - Decide algorithm.

- **Block 2 (Implementation – 60–75 min)**
  - Implement in-memory version.

- **Block 3 (Testing & Short DSA – 45–60 min)**
  - Test sequences, 1 DSA problem.

#### 6-Hour Plan

- Add:
  - **Extension (60 min)**: Adapt to Redis.

---

### Day 6 – Refactor & Consolidate Patterns

#### 4-Hour Plan

- **Block 1 (Code Review – 60–75 min)**
  - Revisit all implementations.
  - Identify common LLD patterns.

- **Block 2 (Refactor – 60 min)**
  - Better names, smaller methods, clear interfaces.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Update skill gap template.

#### 6-Hour Plan

- Add:
  - **README updates (60 min)**.

---

### Day 7 – Weekly Review & Timed Machine Coding Mock

#### 4-Hour Plan

- **Block 1 (Mock – 90 min)**
  - Pick a problem.
  - Time-box: 15 min design, 60 min implementation, 15 min testing.

- **Block 2 (Retrospective – 60 min)**
  - What went well, what slowed you down, improvements.

- **Block 3 (Light DSA – 30–45 min)**
  - 1–2 problems.

#### 6-Hour Plan

- Add:
  - **Second mini mock (45–60 min)**.
