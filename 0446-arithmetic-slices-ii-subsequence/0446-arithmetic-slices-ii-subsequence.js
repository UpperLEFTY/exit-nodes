/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = function(nums) {
  if (!nums || nums.length < 3) return 0;
  let res = 0;
  const dp = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    dp[i] = new Map();
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const prevCount = dp[j].get(diff) || 0;
      res += prevCount;
      const currCount = (dp[i].get(diff) || 0) + 1;
      dp[i].set(diff, prevCount + currCount);
    }
  }
  return res;
};
