## Week 2 – Advanced JS/TS + Event Loop + DSA (Hash Maps/Two Pointers)



<!-- Week 2 deepens JS/TS understanding and covers event loop internals, while continuing DSA. -->

### Weekly Goals

- **JavaScript/TypeScript**
  - Understand **event loop internals**, microtasks vs macrotasks.
  - Learn **advanced TS**: unions, intersections, discriminated unions.
  - Practice **error handling** and modular code.
- **DSA**
  - Arrays/strings revisited, start **two pointers** patterns.
- **Theory**
  - Light networking: HTTP methods, status codes, request/response lifecycle.

Use with:
- [16-Week Roadmap](../roadmap/roadmap-16-weeks.md)
- [DSA Backend Plan](../topic-banks/dsa-backend-plan.md)
- [Resources](../resources/resources.md)

---

### Weekly Overview Table

| Day | Focus                                            |
|-----|--------------------------------------------------|
| 1   | Event loop, microtasks, macrotasks               |
| 2   | Error handling, try/catch, async errors          |
| 3   | TS unions, intersections, type narrowing         |
| 4   | Discriminated unions, utility types              |
| 5   | Modularization, project structure (Node/TS)      |
| 6   | Mini JS/TS project (CLI tool or small app)       |
| 7   | Weekly review + consolidation                    |

---

### Day 1 – Event Loop Internals

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Study:
    - Call stack, task queue, microtask queue.
    - `setTimeout`, Promises, `process.nextTick` (just conceptually for now).
  - Draw an ASCII diagram of the event loop.

```text
Call Stack  <---->  Event Loop  <---->  Task Queue (macrotasks)
                                      \
                                       \--> Microtask Queue (promises)
```

- **Block 2 (Experiments – 60 min)**
  - Write small scripts:
    - Mix `console.log`, `setTimeout`, `Promise.resolve().then(...)`.
    - Predict and verify order of logs.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems on arrays/strings & hash maps.

- **Block 4 (Review – 30 min)**
  - Summarize the **execution order** rules you discovered.

#### 6-Hour Plan

- Add:
  - **Extra experiments (45–60 min)**:
    - Add `async/await` into the mix and reason about the order.
  - **Extra DSA (45 min)**.

---

### Day 2 – Error Handling in Sync & Async Code

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - `try/catch/finally`.
    - Error propagation in sync vs async code.
    - Handling rejections in Promises, `unhandledRejection`.

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - Utility functions that wrap async functions to handle errors uniformly.
    - A simple `Result<T>` type-based approach for error handling.

- **Block 3 (DSA – 60 min)**
  - Start 1–2 **two-pointer** problems (sorted arrays).

- **Block 4 (Review – 30 min)**
  - Think about how this will apply to **Express/Fastify** error handling later.

#### 6-Hour Plan

- Add a **mini error-handling layer** for a tiny API or script (60 min).

---

### Day 3 – TS Unions, Intersections, Type Narrowing

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Understand:
    - Union types (`A | B`).
    - Intersection types (`A & B`).
    - Type guards (`typeof`, `in`, custom predicates).

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - A function that takes `string | number` and behaves differently.
    - A `User & Audited` type.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (arrays/strings, two pointers).

- **Block 4 (Review – 30 min)**
  - Note where unions/intersections might appear in backend contracts (e.g., polymorphic payloads).

#### 6-Hour Plan

- Add:
  - **Refactor previous utilities** to use unions/intersections where appropriate (60 min).

---

### Day 4 – Discriminated Unions & Utility Types

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Discriminated unions:
    - Example: notifications with `type` field discriminant.
  - Utility types:
    - `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`.

- **Block 2 (Hands-On – 60 min)**
  - Model a **Notification** union:
    - `{ type: "EMAIL"; email: string; body: string }`
    - `{ type: "SMS"; phone: string; body: string }`
  - Use `Pick`/`Omit` to derive request vs response types.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems focusing on two pointers and hash maps.

- **Block 4 (Review – 30 min)**
  - Summarize how discriminated unions will help in **machine coding** later.

#### 6-Hour Plan

- Add:
  - **Mini modeling session (60 min)**:
    - Draft TS types for a simple `Order` domain with unions (e.g., `PENDING`, `PAID`, `CANCELLED`).

---

### Day 5 – Modularization & Project Structure (Node/TS)

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Basic Node project structure.
    - Separation into **modules**: `utils/`, `services/`, `models/`.

- **Block 2 (Hands-On – 60 min)**
  - Create a small project:
    - `src/index.ts`, `src/utils/`, `src/domain/`.
  - Move previous utilities into this structure with proper imports/exports.

- **Block 3 (DSA – 60 min)**
  - Mixed arrays/strings problems.

- **Block 4 (Review – 30 min)**
  - Draw a simple folder tree of your project.

#### 6-Hour Plan

- Add:
  - **Basic tests (60 min)**:
    - Add Jest and write 2–3 small tests for your utilities.

---

### Day 6 – Mini JS/TS Project (CLI or Small Service)

#### 4-Hour Plan

- **Block 1 (Design – 45–60 min)**
  - Pick a mini project:
    - Example: CLI-based **task manager** or **note-taking** tool using JSON files.
  - Sketch features and minimal architecture.

- **Block 2 (Implementation – 90 min)**
  - Implement core operations (create/update/delete/list).
  - Use:
    - TS types & interfaces.
    - Async file operations.

- **Block 3 (Review – 30–45 min)**
  - Identify places where:
    - You used good types.
    - You might apply better separation (service vs IO).

#### 6-Hour Plan

- Add:
  - **Extra polish (60–75 min)**:
    - Add argument parsing.
    - Add basic error messages and help usage.
  - **1–2 DSA problems (30–45 min)**.

---

### Day 7 – Weekly Review & Light Networking Theory

#### 4-Hour Plan

- **Block 1 (Review – 60 min)**
  - Revisit notes on:
    - Event loop.
    - TS unions, intersections, discriminated unions.
  - Update [skill gap template](../meta/skill-gap-template.md) (TS advanced, async).

- **Block 2 (Networking Theory – 60 min)**
  - Read about:
    - HTTP request/response cycle.
    - HTTP methods and status code families.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems:
    - Focus on your weakest patterns so far.

- **Block 4 (Planning – 30 min)**
  - Write a short summary:
    - What about JS/TS is still confusing?
  - Skim [week-03](./week-03.md) for upcoming topics (streams, more async).

#### 6-Hour Plan

- Add:
  - **Practice explanation (60–75 min)**:
    - Practice explaining the event loop and TS unions out loud as if to an interviewer.


