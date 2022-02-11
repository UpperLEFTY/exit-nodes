/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const map = {};
    let len = nums.length;
    let sum = 0;
    let res = 0;
    
    map[0] = 1;
    
    for(let i = 0; i < len; i++) {
      sum += nums[i];
       res += (map[sum - k] || 0);
    map[sum] = (map[sum] || 0) + 1;
    }
    
    return res;
};