---
id: week-01
title: Week 01 – JavaScript & TypeScript Foundations + DSA
sidebar_label: Week 01
---

## Week 1 – JavaScript & TypeScript Foundations + DSA (Arrays/Strings)



<!-- Week 1 focuses on JS/TS fundamentals, event loop basics, and starting DSA practice. -->

### Weekly Goals

- **JavaScript/TypeScript**
  - Refresh **core JS**: scopes, closures, prototypes, `this`.
  - Set up a **Node.js + TypeScript** dev environment.
  - Understand **basic async**: callbacks, promises, async/await.
- **DSA**
  - Start with **arrays, strings, hash maps** (easy → medium).
- **Theory**
  - Light reading: **what a backend service is**, high-level HTTP overview.

Use together with:
- `role-understanding.md`
- `skill-gap-template.md`
- `roadmap-16-weeks.md`
- `dsa-backend-plan.md`
- `resources.md`
- `schedules-and-metrics.md`

---

### Weekly Overview Table

| Day | Focus                                      |
|-----|--------------------------------------------|
| 1   | Environment + JS refresher                 |
| 2   | Scopes, closures, `this`                   |
| 3   | Prototypes, classes, inheritance           |
| 4   | TypeScript basics (types, interfaces)      |
| 5   | TypeScript functions & generics (intro)    |
| 6   | Async basics (callbacks, promises)         |
| 7   | Async/await + weekly review                |

---

### Day 1 – Environment Setup & JS Refresher

#### 4-Hour Plan

- **Block 1 (Core – 60 min)**
  - Install **Node.js LTS** and set up a **TypeScript** project:
    - Initialize `package.json`, install `typescript`, `ts-node`, `eslint`, `jest` (optional).
    - Configure `tsconfig.json` with strict mode.
  - Skim `role-understanding.md` to anchor expectations.

- **Block 2 (JS Basics – 60 min)**
  - Review:
    - `let`, `const`, `var`.
    - Basic types: number, string, boolean, objects, arrays.
    - Control flow, functions.
  - Implement small snippets:
    - Array operations (`map`, `filter`, `reduce`).

- **Block 3 (DSA – 60 min)**
  - From `dsa-backend-plan.md`, Arrays & Strings:
    - Solve **2–3 easy** array/string problems (e.g., reverse array, check palindrome, frequency count).
  - Note patterns (frequency counting, two scans).

- **Block 4 (Review – 30–45 min)**
  - Write a short note:
    - Tools installed.
    - Any gaps in JS basics.
  - Update `skill-gap-template.md` (JS/TS section initial rating).

#### 6-Hour Plan

- **Do everything in the 4-hour plan**, plus:
  - Extra **DSA block (45–60 min)**:
    - +1–2 medium array/string problems.
  - Extra **JS practice (45–60 min)**:
    - Implement small utility functions in TS (e.g., `chunkArray`, `unique`, `flatten`).

---

### Day 2 – Scopes, Closures, and `this`

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Study:
    - **Lexical scope**, scope chain.
    - **Closures** and common use cases (factory functions, memoization).
    - `this` binding: default, implicit, explicit, arrow functions.
  - Draw a simple **ASCII diagram** of scope chains.

```text
Global Scope
  |
  +--> function outer()
           |
           +--> function inner()  (closure over outer variables)
```

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - A closure-based counter (`createCounter()`).
    - A function that uses `this` in methods vs arrow functions in objects/classes.

- **Block 3 (DSA – 60 min)**
  - 2–3 easy/medium array/string problems focusing on:
    - Frequency maps (hash maps).
    - Removing duplicates using sets.

- **Block 4 (Review – 30 min)**
  - Write down:
    - 2–3 examples where closures are useful in backend code (e.g., partial application, configuration).

#### 6-Hour Plan

- Add:
  - **Extra coding (60 min)**:
    - Implement a simple **configurable logger** using closures.
  - **Extra DSA (45 min)**:
    - 1 additional medium problem (strings/arrays).

---

### Day 3 – Prototypes, Classes, and Inheritance

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Prototype chain, `Object.create`, `__proto__` (conceptual).
    - ES6 classes, inheritance, `super`.
  - Draw a **prototype chain** diagram for a simple object hierarchy.

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - A simple `User` and `Admin` class using inheritance.
    - Show how methods are shared via prototype vs per-instance.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems mixing arrays/strings + hash maps.
  - Focus on:
    - Using maps/sets to reduce complexity from \(O(n^2)\) to \(O(n)\).

- **Block 4 (Review – 30 min)**
  - Note: when would you prefer **composition over inheritance** in backend design?

#### 6-Hour Plan

- Add:
  - **Mini-refactor (45–60 min)**:
    - Refactor your Day 2 logger using classes and compare with closures.
  - **Extra DSA (45 min)**:
    - 1 extra medium problem.

---

### Day 4 – TypeScript Basics (Types, Interfaces)

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Study:
    - Basic TS types: `string`, `number`, `boolean`, `any`, `unknown`.
    - Arrays, tuples.
    - Interfaces vs type aliases.
  - Configure strict mode in TS and fix obvious issues.

- **Block 2 (Hands-On – 60 min)**
  - Convert small JS utilities from previous days into **TS with types**.
  - Define interfaces for:
    - `User`, `Session`, `ApiResponse<T>`.

- **Block 3 (DSA – 60 min)**
  - Solve 2–3 problems, this time **writing in TypeScript**.
  - Practice:
    - Annotating function parameters and return types.

- **Block 4 (Review – 30 min)**
  - Update `skill-gap-template.md` for TS basics.

#### 6-Hour Plan

- Add:
  - **Type-focused refactor (60 min)**:
    - Add interfaces and types to your mini project (e.g., logger utilities).
  - **Extra DSA (45 min)** with TypeScript.

---

### Day 5 – TS Functions & Generics (Intro)

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Function types, optional and default parameters.
    - Generic functions (e.g., `identity<T>`, generic array helpers).
  - Introduce basic utility types: `Partial`, `Pick`, `Omit`.

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - `mapArray<T, U>(arr: T[], fn: (item: T) => U): U[]`
    - A typed `Result<T>` type (`{ data?: T; error?: string }`).

- **Block 3 (DSA – 60 min)**
  - 2–3 problems using generic helper functions where possible.

- **Block 4 (Review – 30 min)**
  - Summarize **when generics are useful** in backend services.

#### 6-Hour Plan

- Add:
  - **Generic refactor (60 min)**:
    - Introduce generics in a small repo (e.g., repository pattern scaffolding).
  - **Extra DSA (45 min)**.

---

### Day 6 – Async Basics: Callbacks, Promises

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Callback style async (and callback hell).
    - Promises: `new Promise`, `then`, `catch`, `finally`.
    - Promise chaining.

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - A fake async function using `setTimeout` with callback.
    - Wrap it into a Promise-based version.
    - Write a small script that chains multiple async operations.

- **Block 3 (DSA – 60 min)**
  - Mixed arrays/strings/hash maps (2–3 problems).

- **Block 4 (Review – 30 min)**
  - Write note: **why promises are easier to reason about than callbacks** in backend code.

#### 6-Hour Plan

- Add:
  - **Async mini-project (60 min)**:
    - Implement a simple **file-based key-value store** using async fs operations (Promise-based).
  - **Extra DSA (45 min)**.

---

### Day 7 – Async/Await & Weekly Review

#### 4-Hour Plan

- **Block 1 (Concepts – 45–60 min)**
  - Learn:
    - `async`/`await`, error handling with `try/catch`.
    - Common pitfalls (not awaiting promises, parallel vs sequential).

- **Block 2 (Hands-On – 60 min)**
  - Convert previous Promise chain examples into **async/await**.
  - Implement:
    - A function that runs multiple async tasks **in parallel** vs **in series** and measures time.

- **Block 3 (Review & DSA – 60 min)**
  - Solve 2–3 DSA problems (review your weakest from the week).
  - Revisit notes & update:
    - `skill-gap-template.md` JS/TS & Async sections.

- **Block 4 (Planning – 30 min)**
  - Summarize:
    - 3 biggest JS/TS learnings.
    - Weakest subtopics (to revisit in Week 2).
  - Skim `week-02.md` to preview next week.

#### 6-Hour Plan

- Add:
  - **Mini integration (60–75 min)**:
    - Create a small script/app that:
      - Reads a JSON file.
      - Transforms data with array methods.
      - Writes output to another file using async/await.
  - **Extra 1–2 DSA problems (45 min)** focusing on patterns you struggled with.

