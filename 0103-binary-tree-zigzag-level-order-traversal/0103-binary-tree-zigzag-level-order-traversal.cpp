/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
// class Solution {
//  public:
//   vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
//     if (root == nullptr)
//       return {};

//     vector<vector<int>> ans;
//     deque<TreeNode*> q{{root}};
//     bool isLeftToRight = true;

//     while (!q.empty()) {
//       vector<int> currLevel;
//       for (int sz = q.size(); sz > 0; --sz)
//         if (isLeftToRight) {
//           TreeNode* node = q.front();
//           q.pop_front();
//           currLevel.push_back(node->val);
//           if (node->left)
//             q.push_back(node->left);
//           if (node->right)
//             q.push_back(node->right);
//         } else {
//           TreeNode* node = q.back();
//           q.pop_back();
//           currLevel.push_back(node->val);
//           if (node->right)
//             q.push_front(node->right);
//           if (node->left)
//             q.push_front(node->left);
//         }
//       ans.push_back(currLevel);
//       isLeftToRight = !isLeftToRight;
//     }

//     return ans;
//   }
// };


            // ANOTHER 


class Solution {
 public:
  vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
    if (root == nullptr)
      return {};

    vector<vector<int>> ans;
    queue<TreeNode*> q{{root}};
    bool isLeftToRight = true;

    while (!q.empty()) {
      const int size = q.size();
      vector<int> currLevel(size);
      for (int i = 0; i < size; ++i) {
        TreeNode* node = q.front();
        q.pop();
        const int index = isLeftToRight ? i : size - i - 1;
        currLevel[index] = node->val;
        if (node->left)
          q.push(node->left);
        if (node->right)
          q.push(node->right);
      }
      ans.push_back(currLevel);
      isLeftToRight = !isLeftToRight;
    }

    return ans;
  }
};

