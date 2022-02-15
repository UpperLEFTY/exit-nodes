/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        res ^= nums[i];
    }
    return res;
};