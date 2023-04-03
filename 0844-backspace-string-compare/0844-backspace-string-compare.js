/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function(s, t) {
    return chk(s) === chk(t)
};

function chk(str) {
    const s = []
    for (let i = 0, len = str.length; i < len; i++) {
        if(str[i] === '#') s.pop()
        else s.push(str[i])
    }
    return s.join('')
}