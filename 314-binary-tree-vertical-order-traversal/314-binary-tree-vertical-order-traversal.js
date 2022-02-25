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
 * @return {number[][]}
 */
var verticalOrder = function(root) {
  if (!root) return []
  let result = []
  function recurse(root, col, row) {
    if (!root) return
    recurse(root.left, col - 1, row + 1)
    recurse(root.right, col + 1, row + 1)
    result[col] = result[col] || []
    result[col][row] = result[col][row] || []
    result[col][row].push(root.val)
  }

  recurse(root, 100, 0)
  return result
    .filter(x => x)
    .map(row => row.reduce((acc, val) => acc.concat(val), []))
};


