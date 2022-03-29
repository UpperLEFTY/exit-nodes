/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
//  const hash = {};
//  for (let i = 0; i < nums.length; i++) {
//    if (hash.hasOwnProperty(nums[i])) {
//      return nums[i];
//    } else {
//      hash[nums[i]] = 1;
//    }
//  }
// };
    
  const len = nums.length
  if(len > 0) {
    let slow = nums[0]
    let fast = nums[nums[0]]
    while(slow !== fast) {
      slow = nums[slow]
      fast = nums[nums[fast]]
    }
    slow = 0
    while(slow !== fast) {
      slow = nums[slow]
      fast = nums[fast]
    }
    return slow
  }
  return -1;
};
