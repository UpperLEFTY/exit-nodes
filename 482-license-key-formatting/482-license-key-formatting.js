/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
     if (s == null || s === "") return "";
 const newStr = s.replace(/-/g, "").toUpperCase();
 const arr = newStr.split("");
 for (let i = arr.length - 1 - k; i >= 0; i -= k) {
   arr[i] = arr[i] + "-";
 }
 return arr.join("");
};