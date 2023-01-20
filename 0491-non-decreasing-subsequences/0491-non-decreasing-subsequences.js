/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findSubsequences = function(nums) {
    const stack = []
    helper([], 0, nums, stack)
    return stack
}

function helper(list, index, nums, stack) {
    if(list.length > 1) {
     stack.push(Array.prototype.slice.call(list, 0))      
 }
    const used = []
for (let i = index; i < nums.length; i++) {
  if (used.indexOf(nums[i]) !== -1) {
    continue
  }
  if (list.length === 0 || nums[i] >= list[list.length - 1]) {
    used.push(nums[i])
    list.push(nums[i])
    helper(list, i + 1, nums, stack)
    list.pop()
  }
}
}