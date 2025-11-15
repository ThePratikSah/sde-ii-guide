---
id: week-05
title: Week 05 – Node.js Advanced - Auth, Middleware, Logging, Security Basics
sidebar_label: Week 05
sidebar_position: 5
---

### Weekly Goals

- **Backend**
  - Implement **JWT-based auth** (or session-based) in your API.
  - Learn middleware patterns for **logging, auth, validation**.
  - Introduce **security basics**: input validation, basic rate limiting, secure headers.
- **DSA**
  - Continue with linked lists, queues/stacks; maintain 2–3 problems/day.
- **Theory**
  - Start reading on **process vs thread**, concurrency basics ([theory-round.md](../topic-banks/theory-round.md)).

Use with:
- [16-Week Roadmap](../roadmap/roadmap-16-weeks.md)
- [Projects](../topic-banks/projects.md) (extend your chosen API)
- [DSA Backend Plan](../topic-banks/dsa-backend-plan.md)

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|----------------------------------------------------|
| 1   | JWT/session auth concepts & data model             |
| 2   | Auth implementation (login, protected routes)      |
| 3   | Middleware patterns (logging, auth, validation)    |
| 4   | Security basics (validation, secure headers)       |
| 5   | Basic rate limiting (simple in-memory)             |
| 6   | Integrate all into mini project                    |
| 7   | Weekly review & mini mock (auth + security Q&A)    |

---

### Day 1 – Auth Concepts & Data Model

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Read about:
    - Difference between **authentication** and **authorization**.
    - Session vs **JWT** vs opaque tokens.
    - Basic password hashing (high-level, e.g., bcrypt).

- **Block 2 (Design – 60 min)**
  - For your mini API (e.g., URL shortener or task manager):
    - Design user model: `id`, `email`, `passwordHash`, `role`.
    - Design auth endpoints:
      - `POST /auth/register`
      - `POST /auth/login`

- **Block 3 (DSA – 60 min)**
  - 2–3 linked list or stack/queue problems.

- **Block 4 (Review – 30 min)**
  - Summarize trade-offs between session and JWT for your use case.

#### 6-Hour Plan

- Add:
  - **Extra design (60 min)**:
    - Sketch token life cycle (issue, verify, revoke).

---

### Day 2 – Implement Auth (Login, Protected Routes)

#### 4-Hour Plan

- **Block 1 (Implementation – 60–75 min)**
  - Implement:
    - `POST /auth/register` (store hashed password; for now can be in-memory or simple DB).
    - `POST /auth/login` (verify credentials, issue JWT or session token).

- **Block 2 (Protected Routes – 60 min)**
  - Implement middleware:
    - `authenticate` – validates token and attaches `user` to request.
  - Protect some routes (e.g., `POST /items`).

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (linked lists / arrays).

- **Block 4 (Review – 30 min)**
  - Note how you’ll later move user data to real DB (Phase 3).

#### 6-Hour Plan

- Add:
  - **Auth tests (60 min)**:
    - Write tests for register/login and one protected route.

---

### Day 3 – Middleware Patterns & Logging

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Request lifecycle in Express/Fastify.
    - Using middleware for cross-cutting concerns:
      - Logging, auth, validation, error handling.

- **Block 2 (Hands-On – 60 min)**
  - Implement:
    - Logging middleware that logs:
      - Method, path, status code, response time.
    - Attach a `requestId` to each request (for later logs).

- **Block 3 (DSA – 60 min)**
  - 2–3 problems focusing on stacks/queues or arrays.

- **Block 4 (Review – 30 min)**
  - Draw your request pipeline:

```text
Client -> Logger -> Auth -> Validation -> Controller -> Service -> ...
```

#### 6-Hour Plan

- Add:
  - **Enhanced logging (60 min)**:
    - Support different log levels (info, warn, error).

---

### Day 4 – Security Basics: Validation, Secure Headers

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn basics of:
    - Input validation and sanitization.
    - Common vulnerabilities (SQL injection, basic XSS ideas).
    - Secure headers (e.g., via `helmet` in Express).

- **Block 2 (Hands-On – 60 min)**
  - Add:
    - Validation to incoming JSON payloads.
    - Secure headers middleware.

- **Block 3 (DSA – 60 min)**
  - 2–3 mixed problems.

- **Block 4 (Review – 30 min)**
  - Note 3 security steps you’ve taken and 3 you’ll add later (e.g., rate limiting, CSRF).

#### 6-Hour Plan

- Add:
  - **Negative tests (60 min)**:
    - Ensure invalid inputs return correct error codes and messages.

---

### Day 5 – Basic Rate Limiting (In-Memory)

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Read:
    - Basic **rate limiting strategies**: fixed window, sliding window, token bucket.
  - For now, implement simplest approach (fixed window counter).

- **Block 2 (Hands-On – 60 min)**
  - Implement middleware:
    - Limit requests per IP or user to N per minute (in-memory map).

- **Block 3 (DSA – 60 min)**
  - Sliding window problems (ties nicely with rate limiting).

- **Block 4 (Review – 30 min)**
  - Note limitations of in-memory rate limiting (will revisit with Redis in Phase 4).

#### 6-Hour Plan

- Add:
  - **Extension (60 min)**:
    - Add different limits for different routes (e.g., login vs read-only).

---

### Day 6 – Integrate Auth, Logging, Rate Limiting into Project

#### 4-Hour Plan

- **Block 1 (Integration – 90 min)**
  - Integrate:
    - Auth.
    - Logging.
    - Validation.
    - Rate limiting.
  - Ensure order of middleware is sensible.

- **Block 2 (Manual Testing – 60 min)**
  - Use a REST client (e.g., curl/Postman) to:
    - Test protected vs unprotected routes.
    - Trigger rate limit.

- **Block 3 (Review – 30–45 min)**
  - Document in your project README:
    - Auth flow.
    - Rate limiting behavior.

#### 6-Hour Plan

- Add:
  - **More tests (60 min)**:
    - End-to-end tests for a couple of key flows (e.g., register → login → access protected route).

---

### Day 7 – Weekly Review & Mini Mock (Auth + Security)

#### 4-Hour Plan

- **Block 1 (Review – 60–75 min)**
  - Revisit:
    - Your auth implementation.
    - Logging and rate limiting.
  - Update [skill gap template](../meta/skill-gap-template.md) (Node fundamentals, async, security basics).

- **Block 2 (Mock Q&A – 60 min)**
  - Practice answering:
    - "How would you implement auth in a Node.js API?"
    - "How would you secure an HTTP endpoint?"
    - "What is rate limiting and why is it important?"

- **Block 3 (DSA – 45–60 min)**
  - 2–3 mixed problems, focusing on your weakest topic from the week.

#### 6-Hour Plan

- Add:
  - **Reflection (45–60 min)**:
    - Write 1–2 paragraphs on what you’d change if you had to build this API for production.


