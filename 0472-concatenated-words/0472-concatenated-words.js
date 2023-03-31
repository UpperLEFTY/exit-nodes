/**
 * @param {string[]} words
 * @return {string[]}
 */

// const findAllConcatenatedWordsInADict = function (words) {
//   const pre = new Set()
//   words.sort((a, b) => a.length - b.length)
//   const res = []
//   for(let i = 0; i < words.length; i++) {
//     if(valid(words[i], pre)) {
//       res.push(words[i])
//     }
//     pre.add(words[i])
//   }

//   return res

//   function valid(str, set) {
//     if(set.size === 0) return false
//     const dp = Array(str.length + 1).fill(false)
//     dp[0] = true
//     for(let i = 1; i <= str.length; i++) {
//       for(let j = 0; j < i; j++) {
//         if(!dp[j]) continue
//         if(set.has(str.slice(j, i))) {
//           dp[i] = true
//           break
//         }
//       }
//     }
    
//     return dp[str.length]
//   }
// }




//                     ANOTHER SOLUTION

/**
 * @param {string[]} words
 * @return {string[]}
 */

const findAllConcatenatedWordsInADict = function (words) {
  const set = new Set(words)
  const res = []
  const map = new Map()
  for (let w of words) {
    if (w.length < 2) continue
    if (dfs(w, set, map, 0)) res.push(w)
  }
  return res

  function dfs(word, set, map, pos) {
    if (pos > 0 && map.get(word)) return map.get(word)
    if (pos > 0 && set.has(word)) {
      map.set(word, true)
      return map.get(word)
    }
    for (let i = 1; i < word.length; i++) {
      const left = word.slice(0, i)
      const right = word.slice(i)
      if (set.has(right) && dfs(left, set, map, pos + 1)) {
        map.set(word, true)
        return map.get(word)
      }
    }

    map.set(word, false)
    return false
  }
}