/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
 const n = triangle.length;
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      let self = triangle[i][j]; //Get the (n+1) number in the (i+1)th row
      let res = Math.min(
        triangle[i + 1][j] + self,
        triangle[i + 1][j + 1] + self
      ); // Get the minimum value of the sum of the adjacent numbers in this row and the next row
      triangle[i][j] = res; //Update the (j+1)th number in the (i+1)th row
    }
  }

  return triangle[0][0];
};
