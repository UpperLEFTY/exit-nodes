/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function(s) {
  let result = 0;
  const A = 'A'.charCodeAt(0)
  for (let i = 0; i < s.length; result = result * 26 + (s.charCodeAt(i) - A + 1), i++);
  return result;
};


// Another Solution JS