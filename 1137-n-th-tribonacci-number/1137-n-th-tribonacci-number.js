/**
 * @param {number} n
 * @return {number}
 */
 //const hash = {}
const tribonacci = function(n) {
//   if(n === 0) return 0
//   if(n === 2 || n === 1) return 1
//   if(hash[n] != null) return hash[n]
//   let tmp = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1)
//   return hash[n] = tmp
// };

if (n < 2) return n
    let o = 0
    let p = 1
    let q = 1
   for (let count = 3; count <= n; count++) {
       let next = q + p + o
       o = p
       p = q
       q = next
   }
    return q
}
   