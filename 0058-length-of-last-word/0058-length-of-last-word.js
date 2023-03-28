/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    const str = s.trim();
    let len = str.length;
    let i = len - 1;
    while (i >= 0 && str[i] !== ' ') i--;
    return len - 1 - i;
};