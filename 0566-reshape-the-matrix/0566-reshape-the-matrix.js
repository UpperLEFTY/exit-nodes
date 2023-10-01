/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function(mat, r, c) {
  if (isValid(mat, r, c) === false) {
    return mat;
  }
  const arr = [];
  mat.forEach(el => arr.push(...el));
  const res = [];
  for (let start = 0; start < arr.length; start = start + c) {
    res.push(arr.slice(start, start + c));
  }
  return res;
};

function isValid(mat, r, c) {
  if (mat.length * mat[0].length !== r * c) {
    return false;
  } else {
    return true;
  }
}

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4));
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4));
