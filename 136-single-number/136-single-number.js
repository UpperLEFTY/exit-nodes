/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
//     return nums.reduce((ac, e) => ac ^ e, 0)
// };
    
    // Another Solution JS
    
  let xor = nums[0]
  for(let i = 1; i< nums.length; i++) xor ^= nums[i]
  return xor
};