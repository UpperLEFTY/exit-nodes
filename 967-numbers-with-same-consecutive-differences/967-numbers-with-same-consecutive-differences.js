/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const numsSameConsecDiff = function(n, k) {
    let nums = []
  function getNumbers(curNums){
        if(curNums[0] === 0) return
        
        if(curNums.length === n){
            nums.push(+curNums.join(''));
            return;
        }
        
        for(let i = 0; i < 10; i++){
            let last = curNums[curNums.length - 1];
            if(Math.abs(last - i) === k || curNums.length === 0){
                getNumbers([...curNums,i])
            }
        }
    }
    
    getNumbers([])
    
    return nums;
};