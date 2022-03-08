/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity)
}
function helper(root, minValue, maxValue) {
  if (!root) return true
  if (root.val <= minValue || root.val >= maxValue) {
    return false
  }
  let leftSide = helper(root.left, minValue, root.val)
  let rightSide = helper(root.right, root.val, maxValue)
  return leftSide && rightSide
}