/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = function(low, high) {
  let counter = 0;
    for (let i = low; i < high + 1; i++) {
        let number = i;
        let isOdd = false;
        let r = (number%2 !== 0);
        if (r) {
            counter += 1;
        }
    }

    return counter;

};
