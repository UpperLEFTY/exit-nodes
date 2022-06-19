/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minKBitFlips = function(nums, k) {
    let cur = 0, res = 0;
    for(let i = 0; i < nums.length; ++i) {
        if(i >= k) cur -=(nums[i - k] / 2) >>0; 
        if((cur & 1 ^ nums[i]) === 0) {
            if(i + k > nums.length) return -1;
            nums[i] += 2;
            cur++
            res++
        }
    }
    return res;
};