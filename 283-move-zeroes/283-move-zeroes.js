/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) { 
  const len = nums.length;
  let l = len;
  for (let i = 0; i < l; ) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      l -= 1;
    } else {
      i += 1;
    }
  }
};

//   let len = nums.length;
//   let lastZeroIndex = -1;
//   for (let i = 0; i < len; i++) {
//     if (nums[i] === 0 && lastZeroIndex === -1) {
//       lastZeroIndex = i;
//     } else if (nums[i] !== 0 && lastZeroIndex !== -1) {
//       swap(nums, i, lastZeroIndex);
//       lastZeroIndex += 1;
//     }
//   }
// };

// let swap = function(arr, i, j) {
//   let tmp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = tmp;
// };