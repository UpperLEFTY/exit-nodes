/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = function(nums, queries) {
      let sum = nums.reduce((acc, cur) => cur%2 == 0 ? acc + cur : acc, 0);
  return queries.map((q) => {
      let i = q[1];
      let s = nums[i] + q[0];
      if(s%2 === 0) {
          sum += q[0];
          if(nums[i]%2 !== 0) sum += nums[i];
      } else if(nums[i]%2 === 0) sum -= nums[i];
      nums[i] = s;
      return sum;
  });
};