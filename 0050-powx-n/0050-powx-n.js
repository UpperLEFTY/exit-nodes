/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function(x, n) {
  if (n === 0) return 1;
  if (n > 0) return pow(x, n);
  if (n < 0) return 1 / pow(x, -n);
};
    
const pow = function (x, n) {
  if (n === 1) return x;
  let num = pow(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return num * num;
  } else {
    return x * num * num;
  }
};
