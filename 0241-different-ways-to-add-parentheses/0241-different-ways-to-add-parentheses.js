/**
 * @param {string} expression
 * @return {number[]}
 */
const diffWaysToCompute = function(expression) {
  const res = [];
  let left;
  let right;
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] < "0") {
      left = diffWaysToCompute(expression.slice(0, i));
      right = diffWaysToCompute(expression.slice(i + 1));
      for (let rl of left) {
        for (let rr of right) {
          switch (expression[i]) {
            case "+":
              res.push(rl + rr);
              break;
            case "-":
              res.push(rl - rr);
              break;
            case "*":
              res.push(rl * rr);
              break;
            default:
              break;
          }
        }
      }
    }
  }
  if (res.length === 0) {
    res.push(+expression);
  }
  return res;
};
