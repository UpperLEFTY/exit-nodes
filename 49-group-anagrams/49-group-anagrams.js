/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let  res = {};
  let str = '';
  let len = strs.length;
  for (let i = 0; i < len; i++) {
    str = Array.from(strs[i]).sort().join('');
    if (!res[str]) res[str] = [];
    res[str].push(strs[i]);
  }
  return Object.values(res);
};
