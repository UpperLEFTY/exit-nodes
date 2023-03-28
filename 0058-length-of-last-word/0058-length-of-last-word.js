/**
 * @param {string} s
 * @return {number}
 */
// const lengthOfLastWord = function(s) {
//     const str = s.trim();
//     let len = str.length;
//     let i = len - 1;
//     while (i >= 0 && str[i] !== ' ') i--;
//     return len - 1 - i;
// };

        /** ANOTHER SOLUTION */

const lengthOfLastWord = function(s) {
  const arr = s.split(" ");
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length > 0) return arr[i].length;
  }
  return 0;
};
