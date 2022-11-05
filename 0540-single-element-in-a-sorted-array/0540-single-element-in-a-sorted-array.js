/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function(nums) {
  if(nums.length === 0) return 0
  let res = nums[0]
  for(let i = 1, len = nums.length; i < len; i++) {
    res ^= nums[i]
  }
  return res
};