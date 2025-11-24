---

title: Merge Intervals
---

# Merge Intervals

## Problem Description
Given an array of `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

**Example 1:**
```text
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

## Approach

### Sorting
- **Idea**: Sort the intervals by their start time. Then iterate through them.
- **Logic**:
    - If the current interval overlaps with the last merged interval (i.e., `current.start <= last_merged.end`), merge them by updating the end of the last merged interval: `last_merged.end = max(last_merged.end, current.end)`.
    - Otherwise, add the current interval to the result list.
- **Time Complexity**: $O(n \log n)$ due to sorting.
- **Space Complexity**: $O(n)$ for the output.

## Code Snippet (TypeScript)

```typescript
function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];
  
  // Sort by start time
  intervals.sort((a, b) => a[0] - b[0]);
  
  const merged: number[][] = [];
  
  for (const interval of intervals) {
    if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
      merged.push(interval);
    } else {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
    }
  }
  
  return merged;
}
```
