/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
   for(let i = 0, len = nums.length; i < len; i++) {
   const idx = Math.abs(nums[i]) - 1
   nums[idx] = - Math.abs(nums[idx])
 }
 const res = []
 nums.forEach((e, i) => {
   if(e > 0) res.push(i + 1)
 })
 return res
};