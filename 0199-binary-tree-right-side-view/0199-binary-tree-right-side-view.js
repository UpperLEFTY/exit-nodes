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
const rightSideView = function(root) {
  const result = [];
  helper(root, 0, result);
  return result;
};

const helper = function (node, level, result) {
  if (!node) return;
  result[level] = node.val;
  helper(node.left, level + 1, result);
  helper(node.right, level + 1, result);
};