/**
 * @param {string} s
 * @return {number}
 */
const minimumDeletions = function(s) {
  let res = 0
  let cnt = 0
  for(let c of s) {
    if(c === 'a' && cnt > 0) {
      res++
      cnt--
    } else if(c === 'b') {
      cnt++
    }
  }
  
  return res
};
