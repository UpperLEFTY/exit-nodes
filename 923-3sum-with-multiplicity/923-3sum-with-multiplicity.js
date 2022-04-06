/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
const hash = {};
 let res = 0;
 const mod = Math.pow(10, 9) + 7;
 for (let i = 0; i < arr.length; i++) {
   res += hash[target - arr[i]] >= 0 ? hash[target - arr[i]] : 0;
   res %= mod;
   for (let j = 0; j < i; j++) {
     hash[arr[i] + arr[j]] = (hash[arr[i] + arr[j]] || 0) + 1;
   }
 }
 return res % mod;
};