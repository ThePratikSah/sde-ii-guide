---
id: week-12
title: Week 12 – Machine Coding I - Core Problems (Parking Lot, Splitwise, Cache, Rate Limiter)
sidebar_label: Week 12
sidebar_position: 12
---

### Weekly Goals

- **Machine Coding**
  - Implement 3–4 core problems end-to-end:
    - Parking lot.
    - Splitwise.
    - Cache with expiry/LRU.
    - Rate limiter.
  - Practice:
    - Requirements clarification.
    - API/class design (LLD).
    - Clean Node.js/TS implementation.
- **DSA**
  - 2–3 problems/day (shorter sessions).
- **Interview Skills**
  - Focus on **communication** and **time management** during problem solving.

Use with:
- [Machine Coding Bank](../topic-banks/machine-coding-bank.md)
- [Interview Prep Playbook](../interview/interview-prep-playbook.md)
- [DSA Backend Plan](../topic-banks/dsa-backend-plan.md)

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|----------------------------------------------------|
| 1   | Parking lot – design & partial implementation      |
| 2   | Parking lot – finish implementation & tests        |
| 3   | Splitwise – design & implementation                |
| 4   | Cache with expiry/LRU – design & implementation    |
| 5   | Rate limiter – design & implementation             |
| 6   | Refactor & consolidate patterns                    |
| 7   | Weekly review & timed mock machine coding          |

---

### General Machine Coding Structure (per problem)

- **15–20 min**: Clarify requirements, design APIs/classes, consider edge cases.
- **45–60 min**: Implement core logic in TypeScript (no fancy frameworks).
- **15–20 min**: Test with sample cases, handle edge cases, small refactors.

---

### Day 1 – Parking Lot (Design & Start Implementation)

#### 4-Hour Plan

- **Block 1 (Requirements & Design – 60–75 min)**
  - Use [machine-coding-bank.md](../topic-banks/machine-coding-bank.md) (Parking Lot):
    - Clarify features (levels, vehicle types, pricing).
    - Draw class diagram:
      - `ParkingLot`, `Level`, `Slot`, `Vehicle`, `Ticket`, `PricingStrategy`.

- **Block 2 (Implementation – 60–75 min)**
  - Set up a small TS project folder for Parking Lot.
  - Implement core domain classes (no CLI/API yet).

- **Block 3 (DSA – 45–60 min)**
  - 2 problems (arrays/strings or maps).

#### 6-Hour Plan

- Add:
  - **Tests (60 min)**:
    - Basic unit tests for parking/unparking behaviors.

---

### Day 2 – Parking Lot (Finish Implementation & Tests)

#### 4-Hour Plan

- **Block 1 (Implementation – 60–75 min)**
  - Finish:
    - Pricing logic.
    - Error handling (full lot, invalid ticket).

- **Block 2 (Interface Layer – 60 min)**
  - Add a simple CLI or function-based interface to simulate operations.

- **Block 3 (Testing & Review – 60 min)**
  - Add more tests.
  - Refactor for clarity (methods, naming).

- **Block 4 (Short DSA – 30 min)**
  - 1 easy/medium problem.

#### 6-Hour Plan

- Add:
  - **Reflection (45–60 min)**:
    - Note which patterns you applied (e.g., Strategy) and what you’d improve.

---

### Day 3 – Splitwise (Design & Implementation)

#### 4-Hour Plan

- **Block 1 (Requirements & Design – 60–75 min)**
  - From [machine-coding-bank.md](../topic-banks/machine-coding-bank.md) (Splitwise):
    - Clarify supported split types.
    - Classes:
      - `User`, `Expense`, `Split`, `BalanceSheet`.
    - Use **Strategy pattern** for split types.

- **Block 2 (Implementation – 60–75 min)**
  - Implement core logic:
    - Add expense.
    - Compute balances.

- **Block 3 (Testing & Short DSA – 45–60 min)**
  - Write a few tests or simulate scenarios.
  - 1 DSA problem if time permits.

#### 6-Hour Plan

- Add:
  - **More features (60 min)**:
    - `showBalance(userId?)` logic with some formatting.

---

### Day 4 – Cache with Expiry & LRU

#### 4-Hour Plan

- **Block 1 (Design – 60–75 min)**
  - From [machine-coding-bank.md](../topic-banks/machine-coding-bank.md) (Cache):
    - APIs: `set`, `get`, `delete`.
    - Features: TTL, LRU eviction.
  - Design:
    - Hash map + doubly linked list.

- **Block 2 (Implementation – 60–75 min)**
  - Implement:
    - Core data structures.
    - TTL handling.

- **Block 3 (Testing & DSA – 45–60 min)**
  - Test eviction and expiry behavior.
  - 1 DSA problem (maybe linked list or heap).

#### 6-Hour Plan

- Add:
  - **Refactor (60 min)**:
    - Clean up code, add comments, ensure O(1) operations.

---

### Day 5 – Rate Limiter (Token Bucket or Sliding Window)

#### 4-Hour Plan

- **Block 1 (Design – 60–75 min)**
  - From [machine-coding-bank.md](../topic-banks/machine-coding-bank.md) (Token Bucket Rate Limiter):
    - Define interface:
      - `isAllowed(key: string): boolean`.
    - Decide algorithm: token bucket or sliding window.

- **Block 2 (Implementation – 60–75 min)**
  - Implement in-memory version (no Redis).
  - Use classes for bucket state.

- **Block 3 (Testing & Short DSA – 45–60 min)**
  - Test sequences of calls.
  - 1 DSA problem if time.

#### 6-Hour Plan

- Add:
  - **Extension (60 min)**:
    - Think through how to adapt this to Redis (tie to Week 8).

---

### Day 6 – Refactor & Consolidate Patterns

#### 4-Hour Plan

- **Block 1 (Code Review – 60–75 min)**
  - Revisit:
    - Parking lot.
    - Splitwise.
    - Cache.
    - Rate limiter.
  - Identify common LLD patterns and mistakes.

- **Block 2 (Refactor – 60 min)**
  - Apply:
    - Better names.
    - Smaller methods.
    - Clear interfaces.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (any pattern).

- **Block 4 (Review – 30 min)**
  - Update [skill gap template](../meta/skill-gap-template.md) (machine coding ability).

#### 6-Hour Plan

- Add:
  - **README updates (60 min)** for each mini-project:
    - Problem statement.
    - Design.
    - How to run tests.

---

### Day 7 – Weekly Review & Timed Machine Coding Mock

#### 4-Hour Plan

- **Block 1 (Mock – 90 min)**
  - Pick a problem (e.g., cache or Splitwise variant).
  - Time-box:
    - 15 min design.
    - 60 min implementation.
    - 15 min testing.

- **Block 2 (Retrospective – 60 min)**
  - Write:
    - What went well.
    - What slowed you down.
    - 2–3 things to improve next time (e.g., quicker class naming).

- **Block 3 (Light DSA – 30–45 min)**
  - 1–2 easy/medium problems.

#### 6-Hour Plan

- Add:
  - **Second mini mock (45–60 min)**:
    - A simpler machine coding problem (e.g., feature flag service).


