/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
  let max = 0
  const n = nums.length
  for (let i = 0; i < n; i++) {
    if(max < i) return false
    max = Math.max(max, i + nums[i])
    if(max >= n - 1) return true
  }
};