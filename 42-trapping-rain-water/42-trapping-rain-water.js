/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
      const n = height.length
    if(n === 0) return 0
    let res = 0
    let l = 0, r = n - 1, leftMax = height[l], rightMax = height[r]
    while(l < r) {
      if(height[l] <= height[r]) {
        l++
        leftMax = Math.max(leftMax, height[l])
        res += (leftMax - height[l]) 
      } else {
        r--
        rightMax = Math.max(rightMax, height[r])
        res += rightMax - height[r]
      }
    }

    return res
};

    
//     let res = 0;
//     let left = 0;
//     let right = height.length - 1;
//     let leftMax = 0;
//     let rightMax = 0;
    
//     while (left < right) {
//     if (height[left] < height[right]) {
//       if (height[left] >= leftMax) {
//         leftMax = height[left];
//       } else {
//         res += leftMax - height[left];
//       }
//       left++;
//     } else {
//       if (height[right] >= rightMax) {
//         rightMax = height[right];
//       } else {
//         res += rightMax - height[right];
//       }
//       right--;
//     }
//   }

//   return res;
// };