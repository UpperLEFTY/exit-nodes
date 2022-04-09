/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var kSimilarity = function(s1, s2) {
  if (s1 === s2) return 0
 let arr = [[s2, 0]]
 while (arr.length > 0) {
   let len = arr.length
   for (let i = 0; i < len; i++) {
     let [cur, step] = arr.shift()
     for (let i = 0; i < cur.length; i++) {
       if (cur[i] === s1[i]) continue
       for (let j = i + 1; j < cur.length; j++) {
         if (cur[j] !== s1[i]) continue
         let newStr =
           cur.substring(0, i) +
           cur[j] +
           cur.substring(i + 1, j) +
           cur[i] +
           cur.substring(j + 1)
         if (newStr === s1) return step + 1
         if (cur[i] === s1[j]) arr.unshift([newStr, step + 1])
         else arr.push([newStr, step + 1])
       }
       break
     }
   }
 }
}