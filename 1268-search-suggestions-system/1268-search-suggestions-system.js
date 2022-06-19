/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
     let resList = [];
    products.sort()
    for (let i = 0; i < searchWord.length; i++) {
        let listString = [];
        for (let j = 0; j < products.length; j++) {
            if (listString.length < 3 && i < products[j].length
    && (products[j].substring(0, i + 1)===(searchWord.substring(0, i + 1)))) {
                listString.push(products[j]);
            }
        }
        // if (listString.size() > 0) {
            resList.push(listString);
        // }
    }
    return resList;
}

