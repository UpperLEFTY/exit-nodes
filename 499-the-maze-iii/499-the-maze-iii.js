/**
 * @param {number[][]} maze
 * @param {number[]} ball
 * @param {number[]} hole
 * @return {string}
 */
function findShortestWay(maze, ball, hole) {
  const H = maze.length
  const W = maze[0].length
  const costs = [...Array(H)].map(r => Array(W).fill(Number.MAX_VALUE))
  let minRoute = ''
  dfs(ball[0], ball[1], 0, '')
  return minRoute || 'impossible'

  function dfs(r, c, cost, route) {
    if (cost >= costs[r][c]) return
    costs[r][c] = cost
    for (let [dr, dc, d] of [
      [1, 0, 'd'],
      [0, -1, 'l'],
      [0, 1, 'r'],
      [-1, 0, 'u']
    ]) {
      let rr = r
      let cc = c
      let steps = 0
      for (
        ;
        rr + dr >= 0 &&
        rr + dr < H &&
        cc + dc >= 0 &&
        cc + dc < W &&
        maze[rr + dr][cc + dc] !== 1;

      ) {
        rr += dr
        cc += dc
        steps++
        if (rr === hole[0] && cc === hole[1]) {
          if (cost + steps < costs[hole[0]][hole[1]]) {
            costs[hole[0]][hole[1]] = cost + steps
            minRoute = route + d
          }
          return
        }
      }
      dfs(rr, cc, cost + steps, route + d)
    }
  }
}