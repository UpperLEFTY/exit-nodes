/**
 * @param {number} n
 * @return {boolean}
 */
const reorderedPowerOf2 = function(n) {
    const a = count(n);
   for (let i = 0; i < 31; i++) {
       if(arrayEqual(a, count(1 << i))) return true;
   }
       return false;
};
    function count(num) {
        const res = [];
        while (num > 0) {
            addOne(res, num % 10);
            num = parseInt(num / 10);
        }
        return res;
    }
    
    function addOne(arr, index) {
        if(arr[index]) {
            arr[index] +=1;
            return;
        }
        arr[index] = 1;
    }
    
    function arrayEqual(a1, a2) {
        return JSON.stringify(a1) === JSON.stringify(a2)
    }
    