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
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
  const res = []
  let node = root
  const stack = []
  while (node || stack.length) {
    if (node) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop()
      if (res.length === k) {
        if (Math.abs(res[0] - target) <= Math.abs(node.val - target)) {
          return res
        }
        res.shift()
      }
      res.push(node.val)
      node = node.right
    }
  }
  return res
}
