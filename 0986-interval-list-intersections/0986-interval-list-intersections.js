/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
const intervalIntersection = function(firstList, secondList) {
    const intersection = []
    let i = (j = 0)
    while (i < firstList.length && j < secondList.length) {
        const min  = Math.max(firstList[i][0], secondList[j][0])
        const max = Math.min(firstList[i][1], secondList[j][1])
        if (min <= max) intersection.push([min, max])
        firstList[i][1] > secondList[j][1] ? j++ : i++
    }
    return intersection
};
