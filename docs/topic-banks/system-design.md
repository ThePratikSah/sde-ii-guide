---

title: System Design (HLD)
sidebar_position: 5
---

> **Goal of this file**: Provide a structured approach to **High-Level Design (HLD)** interviews, focusing on scalable backend architectures.

---

### 1. Core Concepts

Before diving into specific problems, ensure you have a solid grasp of these building blocks:

#### Scalability
- **Vertical Scaling (Scale Up)**: Adding more power (CPU, RAM) to an existing machine. Easy but has a limit.
- **Horizontal Scaling (Scale Out)**: Adding more machines to the pool. Infinite scaling potential but adds complexity (data consistency, load balancing).

#### CAP Theorem
- **Consistency**: Every read receives the most recent write or an error.
- **Availability**: Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
- **Partition Tolerance**: The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.
- **Rule**: In a distributed system (which implies P), you must choose between C and A.

#### ACID vs BASE
- **ACID** (Relational DBs): Atomicity, Consistency, Isolation, Durability.
- **BASE** (NoSQL/Distributed): Basically Available, Soft state, Eventual consistency.

---

### 2. System Design Building Blocks

You should know "when to use what":

| Component | Purpose | Examples |
|-----------|---------|----------|
| **Load Balancer** | Distribute traffic across servers. | Nginx, HAProxy, AWS ELB |
| **Caching** | Reduce DB load, speed up reads. | Redis, Memcached, CDN |
| **Database** | Persistent storage. | PostgreSQL (SQL), MongoDB/Cassandra (NoSQL) |
| **Message Queue** | Asynchronous processing, decoupling. | Kafka, RabbitMQ, SQS |
| **CDN** | Serve static assets from edge locations. | Cloudflare, AWS CloudFront |

---

### 3. The 5-Step Interview Framework

Don't just start drawing boxes. Follow this structure:

1.  **Requirements Clarification (5-10 min)**
    *   **Functional**: What does the system DO? (e.g., User can post a tweet).
    *   **Non-Functional**: Scalability (DAU/MAU), Latency, Availability, Consistency requirements.
    *   **Estimations**: QPS (Queries Per Second), Storage requirements (next 5 years).

2.  **API Design (5 min)**
    *   Define endpoints.
    *   Example: `POST /v1/tweet` -> `{ content: "hello", userId: "123" }`

3.  **Database Schema (5 min)**
    *   Choose SQL vs NoSQL.
    *   Define tables/collections and relationships.

4.  **High-Level Design (10-15 min)**
    *   Draw the "boxes and arrows".
    *   Client -> LB -> App Server -> DB.
    *   Add Caching, Queues as needed.

5.  **Deep Dive & Bottlenecks (10-15 min)**
    *   "What if the database fails?" -> Replication/Sharding.
    *   "What if traffic spikes?" -> Auto-scaling.
    *   Address single points of failure.

---

### 4. Common Design Problems

#### Design a URL Shortener (TinyURL)
- **Key Challenges**:
    - Unique ID generation (Base62 vs UUID vs KGS).
    - Heavy read load (Read:Write ratio 100:1).
- **Solution Hints**:
    - Use a Key Generation Service (KGS) to pre-generate tokens.
    - Heavy caching (Redis) for redirection.

#### Design a Chat Application (WhatsApp/Slack)
- **Key Challenges**:
    - Real-time delivery.
    - Message ordering.
    - Online/Offline status.
- **Solution Hints**:
    - **WebSockets** for real-time bi-directional communication.
    - **Cassandra/HBase** for storing chat history (write-heavy).
    - **Redis** for presence (User A is Online).

#### Design a Rate Limiter
- **Key Challenges**:
    - Distributed counting.
    - Latency.
- **Solution Hints**:
    - Algorithms: Token Bucket, Leaky Bucket, Fixed Window, Sliding Window Log.
    - Store counters in **Redis** (atomic increments).

#### Design a Notification System
- **Key Challenges**:
    - High volume.
    - Multiple channels (Email, SMS, Push).
    - Retry logic.
- **Solution Hints**:
    - Decouple with **Message Queues** (Kafka/RabbitMQ).
    - Workers for each channel type.
    - Idempotency to prevent duplicate sends.

#### Design a Ride-Sharing App (Uber/Lyft)
- **Key Challenges**:
    - Real-time location tracking.
    - Matching algorithms.
    - Consistency (no double booking).
- **Solution Hints**:
    - **QuadTree** or **Geohash** for spatial indexing.
    - WebSockets for driver location updates.
    - Strong consistency for ride booking state.
