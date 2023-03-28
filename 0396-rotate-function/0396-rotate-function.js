/**
 * @param {number[]} nums
 * @return {number}
 */
const maxRotateFunction = function (nums) {
    if (nums.length === 0) return 0;
    let sum = 0, iteration = 0, len = nums.length;
    for(let i = 0; i < len; i++){
        sum += nums[i];
        iteration += (nums[i] * i);
    }
    let max = iteration;
    for(let j = 1; j < len; j++){
        // for next iteration lets remove one entry value
        // of each entry and the prev 0 * k
        iteration = iteration - sum + nums[j-1]*len;
        max = Math.max(max, iteration);
    }
    return max;
};
