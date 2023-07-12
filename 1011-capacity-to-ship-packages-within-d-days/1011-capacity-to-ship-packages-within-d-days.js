/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const shipWithinDays = function(weights, days) {
    let left = 0;
    let right = 0;
    for (const w of weights) {
        left = Math.max(left, w);
        right += w;
    }
    const check = (number) => {
        let ws = 0;
        let count = 1;
        for (const w of weights) {
            ws += w;
            if (ws > number) {
                ws = w;
                ++count;
            }
        }
        return count <= days;
    };
    while (left < right) {
        const mid = (left + right) >> 1;
        if (check(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};