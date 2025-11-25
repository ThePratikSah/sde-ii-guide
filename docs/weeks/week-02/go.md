---
id: go
title: Go Track
sidebar_label: Go
sidebar_position: 2
---

### Weekly Goals

- **Go Internals & Patterns**
  - Understand **Go Runtime Scheduler** (vs Node Event Loop).
  - Master **Error Handling** idioms (check-if-err, wrapping).
  - Deep dive into **Interfaces** and **Type Assertions** (Polymorphism).
  - Learn **Project Layout** and **Packages**.
- **DSA**
  - Arrays/Strings continued, **Two Pointers** pattern.
- **Mini Project**
  - Build a CLI tool using standard library.

Use together with:
- [16-Week Roadmap](../../roadmap/roadmap-16-weeks.md)
- [DSA Backend Plan](../../topic-banks/dsa-backend-plan.md)
- [Resources](../../resources/resources.md)

---

### Weekly Overview Table

| Day | Focus                                            |
|-----|--------------------------------------------------|
| 1   | Go Runtime Scheduler vs Node Event Loop          |
| 2   | Error Handling (The Go Way)                      |
| 3   | Interfaces, Type Assertions, Type Switches       |
| 4   | Struct Tags, JSON, Composition Patterns          |
| 5   | Packages, Modules, Project Layout                |
| 6   | Mini Project (CLI Tool)                          |
| 7   | Weekly Review + Networking Theory                |

---

### Day 1 – Go Runtime Scheduler

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Study:
    - **Go Scheduler**: M:N scheduling (Goroutines mapped to OS threads).
    - **G-M-P Model**: Goroutine, Machine (Thread), Processor (Context).
    - Blocking calls and how the scheduler handles them.
  - Compare with Node.js Event Loop (Single threaded vs M:N).

- **Block 2 (Experiments – 60 min)**
  - Write small scripts:
    - Spawn thousands of goroutines and check memory usage (vs threads).
    - Use `runtime.GOMAXPROCS` to limit parallelism and observe behavior.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems on arrays/strings & hash maps.

- **Block 4 (Review – 30 min)**
  - Summarize: Why is Go considered "concurrent by default"?

#### 6-Hour Plan

- Add:
  - **Deep Dive (45–60 min)**:
    - Read about "Cooperative Preemption" in Go 1.14+.
  - **Extra DSA (45 min)**.

---

### Day 2 – Error Handling (The Go Way)

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - The `error` interface.
    - Returning errors as the last return value.
    - `errors.New`, `fmt.Errorf`.
    - **Error Wrapping** (Go 1.13+): `%w` verb, `errors.Is`, `errors.As`.
    - Panic vs Error (Don't panic! ...usually).

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - A function that fails (e.g., divide by zero) returning an error.
    - Define a custom error struct `type MyError struct { ... }`.
    - Use `errors.Is` to check for specific sentinel errors.

- **Block 3 (DSA – 60 min)**
  - Start 1–2 **two-pointer** problems (sorted arrays).

- **Block 4 (Review – 30 min)**
  - Write down: Why Go prefers explicit error checking over Exceptions.

#### 6-Hour Plan

- Add:
  - **Refactor (60 min)**:
    - Take a previous script and add robust error handling with context (wrapping).
  - **Extra DSA (45 min)**.

---

### Day 3 – Interfaces & Type Assertions

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Understand:
    - **Polymorphism** via Interfaces.
    - **Type Assertions**: `val, ok := i.(Type)`.
    - **Type Switches**: `switch v := i.(type)`.
    - The `any` type (alias for `interface{}`).

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - A function that takes `any` and prints different messages based on type (int vs string vs struct).
    - A `PaymentProcessor` interface with `Pay()`, implemented by `Stripe` and `PayPal` structs.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (arrays/strings, two pointers).

- **Block 4 (Review – 30 min)**
  - Note: How to avoid "interface pollution" (define interfaces where they are used).

#### 6-Hour Plan

- Add:
  - **Challenge (60 min)**:
    - Implement a simple "plugin system" where plugins register themselves via an interface.

---

### Day 4 – Struct Tags & Composition Patterns

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - **Struct Tags**: Metadata for fields (e.g., `json:"name"`).
    - **JSON Marshaling/Unmarshaling**: `encoding/json`.
    - **Composition**: Embedding structs to reuse fields/methods.

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - Read a JSON file into a struct with tags.
    - Write a struct to JSON.
    - Create a `BaseController` struct and embed it in `UserController`.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Summarize: How struct tags work (reflection basics).

#### 6-Hour Plan

- Add:
  - **Mini modeling session (60 min)**:
    - Model a complex JSON response (e.g., from a public API) using nested structs and tags.

---

### Day 5 – Packages & Project Structure

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - **Standard Go Project Layout**: `cmd/`, `pkg/`, `internal/`.
    - Exported (Capitalized) vs Unexported (lowercase) identifiers.
    - `init()` functions (use sparingly).

- **Block 2 (Hands-On – 60 min)**
  - Refactor your workspace:
    - Create `cmd/myapp/main.go`.
    - Move logic to `internal/mypkg`.
    - Verify imports work correctly.

- **Block 3 (DSA – 60 min)**
  - Mixed arrays/strings problems.

- **Block 4 (Review – 30 min)**
  - Draw the directory structure of a standard Go app.

#### 6-Hour Plan

- Add:
  - **Library creation (60 min)**:
    - Create a separate module (locally), `go mod edit -replace`, and use it in your main app.

---

### Day 6 – Mini Project (CLI Tool)

#### 4-Hour Plan

- **Block 1 (Design – 45–60 min)**
  - Pick a mini project:
    - **CLI Task Manager** (similar to Node track but in Go).
    - Use `flag` package for arguments (`-add`, `-list`).
    - Use `encoding/json` to save tasks to a file.

- **Block 2 (Implementation – 90 min)**
  - Implement:
    - Structs for `Task`.
    - Functions to Load/Save JSON.
    - Command handling logic.

- **Block 3 (Review – 30–45 min)**
  - Code review yourself:
    - Are errors handled?
    - Is the code organized into packages?

#### 6-Hour Plan

- Add:
  - **Polish (60–75 min)**:
    - Add a `Makefile` to build the binary.
    - Add colors to output (using ANSI codes or a library like `fatih/color`).
  - **1–2 DSA problems (30–45 min)**.

---

### Day 7 – Weekly Review & Networking Theory

#### 4-Hour Plan

- **Block 1 (Review – 60 min)**
  - Revisit notes on:
    - Scheduler, Error handling, Interfaces.
  - Update [skill gap template](../../getting-started/skill-gap-template.md).

- **Block 2 (Networking Theory – 60 min)**
  - Read about:
    - HTTP request/response cycle (same as Node track).
    - HTTP methods and status codes.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems:
    - Focus on Two Pointers.

- **Block 4 (Planning – 30 min)**
  - Skim [week-03](../week-03/go).

#### 6-Hour Plan

- Add:
  - **Practice explanation (60–75 min)**:
    - Explain "How Go handles concurrency" vs "How Node handles concurrency".
