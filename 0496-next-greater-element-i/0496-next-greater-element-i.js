/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function(findNums, nums) {
  const map = {};
  const stack = [];
  for (let num of nums) {
    while (stack.length && stack[stack.length - 1] < num) {
      let tmp = stack.pop();
      map[tmp] = num;
    }
    stack.push(num);
  }
  for (let i = 0; i < findNums.length; i++) {
    findNums[i] = map[findNums[i]] == null ? -1 : map[findNums[i]];
  }

  return findNums;
};