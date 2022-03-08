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
 * @return {number[]}
 */
var findMode = function(root) {
 if(root == null) return []
  const hash = {}
  traverse(root, hash)
  const res = Object.entries(hash).sort((a, b) => b[1] - a[1])
  const result = [res[0][0]]
  for(let i = 1; i < res.length; i++) {
    if(res[i][1] === res[0][1]) result.push(res[i][0])
    else break
  }
  return result
};

function traverse(node, hash) {
  if(node === null) return
  hash[node.val] = Object.prototype.hasOwnProperty.call(hash, node.val) ? hash[node.val] + 1 : 1
  traverse(node.left, hash)
  traverse(node.right, hash)
}