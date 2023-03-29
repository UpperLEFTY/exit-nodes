/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
const res = [];
for (let row = 0; row < numRows; row += 1) {
  if (row === 0) {
    res.push([1]);
    continue;
  }
  if (row === 1) {
    res.push([1, 1]);
    continue;
  }
  const newRow = [];
  const maxIdx = row;
  for (let i = 0; i <= maxIdx; i += 1) {
    if (i === 0 || i === maxIdx) {
      newRow.push(1);
    } else {
      newRow.push(res[row - 1][i - 1] + res[row - 1][i]);
    }
  }
  res.push(newRow);
}
return res;
};