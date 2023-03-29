// class Solution {
//  public:
//   int numDistinct(string s, string t) {
//     const int m = s.length();
//     const int n = t.length();
//     vector<vector<unsigned long>> dp(m + 1, vector<unsigned long>(n + 1));

//     for (int i = 0; i <= m; ++i)
//       dp[i][0] = 1;

//     for (int i = 1; i <= m; ++i)
//       for (int j = 1; j <= n; ++j)
//         if (s[i - 1] == t[j - 1])
//           dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
//         else
//           dp[i][j] = dp[i - 1][j];

//     return dp[m][n];
//   }
// };

        // ANOTHER SOLUTION 


class Solution {
 public:
  int numDistinct(string s, string t) {
    const int m = s.length();
    const int n = t.length();
    vector<unsigned long> dp(n + 1);
    dp[0] = 1;

    for (int i = 1; i <= m; ++i)
      for (int j = n; j >= 1; --j)
        if (s[i - 1] == t[j - 1])
          dp[j] += dp[j - 1];

    return dp[n];
  }
};
