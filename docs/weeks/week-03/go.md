---
id: go
title: Go Track
sidebar_label: Go
sidebar_position: 2
---

### Weekly Goals

- **Go I/O & Concurrency**
  - Learn **`io.Reader`/`io.Writer`** interfaces and streaming patterns.
  - Understand **buffered I/O** and performance considerations.
  - Practice **select** statement for channel multiplexing.
- **DSA**
  - Introduce **sliding window** pattern.
- **Theory**
  - OS basics: process vs thread (conceptual).

Use together with:
- [16-Week Roadmap](../roadmap/roadmap-16-weeks.md)
- [DSA Backend Plan](../topic-banks/dsa-backend-plan.md)
- [Theory Round](../topic-banks/theory-round.md)

---

### Weekly Overview Table

| Day | Focus                                            |
|-----|--------------------------------------------------|
| 1   | `io.Reader`/`io.Writer` interfaces               |
| 2   | File I/O & Buffered I/O                          |
| 3   | Context package & Cancellation                   |
| 4   | Select statement & Channel patterns              |
| 5   | Mini project (Log processor with concurrency)    |
| 6   | Go recap & consolidation                         |
| 7   | Mock mini-round: coding + Go questions           |

---

### Day 1 – `io.Reader`/`io.Writer` Interfaces

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Study:
    - The `io.Reader` and `io.Writer` interfaces.
    - Common implementations: `os.File`, `bytes.Buffer`, `strings.Reader`.
    - Composability via interfaces (vs Node streams).

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - A function that takes `io.Reader` and counts bytes.
    - Use `io.Copy` to copy from stdin to stdout.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems on arrays/strings; start 1 sliding window.

- **Block 4 (Review – 30 min)**
  - Note: How Go's interface-based I/O differs from Node streams.

#### 6-Hour Plan

- Add:
  - **Custom Reader (60 min)**:
    - Implement a custom `io.Reader` that transforms data (e.g., ROT13).

---

### Day 2 – File I/O & Buffered I/O

#### 4-Hour Plan

- **Block 1 (Hands-On – 60–75 min)**
  - Implement:
    - File copy using `io.Copy`.
    - Read file line-by-line using `bufio.Scanner`.
    - Write to file using `bufio.Writer`.

- **Block 2 (Concepts – 45–60 min)**
  - Learn:
    - Why buffering matters (reduce syscalls).
    - `bufio.Reader` vs `io.Reader`.

- **Block 3 (DSA – 60 min)**
  - 2–3 sliding window problems.

- **Block 4 (Review – 30 min)**
  - Summarize: When to use buffered I/O.

#### 6-Hour Plan

- Add:
  - **CLI Tool (60 min)**:
    - Build a grep-like tool: read file, filter lines, output.

---

### Day 3 – Context Package & Cancellation

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - `context.Context`: Cancellation, deadlines, values.
    - `context.WithCancel`, `WithTimeout`, `WithDeadline`.
    - Passing context through goroutines.

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - A goroutine that listens for cancellation via `ctx.Done()`.
    - Simulate a long-running task with timeout.

- **Block 3 (DSA – 60 min)**
  - 2–3 sliding window / two-pointer problems.

- **Block 4 (Review – 30 min)**
  - Write: Why context is critical in backend services (request scoping).

#### 6-Hour Plan

- Add:
  - **Cascading Cancellation (60 min)**:
    - Spawn multiple goroutines, cancel parent context, observe propagation.

---

### Day 4 – Select Statement & Channel Patterns

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - `select` statement for multiplexing channels.
    - Timeout patterns with `time.After`.
    - Non-blocking sends/receives with `default`.

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - A function that waits on multiple channels and processes the first one.
    - A timeout pattern using `select`.

- **Block 3 (DSA – 60 min)**
  - Mixed problems.

- **Block 4 (Review – 30 min)**
  - Note common channel patterns (fan-out, fan-in, pipeline).

#### 6-Hour Plan

- Add:
  - **Fan-out/Fan-in (60 min)**:
    - Implement a worker pool using channels and select.

---

### Day 5 – Mini Project (Log Processor with Concurrency)

#### 4-Hour Plan

- **Block 1 (Design – 45–60 min)**
  - Design:
    - **Concurrent log processor**: Read log file → filter by level → write to output.
    - Use goroutines + channels for processing pipeline.

- **Block 2 (Implementation – 90 min)**
  - Implement:
    - Reader goroutine → Filter goroutines (workers) → Writer goroutine.
    - Use `bufio.Scanner` and channels.

- **Block 3 (DSA – 45–60 min)**
  - 2 problems.

#### 6-Hour Plan

- Add:
  - **Enhancements (60 min)**:
    - Add context for graceful shutdown.
    - Add CLI flags for log level.

---

### Day 6 – Go Recap & Consolidation

#### 4-Hour Plan

- **Block 1 (Recap – 60–75 min)**
  - Review:
    - Pointers, structs, interfaces, goroutines, channels, context.

- **Block 2 (Quiz Yourself – 45–60 min)**
  - Write 10–15 Go questions and answer them.

- **Block 3 (DSA – 45–60 min)**
  - Mixed problems.

#### 6-Hour Plan

- Add:
  - **Mini mock (60 min)**:
    - 1 coding problem + Go Q&A.

---

### Day 7 – Mock Mini-Round: Coding + Go Questions

#### 4-Hour Plan

- **Block 1 (Mock Coding – 75–90 min)**
  - Simulate interview:
    - 1 medium sliding window problem.
    - Time-box to 40–45 min.

- **Block 2 (Go Q&A – 45–60 min)**
  - Practice answering:
    - "Explain goroutines vs threads."
    - "What is a channel and how does it work?"
    - "When would you use context?"

- **Block 3 (Review & Prep – 45–60 min)**
  - Update skill gap template.
  - Skim [week-04](./week-04.md).

#### 6-Hour Plan

- Add:
  - **Second mock problem (45–60 min)**.
