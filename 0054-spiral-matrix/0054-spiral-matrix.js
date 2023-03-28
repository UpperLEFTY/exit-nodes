/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function(matrix) {
  let n = matrix.length;
  let m = (matrix[0] || []).length;
  let res = [];
  let x1 = 0;
  let x2 = m - 1;
  let y1 = 0;
  let y2 = n - 1;
  while (x1 <= x2 && y1 <= y2) {
    for (let x = x1; x <= x2; x++) res.push(matrix[y1][x]);
    for (let y = y1 + 1; y <= y2; y++) res.push(matrix[y][x2]);
    if (x1 < x2 && y1 < y2) {
      for (let x = x2 - 1; x > x1; x--) res.push(matrix[y2][x]);
      for (let y = y2; y > y1; y--) res.push(matrix[y][x1]);
    }
    x1++;
    x2--;
    y1++;
    y2--;
  }
  return res;
};