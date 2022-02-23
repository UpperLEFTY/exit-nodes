/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
 if (!node) return node
  const map = {}
  return traverse(node)
  function traverse(node) {
    if(!node) return node;
    if (!map[node.val]) {
      const newNode = new Node(node.val)
      map[node.val] = newNode
      newNode.neighbors = node.neighbors.map(traverse)
    }
    return map[node.val]
  }
};