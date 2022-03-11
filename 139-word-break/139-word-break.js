/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
   const len = s.length;
    const f = new Array(len + 1).fill(false);

    f[0] = true;

    for(let i = 1; i <= len; i++){
        for(let str of wordDict){
            if(str.length <= i 
               && f[i - str.length] 
               && s.slice(i - str.length, i) === str){
                f[i] = true;
                break;
            }
        }
    }

    return f[len];
};
