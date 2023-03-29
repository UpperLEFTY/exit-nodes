/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let s1 = [p];
    let s2 = [q];
    let ll = null;
    let rr = null;
    
    
    while (s1.length && s2.length) {
        ll = s1.pop();
        rr = s2.pop();
        
        
     if (!ll && !rr) continue;
        if (!ll || !rr) return false;
        if (ll.val !== rr.val) return false;
        
        s1.push(ll.left);
        s1.push(ll.right);
        s2.push(rr.left);
        s2.push(rr.right);
    }
        return true;
};