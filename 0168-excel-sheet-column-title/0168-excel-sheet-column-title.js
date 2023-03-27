/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function(columnNumber) {
    if (columnNumber === 0) {
        return ''
    }
    const res = [];
    const hash = {};
     ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('').forEach((el,idx) => {
     hash[idx] = el
 })
 while(columnNumber > 0) {
     columnNumber--;
     res.unshift(hash[columnNumber % 26]);
     columnNumber = Math.floor(columnNumber / 26);
 }
 return res.join('')
};