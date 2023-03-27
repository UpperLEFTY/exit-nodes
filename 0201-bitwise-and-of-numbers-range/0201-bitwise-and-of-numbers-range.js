/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const rangeBitwiseAnd = function(left, right) {
 /**   while(left < right) right = right & (right - 1);
 return right;
};
*/
    
   /** another solution */
    
  let s = 0
  while(left !== right) {
    left >>= 1
    right >>= 1
    s++
  }
  return left << s
};
