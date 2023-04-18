/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function(grid) {
  const m = grid.length
  const n = grid[0].length
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  let r = 0
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === 1) r += h(i, j)
    }
  }
  
  return r
  
  function h(i, j) {
    let res = 0
    for(let d of dirs) {
      const nr = i + d[0]
      const nc = j + d[1]
      if(nr < 0 || nc < 0 || nr >= m || nc >= n || grid[nr][nc] === 0) res++
    }
    return res
  }
};
    
