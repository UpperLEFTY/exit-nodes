/**
 * @param {number[]} destination
 * @param {number} k
 * @return {string}
 */
var kthSmallestPath = function(destination, k) {
  const [r, c] = destination;
  const ret = [];
  let remDown = r;
  for (let i = 0; i < r + c; i++) {
    const remSteps = r + c - (i + 1);
    const com = comb(remSteps, remDown);
    if (com >= k) ret.push("H");
    else {
      remDown -= 1;
      k -= com;
      ret.push("V");
    }
  }
  return ret.join("");
};

function comb(n, r) {
  if (n < r) return 0;
  let res = 1;
  if (n - r < r) r = n - r;
  for (let i = n, j = 1; i >= 1 && j <= r; --i, ++j) {
    res = res * i;
  }
  for (let i = r; i >= 2; --i) {
    res = res / i;
  }
  return res;
}

