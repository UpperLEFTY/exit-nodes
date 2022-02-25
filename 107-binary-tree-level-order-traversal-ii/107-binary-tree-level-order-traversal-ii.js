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
var levelOrderBottom = function(root) {
     if (!root) return []
  const currentLevelNodes = [root]
  const result = []
  while (currentLevelNodes.length > 0) {
    const count = currentLevelNodes.length
    const currentLevelValues = []
    for (let i = 0; i < count; i++) {
      const node = currentLevelNodes.shift()
      currentLevelValues.push(node.val)
      if (node.left) currentLevelNodes.push(node.left)
      if (node.right) currentLevelNodes.push(node.right)
    }
    result.unshift(currentLevelValues)
  }
  return result
};
