/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function(s) {
 const res = [];
  helper(s, 0, [], res);
  return res;
};

const helper = function (s, start, now, res) {
  let str = '';
  let num = 0;

  if (now.length === 4) {
    if (start === s.length) res.push(now.join('.'));
    return;
  }

  for (let i = 1; i <= 3; i++) {
    str = s.substr(start, i);
    if (str.length === 1 || str[0] !== '0') {
      num = Number(str);
      if (0 <= num && num <= 255) {
        now.push(num);
        helper(s, start + i, now, res);
        now.pop();
      }
    }
  }
};