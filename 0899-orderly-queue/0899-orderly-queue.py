class Solution:
  def orderlyQueue(self, S, K):
    if K > 1: return ''.join(sorted(S))
    ans = S
    for i in range(0, len(S)):
      ans = min(ans, S[i:] + S[0:i])
    return ans
