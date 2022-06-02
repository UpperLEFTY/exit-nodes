/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
//   return matrix.reduce((prev, next) => next.map((item, i) =>
//     (prev[i] || []).concat(next[i])
//   ), []);
// };
return matrix[0].map((col, i) => matrix.map(row => row[i]));
}