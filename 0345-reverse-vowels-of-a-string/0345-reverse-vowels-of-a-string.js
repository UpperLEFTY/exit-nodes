/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
let vowels = s.match(/[aeiou]/gi)
 let k = 0
 if (vowels) {
   vowels = vowels.reverse``
 } else {
   return s
 }
 return s.replace(/[aeiou]/gi, () => vowels[k++])
};