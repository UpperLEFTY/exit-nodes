/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// const spiralOrder = function(matrix) {
//   let n = matrix.length;
//   let m = (matrix[0] || []).length;
//   let res = [];
//   let x1 = 0;
//   let x2 = m - 1;
//   let y1 = 0;
//   let y2 = n - 1;
//   while (x1 <= x2 && y1 <= y2) {
//     for (let x = x1; x <= x2; x++) res.push(matrix[y1][x]);
//     for (let y = y1 + 1; y <= y2; y++) res.push(matrix[y][x2]);
//     if (x1 < x2 && y1 < y2) {
//       for (let x = x2 - 1; x > x1; x--) res.push(matrix[y2][x]);
//       for (let y = y2; y > y1; y--) res.push(matrix[y][x1]);
//     }
//     x1++;
//     x2--;
//     y1++;
//     y2--;
//   }
//   return res;
// };

            /** ANOTHER SOLUTION */ 

const spiralOrder = function(matrix) {
    const res = []
    let dir = 'top'
    while(matrix.length) {
        switch (dir) {
            case 'top':
                res.push(...matrix.shift())
                dir = 'right'
                break;
            case 'right':
                for(let i = 0; i < matrix.length - 1; ) {
                    res.push(matrix[i].pop())
                    if (matrix[i].length === 0) {
                        matrix.splice(i, 1)
                    } else {
                        i++
                    }
                }
                dir = 'bottom'
                break;
            case 'bottom':
                res.push(...matrix.pop().reverse())
                dir = 'left'
                break;
            case 'left':
                for(let i = matrix.length - 1; i >= 0; i--) {
                    res.push(matrix[i].shift())
                    if (matrix[i].length === 0) {
                        matrix.splice(i, 1)
                    }
                }
                dir = 'top'
                break;
        }
    }
    return res
};
