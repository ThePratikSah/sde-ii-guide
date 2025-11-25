---
id: node
title: Node.js / TypeScript
sidebar_label: Node.js
sidebar_position: 1
---

### Weekly Goals

- **JavaScript/TypeScript**
  - Learn **Node.js streams** basics (readable, writable, transform).
  - Understand **backpressure** at a conceptual level.
  - Refine TS usage in small apps.
- **DSA**
  - Introduce **sliding window** and revisit arrays/strings.
- **Theory**
  - Light intro to **OS basics**: process vs thread (conceptual).

Use with:
- [16-Week Roadmap](../../roadmap/roadmap-16-weeks.md)
- [DSA Backend Plan](../../topic-banks/dsa-backend-plan.md)
- [Theory Round](../../topic-banks/theory-round.md)

---

### Weekly Overview Table

| Day | Focus                                            |
|-----|--------------------------------------------------|
| 1   | Node streams overview                            |
| 2   | File streams & transform streams                 |
| 3   | Backpressure & performance basics                |
| 4   | TS refinement & code quality                     |
| 5   | Mini project using streams (e.g., log processor) |
| 6   | JS/TS recap & consolidation                      |
| 7   | Mock mini-round: coding + JS/TS questions        |

---

### Day 1 – Node Streams Overview

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Read about:
    - Readable, writable, duplex, transform streams.
    - Where streams are used (file IO, HTTP requests/responses).

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - A script that reads from `stdin` and writes to `stdout` using streams.
    - Use `pipe()` to connect them.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems focusing on arrays/strings; start 1 sliding window.

- **Block 4 (Review – 30 min)**
  - Note 2–3 real-world backend use cases of streams (file uploads, logs).

#### 6-Hour Plan

- Add:
  - **Extra stream exercise (60 min)**:
    - Implement a transform stream that uppercases all input text.

---

### Day 2 – File Streams & Transform Streams

#### 4-Hour Plan

- **Block 1 (Hands-On – 60–75 min)**
  - Implement:
    - File copy using streams: read from file A → write to file B.
    - A transform stream that filters lines (e.g., only lines containing a keyword).

- **Block 2 (Concepts – 45–60 min)**
  - Read about backpressure at a high level:
    - When writable cannot keep up with readable.
    - How `pipe()` manages it.

- **Block 3 (DSA – 60 min)**
  - 2–3 sliding window problems (subarray/substring patterns).

- **Block 4 (Review – 30 min)**
  - Summarize sliding window invariant for one problem.

#### 6-Hour Plan

- Add:
  - **Extended exercise (60 min)**:
    - Build a simple CLI tool:
      - Reads a log file.
      - Filters by level and writes to another file.

---

### Day 3 – Backpressure & Performance Basics

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Understand:
    - What is backpressure?
    - Why naive `readFile`/`writeFile` can be problematic for huge files.
  - Skim performance basics:
    - Blocking vs non-blocking IO.

- **Block 2 (Hands-On – 60 min)**
  - Experiment:
    - Compare `fs.readFile` vs streaming large files (even if simulated).

- **Block 3 (DSA – 60 min)**
  - 2–3 sliding window / two-pointer problems.

- **Block 4 (Review – 30 min)**
  - Write 2–3 bullet points:
    - When would you choose streaming in backend APIs?

#### 6-Hour Plan

- Add:
  - **Micro-benchmarking (45–60 min)**:
    - Use `console.time`/`console.timeEnd` to compare synchronous vs asynchronous operations.

---

### Day 4 – TS Refinement & Code Quality

#### 4-Hour Plan

- **Block 1 (Refactor – 60–75 min)**
  - Take your previous mini project(s) and:
    - Add stricter TS types.
    - Remove `any`.
    - Separate interfaces/types into `types.ts` or similar.

- **Block 2 (Code Quality – 60 min)**
  - Add ESLint + basic rules.
  - Fix top warnings/errors.

- **Block 3 (DSA – 60 min)**
  - Mixed arrays/strings + sliding window problems.

- **Block 4 (Review – 30 min)**
  - Note any TS features you still struggle with.

#### 6-Hour Plan

- Add:
  - **Tests (60 min)**:
    - Add 3–5 Jest tests for critical functions.

---

### Day 5 – Mini Project Using Streams (e.g., Log Processor)

#### 4-Hour Plan

- **Block 1 (Design – 45–60 min)**
  - Design a mini project:
    - Simple **log processing pipeline**:
      - Read log file → filter certain levels → output to another file.

- **Block 2 (Implementation – 90 min)**
  - Implement using:
    - Node streams (`fs.createReadStream`, `fs.createWriteStream`).
    - Transform stream for filtering.

- **Block 3 (DSA – 45–60 min)**
  - 2 DSA problems, preferably sliding window.

#### 6-Hour Plan

- Add:
  - **Enhancements (60 min)**:
    - Add CLI options (log level, keyword).
    - Handle errors gracefully with try/catch and event listeners.

---

### Day 6 – JS/TS Recap & Consolidation

#### 4-Hour Plan

- **Block 1 (Recap – 60–75 min)**
  - Review:
    - Closures, prototypes, event loop, async/await.
    - TS types, generics, unions, intersections.

- **Block 2 (Quiz Yourself – 45–60 min)**
  - Write 10–15 questions for yourself on JS/TS.
  - Answer them without looking at notes, then verify.

- **Block 3 (DSA – 45–60 min)**
  - Mixed problems covering the week’s focus.

#### 6-Hour Plan

- Add:
  - **Mini mock (60 min)**:
    - 1 coding problem + 5–10 min of JS/TS Q&A (self-interview style).

---

### Day 7 – Mock Mini-Round: Coding + JS/TS Questions

#### 4-Hour Plan

- **Block 1 (Mock Coding – 75–90 min)**
  - Simulate an interview:
    - 1 medium difficulty array/string/sliding window problem.
    - Time-box to 40–45 min.

- **Block 2 (JS/TS Q&A – 45–60 min)**
  - Practice answering:
    - "Explain event loop."
    - "What are closures and how are they used?"
    - "How do generics help in TS?"

- **Block 3 (Review & Prep – 45–60 min)**
  - Update:
    - [skill gap template](../../getting-started/skill-gap-template.md) JS/TS and async sections.
  - Skim [week-04](../week-04/node) to preview Node.js backend phase.

#### 6-Hour Plan

- Add:
  - **Second mock problem (45–60 min)**:
    - Another DSA problem, focusing on a different pattern (hash maps or two pointers).


