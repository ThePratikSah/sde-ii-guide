---
id: week-04
title: Week 04 – Node.js Backend Basics - HTTP, Express/Fastify, Routing
sidebar_label: Week 04
sidebar_position: 4
---


<!-- Week 4 starts Node.js backend phase: HTTP basics, Express/Fastify setup, routing, and structured APIs. -->

### Weekly Goals

- **Backend**
  - Understand **HTTP fundamentals** and build a basic **REST API** in Node.js.
  - Learn Express or Fastify (pick one to start; you can compare later).
  - Implement routing, basic controllers, and error handling.
- **DSA**
  - Continue arrays/strings and sliding window; add some linked list basics.
- **Theory**
  - Deeper HTTP concepts: headers, status codes, idempotency.

Use with:
- [16-Week Roadmap](../roadmap/roadmap-16-weeks.md)
- [Projects](../topic-banks/projects.md) (start backend for a small service, e.g., URL shortener)

---

### Weekly Overview Table

| Day | Focus                                             |
|-----|---------------------------------------------------|
| 1   | HTTP basics & Node HTTP module                    |
| 2   | Express/Fastify setup & basic routes              |
| 3   | Controllers, services, simple architecture        |
| 4   | Input validation & error handling                 |
| 5   | Basic auth stub & middleware                      |
| 6   | Mini REST API project (e.g., URL shortener v1)    |
| 7   | Weekly review & small mock API design discussion  |

---

### Day 1 – HTTP Basics & Node HTTP Module

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Review HTTP:
    - Methods (GET, POST, PUT, DELETE, PATCH).
    - Status codes (2xx, 3xx, 4xx, 5xx).
    - Headers, query params, path params, request body.

- **Block 2 (Hands-On – 60 min)**
  - Use Node’s built-in `http` module:
    - Build a simple server that responds with JSON.
    - Parse URL and route to different handlers manually.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (arrays/strings/sliding window).

- **Block 4 (Review – 30 min)**
  - Draw a simple request-response diagram for your server.

#### 6-Hour Plan

- Add:
  - **Extended exercise (60 min)**:
    - Implement basic routing logic with a map of path → handler.

---

### Day 2 – Express/Fastify Setup & Basic Routes

#### 4-Hour Plan

- **Block 1 (Setup – 60–75 min)**
  - Pick **Express** or **Fastify**:
    - Initialize project with TS.
    - Set up `src/app.ts`, `src/server.ts`.

- **Block 2 (Routing – 60 min)**
  - Implement:
    - Routes: `GET /health`, `GET /items`, `POST /items`.
    - Use a simple in-memory array as storage.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (linked list basics or arrays).

- **Block 4 (Review – 30 min)**
  - Note differences between your manual HTTP server and Express/Fastify.

#### 6-Hour Plan

- Add:
  - **Refactor (60 min)**:
    - Separate routes into their own module.
    - Add a basic logger middleware (console-based).

---

### Day 3 – Controllers, Services, and Simple Architecture

#### 4-Hour Plan

- **Block 1 (Architecture – 60–75 min)**
  - Learn layered architecture:
    - Controller → Service → Repository (even if repository is in-memory for now).

- **Block 2 (Hands-On – 60 min)**
  - Refactor API:
    - Create `controllers/`, `services/`, `repositories/` folders.
    - Move business logic to **services**.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems mixing previous topics.

- **Block 4 (Review – 30 min)**
  - Draw ASCII diagram of your app’s layers.

```text
Client
  |
  v
Controller -> Service -> Repository -> In-memory storage / DB (later)
```

#### 6-Hour Plan

- Add:
  - **Unit tests (60 min)**:
    - Test at least one service function with Jest.

---

### Day 4 – Input Validation & Error Handling

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Request validation (basic manual checks or library).
    - Error handling middleware in Express/Fastify.

- **Block 2 (Hands-On – 60 min)**
  - Add:
    - Validation for `POST /items`.
    - Centralized error handler returning JSON error responses.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (arrays/strings/sliding window).

- **Block 4 (Review – 30 min)**
  - Write down standard error response format you will use (e.g., `{ message, code, details }`).

#### 6-Hour Plan

- Add:
  - **Negative test cases (60 min)**:
    - Write tests for invalid inputs and error handling.

---

### Day 5 – Basic Auth Stub & Middleware

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Read about:
    - Basic auth flows (email/password, tokens).
    - Middleware concept in Express/Fastify.

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - A stub auth middleware that checks for a hardcoded API key or token.
    - Protect some routes with this middleware.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (linked lists / arrays).

- **Block 4 (Review – 30 min)**
  - Note how auth middleware will evolve later (JWT, sessions).

#### 6-Hour Plan

- Add:
  - **Refactor routes (60 min)**:
    - Add role-based access stub (e.g., `X-Role: admin` header).

---

### Day 6 – Mini REST API Project (URL Shortener v1 or Simple Resource API)

#### 4-Hour Plan

- **Block 1 (Design – 45–60 min)**
  - Choose:
    - Simple **URL shortener v1** (in-memory mapping), or
    - Simple **task manager API**.
  - Define endpoints and data model.

- **Block 2 (Implementation – 90 min)**
  - Build:
    - CRUD endpoints.
    - Use layered architecture.
    - Add logging and error handling.

- **Block 3 (Review – 30–45 min)**
  - Identify:
    - Where you will later plug in DB and Redis.

#### 6-Hour Plan

- Add:
  - **Extra features (60 min)**:
    - Pagination for list endpoints.
    - Basic filtering via query params.

---

### Day 7 – Weekly Review & Small Mock API Design

#### 4-Hour Plan

- **Block 1 (Review – 60–75 min)**
  - Revisit:
    - HTTP methods, status codes.
    - Express/Fastify routing and middleware.
    - Your mini REST API design.

- **Block 2 (Mock API Design – 60 min)**
  - Whiteboard/design:
    - APIs for a simple **note-taking** app:
      - `POST /notes`, `GET /notes`, `GET /notes/:id`, etc.

- **Block 3 (DSA – 45–60 min)**
  - 2–3 mixed problems, focusing on weakest topic.

#### 6-Hour Plan

- Add:
  - **Self-interview (45–60 min)**:
    - Explain your API design out loud, focusing on:
      - Resource naming.
      - Status codes.
      - Error handling.


