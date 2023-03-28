/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function(s) {
  let i = 0;
  let sign = 1;
  let res = 0;
  let len = s.length;
  let INT_MAX = 2147483647;
  let INT_MIN = - INT_MAX - 1;

  while (s[i] === ' ') i++;

  if (s[i] === '+' || s[i] === '-') {
    sign = s[i] === '+' ? 1 : -1;
    i++;
  }

  while (s[i] >= '0' && s[i] <= '9') {
    res = (res * 10) + (s[i] - 0);
    if (sign === 1 && res > INT_MAX) return INT_MAX;
    if (sign === -1 && res > INT_MAX + 1) return INT_MIN;
    i++;
  }

  return res * sign;
};

