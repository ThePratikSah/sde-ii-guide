---
id: interview-prep-playbook
title: Interview Preparation Playbook – SDE-II Backend
sidebar_position: 1
---



> **Goal of this file**: Give you a **repeatable process** for mock interviews, revision, and polishing your performance as an SDE-II backend candidate.

---

### 1. Mock Interview Structure

- **Recommended Weekly Routine (Final 4–6 Weeks)**
  - **2× Coding + DSA sessions** (60 min each)
  - **2× Machine Coding / LLD sessions** (90–120 min each)
  - **2× System Design sessions** (60–75 min each)
  - **1× Behavioral / Resume walkthrough** (45–60 min)

- **Coding + DSA Mock (60 min)**
  - 5–10 min: clarify problem, discuss examples.
  - 30–40 min: implement solution.
  - 5–10 min: test and optimize.
  - 5–10 min: complexity analysis and discussion.

- **Machine Coding / LLD Mock (90–120 min)**
  - 10–15 min: clarify requirements, identify constraints.
  - 15–20 min: design APIs, classes, DB schema.
  - 45–60 min: implement core flows in Node.js/TypeScript.
  - 10–15 min: tests & edge cases, extensions.

- **System Design Mock (60–75 min)**
  - 5–10 min: clarify requirements, define scope.
  - 10–15 min: high-level component diagram.
  - 15–20 min: deep dive on 2–3 critical components (DB, cache, queues).
  - 10–15 min: bottlenecks, scaling strategies, trade-offs.
  - 5–10 min: recap and Q&A.

---

### 2. 7-Day Final Revision Plan (Before Interviews)

> Assume you have already completed most of the 16-week roadmap; this plan is for **tight revision**.

- **Day 1 – JS/TS + Node Foundations**
  - **1–2 hours**: Review JS/TS notes (closures, prototypes, async, TS advanced types).
  - **1–2 hours**: Review Node internals, middleware, error handling, logging examples.
  - **Mock**: 1x coding round (arrays/strings + hash maps).

- **Day 2 – Databases & Caching**
  - **1–2 hours**: Review MongoDB/MySQL indexing, normalization, transactions.
  - **1–2 hours**: Redis basics, caching strategies, rate limiting.
  - **Mock**: Design + sketch a simple data model for a notification or chat service.

- **Day 3 – System Design (APIs + Service Design)**
  - **2–3 hours**: Walk through at least **2 design problems**:
    - e.g., Notification system, Rate limiter service.
  - Focus on:
    - API surface.
    - Storage choices.
    - Caching and queues.

- **Day 4 – Machine Coding**
  - **3–4 hours**: Do **1–2 full machine coding problems** from `machine-coding-bank.md`.
  - Time-box:
    - 15 min design
    - 60–75 min implementation
    - 15–20 min tests + refactor

- **Day 5 – DSA & Theory**
  - **2 hours**: 4–6 mixed DSA problems (arrays/strings/trees/graphs).
  - **1–2 hours**: Review `theory-round.md` (OS, networking, DBMS, CAP/ACID/BASE).

- **Day 6 – System Design + Behavioral**
  - **2 hours**: 1–2 system design mocks (Uber-like + file storage service).
  - **1 hour**: Behavioral prep (see below).

- **Day 7 – Light Review & Rest**
  - Skim notes, pattern cheat sheets, design diagrams.
  - No heavy new practice; aim to be fresh.

---

### 3. 1-Month Polishing Plan

> Follow after completing most of the core roadmap; this is for **converting knowledge to performance**.

- **Week 1**
  - Focus on **weakest coding areas** (from your notes).
  - 3–4 DSA sessions + 1 machine coding session + 1 small system design session.

- **Week 2**
  - Focus on **system design**:
    - 3 system design sessions.
    - 1–2 machine coding sessions.
    - 2–3 DSA sessions.

- **Week 3**
  - Mixed practice:
    - 2 DSA, 2 system design, 2 machine coding, 1 theory/behavioral session.
  - Start **timed mocks** (as if real interviews).

- **Week 4**
  - **Full interview simulations**:
    - 2× DSA + 2× System design + 2× Machine coding + 1× Behavioral.
  - Focus on:
    - Clear communication.
    - Not over-engineering.
    - Finishing within time.

---

### 4. Common Mistakes Candidates Make

- **Coding**
  - Jumping into code without **clarifying the problem**.
  - Not discussing **time/space complexity**.
  - Poor naming, no modularization (everything in `main` or one function).

- **Machine Coding**
  - Over-engineering: building full frameworks instead of solving the core problem.
  - Ignoring **edge cases** and **error handling** (invalid input, missing data).
  - Not thinking about **extensibility** (adding a new vehicle type, new notification channel).

- **System Design**
  - Listing buzzwords (Kafka, Redis, Kubernetes) without explaining **why**.
  - Diving into database schema too early without defining **APIs and flows**.
  - Ignoring **bottlenecks**, **back-of-the-envelope estimates**, and **failure modes**.

- **Behavioral**
  - Giving generic answers without **specific examples**.
  - Blaming others instead of owning mistakes and learnings.
  - Not tying experiences back to **impact** (metrics, performance, reliability).

---

### 5. What Interviewers Expect from SDE-II

- **Technical**
  - Solid fundamentals, not necessarily perfection in DSA.
  - Clear thinking, trade-off awareness.
  - Real-world understanding of **production issues** (timeouts, retries, failures).

- **Ownership**
  - Evidence that you **own features/services**, not just tasks.
  - You can **drive a project** from requirements to production.

- **Communication**
  - You explain your thought process.
  - You listen to hints and adapt.
  - You can say "I don’t know" and then **reason logically** from first principles.

Use this playbook as a **checklist** in the final 4–6 weeks; combine it with the day-wise and week-wise plans.


