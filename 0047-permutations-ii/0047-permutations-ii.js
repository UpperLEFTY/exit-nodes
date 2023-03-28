/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
    let res = [];
    nums.sort((a, b) => (a - b));
    dfs(res, [], nums);
        return res;
};

const dfs = function (res, arr, nums) {
  let len  = nums.length;
  let tmp1 = null;
  let tmp2 = null;
    
 if (!len) return res.push(arr);
    
    for (let i = 0; i < len; i++) {
    if (nums[i] === nums[i - 1]) continue;

    tmp1 = Array.from(arr);
    tmp1.push(nums[i]);

    tmp2 = Array.from(nums);
    tmp2.splice(i, 1);

    dfs(res, tmp1, tmp2);
 }
};