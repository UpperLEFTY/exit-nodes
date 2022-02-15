/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let res = [-1, -1];
  let left = find(nums, target, true);
  let right = find(nums, target, false);
  if (!nums.length) return res;
  if (left > right) return res;
  return [left, right];
};

  const find = function (nums, target, findLeft) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
      
    while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] > target || (findLeft && nums[mid] === target)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return findLeft ? left : right;
};
