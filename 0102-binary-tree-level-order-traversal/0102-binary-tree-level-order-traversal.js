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
 * @return {number[][]}
 */
const levelOrder = function(root) {
  const res = [];
  if (root == null) return res;
  let next = [root];
  while (next.length > 0) {
    next = tree(res, next);
  }
  return res;
};

function tree(res, nodeArr) {
  const arr = [];
  const nextLevelNodes = [];
  for (let i = 0; i < nodeArr.length; i++) {
    arr.push(nodeArr[i].val);
    if (nodeArr[i].left) {
      nextLevelNodes.push(nodeArr[i].left);
    }
    if (nodeArr[i].right) {
      nextLevelNodes.push(nodeArr[i].right);
    }
  }
  if (arr.length) res.push(arr);
  return nextLevelNodes;
};