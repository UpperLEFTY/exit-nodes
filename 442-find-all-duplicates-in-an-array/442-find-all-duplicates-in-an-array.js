/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const res = []
  for(let i = 0, len = nums.length; i < len; i++) {
    const idx = Math.abs(nums[i]) - 1
    if(nums[idx] < 0) res.push(idx + 1)
    nums[idx] = -nums[idx]
  }
  return res;
};
