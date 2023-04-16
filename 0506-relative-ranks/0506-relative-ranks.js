/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function(scores) {
  const scoreIndexMapping = {}
  for (let index = 0; index < scores.length; ++index) {
    scoreIndexMapping[scores[index]] = index
  }
  let rank = scores.length
  for (let score in scoreIndexMapping) {
    const index = scoreIndexMapping[score]
    if (3 < rank) {
      scores[index] = '' + rank
    } else if (3 == rank) {
      scores[index] = 'Bronze Medal'
    } else if (2 == rank) {
      scores[index] = 'Silver Medal'
    } else {
      scores[index] = 'Gold Medal'
    }
    --rank
  }

  return scores
}
