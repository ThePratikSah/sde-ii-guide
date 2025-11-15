## Daily & Weekly Schedules, Milestones, and Metrics



> **Goal of this file**: Give you **structured daily and weekly routines** (4-hour and 6-hour variants) plus **measurable success metrics**.

---

### 1. Daily Study Templates (4-Hour and 6-Hour)

#### 4-Hour Day Template

- **Block 1 (60–75 min) – Core Topic of the Phase**
  - Example: JS/TS in Phase 1, Node in Phase 2, DBs in Phase 3, etc.
  - Mix reading, coding snippets, and 1–2 small exercises.

- **Block 2 (60–75 min) – DSA / Coding**
  - 2–3 medium problems on the week’s focus topic.
  - Write down patterns and common pitfalls.

- **Block 3 (60–75 min) – Applied Backend**
  - Implement or extend features in **projects** (see `projects.md`).
  - Or practice **machine coding** in later phases.

- **Block 4 (30–45 min) – Review & Theory**
  - Quick review of:
    - Notes from the day.
    - Theory topics (OS, networking, DBMS, CAP).
  - Update progress tracker.

#### 6-Hour Day Template

- **Block 1 (90 min) – Deep Dive on Core Topic**
  - More time for hands-on coding and small experiments.

- **Block 2 (90 min) – DSA / Coding**
  - 3–4 problems, including at least one **timed** problem.

- **Block 3 (90 min) – Project / Machine Coding**
  - Work on a project feature or complete a small machine coding task.

- **Block 4 (60–90 min) – System Design / Theory / Review**
  - Early phases: more theory/system design reading + diagram practice.
  - Later phases: full **system design mocks** once or twice a week.

---

### 2. Weekly Checklists by Phase

#### Phase 1 (Weeks 1–3): JS/TS

- **Checklist**
  - **Language**
    - [ ] I can explain **closures** and draw scope chains.
    - [ ] I understand **prototypes** and how `new` works.
    - [ ] I can explain **event loop, microtasks, macrotasks**.
  - **TypeScript**
    - [ ] I can use **generics** in functions and classes.
    - [ ] I can apply common **utility types** (`Partial`, `Pick`, `Omit`, etc.).
  - **Output**
    - [ ] 1–2 small Node/TS utilities or scripts committed to a repo.

#### Phase 2 (Weeks 4–5): Node.js Backend

- **Checklist**
  - [ ] Built a small REST API with at least **3–4 routes**.
  - [ ] Added **request validation**, **error handling**, and **logging**.
  - [ ] Implemented **auth** (JWT/session).
  - [ ] Wrote **unit tests** for at least 1–2 services/controllers.

#### Phase 3 (Weeks 6–7): Databases

- **Checklist**
  - [ ] Designed schemas for at least **2 different domains**.
  - [ ] Used **indexes** and inspected query performance.
  - [ ] Implemented **transactions** in MySQL or MongoDB.

#### Phase 4 (Week 8): Redis + Queues

- **Checklist**
  - [ ] Implemented **Redis caching** in one project.
  - [ ] Built a simple **rate limiter** using Redis.
  - [ ] Created a **background job** with BullMQ or similar.

#### Phase 5 (Weeks 9–11): System Design

- **Checklist**
  - [ ] Designed at least **3 systems** end-to-end (API, DB, cache, queues, scaling).
  - [ ] Drew component diagrams and data flow diagrams.
  - [ ] Practiced **trade-off discussions** (e.g., SQL vs NoSQL, cache strategies).

#### Phase 6–8 (Weeks 12–16): Machine Coding, DSA, Theory, Polishing

- **Checklist**
  - [ ] Completed **5–8 machine coding problems** end-to-end.
  - [ ] Solved **80–120 DSA problems** across core topics.
  - [ ] Completed at least **4 system design mocks**.
  - [ ] Finished 1–2 **portfolio projects** with READMEs.

---

### 3. Milestones and Metrics

- **Weekly Milestones**
  - **Knowledge**
    - List 3–5 **new concepts** you truly understood.
  - **Practice**
    - Count of DSA problems solved (easy, medium).
    - Number of project features completed.
  - **Output**
    - Commits to GitHub.
    - Notes and diagrams written.

- **Quantitative Metrics (Targets over 16 Weeks)**

| Area                 | Metric                         | Target Range          |
|----------------------|--------------------------------|-----------------------|
| DSA                  | Total problems solved          | 80–150                |
| Machine Coding       | Complete problems              | 8–15                  |
| System Design        | Full designs practiced         | 8–12                  |
| Projects             | Production-style backends      | 1–3                   |
| Theory               | Focused revision sessions      | 8–12                  |

Use these as **baselines**; adjust based on your background and available time.

---

### 4. Progress Tracking

- Maintain a simple **spreadsheet or markdown log**:
  - **Columns**:
    - Date, Hours studied, DSA problems, Backend topics, Projects, Notes.
  - Fill it briefly at the end of each day (2–3 minutes).

- Example row:

```text
2025-01-10 | 4h | 3 DSA (arrays) | TS generics, Node Express middleware | URL shortener: shorten API | Clarify event loop again
```

This file should be used together with each `week-XX.md` to plan **exact tasks per day**.


 | [Next guide →](../weeks/week-01.md)