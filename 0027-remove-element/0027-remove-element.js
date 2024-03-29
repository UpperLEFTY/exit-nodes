/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    let len = nums.length; 
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] !== val) nums[count++] = nums[i];
    }
    return count;
};