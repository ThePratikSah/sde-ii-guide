---
id: node
title: Node.js / TypeScript
sidebar_label: Node.js
sidebar_position: 1
---

### Weekly Goals

- **System Design**
  - Design an **Uber/Swiggy-like** system at a high level.
  - Design a **notification system** with multiple channels and retries.
- **Backend Practice**
  - Tie designs back to your [projects.md](../../topic-banks/projects.md) notification and SaaS projects.
- **DSA**
  - Continue mixed problems (graphs become more relevant here).
- **Theory**
  - Apply CAP, consistency, and eventual consistency ideas to these systems.

Use with:
- [16-Week Roadmap](../../roadmap/roadmap-16-weeks.md)
- [Projects](../../topic-banks/projects.md)
- [Theory Round](../../topic-banks/theory-round.md)

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|----------------------------------------------------|
| 1   | Requirements & basics for Uber/Swiggy-like system  |
| 2   | Uber/Swiggy – location, matching, pricing          |
| 3   | Notification system – requirements & channels      |
| 4   | Notification system – scaling, retries, DLQ        |
| 5   | System design trade-offs & consistency discussion  |
| 6   | Map designs to project implementations             |
| 7   | Weekly review & timed design mock                  |

---

### Day 1 – Uber/Swiggy Requirements & Basics

#### 4-Hour Plan

- **Block 1 (Requirements – 60–75 min)**
  - Clarify:
    - Actors: rider/customer, driver/partner, admin.
    - Core flows: request ride/order, assign driver, start/complete, payment.
    - Non-functional:
      - High availability.
      - Low latency matching.
      - Location tracking.

- **Block 2 (High-Level Design – 60 min)**
  - Identify services:
    - User service, driver service.
    - Trip/Order service.
    - Matching service.
    - Location service.
    - Notification service.

- **Block 3 (DSA – 60 min)**
  - 2–3 graph/shortest path problems (conceptual tie to routing).

- **Block 4 (Review – 30 min)**
  - Document high-level component list and responsibilities.

#### 6-Hour Plan

- Add:
  - **Data model brainstorming (60 min)**:
    - Sketch key tables/collections for users, drivers, trips/orders.

---

### Day 2 – Uber/Swiggy: Location, Matching, Pricing

#### 4-Hour Plan

- **Block 1 (Design Deep Dive – 60–75 min)**
  - Focus on:
    - How to store and query **driver locations**.
    - Simple matching algorithm (nearest available driver).
    - Basic pricing model (distance, time, surge).

- **Block 2 (Architecture – 60 min)**
  - Draw data flow:

```text
Rider App -> API Gateway -> Trip Service -> Matching Service -> Driver App
                                            |
                                            v
                                       Location Service (Redis/DB)
```

- **Block 3 (Trade-offs – 60 min)**
  - Discuss:
    - CAP trade-offs for location data (can be eventually consistent).
    - Caching and read-heavy paths.

- **Block 4 (Review – 30 min)**
  - Write a short summary of your matching approach and its limitations.

#### 6-Hour Plan

- Add:
  - **Scaling considerations (60 min)**:
    - Partitioning strategies for drivers by region.

---

### Day 3 – Notification System: Requirements & Channels

#### 4-Hour Plan

- **Block 1 (Requirements – 60–75 min)**
  - Functional:
    - Trigger notifications for events (order placed, payment success).
    - Channels: email, SMS, push, in-app.
  - Non-functional:
    - Reliability (no duplicate sends for same event).
    - Retry for failures.

- **Block 2 (Design – 60 min)**
  - Components:
    - Ingestion API.
    - Queue for pending notifications.
    - Channel-specific workers.
    - Logging & status tracking.

- **Block 3 (DSA – 60 min)**
  - 2–3 mixed problems.

- **Block 4 (Review – 30 min)**
  - Draw an ASCII diagram of the notification pipeline.

```text
Producer Service -> Notification API -> Queue -> Channel Workers -> Providers
                                                        |
                                                        v
                                                   Notification DB
```

#### 6-Hour Plan

- Add:
  - **Payload modeling (60 min)**:
    - Draft TypeScript types for notification payloads and templates.

---

### Day 4 – Notification System: Scaling, Retries, DLQ

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - Explore:
    - Retries with exponential backoff.
    - Dead-letter queues (DLQ) for permanently failed messages.
    - Idempotency (to avoid duplicate sends).

- **Block 2 (Design Deep Dive – 60 min)**
  - Extend your design to:
    - Include DLQ.
    - Track notification status (PENDING, SENT, FAILED).

- **Block 3 (DSA – 60 min)**
  - 2–3 problems (queues/graphs).

- **Block 4 (Review – 30 min)**
  - Document how you’d monitor and alert on notification failures.

#### 6-Hour Plan

- Add:
  - **LLD sketch (60 min)**:
    - Outline classes/interfaces (NotificationService, Channel, Template, etc.).

---

### Day 5 – System Design Trade-Offs & Consistency Discussion

#### 4-Hour Plan

- **Block 1 (Theory Integration – 60–75 min)**
  - From [theory-round.md](../../topic-banks/theory-round.md):
    - Revisit CAP, ACID vs BASE, consistency models.
  - Apply to:
    - Uber/Swiggy (location data, trips).
    - Notification system (status tracking).

- **Block 2 (Trade-off Writing – 60 min)**
  - For each system:
    - Write bullet lists for:
      - Consistency-critical components.
      - Availability-critical components.

- **Block 3 (DSA – 60 min)**
  - 2–3 mixed problems.

- **Block 4 (Review – 30 min)**
  - Summarize 2–3 key trade-offs you’d highlight in an interview.

#### 6-Hour Plan

- Add:
  - **Practice explanation (60 min)**:
    - Explain CAP trade-offs in Uber/Swiggy to an imaginary interviewer.

---

### Day 6 – Map Designs to Project Implementations

#### 4-Hour Plan

- **Block 1 (Mapping – 60–75 min)**
  - For one design (e.g., notification service), map:
    - Components → actual modules in Node/TS project.

- **Block 2 (Implementation Planning – 60 min)**
  - Create or refine:
    - Backlog of tasks to bring your project closer to designed architecture.

- **Block 3 (DSA – 60 min)**
  - 2–3 problems.

- **Block 4 (Review – 30 min)**
  - Update [projects.md](../../topic-banks/projects.md) notes with these mapping insights.

#### 6-Hour Plan

- Add:
  - **Small implementation (60 min)**:
    - Implement a small new feature in your project that aligns with the design (e.g., status tracking field).

---

### Day 7 – Weekly Review & Timed Design Mock

#### 4-Hour Plan

- **Block 1 (Review – 60–75 min)**
  - Revisit your Uber/Swiggy and notification designs.
  - Update [skill gap template](../../getting-started/skill-gap-template.md) (system design intuition).

- **Block 2 (Timed Design Mock – 60–75 min)**
  - Time-box:
    - 45–50 min to design either Uber/Swiggy or notification system from scratch using your template.

- **Block 3 (DSA – 30–45 min)**
  - 1–2 light problems.

#### 6-Hour Plan

- Add:
  - **Self-critique (45–60 min)**:
    - Compare your mock design to notes and identify 3 improvements (e.g., more focus on failure modes).


