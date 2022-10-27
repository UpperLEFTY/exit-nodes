/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
const largestOverlap = function(img1, img2) {
    const n = img1.length
    const count = constructMatrix(2*n, 2*n, 0)
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (img1[i][j] === 1) {
          for(let ii = 0; ii < n; ii++) {
            for(let jj = 0; jj < n; jj++) {
              if(img2[ii][jj] === 1) {
                count[i-ii+n][j-jj+n] += 1
              }
            }
          }
        }
      }
    }
    let ans = 0

    for(let row of count) {
      for(let v of row) {
        ans = Math.max(ans, v)
      }
    }
    return ans
};

function constructMatrix(row, col, init = 0) {
  const matrix = []
  for(let i = 0; i < row; i++) {
    matrix[i] = []
    for(let j = 0; j < col; j++) {
      matrix[i][j] = init
    }
  }
  return matrix
}
