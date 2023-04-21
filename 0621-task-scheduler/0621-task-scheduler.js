/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function(tasks, n) {
  const hash = {};
  for(let task of tasks) {
    hash[task] = hash[task] + 1 || 1
  }
  let max = 0, count = 0;
  for(let el in hash) {
    if(hash[el] > max) {
      max = hash[el];
      count = 1
    } else if(hash[el] === max) {
      count++;
    }
  }
  return Math.max((max - 1) *  (n + 1)  +  count, tasks.length)
};