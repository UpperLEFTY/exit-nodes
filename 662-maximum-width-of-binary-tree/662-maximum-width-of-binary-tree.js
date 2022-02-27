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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
 const mins = [0]
    let max = 0
  
    dfs(root, 0, 0)
    return max
  
    // depth first search
    function dfs(currentNode, depth, position) {
      if (!currentNode) return
      if (depth === mins.length) {
        mins[depth] = position
      }
  
      const delta = position - mins[depth]
      max = Math.max(max, delta + 1)
      dfs(currentNode.left, depth + 1, delta * 2)
      dfs(currentNode.right, depth + 1, delta * 2 + 1)
    }
  };
