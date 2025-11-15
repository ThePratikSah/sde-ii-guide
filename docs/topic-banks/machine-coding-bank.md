---
id: machine-coding-bank
title: Machine Coding Problem Bank
sidebar_position: 1
---

> **Goal of this file**: Provide at least **15 production-flavored machine coding problems** with clear requirements, constraints, sample I/O, expected design, and evaluation criteria.

Each problem is suitable for a **60–120 minute** interview round.

---

### Problem 1: Parking Lot System

- **Description**
  - Design and implement a **parking lot management system** that supports multiple levels and different vehicle types.

- **Functional Requirements**
  - Support **multiple floors**.
  - Vehicle types: **bike, car, truck**.
  - Operations:
    - `park(vehicle)` → ticket
    - `unpark(ticket)` → fees + free the slot
    - `getFreeSlots(level?, vehicleType?)`
  - Pricing:
    - Configurable **per-hour pricing** per vehicle type.

- **Clarifications / Constraints**
  - Assume **single process** in-memory implementation.
  - Maximum size: up to **10 levels**, each with up to **1000 slots**.
  - Fee can be **rounded up to the next hour**.

- **Sample I/O (High-Level)**

```text
Input:
  park CAR KA-01-1234
  park BIKE KA-02-5678
  unpark <ticketIdOfCar>

Output:
  TicketId: T1
  TicketId: T2
  Fees: 40
```

- **Expected Design (LLD-Level)**
  - Classes/interfaces (TypeScript style):
    - `ParkingLot`, `Level`, `Slot`, `Vehicle`, `Ticket`, `PricingStrategy`.
  - Use **Strategy pattern** for pricing.

- **Evaluation Parameters**
  - Correctness of operations and edge cases (full lot, invalid ticket).
  - Clean OO design; separation of concerns.
  - Extensibility (e.g., add EV charging slots).

---

### Problem 2: Splitwise Expense Sharing

- **Description**
  - Implement a simplified **Splitwise-like** expense sharing system.

- **Functional Requirements**
  - Users can:
    - Add expenses involving multiple participants.
    - Split equally or by exact amounts.
  - Support commands:
    - `addExpense(paidBy, amount, participants, splitType, splitDetails?)`
    - `showBalance(userId?)` – show who owes whom and how much.

- **Clarifications**
  - In-memory storage.
  - Currency: assume integers for simplicity.

- **Sample I/O**

```text
Input:
  addExpense U1 1000 [U1,U2,U3,U4] EQUAL
  showBalance U2

Output:
  U2 owes U1: 250
  U3 owes U1: 250
  U4 owes U1: 250
```

- **Expected Design**
  - Entities: `User`, `Expense`, `Split`, `BalanceSheet`.
  - Use **Strategy pattern** for different split types.

- **Evaluation Parameters**
  - Correct calculation.
  - Handling of **SHOW for a single user vs all**.
  - Clarity of design and testability.

---

### Problem 3: Token Bucket Rate Limiter (In-Memory)

- **Description**
  - Build an **in-memory rate limiter** using the **token bucket** algorithm.

- **Functional Requirements**
  - Configurable per **userId or API key**:
    - `capacity` (max tokens).
    - `refillRate` (tokens per second).
  - API:
    - `isAllowed(key: string): boolean`

- **Clarifications**
  - In-process, thread-unsafe environment (Node.js single thread).
  - Optimize for **low latency**.

- **Sample I/O**

```text
For key "user-1", capacity=5, refillRate=1 token/sec
Sequence of 7 rapid calls:
  Allowed: true, true, true, true, true, false, false
```

- **Expected Design**
  - `RateLimiter`, `Bucket` classes.
  - Use current timestamp to refill tokens lazily.

- **Evaluation Parameters**
  - Correctness of algorithm.
  - Time-based behavior explanation.

---

### Problem 4: In-Memory Cache with Expiry and Eviction

- **Description**
  - Build an **in-memory key-value cache** with TTL and LRU eviction.

- **Functional Requirements**
  - API:
    - `set(key, value, ttlMs?)`
    - `get(key)` – should respect TTL.
    - `delete(key)`
  - Maximum number of keys: configurable; when full, **evict LRU** entry.

- **Clarifications**
  - Single-process cache.
  - Time precision in milliseconds is fine.

- **Expected Design**
  - `Cache` class using:
    - Hash map for O(1) access.
    - Doubly linked list for LRU.
  - Store `expiry` timestamp per key.

- **Evaluation Parameters**
  - Correct eviction order.
  - TTL handling.
  - Clean separation of responsibilities (storage vs eviction policy).

---

### Problem 5: In-Memory Document Store (Mini DB)

- **Description**
  - Implement a simple **in-memory document DB** with CRUD and basic querying.

- **Functional Requirements**
  - Collections of JSON documents.
  - APIs:
    - `insert(collection, doc)`
    - `find(collection, queryPredicate)`
    - `update(collection, queryPredicate, updateFn)`
    - `delete(collection, queryPredicate)`

- **Clarifications**
  - No persistence required.
  - Query predicate can be a function `(doc) => boolean`.

- **Expected Design**
  - `Collection`, `DocumentStore` classes.
  - Optional: simple indexing for equality on a field.

- **Evaluation Parameters**
  - API usability.
  - Extensibility towards secondary indexes.

---

### Problem 6: Pub/Sub Event System

- **Description**
  - Implement a basic **publish-subscribe** messaging system.

- **Functional Requirements**
  - APIs:
    - `subscribe(topic, handler)`
    - `unsubscribe(topic, handler)`
    - `publish(topic, message)`
  - Multiple subscribers per topic.
  - At-least-once delivery per subscriber.

- **Clarifications**
  - In-memory only, single process.
  - Handlers can be **sync or async**.

- **Expected Design**
  - `PubSub` class.
  - Internal mapping: topic → list of handlers.

- **Evaluation Parameters**
  - Handling of subscription/unsubscription edge cases.
  - Error isolation (one handler failure should not break others).

---

### Problem 7: Notification Service (In-App + Email Stub)

- **Description**
  - Build a **notification service** that sends in-app notifications and stubbed emails.

- **Functional Requirements**
  - API:
    - `sendNotification(userId, type, payload)`
  - Types: `WELCOME_EMAIL`, `PASSWORD_RESET`, `PROMOTION`.
  - In-app notifications stored in **in-memory store**.
  - Email sending is **stubbed** (log to console or memory).

- **Clarifications**
  - Focus on **design**, not real SMTP.
  - Use **template-based** notifications.

- **Expected Design**
  - `NotificationService`, `TemplateRenderer`, `Channel` implementations.
  - Use **Strategy or Factory pattern** for channels (email, in-app).

- **Evaluation Parameters**
  - Clean separation of templates, channels, routing logic.

---

### Problem 8: URL Shortener with Analytics (Simplified)

- **Description**
  - Create a simplified **URL shortener** similar to bit.ly.

- **Functional Requirements**
  - API:
    - `shorten(longUrl)` → `shortCode`
    - `resolve(shortCode)` → `longUrl`
  - Track **hit count per short URL**.
  - Enforce basic validation for URLs.

- **Clarifications**
  - In-memory mapping for now.
  - Short code can be **base62-encoded** incremental ID.

- **Expected Design**
  - `UrlShortenerService`, `CodeGenerator`, `UrlRepository`.

- **Evaluation Parameters**
  - Collision-free code generation.
  - Clear separation of services and storage.

---

### Problem 9: Task Scheduler (Delayed Jobs)

- **Description**
  - Implement a **task scheduler** that executes jobs at or after a given time.

- **Functional Requirements**
  - API:
    - `schedule(taskId, runAt, callback)`
    - `cancel(taskId)`
  - Execute callback as close as possible to `runAt`.

- **Clarifications**
  - In-memory only; survive process lifetime only.
  - Use Node timers internally.

- **Expected Design**
  - Use **min-heap** or sorted structure by `runAt`.
  - Background loop to schedule due tasks.

- **Evaluation Parameters**
  - Time correctness.
  - Efficient scheduling for many tasks.

---

### Problem 10: Feature Flag Service (In-Memory)

- **Description**
  - Implement a **feature flag** service that enables/disables features per user or globally.

- **Functional Requirements**
  - API:
    - `setFlag(flagName, config)` – config includes `enabledForAll`, `allowedUserIds`.
    - `isEnabled(flagName, userId?)`
  - Support:
    - Global enable/disable.
    - Per-user overrides.

- **Expected Design**
  - `FeatureFlagService`, `FlagConfig` types.

- **Evaluation Parameters**
  - Correct resolution order (user override > global).
  - Extensibility (percentage rollouts later).

---

### Problem 11: Simple Metrics Aggregator

- **Description**
  - Build a **metrics aggregator** for counters and gauges.

- **Functional Requirements**
  - API:
    - `increment(metricName, value=1, labels?)`
    - `setGauge(metricName, value, labels?)`
    - `getSnapshot()` – returns current metrics.
  - Labels as a key-value map (e.g., `{ service: "auth", status: "200" }`).

- **Expected Design**
  - Internal key: metricName + serialized labels.

- **Evaluation Parameters**
  - Flexible design.
  - Low-complexity implementation.

---

### Problem 12: Simple Log Aggregator (In-Memory)

- **Description**
  - Implement an **in-memory log aggregator** that collects and filters logs.

- **Functional Requirements**
  - API:
    - `log(level, message, context?)`
    - `queryLogs(filter)` – filter by level, substring, time range.
  - Levels: `DEBUG`, `INFO`, `WARN`, `ERROR`.

- **Expected Design**
  - `Logger`, `LogStore`, `LogQueryEngine`.

- **Evaluation Parameters**
  - Query flexibility.
  - Structured log representation.

---

### Problem 13: Shopping Cart Service (In-Memory)

- **Description**
  - Implement a **shopping cart** system.

- **Functional Requirements**
  - API:
    - `addItem(userId, productId, quantity)`
    - `removeItem(userId, productId)`
    - `getCart(userId)` – returns items + total.
  - Handle:
    - Multiple users.
    - Quantity updates (add merges quantities).

- **Expected Design**
  - `CartService`, `Cart`, `CartItem`.
  - Optional pricing engine stub.

- **Evaluation Parameters**
  - Correctness and clarity.
  - Ability to extend to persistence and promotions.

---

### Problem 14: Comment System (Threaded)

- **Description**
  - Build a **threaded comment system** (replies to comments).

- **Functional Requirements**
  - Create comment with `postId`, `userId`, `content`, optional `parentCommentId`.
  - List comments for a post as a **tree**.

- **Expected Design**
  - `Comment`, `CommentService`.
  - Recursive tree building or adjacency list pattern.

- **Evaluation Parameters**
  - Correct hierarchy building.
  - Clean API design.

---

### Problem 15: Rate-Limited Login Service

- **Description**
  - Implement a **login service** with **rate limiting** on failed attempts.

- **Functional Requirements**
  - API:
    - `login(username, password)`
  - If a user fails more than N times within T minutes, **block** further logins temporarily.

- **Clarifications**
  - User store can be static/in-memory.
  - Use an **in-memory rate limiter** (tie-in with Problem 3).

- **Expected Design**
  - `AuthService`, `RateLimiter`, `UserRepository`.

- **Evaluation Parameters**
  - Secure-ish design (don’t leak info on which part failed).
  - Correct rate limiting logic.

---

### How to Use This Problem Bank

- **Week 6–7**: Attempt 2–3 easier ones (Cart, Feature flags, Pub/Sub).
- **Week 8–11**: Use them as **LLD + partial implementation** exercises.
- **Week 12–13**: Do **full end-to-end implementations** with:
  - TypeScript types.
  - Layered architecture (controller/service/repository).
  - Unit tests for core logic.


