/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
     if(s === '') return -1
 const map = new Map()
 for(let i = 0, len = s.length; i < len; i++) {
   if(!map.has(s[i])) map.set(s[i], [i, 0])
   map.get(s[i])[1] += 1
 }
 for(let [key, val] of map) {
   if(val[1] === 1) return val[0]
 }
 return -1
};