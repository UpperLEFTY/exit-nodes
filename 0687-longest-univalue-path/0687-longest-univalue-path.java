/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
  public int longestUnivaluePath(TreeNode root) {
    longestUnivaluePathDownFrom(root);
    return ans;
  }

  private int ans = 0;

  private int longestUnivaluePathDownFrom(TreeNode root) {
    if (root == null)
      return 0;

    final int l = longestUnivaluePathDownFrom(root.left);
    final int r = longestUnivaluePathDownFrom(root.right);
    final int arrowLeft = root.left != null && root.left.val == root.val ? l + 1 : 0;
    final int arrowRight = root.right != null && root.right.val == root.val ? r + 1 : 0;
    ans = Math.max(ans, arrowLeft + arrowRight);
    return Math.max(arrowLeft, arrowRight);
  }
}
