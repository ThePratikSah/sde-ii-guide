## Week 16 – Theory, Infra/AWS, Revision, and Interview Polishing

[← Back to main guide](README.md)

<!-- Week 16 ties everything together: theory rounds, infra/AWS, revisiting weak spots, and structured interview prep. -->

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
  - Follow `interview-prep-playbook.md` for mocks and revision.

Use with:
- `theory-round.md`
- `interview-prep-playbook.md`
- `schedules-and-metrics.md`
- `machine-coding-bank.md`
- `dsa-backend-plan.md`

---

### Weekly Overview Table

| Day | Focus                                              |
|-----|----------------------------------------------------|
| 1   | OS & process/thread basics                         |
| 2   | Networking: TCP/UDP, HTTP, DNS, proxies, TLS      |
| 3   | DBMS: indexing, normalization, ACID, isolation     |
| 4   | CAP, consistency models, ACID vs BASE              |
| 5   | AWS basics: EC2, S3, RDS, SQS, CloudWatch          |
| 6   | CI/CD, monitoring, logs, profiling                 |
| 7   | Full revision & mock interview day                 |

---

### Day 1 – OS & Process/Thread Fundamentals

#### 4-Hour Plan

- **Block 1 (Theory – 60–75 min)**
  - From `theory-round.md`:
    - Processes vs threads.
    - Context switching.
    - Scheduling basics.
    - Memory (stack vs heap, virtual memory).

- **Block 2 (Application – 60 min)**
  - Reflect:
    - How Node’s single-threaded model interacts with OS threads (libuv).
    - How concurrency affects backend performance.

- **Block 3 (DSA/Light Coding – 45–60 min)**
  - 1–2 problems in your weakest area to keep sharp.

- **Block 4 (Review – 30 min)**
  - Write a short explanation of processes vs threads as if answering an interview question.

#### 6-Hour Plan

- Add:
  - **Mock OS Q&A (45–60 min)**:
    - Prepare answers for 5–7 sample OS questions.

---

### Day 2 – Networking: TCP/UDP, HTTP, DNS, Proxies, TLS

#### 4-Hour Plan

- **Block 1 (Theory – 60–75 min)**
  - From `theory-round.md`:
    - TCP vs UDP.
    - HTTP basics.
    - DNS resolution.
    - Reverse proxies, load balancers.
    - TLS/HTTPS basics.

- **Block 2 (Application – 60 min)**
  - Map concepts to:
    - Your Node APIs.
    - How clients reach your services through DNS and load balancers.

- **Block 3 (DSA/Light Coding – 45–60 min)**
  - 1–2 problems, focusing on quick recall.

- **Block 4 (Review – 30 min)**
  - Create a simple ASCII diagram of client → DNS → LB → API service.

#### 6-Hour Plan

- Add:
  - **Networking Q&A (45–60 min)**:
    - Prepare clear answers to typical networking questions.

---

### Day 3 – DBMS: Indexing, Normalization, ACID, Isolation

#### 4-Hour Plan

- **Block 1 (Theory – 60–75 min)**
  - Revisit from `theory-round.md`:
    - Indexing concepts.
    - Normalization (1NF–3NF).
    - ACID properties.
    - Isolation levels & anomalies.

- **Block 2 (Application – 60 min)**
  - Map to your projects:
    - Where you used indexes (or would use them).
    - Which operations need transactions.

- **Block 3 (DSA/Light Coding – 45–60 min)**
  - 1–2 problems.

- **Block 4 (Review – 30 min)**
  - Write a concise explanation of ACID and an example transaction.

#### 6-Hour Plan

- Add:
  - **DBMS Q&A (45–60 min)**:
    - Prepare answers for 5–7 common DBMS interview questions.

---

### Day 4 – CAP, Consistency Models, ACID vs BASE

#### 4-Hour Plan

- **Block 1 (Theory – 60–75 min)**
  - From `theory-round.md`:
    - CAP theorem.
    - Strong vs eventual consistency.
    - BASE vs ACID.

- **Block 2 (Application – 60 min)**
  - Apply to:
    - Notification system.
    - URL shortener.
    - Uber/Swiggy-style design.

- **Block 3 (DSA/Light Coding – 45–60 min)**
  - 1–2 problems or revisit a tricky one you solved before.

- **Block 4 (Review – 30 min)**
  - Write 1–2 paragraphs: where you’d accept eventual consistency in your systems.

#### 6-Hour Plan

- Add:
  - **System design Q&A (45–60 min)**:
    - Practice answering CAP/consistency questions in the context of a real system.

---

### Day 5 – AWS Basics: EC2, S3, RDS, SQS, CloudWatch

#### 4-Hour Plan

- **Block 1 (AWS Concepts – 60–75 min)**
  - Learn:
    - EC2 (compute).
    - S3 (object storage).
    - RDS (managed relational DB).
    - SQS (queue).
    - CloudWatch (metrics/logs).

- **Block 2 (Architecture Mapping – 60 min)**
  - Pick one project:
    - Design a deployment architecture:
      - EC2 for app.
      - RDS for DB.
      - S3 for file storage.
      - SQS for async tasks.

- **Block 3 (Review – 45–60 min)**
  - Draw an ASCII cloud architecture diagram (high-level).

#### 6-Hour Plan

- Add:
  - **Optional hands-on (45–60 min)**:
    - If you have an AWS account, quickly explore console/CLI (read-only).

---

### Day 6 – CI/CD, Monitoring, Logs, Profiling

#### 4-Hour Plan

- **Block 1 (Concepts – 60–75 min)**
  - CI/CD:
    - Build, test, deploy stages.
    - Example: GitHub Actions pipeline for Node.
  - Monitoring:
    - Metrics (latency, error rate).
    - Logs (structured logging).

- **Block 2 (Application – 60 min)**
  - Design:
    - A basic CI pipeline for your Node project.
    - A logging strategy (levels, correlation IDs).

- **Block 3 (Light Coding/DSA – 45–60 min)**
  - 1–2 problems or small refactor in your project to improve logging.

- **Block 4 (Review – 30 min)**
  - Summarize how you’d debug a production incident step-by-step.

#### 6-Hour Plan

- Add:
  - **Mock “incident response” (45–60 min)**:
    - Write a scenario of an outage and how you’d investigate it.

---

### Day 7 – Full Revision & Mock Interview Day

#### 4-Hour Plan

- **Block 1 (Mock DSA – 60–75 min)**
  - 2 mixed problems (arrays/graphs/trees).

- **Block 2 (Mock System Design – 60–75 min)**
  - One full design (e.g., notification service or URL shortener) using your template.

- **Block 3 (Mock Behavioral + Review – 45–60 min)**
  - Use `interview-prep-playbook.md`:
    - Practice behavioral questions (ownership, failures, conflict).
  - Final review of weak notes.

#### 6-Hour Plan

- Add:
  - **Extra practice (45–60 min)**:
    - Quick run-through of 1 machine coding problem (design + partial code) to refresh patterns.

---

### End-of-Roadmap Checklist

- **Knowledge**
  - [ ] JS/TS fundamentals and Node internals.
  - [ ] Databases (MongoDB, MySQL) and Redis/queues.
  - [ ] System design for 8–10 key systems.
  - [ ] OS, networking, DBMS, CAP/ACID/BASE basics.
- **Practice**
  - [ ] 80–150 DSA problems across core topics.
  - [ ] 8–15 machine coding problems implemented.
  - [ ] 8–12 system design sessions practiced.
- **Output**
  - [ ] 1–3 production-level backend projects with README and diagrams.
  - [ ] Notes & cheat sheets for patterns, theory, and common interview questions.


