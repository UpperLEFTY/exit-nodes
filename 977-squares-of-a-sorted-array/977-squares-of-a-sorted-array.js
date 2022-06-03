/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
   const result = [];
  let i = nums.length - 1;
  let left = 0;
  let right = nums.length -1;
  while (left <= right) {
    if (Math.abs(nums[left]) < nums[right]) {
      result.unshift(nums[right] * nums[right])
      right--;
    } else {
      result.unshift(nums[left] * nums[left])
      left++
    }
  }
  return result;
};
