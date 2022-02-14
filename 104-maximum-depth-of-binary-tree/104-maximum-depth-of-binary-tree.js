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
var maxDepth = function(root) {
    return sendhelp(root, 0);
};

 let sendhelp = function (root, level) {
     if (!root) return level;
     return Math.max(sendhelp(root.left, level + 1), sendhelp(root.right, level + 1));
 }