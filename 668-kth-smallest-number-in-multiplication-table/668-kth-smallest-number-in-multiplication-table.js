/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findKthNumber = function(m, n, k) {
 let left = 1;
let right = m * n;
while (left < right) {
  const mid = Math.floor((left + right) / 2);
  const num = count(m, n, mid);
  if (num < k) left = mid + 1;
  else right = mid;
}
return left;
};
function count(m, n, target) {
let res = 0;
let j = n;
for (let i = 1; i <= m; i++) {
  while (i * j > target) j--
  res += j;
}
return res;  
};