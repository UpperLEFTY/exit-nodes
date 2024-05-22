/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function(version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");
  const len = Math.max(v1.length, v2.length);
  if (v1.length < len) {
    while (v1.length < len) {
      v1.push("0");
    }
  }
  if (v2.length < len) {
    while (v2.length < len) {
      v2.push("0");
    }
  }
  while (v2.length > 0 && v1.length > 0) {
    let fe = +v1.shift();
    let se = +v2.shift();
    if (fe > se) {
      return 1;
    }
    if (fe < se) {
      return -1;
    }
  }
  return 0;
};
