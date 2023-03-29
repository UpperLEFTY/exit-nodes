/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
    return helper(nums, 0, nums.length - 1);
};

    let helper = function (nums, ll, rr) {
        if (ll > rr) return null; 
        let mid = Math.ceil((ll + rr) / 2);
        let root = new TreeNode(nums[mid]);
        root.left = helper(nums, ll, mid - 1);
        root.right = helper(nums, mid + 1, rr);
        return root;
    };