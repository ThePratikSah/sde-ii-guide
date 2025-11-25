---
id: go
title: Go Track
sidebar_label: Go
sidebar_position: 2
---

### Weekly Goals

- **Backend**
  - Understand **HTTP fundamentals** and build a basic **REST API** in Go.
  - Learn `net/http` standard library or a lightweight router (`Chi`/`Gorilla Mux`).
  - Implement routing, handlers, and error handling.
- **DSA**
  - Continue arrays/strings and sliding window; add some linked list basics.
- **Theory**
  - Deeper HTTP concepts: headers, status codes, idempotency.

Use together with:
- [16-Week Roadmap](../../roadmap/roadmap-16-weeks.md)
- [Projects](../../topic-banks/projects.md)

---

### Weekly Overview Table

| Day | Focus                                             |
|-----|---------------------------------------------------|
| 1   | HTTP basics & `net/http` package                  |
| 2   | Routing with stdlib or Chi/Gorilla Mux            |
| 3   | Handlers, services, simple architecture           |
| 4   | Input validation & error handling                 |
| 5   | Middleware patterns                               |
| 6   | Mini REST API project (URL shortener v1)          |
| 7   | Weekly review & API design discussion             |

---

### Day 1 – HTTP Basics & `net/http` Package

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Review HTTP:
    - Methods (GET, POST, PUT, DELETE, PATCH).
    - Status codes (2xx, 3xx, 4xx, 5xx).
    - Headers, query params, path params, request body.

- **Block 2 (Hands-On – 60 min)**
  - Use `net/http`:
    - Build a simple server with `http.HandleFunc`.
    - Respond with JSON using `json.Marshal`.
    - Parse query params and path.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (arrays/strings/sliding window).

- **Block 4 (Review – 30 min)**
  - Draw request-response diagram.

#### 6-Hour Plan

- Add:
  - **Extended exercise (60 min)**:
    - Implement basic routing with a map of path → handler.

---

### Day 2 – Routing with Chi or Gorilla Mux

#### 4-Hour Plan

- **Block 1 (Setup – 60–75 min)**
  - Pick **Chi** or **Gorilla Mux**:
    - `go get` the package.
    - Set up `cmd/server/main.go`, `internal/handlers/`.

- **Block 2 (Routing – 60 min)**
  - Implement:
    - Routes: `GET /health`, `GET /items`, `POST /items`.
    - Use in-memory slice as storage.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (linked list basics or arrays).

- **Block 4 (Review – 30 min)**
  - Note differences between stdlib and router library.

#### 6-Hour Plan

- Add:
  - **Refactor (60 min)**:
    - Separate routes into their own package.
    - Add basic logging middleware.

---

### Day 3 – Handlers, Services, and Simple Architecture

#### 4-Hour Plan

- **Block 1 (Architecture – 60–75 min)**
  - Learn layered architecture:
    - Handler → Service → Repository.

- **Block 2 (Hands-On – 60 min)**
  - Refactor API:
    - Create `internal/handlers/`, `internal/services/`, `internal/repositories/`.
    - Move business logic to services.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Draw ASCII diagram of layers.

```text
Client
  |
  v
Handler -> Service -> Repository -> In-memory storage / DB (later)
```

#### 6-Hour Plan

- Add:
  - **Unit tests (60 min)**:
    - Test at least one service function.

---

### Day 4 – Input Validation & Error Handling

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Request validation (manual or library like `go-playground/validator`).
    - Error handling patterns in Go HTTP handlers.

- **Block 2 (Hands-On – 60 min)**
  - Add:
    - Validation for `POST /items`.
    - Centralized error response helper.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Define standard error response format.

#### 6-Hour Plan

- Add:
  - **Negative test cases (60 min)**.

---

### Day 5 – Middleware Patterns

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Middleware in Go (function wrapping handlers).
    - Common patterns: logging, auth, recovery.

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - Logging middleware (method, path, duration).
    - Recovery middleware (panic handling).

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Note middleware chain order.

#### 6-Hour Plan

- Add:
  - **Auth stub middleware (60 min)**:
    - Check for API key in header.

---

### Day 6 – Mini REST API Project (URL Shortener v1)

#### 4-Hour Plan

- **Block 1 (Design – 45–60 min)**
  - Choose:
    - **URL shortener v1** (in-memory), or
    - **Task manager API**.
  - Define endpoints and data model.

- **Block 2 (Implementation – 90 min)**
  - Build:
    - CRUD endpoints.
    - Layered architecture.
    - Logging and error handling.

- **Block 3 (Review – 30–45 min)**
  - Identify where to plug in DB later.

#### 6-Hour Plan

- Add:
  - **Extra features (60 min)**:
    - Pagination, filtering.

---

### Day 7 – Weekly Review & API Design

#### 4-Hour Plan

- **Block 1 (Review – 60–75 min)**
  - Revisit:
    - HTTP, routing, middleware.
    - Mini REST API design.

- **Block 2 (Mock API Design – 60 min)**
  - Design APIs for a **note-taking** app.

- **Block 3 (DSA – 45–60 min)**
  - 2–3 mixed problems.

#### 6-Hour Plan

- Add:
  - **Self-interview (45–60 min)**:
    - Explain API design (resource naming, status codes, error handling).
