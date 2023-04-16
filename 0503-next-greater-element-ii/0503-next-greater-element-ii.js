/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const nextGreaterElements = function(nums) {
  const res = [], n = nums.length
  const stack = []
  for(let i = 2 * n - 1; i >= 0; i--) {
    while(stack.length && nums[stack[stack.length - 1]] <= nums[i % n]) {
      stack.pop()
    }
    res[i % n] = stack.length ? nums[stack[stack.length - 1]] : -1
    stack.push(i % n)
  }

  return res
};