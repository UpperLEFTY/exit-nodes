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
var isSymmetric = function(root) {
    if (!root) return true;
    
    let p = [root.left];
    let q = [root.right];
    let ll = null;
    let rr = null;
    
    while (p.length && q.length) {
        ll = p.pop();
        rr = q.pop();
        
        if (!ll && !rr) continue;
        if (!ll || !rr) return false;
        if(ll.val !== rr.val) return false;
        
        p.push(ll.left);
        p.push(ll.right);
        q.push(rr.right);
        q.push(rr.left);
        
    }
    return true;
};