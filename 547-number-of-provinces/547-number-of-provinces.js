/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function(isConnected) {
  let count = 0
  const visited = {}
  const dfs = function (isConnected, i) {
    for (let j = 0; j < isConnected[i].length; j++) {
      if (isConnected[i][j] == 1 && !visited[j]) {
        visited[j] = true
        dfs(isConnected, j)
      }
    }
  }
  for (let i = 0; i < isConnected.length; i++) {
    if (!visited[i]) {
      dfs(isConnected, i)
      count++
    }
  }
  return count
}