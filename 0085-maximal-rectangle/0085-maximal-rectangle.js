/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalRectangle = function(matrix) {
if (matrix == null || matrix.length === 0 || matrix[0] == null || matrix[0].length === 0) return 0;
    let m = matrix.length, n = matrix[0].length, maxArea = 0;

    const left = new Array(n).fill(0)
    const right = new Array(n).fill(n - 1)
    const height = new Array(n).fill(0)
    for (let i = 0; i < m; i++) {
        let rB = n - 1;
        for (let j = n - 1; j >= 0; j--) {
            if (matrix[i][j] === '1') {
                right[j] = Math.min(right[j], rB);
            } else {
                right[j] = n - 1;
                rB = j - 1;
            }
        }
        let lB = 0;
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                left[j] = Math.max(left[j], lB);
                height[j]++;
                maxArea = Math.max(maxArea, height[j] * (right[j] - left[j] + 1));
            } else {
                height[j] = 0;
                left[j] = 0;
                lB = j + 1;
            }
        }
    }
    return maxArea;
};
