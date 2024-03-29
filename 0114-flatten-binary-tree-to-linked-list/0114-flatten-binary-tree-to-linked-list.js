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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function(root) {
    helper(root);
};

let helper = function (root) {
  if (!root) return null;   
 let leftLast = helper(root.left);
 let rightLast = helper(root.right);

  if (root.left) {
    leftLast.right = root.right;
    root.right = root.left;
  }
  root.left = null;

  return rightLast || leftLast || root;
};