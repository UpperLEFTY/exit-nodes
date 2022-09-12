/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
const bagOfTokensScore = function(tokens, power) {
 tokens.sort((a, b) => a -b)
 let res = 0,
  score = 0,
  i = 0,
  j = tokens.length - 1
while (i <= j) {
  if (power >= tokens[i]) {
    power -= tokens[i++]
    res = Math.max(res, ++score)
  } else if (score > 0) {
    score--
    power += tokens[j--]
  } else break
}
return res
};