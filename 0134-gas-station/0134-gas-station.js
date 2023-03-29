/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function(gas, cost) {
  const len = gas.length
  let tank = 0
  let count = 0
  for (let i = 0; i < len * 2; i++) {
    let idx = i % len
    if (count === len) return idx
    count += 1
    tank += gas[idx] - cost[idx]
    if (tank < 0) {
      tank = 0
      count = 0
    }
  }
  return -1
}

