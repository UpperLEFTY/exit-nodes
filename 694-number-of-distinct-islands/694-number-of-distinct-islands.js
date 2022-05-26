/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
    if (!grid.length) return 0;
  const pattern = new Set();
  grid.forEach((rows, row) => {
    rows.forEach((val, col) => {
      if (val === 1) pattern.add(depthFirst(grid, row, col, "o"));
    });
  });
  return pattern.size;
};

function depthFirst(graph, row, col, di) {
  if (graph[row] && graph[row][col]) {
    graph[row][col] = 0;
    let p =
      di +
      depthFirst(graph, row + 1, col, "d") +
      depthFirst(graph, row - 1, col, "u") +
      depthFirst(graph, row, col + 1, "r") +
      depthFirst(graph, row, col - 1, "l") +
      "b";
    return p;
  } else return "";
}
