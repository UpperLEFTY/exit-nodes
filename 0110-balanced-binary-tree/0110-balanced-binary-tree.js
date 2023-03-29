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
 * @return {boolean}
 */
const isBalanced = function(root) {
    return helper(root, 0) >= 0;
};

    let helper = function (root, depth) {
        if (!root) return depth;
        let left = helper(root.left, depth + 1);
        let right = helper(root.right, depth + 1);
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
        return Math.max(left, right);
    };