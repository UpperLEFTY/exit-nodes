/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
 let minSum = nums[0];
 let maxSum = minSum;
 for (let i = 1; i < nums.length; i++) {
   minSum = minSum > 0 ? minSum + nums[i] : nums[i];
   maxSum = Math.max(minSum, maxSum);
 }
 return maxSum;   
};