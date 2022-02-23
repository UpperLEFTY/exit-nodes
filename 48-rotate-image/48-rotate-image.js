/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
     matrix.reverse()
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = i + 1; j < matrix[i].length; ++j) swap(matrix, i, j)
  }
}

function swap(matrix, i, j) {
  const tmp = matrix[j][i]
  matrix[j][i] = matrix[i][j]
  matrix[i][j] = tmp
};