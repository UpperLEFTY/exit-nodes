/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
      const myObject = {};
    for (let i = 0; i < nums.length; i++) {
        const completed = target - nums[i];
        if(myObject.hasOwnProperty(completed)) {
            return [myObject[completed], i];
        }
        myObject[nums[i]] = i;
    }
};