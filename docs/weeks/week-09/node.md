---
id: node
title: Node.js / TypeScript
sidebar_label: Node.js
sidebar_position: 1
---

### Weekly Goals

- **System Design**
  - Learn a structured approach to **system design interviews**.
  - Design **scalable REST APIs** for realistic services.
  - Understand **service boundaries**, API gateways, and basic load balancing concepts.
- **Backend Practice**
  - Map system designs back to your Node.js projects (from [projects.md](../../topic-banks/projects.md)).
- **DSA**
  - Maintain 2–3 problems/day (mixed).
- **Theory**
  - Tie HTTP, networking, and DB concepts into system design decisions.

Use with:
- [16-Week Roadmap](../../roadmap/roadmap-16-weeks.md)
- [Projects](../../topic-banks/projects.md)
- [Theory Round](../../topic-banks/theory-round.md)
- [Interview Prep Playbook](../../interview/interview-prep-playbook.md)

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|----------------------------------------------------|
| 1   | System design interview framework                  |
| 2   | Designing scalable REST APIs (generic patterns)    |
| 3   | API gateway, service boundaries, versioning        |
| 4   | Design: Note-taking / Task management backend      |
| 5   | Design: URL shortener (full system)                |
| 6   | Connect system design to existing project          |
| 7   | Weekly review & one full mock design               |

---

### Day 1 – System Design Interview Framework

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn a generic framework:
    - Clarify requirements (functional/non-functional).
    - Define APIs and core use cases.
    - High-level components and data flow.
    - Storage choices, caching, queues.
    - Scalability (replication, sharding, load balancing).
    - Reliability, observability, security.

- **Block 2 (Template Creation – 60 min)**
  - Create a **system design template** in a markdown file:
    - Sections: Requirements, API design, Data model, High-level design, Detailed components, Bottlenecks, Trade-offs.

- **Block 3 (DSA – 60 min)**
  - 2–3 mixed problems.

- **Block 4 (Review – 30 min)**
  - Add this template to your repo for reuse during practice.

#### 6-Hour Plan

- Add:
  - **Practice (60 min)**:
    - Use the template to sketch a rough design for a trivial service (e.g., feature flag service).

---

### Day 2 – Designing Scalable REST APIs (Patterns)

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Study patterns:
    - Resource naming (`/users`, `/users/{id}/orders`).
    - Pagination, filtering, sorting.
    - Idempotency (e.g., `PUT`, `DELETE`, idempotency keys).
    - Error handling and standard error formats.

- **Block 2 (Design Exercises – 60 min)**
  - Design APIs for:
    - User management.
    - Authentication session management.
  - Use your system design template’s **API section**.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems focusing on arrays/strings or hash maps.

- **Block 4 (Review – 30 min)**
  - Document your **API design guidelines** in a separate note.

#### 6-Hour Plan

- Add:
  - **Refinement (60 min)**:
    - Compare your API designs with well-known public APIs (conceptually).

---

### Day 3 – API Gateway, Service Boundaries, Versioning

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Learn:
    - Monolith vs microservices (high-level).
    - API gateway responsibilities.
    - Service boundaries: when to split services.
    - Versioning strategies (`/v1`, headers, backward compatibility).

- **Block 2 (Diagramming – 60 min)**
  - Draw ASCII diagrams:

```text
Client
  |
  v
API Gateway
  |       \
  v        v
User Service   Order Service   Notification Service
```

- **Block 3 (DSA – 60 min)**
  - 2–3 mixed problems.

- **Block 4 (Review – 30 min)**
  - Identify potential service boundaries in one of your projects (from [projects.md](../../topic-banks/projects.md)).

#### 6-Hour Plan

- Add:
  - **Service decomposition exercise (60 min)**:
    - For a chosen project (e.g., SaaS backend), write down proposed services and their responsibilities.

---

### Day 4 – Design: Note-Taking / Task Management Backend

#### 4-Hour Plan

- **Block 1 (Requirements – 45–60 min)**
  - Clarify:
    - Users, notes/tasks, tags, sharing (if any).
    - Non-functional: availability, consistency needs, scale assumptions.

- **Block 2 (Design – 90 min)**
  - Use your template to design:
    - APIs (CRUD, list, search).
    - Data model (MySQL or MongoDB).
    - High-level architecture (single service + DB + cache).

- **Block 3 (Review – 30–45 min)**
  - Identify:
    - Where you’d cache.
    - Where you’d introduce background jobs later (e.g., reminders).

#### 6-Hour Plan

- Add:
  - **Implementation mapping (60 min)**:
    - Sketch how to implement this design using your existing Node stack.

---

### Day 5 – Design: URL Shortener (Full System)

#### 4-Hour Plan

- **Block 1 (Requirements – 45–60 min)**
  - Functional:
    - Shorten long URLs.
    - Redirect short → long.
    - Track click counts.
  - Non-functional:
    - High read traffic.
    - Low latency redirects.

- **Block 2 (Design – 90 min)**
  - Cover:
    - API design (`POST /shorten`, `GET /:code`).
    - Data model (codes, long URLs, stats).
    - Components:
      - App servers.
      - DB (MySQL/Mongo).
      - Redis for caching.
      - Load balancer / API gateway.

- **Block 3 (Review – 30–45 min)**
  - Discuss:
    - How to generate codes (base62, uniqueness).
    - Where to use caching and why.

#### 6-Hour Plan

- Add:
  - **Scaling considerations (60 min)**:
    - Discuss sharding strategies for DB.
    - Consider read replicas.

---

### Day 6 – Connect System Design to Your Project

#### 4-Hour Plan

- **Block 1 (Mapping – 60–75 min)**
  - Pick one project from [projects.md](../../topic-banks/projects.md) (e.g., URL shortener or SaaS backend).
  - Map:
    - System design components → actual modules/services you’d implement.

- **Block 2 (Implementation Planning – 60 min)**
  - Create a **short implementation roadmap**:
    - Milestones for implementing key services and endpoints.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Update project README with high-level architecture diagram and notes.

#### 6-Hour Plan

- Add:
  - **Small code changes (60 min)**:
    - Adjust your current Node project structure slightly to better reflect the design.

---

### Day 7 – Weekly Review & One Full Mock Design

#### 4-Hour Plan

- **Block 1 (Review – 60–75 min)**
  - Revisit:
    - System design framework.
    - API design patterns.
    - Service boundaries examples.

- **Block 2 (Mock Design – 60–75 min)**
  - Time-box:
    - 45–50 min to design a system (e.g., note-taking app or URL shortener) using your template.
  - 15–20 min to review and refine.

- **Block 3 (DSA – 30–45 min)**
  - 1–2 problems (light).

#### 6-Hour Plan

- Add:
  - **Self-interview (45–60 min)**:
    - Verbally walk through your design as if presenting to an interviewer.


