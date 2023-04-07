/**
 * @param {number[][]} grid
 * @return {number}
 */
const numEnclaves = function(grid) {
  let res = 0
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]]
  const visited = Array.from({ length: grid.length }, () =>
    new Array(grid[0].length).fill(false)
  )
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; grid[0] && col < grid[0].length; col++) {
      if (
        (row === 0 ||
          col === 0 ||
          row === grid.length - 1 ||
          col === grid[0].length - 1) &&
        grid[row][col] === 1
      ) {
        dfs(grid, row, col, visited, dirs)
      }
    }
  }
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; grid[0] && col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        res += 1
      }
    }
  }
  return res
}

function dfs(grid, row, col, v, dirs) {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    v[row][col] ||
    grid[row][col] === 0
  )
    return

  v[row][col] = true
  grid[row][col] = 0

  for (let dir of dirs) {
    dfs(grid, row + dir[0], col + dir[1], v, dirs)
  }
}
