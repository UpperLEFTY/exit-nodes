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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function(root, key) {
  if (root == null) {
        return root;
    }
    const { val, left, right } = root;
    if (val > key) {
        root.left = deleteNode(left, key);
    } else if (val < key) {
        root.right = deleteNode(right, key);
    } else {
        if (left == null && right == null) {
            root = null;
        } else if (left == null || right == null) {
            root = left || right;
        } else {
            if (right.left == null) {
                right.left = left;
                root = right;
            } else {
                let minPreNode = right;
                while (minPreNode.left.left != null) {
                    minPreNode = minPreNode.left;
                }
                const minVal = minPreNode.left.val;
                root.val = minVal;
                minPreNode.left = deleteNode(minPreNode.left, minVal);
            }
        }
    }
    return root;
};