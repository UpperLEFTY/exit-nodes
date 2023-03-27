/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const rangeBitwiseAnd = function(left, right) {
     while(left < right) right = right & (right - 1);
 return right;
};