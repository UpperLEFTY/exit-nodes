class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        def check(mx):
            ws, count = 0, 1
            for w in weights:
                ws += w
                if ws > mx:
                    count += 1
                    ws = w
            return count <= days

        left, right = max(weights), sum(weights) + 1
        return left + bisect_left(range(left, right), True, key=check)