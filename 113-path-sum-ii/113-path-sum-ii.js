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
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = function(root, sum) {
    const result = [];
    backtrack(root, sum, [], result);
    return result;
};

const backtrack = function(root, sum, temp, result) {
    if (root == null) {
        return;
    }
    temp.push(root.val);
    let newSum = sum - root.val;
    if (root.left == null && root.right == null) {
        if (newSum === 0) {
            result.push([...temp]);
        }
        temp.pop();
        return;
    }
    backtrack(root.left, newSum, temp, result);
    backtrack(root.right, newSum, temp, result);
    temp.pop();
}
