## DSA Plan for Backend Interviews

[← Back to main guide](README.md)

> **Goal of this file**: Give you a **focused DSA plan** that maximizes ROI for backend interviews (no unnecessary topics).

---

### 1. Topics Overview (Backend-Relevant Only)

| Topic                 | Why It Matters for Backend                                |
|-----------------------|-----------------------------------------------------------|
| Arrays & Strings      | Parsing requests, basic transformations, validation       |
| Hash Maps & Sets      | Caching, de-duplication, counting, indexing-like logic    |
| Linked Lists          | LRU cache, queues, streaming structures                   |
| Stacks & Queues       | Request processing, parsing, BFS/DFS helpers             |
| Trees                 | Hierarchical data (folders, comments), search             |
| Graphs                | Networks, dependency graphs, shortest paths               |
| Heaps/Priority Queues | Scheduling, task prioritization, top-K queries            |
| Two Pointers          | Windowed processing on sorted/linear data                 |
| Sliding Window        | Streaming analytics, rate limiting, rolling metrics       |

You don’t need **dynamic programming mastery** for most backend SDE-II roles; focus instead on these core patterns.

---

### 2. Weekly Plan (16-Week Track)

This runs **in parallel** with other phases. See `week-XX.md` for daily allocations.

| Weeks | Focus                                   | Problems / Day |
|-------|-----------------------------------------|----------------|
| 1–2   | Arrays, strings, hash maps, sets       | 3              |
| 3–4   | Two pointers, sliding window           | 3–4            |
| 5–6   | Linked lists, stacks, queues           | 3              |
| 7–8   | Trees (BST, generic)                   | 3              |
| 9–10  | Graphs (BFS/DFS, shortest path)       | 3              |
| 11–12 | Heaps, top-K, scheduling-like problems | 3              |
| 13–14 | Mixed revision, timed practice         | 4              |
| 15–16 | Mixed revision + company-style sets    | 4–5            |

---

### 3. Pattern-Based Study Plan

#### Arrays & Strings

- **Key Patterns**
  - Frequency counting using hash maps.
  - Prefix sums (basic).
  - In-place modifications, two-pointer sweeps.

- **Checklist**
  - **Can I**:
    - Use a hash map for counting/lookup in \(O(1)\) average time?
    - Reason about off-by-one errors with indices?
    - Detect and handle Unicode/edge cases in strings (conceptually)?

#### Hash Maps & Sets

- **Key Patterns**
  - Detect duplicates.
  - Mapping from ID to object/metadata.
  - Grouping (e.g., by category or key).

- **Checklist**
  - **Can I** design an API that uses a map/set internally to support \(O(1)\) operations?

#### Two Pointers & Sliding Window

- **Two Pointers**
  - Sorted arrays merging, partitioning, removing elements in-place.

- **Sliding Window**
  - Longest/shortest subarray satisfying condition.
  - Maintaining counts or sums in a moving window.

- **ASCII View**

```text
Array: [a, b, c, d, e, f]
Window (size 3) moves:
[a, b, c]      -> [b, c, d]      -> [c, d, e]      -> [d, e, f]
  l     r          l     r          l     r          l     r
```

---

### 4. Recommended Problem Mix (Per Topic)

> Replace "PlatformProblemName" with actual problem names from your preferred platform.

| Topic            | Easy | Medium | Notes                                    |
|------------------|------|--------|------------------------------------------|
| Arrays & Strings | 5    | 10     | Focus on frequency counting & subarrays  |
| Hash Maps/Sets   | 5    | 10     | Use maps for counting & indexing         |
| Linked Lists     | 5    | 5      | Reversal, middle, cycle detection        |
| Trees            | 5    | 10     | BFS/DFS, height, lowest common ancestor  |
| Graphs           | 3    | 7      | BFS/DFS, shortest path, topological sort |
| Heaps/PQ         | 3    | 7      | Top-K, scheduling, merging sorted lists  |
| Sliding Window   | 5    | 10     | Longest/shortest subarray/window         |

---

### 5. Daily Template (4-Hour and 6-Hour Days)

- **4-Hour Day DSA Block (Integrated with Other Topics)**
  - **Warm-up (10–15 min)**: 2–3 quick easy problems or reading old notes.
  - **Focused practice (60–75 min)**: 2–3 new medium problems on 1 topic.
  - **Review (10–15 min)**: Document patterns and mistakes.

- **6-Hour Day DSA Block**
  - Same as above, but **add**:
    - 1 extra medium problem.
    - 1 timed problem (25–30 minutes).

---

### 6. How to Review and Build Patterns

- After solving a problem:
  - Write **1–3 bullet points**:
    - Which pattern did this use? (e.g., sliding window, BFS, heap).
    - What was the **invariant** you maintained?
    - What common **pitfall** did you avoid or fall into?
- Build a personal **pattern cheat sheet**:
  - Example sections: "Sliding Window", "Two Pointers", "Top-K with Heap", "Graph Traversal".

---

### 7. Company-Focused Rounds (Weeks 15–16)

- Create **sets of 2–3 problems** that you solve in **75 minutes**:
  - 1 array/hash map problem.
  - 1 tree/graph/heap problem.
  - 1 sliding window or two-pointer problem.
- After each set:
  - Grade yourself on:
    - **Correctness** (did you handle edge cases?).
    - **Complexity** (can you justify it?).
    - **Communication** (could an interviewer follow your reasoning?).


