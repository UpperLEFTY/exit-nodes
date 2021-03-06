/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var rearrangeString = function(s, k) {
 if(k > 26) return ''
  const length = s.length
  const count = new Array(26).fill(0)
  const valid = new Array(26).fill(0)
  const a = 'a'.charCodeAt(0)
  for (let i = 0; i < length; i++) {
    count[s.charCodeAt(i) - a]++
  }
  let sb = ''
  for (let index = 0; index < length; index++) {
    let candidatePos = findValidMax(count, valid, index)
    if (candidatePos == -1) return ''
    count[candidatePos]--
    valid[candidatePos] = index + k
    sb += String.fromCharCode(a + candidatePos)
  }
  return sb
}

function findValidMax(count, valid, index) {
  let max = Number.MIN_VALUE
  let candidatePos = -1
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0 && count[i] > max && index >= valid[i]) {
      max = count[i]
      candidatePos = i
    }
  }
  return candidatePos
};

