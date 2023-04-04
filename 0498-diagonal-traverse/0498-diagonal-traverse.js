/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const findDiagonalOrder = function(matrix) {
  if (matrix.length == 0) return []
  let r = 0,
    c = 0,
    m = matrix.length,
    n = matrix[0].length,
    arr = new Array(m * n)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = matrix[r][c]
    if ((r + c) % 2 === 0) {
      // moving up
      if (c === n - 1) {
        r++
      } else if (r === 0) {
        c++
      } else {
        r--
        c++
      }
    } else {
      // moving down
      if (r === m - 1) {
        c++
      } else if (c === 0) {
        r++
      } else {
        r++
        c--
      }
    }
  }
  return arr
}
