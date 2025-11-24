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

## Code Snippet (Python)

```python
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x: x[0])
        merged = []
        for interval in intervals:
            if not merged or merged[-1][1] < interval[0]:
                merged.append(interval)
            else:
                merged[-1][1] = max(merged[-1][1], interval[1])
        return merged
```
