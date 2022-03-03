/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  const arr = [];
  let count = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] - nums[i - 1] === nums[i + 1] - nums[i]) {
      count += 1;
    } else {
      arr.push(count);
      count = 0;
    }
  }
  arr.push(count);
  return arr.reduce((ac, el) => ac + calc(el), 0);
};

function calc(num) {
  return (num * (num + 1)) / 2;
}
