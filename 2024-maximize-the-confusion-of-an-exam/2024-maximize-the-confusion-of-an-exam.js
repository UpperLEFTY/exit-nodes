/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
const maxConsecutiveAnswers = function(answerKey, k) {
  let s = answerKey
  const freq = Array(26).fill(0), n = s.length, A = 'A'.charCodeAt(0)
  let res = 0, l = 0, r = 0, maxFreq = 0
  while(r < n) {
    maxFreq = Math.max(maxFreq, ++freq[s.charCodeAt(r) - A])
    if(r - l + 1 - maxFreq > k) {
      freq[s.charCodeAt(l) - A]--
      l++
    }
    res = Math.max(res, r - l + 1)
    r++
  }
  
  return res
};


