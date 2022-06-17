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
var minCameraCover = function(root) {
   let ans = 0
 const covered = new Set([null])
 dfs(root, null)
 return ans
 function dfs(node, parent) {
   if (node) {
     dfs(node.left, node)
     dfs(node.right, node)
     if (
       !(
         (parent || covered.has(node)) &&
         covered.has(node.left) &&
         covered.has(node.right)
       )
     ) {
       ans += 1
       covered
         .add(node)
         .add(parent)
         .add(node.left)
         .add(node.right)
     }
   }
 }
}