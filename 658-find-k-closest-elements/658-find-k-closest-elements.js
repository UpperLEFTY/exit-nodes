/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = function(arr, k, x) {
    let lo = 0,hi = arr.length-1
 while(hi-lo>=k){
     let left=Math.abs(x-arr[lo])
     let right=Math.abs(x-arr[hi])
     if(left<right){
         hi--
     }else if(left>right){
         lo++
     }else{
         hi--
     }
 }
 return arr.slice(lo,hi+1)
}
    
    