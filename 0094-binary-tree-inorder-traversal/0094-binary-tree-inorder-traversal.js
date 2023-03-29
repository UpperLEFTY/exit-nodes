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
// const inorderTraversal = function(root) {
//     let res = [];
//     sendhelp(root, res);
//     return res; 
// };

//   let sendhelp = function (root, res) {
//     if (!root) return;
//     if (root.left) sendhelp(root.left, res);
//     res.push(root.val);
//     if (root.right) sendhelp(root.right, res);
// }

        // ANOTHER SOLUTION 

const inorderTraversal = function(root) {
  const res = [];
  if (root == null) return res;
  traversal(root, res);
  return res;
};

function traversal(node, res) {
  if (node.left) {
    traversal(node.left, res);
  }
  res.push(node.val);
  if (node.right) {
    traversal(node.right, res);
  }
}
