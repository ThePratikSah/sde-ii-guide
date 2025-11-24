---
title: Curated Resources – Backend SDE-II (Go)
sidebar_position: 2
---

> **Goal of this file**: List **high-signal resources** (videos, blogs, repos, books) mapped to the roadmap phases for Go backend development. Use this as a menu, not a checklist to finish entirely.

---

### 1. Go Fundamentals

- **Books / Long-Form**
  - **The Go Programming Language** (Donovan & Kernighan) – comprehensive introduction to Go.
  - **Learning Go** (Jon Bodner) – modern Go practices and idioms.
  - **Effective Go** (official) – essential Go style and patterns.

- **Videos / Playlists**
  - Go official YouTube channel tutorials.
  - "Concurrency is not Parallelism" by Rob Pike.
  - "Understanding Go's Memory Model" talks.

- **Blogs**
  - Official Go blog (blog.golang.org) – language features and best practices.
  - Dave Cheney's blog – Go performance and design.
  - Articles on pointers, interfaces, and composition patterns.

- **Repos / Code**
  - Go standard library examples.
  - Minimal Go project templates with modules and testing.

---

### 2. Go Backend Engineering

- **Books**
  - **Let's Go** and **Let's Go Further** (Alex Edwards) – building production-ready web applications in Go.
  - **Go in Action** – practical patterns for building scalable systems.

- **Topics to Search / Watch**
  - Go runtime scheduler and goroutines internals.
  - Building REST APIs with `net/http`, Chi, or Gin.
  - Error handling patterns in Go (wrapping, custom errors).
  - Structured logging with `slog` (Go 1.21+) or `zap`/`zerolog`.

- **Blogs**
  - Guides on structuring large Go backends (clean architecture, hexagonal).
  - JWT authentication in Go with `golang-jwt/jwt`.
  - Middleware patterns and request context usage.

- **Structured Courses / Topic Roadmaps**
  - [Go by Example](https://gobyexample.com/) – hands-on introduction to Go using annotated example programs.
  - [Practical Go Lessons](https://www.practical-go-lessons.com/) – comprehensive Go course from basics to advanced.
  - [Ardan Labs Ultimate Go](https://www.ardanlabs.com/training/) – deep dive into Go mechanics and design.

- **Repos**
  - [golang-standards/project-layout](https://github.com/golang-standards/project-layout) – standard Go project structure.
  - Example Go REST API boilerplates with tests and Docker.
  - [go-clean-arch](https://github.com/bxcodec/go-clean-arch) – clean architecture example.

---

### 3. Databases – MongoDB, PostgreSQL

- **Docs / Guides**
  - MongoDB Go driver documentation.
  - `pgx` (PostgreSQL driver) documentation and best practices.
  - `sqlx` for easier SQL operations.

- **Videos**
  - SQL basics and advanced query tuning (language-agnostic).
  - NoSQL vs SQL talks and real-world trade-offs.

- **Blogs**
  - Using `database/sql` effectively in Go.
  - Connection pooling and prepared statements in Go.
  - N+1 query problem explanations and solutions.
  - Designing schemas for common app patterns.

- **Repos**
  - [GORM](https://github.com/go-gorm/gorm) – popular Go ORM (use with caution).
  - [Ent](https://github.com/ent/ent) – entity framework for Go.
  - Examples of repository pattern in Go.

---

### 4. Redis, Queues, Caching

- **Docs**
  - Redis official documentation for data structures and persistence.
  - [go-redis](https://github.com/redis/go-redis) – Redis client for Go.

- **Blogs**
  - Caching patterns: cache-aside, write-through, write-back.
  - Implementing rate limiting with Redis in Go.
  - Using Redis pipelines and transactions in Go.

- **Repos**
  - [Asynq](https://github.com/hibiken/asynq) – simple, reliable task queue for Go (Redis-backed).
  - Examples of worker pools with goroutines and channels.

---

### 5. Concurrency & Patterns

- **Books**
  - **Concurrency in Go** (Katherine Cox-Buday) – goroutines, channels, patterns.

- **Videos / Talks**
  - "Go Concurrency Patterns" by Rob Pike.
  - "Advanced Go Concurrency Patterns" talks.
  - Context package deep dives.

- **Blogs**
  - Common concurrency patterns (fan-out/fan-in, pipeline, worker pool).
  - Using `sync.WaitGroup`, `sync.Mutex`, and `sync.RWMutex`.
  - Context cancellation and deadline patterns.

- **Practice**
  - Implement concurrent log processor, web scraper, or job queue.

---

### 6. System Design (HLD + LLD)

- **Books**
  - **Designing Data-Intensive Applications** – fundamentals of storage, streams, distributed systems (language-agnostic).

- **Videos / Playlists**
  - System design interview playlists (search for "system design for backend").
  - Talks on building large-scale systems like notification services, feeds, and rate limiters.

- **Blogs**
  - Architectures of large-scale systems (e.g., how big companies design their services).
  - API design best practices (versioning, pagination, error handling).
  - Microservices patterns in Go.

- **Go-Specific**
  - How Uber, Dropbox, and other companies use Go at scale.
  - gRPC and Protocol Buffers in Go.

---

### 7. Machine Coding & LLD

- **Resources**
  - Collections of LLD / machine coding interview problems.
  - Example implementations in Go for:
    - Parking lot, Splitwise, cache, pub/sub, rate limiter, etc.

- **Practice Strategy**
  - Use `machine-coding-bank.md` as your main list.
  - For any problem, search for **one reference solution after** you've implemented your own.
  - Focus on Go idioms: interfaces, composition, error handling.

- **Repos**
  - Search GitHub for "LLD Go" or "machine coding Go" examples.

---

### 8. DSA

- **Platforms**
  - Use one major coding platform for:
    - Arrays, strings, maps, trees, graphs, heaps.
  - Practice in Go to get comfortable with syntax and standard library.

- **Strategy**
  - Follow patterns from `dsa-backend-plan.md`.
  - Bookmark problems where you **learn a new pattern**.
  - Note: Go doesn't have built-in generics for all data structures (pre-1.18), so practice implementing them.

- **Go-Specific Tips**
  - Use `container/heap` for priority queues.
  - Understand slice internals (length, capacity, backing array).
  - Practice with maps and custom hash functions if needed.

---

### 9. Theory, Infra, Cloud, CI/CD

- **OS & Networking**
  - Online course notes or video series on OS fundamentals.
  - Networking primers covering TCP/IP, HTTP, DNS, TLS.

- **DBMS, CAP, Consistency**
  - ACID and isolation levels tutorials.
  - CAP and consistency models blog series.

- **Cloud (AWS Preferred)**
  - AWS docs and introductory tutorials:
    - EC2, S3, RDS, SQS, CloudWatch, IAM basics.
  - Step-by-step guides to deploy a Go app on AWS.
  - AWS SDK for Go (v2) documentation.

- **CI/CD & DevOps**
  - Tutorials on GitHub Actions or GitLab CI pipelines for Go apps.
  - Dockerizing Go applications (multi-stage builds).
  - Cross-compilation in Go for different platforms.

---

### 10. Production Debugging, Logs, Profiling

- **Topics**
  - Go logging best practices (`slog`, `zap`, `zerolog`).
  - Using structured logs and correlation IDs.
  - Basics of monitoring (metrics, dashboards, alerts).
  - Profiling CPU and memory usage with `pprof`.
  - Using `go tool trace` for concurrency debugging.

- **Blogs**
  - Effective use of `pprof` for performance analysis.
  - Debugging goroutine leaks.
  - Memory profiling and optimization in Go.

- **Tools**
  - [Delve](https://github.com/go-delve/delve) – Go debugger.
  - `pprof` – built-in profiling tool.
  - [Jaeger](https://www.jaegertracing.io/) – distributed tracing (works well with Go).

- **Practice**
  - Add logging and basic metrics to your own projects (see `projects.md`).
  - Simulate failures and timeouts, then debug them.
  - Profile a CPU-intensive or memory-heavy Go program.

---

### 11. Testing in Go

- **Docs**
  - Official `testing` package documentation.
  - Table-driven tests pattern.

- **Blogs**
  - Writing effective unit tests in Go.
  - Mocking and dependency injection patterns.
  - Integration testing strategies.

- **Tools**
  - [testify](https://github.com/stretchr/testify) – popular testing toolkit (assertions, mocks).
  - [gomock](https://github.com/golang/mock) – mocking framework.
  - [httptest](https://pkg.go.dev/net/http/httptest) – HTTP testing utilities.

---

### 12. Go Community & Staying Updated

- **Resources**
  - [Awesome Go](https://github.com/avelino/awesome-go) – curated list of Go frameworks, libraries, and software.
  - [Go Weekly Newsletter](https://golangweekly.com/) – weekly Go news and articles.
  - [r/golang](https://www.reddit.com/r/golang/) – Go community on Reddit.
  - [Gophers Slack](https://gophers.slack.com/) – active Go community chat.

- **Conferences & Talks**
  - GopherCon talks (available on YouTube).
  - dotGo conference talks.

---

Use this file as a **pointer** to search for the latest, high-quality resources while relying on the rest of the repo (`roadmap-16-weeks.md`, `week-XX.md`, etc.) for **what** to study and in which order.
