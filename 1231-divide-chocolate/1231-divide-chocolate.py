class Solution:
  def maximizeSweetness(self, sweetness: List[int], k: int) -> int:
    l = len(sweetness) // (k + 1)
    r = sum(sweetness) // (k + 1)

    # Returns true if you can eat m sweetness (min sweetness of each piece).
    def canEat(m: int) -> bool:
      pieces = 0
      sum = 0  # Running sum
      for s in sweetness:
        sum += s
        if sum >= m:
          pieces += 1
          sum = 0
      return pieces > k

    while l < r:
      m = (l + r) // 2
      if canEat(m):
        l = m + 1
      else:
        r = m

    return l if canEat(l) else l - 1
