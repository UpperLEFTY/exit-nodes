/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
 const n = temperatures.length;
 const sk = [];
 const res = new Array(n).fill(0);
 for (let i = 0; i < n; i++) {
   let cur = temperatures[i];
   while (sk.length && temperatures[sk[sk.length - 1]] < cur) {
     let tail = sk.pop();
     res[tail] = i - tail;
   }
   sk.push(i);
 }
 return res;  
};