/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
 let x1 = 0;
  let x2 = n - 1;
  let y1 = 0;
   let y2 = n - 1;
  let i = 0;
  let res = Array(n).fill(0).map(_ => Array(n));
  while (x1 <= x2 && y1 <= y2) {
    for (let x = x1; x <= x2; x++) res[y1][x] = ++i;
    for (let y = y1 + 1; y <= y2; y++) res[y][x2] = ++i;
    for (let x = x2 - 1; x > x1; x--) res[y2][x] = ++i;
    for (let y = y2; y > y1; y--) res[y][x1] = ++i;
    x1++;
    x2--;
    y1++;
    y2--;
  }
  return res;
};