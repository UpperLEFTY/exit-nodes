/**
 * @param {number} turnedOn
 * @return {string[]}
 */
const readBinaryWatch = function(turnedOn) {
  const output = []
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      const ones = Number(h * 64 + m)
        .toString(2)
        .split('')
        .filter(d => d === '1').length
      if (ones === turnedOn) output.push(m < 10 ? `${h}:0${m}` : `${h}:${m}`)
    }
  }
  return output
}
