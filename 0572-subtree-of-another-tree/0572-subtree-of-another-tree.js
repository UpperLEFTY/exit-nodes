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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function(s, t) {
    if (s == null) return false 
    if (isSame(s, t)) return true
    return isSubtree(s.left, t) || isSubtree(s.right, t)      
};

function isSame(s, t) {
    if (s == null && t == null) return true
    if (s == null || t == null) return false
    if (s.val !== t.val) return false
    return isSame(s.left, t.left) && isSame(s.right, t.right)
}
