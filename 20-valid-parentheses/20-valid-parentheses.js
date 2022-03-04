/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   let stack = [];
    var len = s.length;
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for(let i = 0; i < len; i++) {
        if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};