---
id: go
title: Go Track
sidebar_label: Go
sidebar_position: 2
---

### Weekly Goals

- **Backend**
  - Implement **JWT-based auth** in your Go API.
  - Learn middleware patterns for **logging, auth, validation**.
  - Introduce **security basics**: input validation, secure headers, basic rate limiting.
- **DSA**
  - Continue with linked lists, queues/stacks.
- **Theory**
  - Process vs thread, concurrency basics.

Use together with:
- [16-Week Roadmap](../../roadmap/roadmap-16-weeks.md)
- [Projects](../../topic-banks/projects.md)
- [DSA Backend Plan](../../topic-banks/dsa-backend-plan.md)

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|--------------------------------------------------- |
| 1   | JWT/auth concepts & data model                     |
| 2   | Auth implementation (login, protected routes)      |
| 3   | Middleware patterns (logging, auth, validation)    |
| 4   | Security basics (validation, secure headers)       |
| 5   | Basic rate limiting (in-memory)                    |
| 6   | Integrate all into mini project                    |
| 7   | Weekly review & mini mock (auth + security Q&A)    |

---

### Day 1 – Auth Concepts & Data Model

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Read about:
    - Authentication vs authorization.
    - Session vs **JWT** vs opaque tokens.
    - Password hashing (`bcrypt` in Go).

- **Block 2 (Design – 60 min)**
  - Design user model: `ID`, `Email`, `PasswordHash`, `Role`.
  - Design auth endpoints:
    - `POST /auth/register`
    - `POST /auth/login`

- **Block 3 (DSA – 60 min)**
  - 2–3 linked list or stack/queue problems.

- **Block 4 (Review – 30 min)**
  - Summarize session vs JWT trade-offs.

#### 6-Hour Plan

- Add:
  - **Extra design (60 min)**:
    - Sketch token lifecycle.

---

### Day 2 – Implement Auth (Login, Protected Routes)

#### 4-Hour Plan

- **Block 1 (Implementation – 60–75 min)**
  - Implement:
    - `POST /auth/register` (hash password with `bcrypt`).
    - `POST /auth/login` (verify credentials, issue JWT using `golang-jwt/jwt`).

- **Block 2 (Protected Routes – 60 min)**
  - Implement middleware:
    - `AuthMiddleware` – validates JWT and attaches user to context.
  - Protect routes (e.g., `POST /items`).

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Note how to move user data to real DB later.

#### 6-Hour Plan

- Add:
  - **Auth tests (60 min)**.

---

### Day 3 – Middleware Patterns & Logging

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Request lifecycle.
    - Middleware for cross-cutting concerns.

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - Logging middleware (method, path, status, duration).
    - Attach `requestID` to context.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Draw request pipeline.

```text
Client -> Logger -> Auth -> Validation -> Handler -> Service -> ...
```

#### 6-Hour Plan

- Add:
  - **Enhanced logging (60 min)**:
    - Support log levels.

---

### Day 4 – Security Basics: Validation, Secure Headers

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Input validation and sanitization.
    - Common vulnerabilities (SQL injection, XSS).
    - Secure headers (CORS, CSP basics).

- **Block 2 (Hands-On – 60 min)**
  - Add:
    - Validation to JSON payloads.
    - Secure headers middleware.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Note 3 security steps taken and 3 to add later.

#### 6-Hour Plan

- Add:
  - **Negative tests (60 min)**.

---

### Day 5 – Basic Rate Limiting (In-Memory)

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Read:
    - Rate limiting strategies: fixed window, sliding window, token bucket.
  - Implement simplest approach (fixed window).

- **Block 2 (Hands-On – 60 min)**
  - Implement middleware:
    - Limit requests per IP to N per minute (in-memory map with `sync.Mutex`).

- **Block 3 (DSA – 60 min)**
  - Sliding window problems.

- **Block 4 (Review – 30 min)**
  - Note limitations of in-memory rate limiting.

#### 6-Hour Plan

- Add:
  - **Extension (60 min)**:
    - Different limits for different routes.

---

### Day 6 – Integrate Auth, Logging, Rate Limiting

#### 4-Hour Plan

- **Block 1 (Integration – 90 min)**
  - Integrate:
    - Auth, logging, validation, rate limiting.
  - Ensure middleware order is correct.

- **Block 2 (Manual Testing – 60 min)**
  - Use curl/Postman:
    - Test protected vs unprotected routes.
    - Trigger rate limit.

- **Block 3 (Review – 30–45 min)**
  - Document in README.

#### 6-Hour Plan

- Add:
  - **E2E tests (60 min)**.

---

### Day 7 – Weekly Review & Mini Mock (Auth + Security)

#### 4-Hour Plan

- **Block 1 (Review – 60–75 min)**
  - Revisit:
    - Auth implementation.
    - Logging and rate limiting.
  - Update skill gap template.

- **Block 2 (Mock Q&A – 60 min)**
  - Practice answering:
    - "How would you implement auth in a Go API?"
    - "How would you secure an HTTP endpoint?"
    - "What is rate limiting and why is it important?"

- **Block 3 (DSA – 45–60 min)**
  - 2–3 mixed problems.

#### 6-Hour Plan

- Add:
  - **Reflection (45–60 min)**:
    - What would you change for production?
