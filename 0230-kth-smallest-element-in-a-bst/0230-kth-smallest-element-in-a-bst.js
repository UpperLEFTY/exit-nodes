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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  const stack = []
  while (root !== null) {
    stack.push(root)
    root = root.left
  }
  while (k !== 0) {
    const n = stack.pop()
    k--
    if (k === 0) return n.val
    let right = n.right
    while (right !== null) {
      stack.push(right)
      right = right.left
    }
  }
  return -1
}
