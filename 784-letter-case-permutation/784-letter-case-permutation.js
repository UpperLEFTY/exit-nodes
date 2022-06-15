/**
 * @param {string} s
 * @return {string[]}
 */
const letterCasePermutation = function(s) {
    let res = []
    backtrack(res, "", 0, s)
    return res
};

const backtrack = (res, sol, depth, s) => {
    if (depth == s.length) {
        res.push(sol)
        return
    }
    const c = s[depth]
    if ("1234567890".indexOf(c) != - 1) {
        backtrack(res, sol+c, depth + 1, s)
    } else {
        backtrack(res, sol+c.toLowerCase(), depth + 1, s)
        backtrack(res, sol+c.toUpperCase(), depth + 1, s)
    }
}
