---

title: Advanced Backend Concepts
sidebar_position: 6
---

> **Goal of this file**: Deep dive into complex backend topics expected for SDE II roles, moving beyond basic CRUD.

---

### 1. Microservices Patterns

As systems grow, we often move from Monolith to Microservices. You need to know how to manage this complexity.

#### API Gateway vs BFF
- **API Gateway**: Single entry point for all clients. Handles auth, rate limiting, routing.
- **BFF (Backend for Frontend)**: Separate gateways for different client types (e.g., one for Mobile, one for Web) to optimize responses for specific UIs.

#### Service Discovery
- How does Service A find Service B?
- **Client-Side Discovery**: Client queries Service Registry (e.g., Eureka, Consul).
- **Server-Side Discovery**: Client calls Load Balancer, LB queries Service Registry.

#### Resilience Patterns
- **Circuit Breaker**: Stop calling a failing service to prevent cascading failures. (Open -> Half-Open -> Closed).
- **Retry**: Retrying failed requests (with exponential backoff).
- **Timeout**: Fail fast if a dependency is too slow.

#### Sidecar Pattern
- Offloading common tasks (logging, monitoring, proxying) to a separate container/process that runs alongside the main application (e.g., Envoy in Istio).

---

### 2. Distributed Data Management

"Data is hard" in distributed systems.

#### Database Sharding & Partitioning
- **Sharding**: Splitting a large dataset across multiple database instances.
    - **Horizontal**: Rows split by key (e.g., UserID 1-1000 in DB1, 1001-2000 in DB2).
    - **Vertical**: Columns split (e.g., User Profile table in DB1, User Friends table in DB2).
- **Consistent Hashing**: Used to distribute data evenly and minimize movement when nodes are added/removed.

#### Distributed Transactions
- **2-Phase Commit (2PC)**: Strong consistency but blocking and slow. Coordinator asks "Can you commit?", then says "Commit".
- **Saga Pattern**: Sequence of local transactions. If one fails, execute **Compensating Transactions** to undo previous steps. Better for microservices.

#### Event Sourcing & CQRS
- **Event Sourcing**: Store state as a sequence of events (e.g., "MoneyDeposited", "MoneyWithdrawn") rather than just the current balance.
- **CQRS (Command Query Responsibility Segregation)**: Separate models for updating information (Command) and reading information (Query). Often used with Event Sourcing.

---

### 3. Communication Protocols

#### REST vs GraphQL vs gRPC
| Protocol | Format | Transport | Use Case |
|----------|--------|-----------|----------|
| **REST** | JSON/XML | HTTP/1.1 | Public APIs, simple CRUD. |
| **GraphQL**| JSON | HTTP | Flexible data fetching, avoiding over/under-fetching. |
| **gRPC** | Protobuf | HTTP/2 | Internal microservices, high performance, strict contracts. |

#### Real-Time Communication
- **WebSockets**: Full-duplex, persistent connection. (Chat, Gaming).
- **Server-Sent Events (SSE)**: One-way (Server -> Client). (Stock tickers, News feeds).
- **Long Polling**: Client waits for response. (Legacy fallback).

---

### 4. Message Brokers: Kafka vs RabbitMQ

| Feature | RabbitMQ | Apache Kafka |
|---------|----------|--------------|
| **Model** | Smart Broker, Dumb Consumer (Push) | Dumb Broker, Smart Consumer (Pull) |
| **Storage** | Queue (Transient) | Log (Persistent) |
| **Ordering** | Not guaranteed globally | Guaranteed per partition |
| **Use Case** | Complex routing, task queues | High throughput event streaming, analytics |

#### Delivery Guarantees
- **At-most-once**: Fire and forget. Message might be lost.
- **At-least-once**: Message guaranteed to be delivered, but might be duplicated. (Idempotency required).
- **Exactly-once**: Hardest to achieve. Kafka supports this with transactional producers/consumers.
