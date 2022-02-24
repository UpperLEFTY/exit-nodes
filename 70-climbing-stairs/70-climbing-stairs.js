/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let climb = [0, 1];
    for (let i = 0; i < n; i++) {
        climb = [climb[1], climb[0] + climb[1]];
    }
    return climb[1];
};