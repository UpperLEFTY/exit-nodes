/**
 * @param {string} text
 * @return {number}
 */
const longestDecomposition = function(text) {
    let n = text.length;
    if (n < 2) {
    return n;
}
for (let i = 1; i <= n >> 1; i++) {
    if (text.slice(0, i) === text.slice(n - i)) {
        return 2 + longestDecomposition(text.slice(i, n - i));
    }
}
return 1;
};