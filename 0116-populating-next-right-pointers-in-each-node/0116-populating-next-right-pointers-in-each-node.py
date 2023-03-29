"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
  def connect(self, root: 'Node') -> 'Node':
    node = root  # The node just above current needling

    while node and node.left:
      dummy = Node(0)  # Dummy node before needling
      # Needle children of node
      needle = dummy
      while node:
        needle.next = node.left
        needle = needle.next
        needle.next = node.right
        needle = needle.next
        node = node.next
      node = dummy.next  # Move node to the next level

    return root
