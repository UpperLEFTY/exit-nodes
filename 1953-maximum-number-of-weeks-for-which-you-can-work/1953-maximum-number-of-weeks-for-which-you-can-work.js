/**
 * @param {number[]} milestones
 * @return {number}
 */
const numberOfWeeks = function(milestones) {
  const max = Math.max(...milestones)
  let sum = 0
  for(const element of milestones) {
    sum += element
  }
  const res = sum - max
  
  return Math.min(sum, res * 2 + 1)
};
