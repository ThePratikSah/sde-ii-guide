---

title: Two Sum
---

# Two Sum

## Problem Description
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

**Example 1:**
```text
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

## Approach

### Brute Force
- **Idea**: Loop through each element `x` and find if there is another value that equals to `target - x`.
- **Time Complexity**: $O(n^2)$
- **Space Complexity**: $O(1)$

### Hash Map (One-pass)
- **Idea**: While we iterate and inserting elements into the table, we also look back to check if current element's complement already exists in the table. If it exists, we have found a solution and return immediately.
- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

## Code Snippet (Python)

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []
```
