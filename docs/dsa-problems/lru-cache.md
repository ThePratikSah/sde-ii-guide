---

title: LRU Cache
---

# LRU Cache

## Problem Description
Design a data structure that follows the constraints of a **Least Recently Used (LRU) cache**.

Implement the `LRUCache` class:
- `LRUCache(int capacity)` Initialize the LRU cache with positive size capacity.
- `int get(int key)` Return the value of the `key` if the key exists, otherwise return `-1`.
- `void put(int key, int value)` Update the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, **evict** the least recently used key.

The functions `get` and `put` must each run in $O(1)$ average time complexity.

## Approach

### Hash Map + Doubly Linked List
- **Hash Map**: Stores `key` -> `Node` mapping for $O(1)$ access.
- **Doubly Linked List**: Maintains the order of elements.
    - **Head**: Most recently used.
    - **Tail**: Least recently used.
- **Operations**:
    - **Get**: Look up node in map. Move node to head. Return value.
    - **Put**:
        - If key exists: Update value, move to head.
        - If key new: Create node, add to head, add to map.
        - If capacity full: Remove tail node, remove from map.

## Code Snippet (TypeScript)

```typescript
class Node {
  key: number;
  val: number;
  prev: Node | null = null;
  next: Node | null = null;

  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;
  }
}

class LRUCache {
  private capacity: number;
  private cache: Map<number, Node>;
  private head: Node;
  private tail: Node;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
    // Dummy head and tail
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  private remove(node: Node): void {
    const prev = node.prev!;
    const next = node.next!;
    prev.next = next;
    next.prev = prev;
  }

  private insert(node: Node): void {
    const prev = this.head;
    const next = this.head.next!;
    prev.next = node;
    next.prev = node;
    node.prev = prev;
    node.next = next;
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      this.remove(node);
      this.insert(node);
      return node.val;
    }
    return -1;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key)!);
    }
    const newNode = new Node(key, value);
    this.cache.set(key, newNode);
    this.insert(newNode);

    if (this.cache.size > this.capacity) {
      const lru = this.tail.prev!;
      this.remove(lru);
      this.cache.delete(lru.key);
    }
  }
}
```
