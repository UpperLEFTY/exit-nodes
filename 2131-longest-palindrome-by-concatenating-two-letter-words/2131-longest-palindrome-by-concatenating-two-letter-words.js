/**
 * @param {string[]} words
 * @return {number}
 */
const longestPalindrome = function (words) {
  const mapOccurences = words.reduce(
    (acc, el) => acc.set(el, (acc.get(el) || 0) + 1),
    new Map()
  )

  let res = 0
  let occurencesOfSame = []

  for (const word of mapOccurences.keys()) {
    const reversedWord = word[1] + word[0]
    const isSame = word === reversedWord
    const occurence = mapOccurences.get(reversedWord)

    if (!occurence) continue

    if (isSame) {
      occurencesOfSame.push(occurence)
    } else {
      res +=
        Math.min(mapOccurences.get(word), mapOccurences.get(reversedWord)) * 4
    }

    mapOccurences.set(word, 0)
    mapOccurences.set(reversedWord, 0)
  }

  occurencesOfSame.sort((a, b) => b - a)
  for (
    let oddOccurenceProcessed = false, i = 0;
    i < occurencesOfSame.length;
    i++
  ) {
    if (occurencesOfSame[i] % 2 === 0) {
      res += occurencesOfSame[i] * 2
      continue
    }

    res += (!oddOccurenceProcessed ? 2 : 0) + (occurencesOfSame[i] - 1) * 2
    oddOccurenceProcessed = true
  }

  return res
}