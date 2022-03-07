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
var findLeaves = function(root) {
  const res = []
  dfs(root, res)
  return res
};

function dfs(node, res) {
  if(node == null) return -1
  const i = 1 + Math.max(dfs(node.left, res), dfs(node.right, res))
  if(!res[i]) res[i] = []
  res[i].push(node.val)
  return i
}
