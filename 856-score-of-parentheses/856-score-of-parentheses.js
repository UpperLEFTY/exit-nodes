/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
 let res = 0,
  bal = 0;
for (let i = 0; i < s.length; i++) {
  if (s.charAt(i) === "(") {
    bal += 1;
  } else {
    bal -= 1;
    if (s.charAt(i - 1) === "(") {
      res += 1 << bal;
    }
  }
}
return res;
};