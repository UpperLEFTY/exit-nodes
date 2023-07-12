/**
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
const maximizeSweetness = function(sweetness, k) {
    let l = 1, r = 10 ** 9
    while(l < r) {
        const mid = r - Math.floor((r - l) / 2)
        if(valid(mid)) l = mid
        else r = mid - 1
    }
    return l
    
    function valid(mid) {
        let res = 0, cur = 0
        const n = sweetness.length
        for(let i = 0; i < n; i++) {
            const e = sweetness[i]
            cur += e
          if(cur >= mid) {
              res++
              cur = 0
          }
        }
        return res >= k + 1
    }
};