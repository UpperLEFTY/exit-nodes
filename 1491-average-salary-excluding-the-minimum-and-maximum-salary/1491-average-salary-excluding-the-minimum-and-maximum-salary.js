/**
 * @param {number[]} salary
 * @return {number}
 */
const average = function(salary) {
    let sum = salary[0];
    let min = salary[0];
    let max = salary[0];
    for (let i = 1; i < salary.length; i++) {
        min = salary[i] < min ? salary[i] : min;
        max = salary[i] > max ? salary[i] : max;
        sum += salary[i];
    }
    return (sum - min - max) / (salary.length - 2);
};