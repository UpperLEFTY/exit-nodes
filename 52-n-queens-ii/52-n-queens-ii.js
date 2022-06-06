/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
   let count = 0;
   const calc = Math.pow(2, n) - 1;
    
   const innerRecurse = function(ld, col, rd) {
  //All columns are occupied,
  //so the solution must be complete
  if (col === calc) {
    count++;
    return;
  }
  //Gets a bit sequence with "1"s
  //whereever there is an open "slot"
  let poss = ~(ld | rd | col);
  //Loops as long as there is a valid
  //place to put another queen.
  while (poss & calc) {
    let bit = poss & -poss;
    poss -= bit;
    innerRecurse((ld | bit) >> 1, col | bit, (rd | bit) << 1);
  }
};
innerRecurse(0, 0, 0);
return count;
}