/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
 const set = new Set(wordDict)
  return helper(s, 0, set)
}

function helper(s, idx, dict) {
  if(idx === s.length) return []
  const res = []
  for(let i = idx; i < s.length; i++) {
    const tmp = s.slice(idx, i + 1)
    if(dict.has(tmp)) {
      const arr = helper(s, i + 1, dict)
      if(i + 1 >= s.length) {
        res.push(tmp)
      } else if(arr.length) {
        for(let e of arr) {
          res.push(tmp + ' ' + e)
        }
      }
    }
  }
  return res
}
