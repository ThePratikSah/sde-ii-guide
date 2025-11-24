---
id: go
title: Go Track
sidebar_label: Go
sidebar_position: 2
---

### Weekly Goals

- **Theory**
  - Revise:
    - OS fundamentals.
    - Networking (TCP/UDP, HTTP, DNS, proxies, TLS).
    - DBMS, ACID, CAP, consistency models.
- **Infra / AWS / DevOps**
  - Understand basics of:
    - AWS (EC2, S3, RDS, SQS, CloudWatch).
    - CI/CD and monitoring.
- **Revision**
  - Revisit:
    - Weakest DSA topics.
    - Key system designs.
    - Machine coding patterns.
- **Interview Polishing**
  - Follow interview prep playbook for mocks and revision.

Use together with:
- [Theory Round](../topic-banks/theory-round.md)
- [Interview Prep Playbook](../interview/interview-prep-playbook.md)
- [Schedules & Metrics](../roadmap/schedules-and-metrics.md)
- [Machine Coding Bank](../topic-banks/machine-coding-bank.md)
- [DSA Backend Plan](../topic-banks/dsa-backend-plan.md)

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|--------------------------------------------------- |
| 1   | OS & process/thread basics                         |
| 2   | Networking: TCP/UDP, HTTP, DNS, proxies, TLS       |
| 3   | DBMS: indexing, normalization, ACID, isolation     |
| 4   | CAP, consistency models, ACID vs BASE              |
| 5   | AWS basics: EC2, S3, RDS, SQS, CloudWatch          |
| 6   | CI/CD, monitoring, logs, profiling                 |
| 7   | Full revision & mock interview day                 |

---

### Day 1 – OS & Process/Thread Fundamentals

#### 4-Hour Plan

- **Block 1 (Theory – 60–75 min)**
  - Processes vs threads, context switching, scheduling, memory.

- **Block 2 (Application – 60 min)**
  - Reflect on Go's goroutines vs OS threads.

- **Block 3 (DSA/Light Coding – 45–60 min)**
  - 1–2 problems in weakest area.

- **Block 4 (Review – 30 min)**
  - Write explanation of processes vs threads.

#### 6-Hour Plan

- Add:
  - **Mock OS Q&A (45–60 min)**: Prepare answers for 5–7 questions.

---

### Day 2 – Networking: TCP/UDP, HTTP, DNS, Proxies, TLS

#### 4-Hour Plan

- **Block 1 (Theory – 60–75 min)**
  - TCP vs UDP, HTTP, DNS, reverse proxies, TLS/HTTPS.

- **Block 2 (Application – 60 min)**
  - Map to Go APIs and service architecture.

- **Block 3 (DSA/Light Coding – 45–60 min)**
  - 1–2 problems.

- **Block 4 (Review – 30 min)**
  - Create ASCII diagram: client → DNS → LB → API service.

#### 6-Hour Plan

- Add:
  - **Networking Q&A (45–60 min)**.

---

### Day 3 – DBMS: Indexing, Normalization, ACID, Isolation

#### 4-Hour Plan

- **Block 1 (Theory – 60–75 min)**
  - Indexing, normalization, ACID, isolation levels.

- **Block 2 (Application – 60 min)**
  - Map to projects: where indexes are used, which operations need transactions.

- **Block 3 (DSA/Light Coding – 45–60 min)**
  - 1–2 problems.

- **Block 4 (Review – 30 min)**
  - Write concise ACID explanation with example transaction.

#### 6-Hour Plan

- Add:
  - **DBMS Q&A (45–60 min)**: 5–7 questions.

---

### Day 4 – CAP, Consistency Models, ACID vs BASE

#### 4-Hour Plan

- **Block 1 (Theory – 60–75 min)**
  - CAP theorem, strong vs eventual consistency, BASE vs ACID.

- **Block 2 (Application – 60 min)**
  - Apply to: notification system, URL shortener, Uber/Swiggy design.

- **Block 3 (DSA/Light Coding – 45–60 min)**
  - 1–2 problems.

- **Block 4 (Review – 30 min)**
  - Write 1–2 paragraphs: where to accept eventual consistency.

#### 6-Hour Plan

- Add:
  - **System design Q&A (45–60 min)**: CAP/consistency questions.

---

### Day 5 – AWS Basics: EC2, S3, RDS, SQS, CloudWatch

#### 4-Hour Plan

- **Block 1 (AWS Concepts – 60–75 min)**
  - Learn: EC2, S3, RDS, SQS, CloudWatch.

- **Block 2 (Architecture Mapping – 60 min)**
  - Design deployment architecture for one project.

- **Block 3 (Review – 45–60 min)**
  - Draw ASCII cloud architecture diagram.

#### 6-Hour Plan

- Add:
  - **Optional hands-on (45–60 min)**: Explore AWS console/CLI.

---

### Day 6 – CI/CD, Monitoring, Logs, Profiling

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - CI/CD: build, test, deploy stages.
  - Monitoring: metrics, logs.

- **Block 2 (Application – 60 min)**
  - Design basic CI pipeline for Go project.
  - Logging strategy.

- **Block 3 (Light Coding/DSA – 45–60 min)**
  - 1–2 problems or refactor project to improve logging.

- **Block 4 (Review – 30 min)**
  - Summarize debugging production incident step-by-step.

#### 6-Hour Plan

- Add:
  - **Mock "incident response" (45–60 min)**: Write outage scenario.

---

### Day 7 – Full Revision & Mock Interview Day

#### 4-Hour Plan

- **Block 1 (Mock DSA – 60–75 min)**
  - 2 mixed problems.

- **Block 2 (Mock System Design – 60–75 min)**
  - One full design using template.

- **Block 3 (Mock Behavioral + Review – 45–60 min)**
  - Practice behavioral questions.
  - Final review of weak notes.

#### 6-Hour Plan

- Add:
  - **Extra practice (45–60 min)**: 1 machine coding problem (design + partial code).

---

### End-of-Roadmap Checklist

- **Knowledge**
  - [ ] Go fundamentals and concurrency patterns.
  - [ ] Databases (MongoDB, PostgreSQL) and Redis/background jobs.
  - [ ] System design for 8–10 key systems.
  - [ ] OS, networking, DBMS, CAP/ACID/BASE basics.
- **Practice**
  - [ ] 80–150 DSA problems across core topics.
  - [ ] 8–15 machine coding problems implemented.
  - [ ] 8–12 system design sessions practiced.
- **Output**
  - [ ] 1–3 production-level backend projects with README and diagrams.
  - [ ] Notes & cheat sheets for patterns, theory, and common interview questions.
