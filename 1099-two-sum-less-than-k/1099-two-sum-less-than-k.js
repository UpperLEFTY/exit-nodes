/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const twoSumLessThanK = function(nums, k) {
 nums.sort((nums, b) => nums - b)
 let max = -1,
   i = 0,
   j = nums.length - 1
 while (i < j) {
   const sum = nums[i] + nums[j]
   if (sum < k) {
     max = Math.max(max, sum)
     i++
   } else {
     j--
   }
 }
 return max
};