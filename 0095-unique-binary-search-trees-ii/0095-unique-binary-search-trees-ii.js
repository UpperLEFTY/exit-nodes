/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = function(n) {
 if (n === 0) return []
 return genTreeList(1, n)
}
function genTreeList(start, end) {
 const list = []
 if (start > end) list.push(null)
 for (let idx = start; idx <= end; idx++) {
   const leftList = genTreeList(start, idx - 1)
   const rightList = genTreeList(idx + 1, end)
   for (let left of leftList) {
     for (let right of rightList) {
       const root = new TreeNode(idx)
       root.left = left
       root.right = right
       list.push(root)
     }
   }
 }
 return list
}