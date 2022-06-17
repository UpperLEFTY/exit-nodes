/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  const len = nums.length
  for(let i = 0; nums[i] <= target; i++){
    if(nums[i] === target){
      return i
    }
  }
  for(let j = len - 1; nums[j] >= target; j--){
    if(nums[j] === target){
      return j
    }
  }
  return -1 
};
