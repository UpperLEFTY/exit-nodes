/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
     let count = 0;
   const done = Math.pow(2, n) - 1;
const innerRecurse = function(ld, col, rd) {
    //if columns are occupied,
    //so the solution must be complete
    if (col === done) {
      count++;
      return;
    }
let poss = ~(ld | rd | col);
    while (poss & done) {
      let bit = poss & -poss;
      poss -= bit;
      innerRecurse((ld | bit) >> 1, col | bit, (rd | bit) << 1);
    }
  };

  innerRecurse(0, 0, 0);

  return count;
};
