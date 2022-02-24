/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   const hash = {};
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] in hash) return [hash[nums[i]], i];
        hash[target - nums[i]] = i
    }
    return [-1, 1];
};