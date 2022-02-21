/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function(image, x, y) {
 let top = x,
    bottom = x
  let left = y,
    right = y
  function dfs(x, y) {
    if (
      x < 0 ||
      y < 0 ||
      x >= image.length ||
      y >= image[0].length ||
      image[x][y] === '0'
    )
      return
    image[x][y] = '0'
    top = Math.min(top, x)
    bottom = Math.max(bottom, x)
    left = Math.min(left, y)
    right = Math.max(right, y)
    dfs(x + 1, y)
    dfs(x - 1, y)
    dfs(x, y - 1)
    dfs(x, y + 1)
  }

  if (image.length === 0 || image[0].length === 0) return 0
  dfs(x, y)
  return (right - left + 1) * (bottom - top + 1)
};
