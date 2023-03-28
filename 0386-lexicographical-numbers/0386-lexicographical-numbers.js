/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = function(n) {
  function getNumberByOrder(start, end) {
    for (let i = start; i <= end; i++) {
      if (i > n) {
        break
      }
      res.push(i)
      getNumberByOrder(i * 10, i * 10 + 9)
    }
  }
  const res = []
  getNumberByOrder(1, 9)
  return res
}
