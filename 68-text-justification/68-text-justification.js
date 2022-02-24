/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
 const res = []
  let row = []
  let numOfChars = 0
  
  for (let w of words) {
    if (numOfChars + w.length + row.length > maxWidth) {
      for(let i = 0; i < maxWidth - numOfChars; i++) {
        if(row.length === 1) {
          row[0] += ' '
        } else {
          row[i % (row.length - 1)] += ' '
        }
      }
      res.push(row.join(''))
      row = []
      numOfChars = 0
    }
    row.push(w)
    numOfChars += w.length
  }
    const numOfSpace = maxWidth - numOfChars - (row.length - 1)
  let tail = ''
  for(let i = 0; i < numOfSpace; i++) tail += ' '
  res.push(row.join(' ') + tail)

  return res
};
