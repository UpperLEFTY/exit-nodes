/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    while (left < right) {
        const mid = (left + right) >> 1;
        let s = 0;
        for (const x of piles) {
            s += Math.ceil(x / mid);
        }
        if (s <= h) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};