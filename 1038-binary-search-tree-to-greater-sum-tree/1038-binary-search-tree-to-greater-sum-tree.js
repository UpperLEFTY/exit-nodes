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
 * @return {TreeNode}
 */
const bstToGst = function(root) {
   const arr = []
  dfs(root, arr)
  let v = 0
  for(let i = arr.length - 1; i >= 0; i--) {
    arr[i].val = arr[i].val + v
    v = arr[i].val
  }
  return root
};

function dfs(node, arr) {
  if(node == null) return
  dfs(node.left, arr)
  arr.push(node)
  dfs(node.right, arr)
}