"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
  def cloneGraph(self, node: 'Node') -> 'Node':
    if not node:
      return None
    if node in self.map:
      return self.map[node]

    newNode = Node(node.val, [])
    self.map[node] = newNode

    for neighbor in node.neighbors:
      self.map[node].neighbors.append(self.cloneGraph(neighbor))

    return newNode

  map = {}

        