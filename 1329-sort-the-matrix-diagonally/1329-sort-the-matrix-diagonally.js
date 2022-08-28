/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    let y = mat.length, x = mat[0].length - 1,
        diag = new Uint8Array(y), k
    for (let i = 2 - y; i < x; i++) {
        diag.fill(101), k = 0
        for (let j = 0; j < y; j++)
            if (i+j >= 0 && i+j <= x)
                diag[k++] = mat[j][i+j]
        diag.sort(), k = 0
        for (let j = 0; j < y; j++)
            if (i+j >= 0 && i+j <= x)
                mat[j][i+j] = diag[k++]
    }
    return mat
};