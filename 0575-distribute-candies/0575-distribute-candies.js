/**
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = function(candies) {
  const uniqNum = candies.filter((el, idx, arr) => arr.indexOf(el) === idx)
    .length;
  const halfNum = candies.length / 2;
  return halfNum > uniqNum ? uniqNum : halfNum;
};
