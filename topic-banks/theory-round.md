## Theory Round Preparation – OS, Networking, DBMS, CAP/ACID/BASE

[← Back to main guide](README.md)

> **Goal of this file**: Provide a **concise but deep** checklist of theory topics and **sample questions** tailored for backend SDE-II roles.

---

### 1. Operating System Fundamentals

- **Key Concepts**
  - **Processes vs Threads**
    - Process: independent execution with its own address space.
    - Thread: lightweight unit of execution within a process, shared memory.
  - **Context Switching**
    - When and why it happens; cost of switching.
  - **Scheduling**
    - Preemptive vs cooperative multitasking.
    - Common algorithms: Round Robin, Priority scheduling.
  - **Memory Management**
    - Stack vs heap, virtual memory, paging, segmentation (high-level).

- **Sample Questions**
  - **Q1**: What’s the difference between a process and a thread? Why are threads useful for servers?
  - **Q2**: What is context switching? Why is it not free?
  - **Q3**: Explain how virtual memory works at a high level.

---

### 2. Networking Fundamentals

- **Key Concepts**
  - **OSI vs TCP/IP Model** (high-level)
  - **TCP vs UDP**
    - TCP: reliable, ordered, connection-oriented.
    - UDP: connectionless, best-effort, no ordering.
  - **HTTP Basics**
    - Methods (GET, POST, PUT, DELETE, PATCH).
    - Status codes (2xx, 3xx, 4xx, 5xx).
    - Idempotency and safe methods.
  - **DNS**
    - Domain resolution, caching.
  - **Proxies & Load Balancers**
    - Reverse proxy vs forward proxy.
    - Basic load balancing strategies: round robin, least connections.
  - **TLS / HTTPS**
    - Encryption, certificates (conceptual).

- **Sample Questions**
  - **Q1**: How does a browser reach `https://example.com`? Walk through DNS, TCP, TLS, HTTP.
  - **Q2**: When would you use UDP instead of TCP?
  - **Q3**: What is a reverse proxy? How is it used in web architectures?

---

### 3. DBMS Theory

- **Key Concepts**
  - **Relational Model**
    - Tables, rows, columns, primary/foreign keys.
  - **Normalization**
    - 1NF, 2NF, 3NF basics; when to denormalize.
  - **Indexing**
    - B-tree indexes, clustered vs non-clustered (high-level).
    - How indexes affect reads vs writes.
  - **Transactions & ACID**
    - Atomicity, Consistency, Isolation, Durability.
    - Isolation levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable.
  - **Locks & Concurrency**
    - Shared vs exclusive locks.
    - Deadlocks (high-level).

- **Sample Questions**
  - **Q1**: What is an index? How can it speed up queries and when can it hurt?
  - **Q2**: Explain the ACID properties with examples.
  - **Q3**: What is a transaction isolation level? Give an example of a phenomenon (dirty read, phantom read).

---

### 4. CAP, ACID, BASE, Consistency Models

- **CAP Theorem**
  - In a distributed system, you can only choose **2 out of 3**:
    - **Consistency (C)**: all nodes see the same data at the same time.
    - **Availability (A)**: every request gets a response (success or fail).
    - **Partition Tolerance (P)**: system continues to operate despite network splits.
  - In practice, P is a given for distributed systems; you decide **C vs A** during partitions.

- **ACID vs BASE**
  - **ACID** (typical relational DBs)
    - Strong guarantees, transactions, strict consistency.
  - **BASE**
    - Basically Available, Soft-state, Eventual consistency.
    - Used in many NoSQL / distributed systems.

- **Consistency Models**
  - **Strong Consistency**
    - After a write, all subsequent reads see the latest value.
  - **Eventual Consistency**
    - Reads may see stale values for a while, but eventually converge.
  - **Read-Your-Own-Writes**
    - A client always sees its own writes.
  - **Causal Consistency**
    - Preserves cause-effect ordering of operations.

- **Sample Questions**
  - **Q1**: Explain the CAP theorem with an example of a system that favors availability over consistency.
  - **Q2**: What is eventual consistency? Where is it acceptable or not acceptable?
  - **Q3**: Compare ACID and BASE. When would you choose one over the other?

---

### 5. Putting Theory into System Design Context

- **Relating OS & Networking**
  - OS scheduling and threads influence **throughput and latency** of backend services.
  - Networking concepts (TCP, HTTP, TLS) define how **clients talk to your APIs**.

- **Relating DBMS & CAP/Consistency**
  - DB choices affect **consistency, availability, latency**, and **developer complexity**.
  - For example:

```text
User profile service:
  - Strong consistency needed for password changes (ACID).
  - Eventual consistency acceptable for analytics counters (BASE).
```

- **How to Answer in Interviews**
  - Start with a **simple explanation**, then add details as the interviewer digs deeper.
  - Always try to connect theory to **real systems** you might design or build.


