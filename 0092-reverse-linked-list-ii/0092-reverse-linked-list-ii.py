# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# class Solution:
#   def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
#     if left == 1:
#       return self.reverseN(head, right)

#     head.next = self.reverseBetween(head.next, left - 1, right - 1)
#     return head

#   def reverseN(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
#     if n == 1:
#       return head

#     newHead = self.reverseN(head.next, n - 1)
#     headNext = head.next
#     head.next = headNext.next
#     headNext.next = head
#     return newHead
                # ANOTHER SOLUTION  better Approach
    
class Solution:
  def reverseBetween(self, head: ListNode, m: int, n: int) -> ListNode:
    if not head and m == n:
      return head

    dummy = ListNode(0, head)
    prev = dummy

    for _ in range(m - 1):
      prev = prev.next  # Point to the node before the sublist [m, n]

    tail = prev.next  # Will be the tail of the sublist [m, n]

    # Reverse the sublist [m, n] one by one
    for _ in range(n - m):
      cache = tail.next
      tail.next = cache.next
      cache.next = prev.next
      prev.next = cache

    return dummy.next

    
