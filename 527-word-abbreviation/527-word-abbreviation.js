/**
 * @param {string[]} words
 * @return {string[]}
 */
var wordsAbbreviation = function(words) {
   const result = []
  const prefixLen = new Array(words.length).fill(1)
 for (let i = 0; i < words.length; i++) {
   result[i] = makeAbbr(words[i], 1)
 }
 for (let i = 0; i < words.length; i++) {
   while (true) {
     const set = new Set()
     for (let j = i + 1; j < words.length; j++) {
       if (result[i] === result[j]) {
         set.add(j)
       }
     }
     if (set.size === 0) {
       break
     }
     set.add(i)
     for (let val of set.values()) {
       result[val] = makeAbbr(words[val], ++prefixLen[val])
     }
   }
 }
 return result
}
function makeAbbr(s, prefixLen) {
 if (prefixLen >= s.length - 2) {
   return s
 }
 let str = ''
 str += s.slice(0, prefixLen)
 str += s.length - 1 - prefixLen
 str += s[s.length - 1]
 return str
}