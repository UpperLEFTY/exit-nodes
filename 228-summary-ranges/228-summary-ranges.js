/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (!nums || nums.length === 0) {
    return [];
  }
  const returnArray = [];
  let tempIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      if (tempIdx === i) {
        returnArray.push(nums[tempIdx].toString());
      } else {
        returnArray.push(nums[tempIdx].toString() + "->" + nums[i].toString());
      }
      tempIdx = i + 1;
    }
  }

  return returnArray;
};