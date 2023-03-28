/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
const canMeasureWater = function (jug1Capacity, jug2Capacity, targetCapacity) {
  return targetCapacity === 0 || (jug1Capacity + jug2Capacity >= targetCapacity &&  targetCapacity % gcd(jug1Capacity, jug2Capacity) === 0) 
 }

function gcd(jug1Capacity, jug2Capacity) {
  if (jug2Capacity === 0) {
    return jug1Capacity
  }
  return gcd(jug2Capacity, jug1Capacity % jug2Capacity)
 }
