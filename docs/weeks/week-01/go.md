---
id: go
title: Go Track
sidebar_label: Go
sidebar_position: 2
---

### Weekly Goals

- **Go Fundamentals**
  - Set up **Go** environment and understand workspace/modules.
  - Master **pointers, structs, and methods**.
  - Understand **interfaces and composition** (vs inheritance).
- **DSA**
  - Start with **arrays, strings, maps** (easy → medium) using Go.
- **Concurrency Intro**
  - **Goroutines** and **Channels** basics.

Use together with:
- [Role Understanding](../../getting-started/role-understanding.md)
- [Skill Gap Template](../../getting-started/skill-gap-template.md)
- [16-Week Roadmap](../../roadmap/roadmap-16-weeks.md)
- [DSA Backend Plan](../../topic-banks/dsa-backend-plan.md)
- [Resources](../../resources/resources.md)

---

### Weekly Overview Table

| Day | Focus                                      |
|-----|--------------------------------------------|
| 1   | Environment + Go Syntax Refresher          |
| 2   | Pointers, Structs, Methods                 |
| 3   | Interfaces & Composition                   |
| 4   | Type System (Arrays, Slices, Maps)         |
| 5   | Generics & Functional Options              |
| 6   | Concurrency Basics (Goroutines)            |
| 7   | Channels + Weekly Review                   |

---

### Day 1 – Environment Setup & Go Syntax Refresher

#### 4-Hour Plan

- **Block 1 (Core – 60 min)**
  - Install **Go** (latest stable) and set up VS Code (Go extension).
  - Initialize a project: `go mod init github.com/username/learning-go`.
  - Learn: `package main`, `import`, `func main()`.
  - Skim [role-understanding.md](../../getting-started/role-understanding.md).

- **Block 2 (Go Basics – 60 min)**
  - Review:
    - Variables: `var` vs `:=`.
    - Basic types: `int`, `float64`, `string`, `bool`.
    - Control flow: `if`, `for` (no `while` in Go), `switch`.
  - Implement small snippets:
    - FizzBuzz, simple calculator.

- **Block 3 (DSA – 60 min)**
  - From [DSA Backend Plan](../../topic-banks/dsa-backend-plan.md), Arrays & Strings:
    - Solve **2–3 easy** problems in Go.
    - Focus on Go's strict typing and lack of concise functional helpers (like `map/filter` in JS) - write loops explicitly.

- **Block 4 (Review – 30–45 min)**
  - Write a short note:
    - Go workspace structure.
    - Differences from JS (static typing, compilation).
  - Update [skill gap template](../../getting-started/skill-gap-template.md).

#### 6-Hour Plan

- **Do everything in the 4-hour plan**, plus:
  - Extra **DSA block (45–60 min)**:
    - +1–2 medium array/string problems.
  - Extra **Go practice (45–60 min)**:
    - Explore `fmt` package deeply (`Printf` verbs like `%v`, `%+v`, `%T`).

---

### Day 2 – Pointers, Structs, and Methods

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Study:
    - **Pointers**: `&` (address of), `*` (dereference), nil pointers.
    - **Structs**: Defining data structures.
    - **Methods**: Value receivers `(s Student)` vs Pointer receivers `(s *Student)`.
  - Draw a diagram showing stack vs heap (basic concept).

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - A `User` struct with methods (e.g., `UpdateEmail`).
    - Experiment with mutating a struct using value vs pointer receiver to see the difference.

- **Block 3 (DSA – 60 min)**
  - 2–3 easy/medium problems.
  - Focus on:
    - Passing arrays (fixed size) vs slices (reference-like) to functions.

- **Block 4 (Review – 30 min)**
  - Write down:
    - When to use pointer receivers (mutation, large structs).

#### 6-Hour Plan

- Add:
  - **Extra coding (60 min)**:
    - Implement a simple **linked list** node struct and a method to traverse it.
  - **Extra DSA (45 min)**.

---

### Day 3 – Interfaces & Composition

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - **Interfaces**: Implicit implementation (duck typing).
    - **Embedding**: Composition over inheritance (struct embedding).
    - The empty interface `interface{}` (or `any`).

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - Define an interface `Shape` with `Area()`. Implement it for `Circle` and `Rectangle`.
    - Create a function that takes `Shape` and prints area.
    - Use struct embedding to compose a `Manager` struct from `Employee`.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.
  - Use maps (`map[string]int`) for frequency counting.

- **Block 4 (Review – 30 min)**
  - Note: How Go's interfaces differ from Java/TS interfaces.

#### 6-Hour Plan

- Add:
  - **Mini-refactor (45–60 min)**:
    - Refactor Day 2's User struct to satisfy a `Stringer` interface (`String() string`).
  - **Extra DSA (45 min)**.

---

### Day 4 – Type System (Arrays, Slices, Maps)

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Study:
    - **Arrays** (value type) vs **Slices** (backing array window).
    - Slice internals: length vs capacity.
    - **Maps**: creation, deletion, "comma ok" idiom.

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - Slice manipulation: `append`, slicing `arr[1:3]`, `copy`.
    - Map operations: check existence, iterate.

- **Block 3 (DSA – 60 min)**
  - Solve 2–3 problems focusing on **Slice tricks** (e.g., deleting an element, filtering).

- **Block 4 (Review – 30 min)**
  - Update [skill-gap-template.md](../../getting-started/skill-gap-template.md).

#### 6-Hour Plan

- Add:
  - **Deep Dive (60 min)**:
    - Write a script to demonstrate slice capacity growth and how multiple slices can share backing arrays (and potential gotchas).
  - **Extra DSA (45 min)**.

---

### Day 5 – Generics & Functional Options

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - **Generics** (Go 1.18+): Type parameters `[T any]`.
    - **Functional Options Pattern**: Configuring complex structs.

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - A generic `Map` or `Filter` function for slices.
    - A `Server` struct constructor using Functional Options (e.g., `WithPort(8080)`, `WithTimeout(5s)`).

- **Block 3 (DSA – 60 min)**
  - 2–3 problems. Try to use your generic helpers if applicable.

- **Block 4 (Review – 30 min)**
  - Summarize when to use Generics (don't overuse!).

#### 6-Hour Plan

- Add:
  - **Generic refactor (60 min)**:
    - Create a generic `Stack[T]` or `Queue[T]` data structure.
  - **Extra DSA (45 min)**.

---

### Day 6 – Concurrency Basics: Goroutines

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - **Goroutines**: Lightweight threads, `go` keyword.
    - **WaitGroups**: `sync.WaitGroup` to wait for completion.
    - Race conditions (concept).

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - Launch 100 goroutines that print a number.
    - Use `WaitGroup` to ensure main function waits for them.
    - Introduce a race condition (shared counter) and detect it with `go run -race`.

- **Block 3 (DSA – 60 min)**
  - Mixed arrays/strings/maps.

- **Block 4 (Review – 30 min)**
  - Write note: Concurrency vs Parallelism.

#### 6-Hour Plan

- Add:
  - **Concurrency mini-project (60 min)**:
    - Concurrent file downloader (simulated with sleep) using WaitGroup.
  - **Extra DSA (45 min)**.

---

### Day 7 – Channels & Weekly Review

#### 4-Hour Plan

- **Block 1 (Concepts – 45–60 min)**
  - Learn:
    - **Channels**: Unbuffered vs Buffered.
    - Sending `ch <- val` and receiving `val := <-ch`.
    - Closing channels and range over channels.

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - A producer-consumer pipeline (numbers -> square -> print).
    - Use a buffered channel to limit concurrency.

- **Block 3 (Review & DSA – 60 min)**
  - Solve 2–3 DSA problems.
  - Revisit notes & update skill gap template.

- **Block 4 (Planning – 30 min)**
  - Summarize:
    - 3 biggest Go learnings.
    - Weakest subtopics.
  - Skim [week-02](../week-02/go).

#### 6-Hour Plan

- Add:
  - **Mini integration (60–75 min)**:
    - Build a "worker pool": 3 workers processing jobs from a jobs channel and sending results to a results channel.
  - **Extra 1–2 DSA problems (45 min)**.
