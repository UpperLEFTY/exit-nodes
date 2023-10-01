/**
 * @param {number} n
 * @return {number}
 */
const cache = {}
const fib = function(n) {
   if(cache[n]) return cache[n]
   if(n === 0) return 0
   if(n === 1) return 1
    let res = fib(n - 1) + fib(n - 2)
    cache[n] = res
    return res
};