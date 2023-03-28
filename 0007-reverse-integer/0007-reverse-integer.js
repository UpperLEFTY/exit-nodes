/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    const reversedInt = Math.abs(x).toString().split('').reverse().join('');
    
    if (reversedInt > 2**31) return 0;
    
    return reversedInt * Math.sign(x);
    
};