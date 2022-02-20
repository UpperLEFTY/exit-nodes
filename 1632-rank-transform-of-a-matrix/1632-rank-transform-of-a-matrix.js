/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var matrixRankTransform = function(matrix) {
 const r = matrix.length,
    c = matrix[0].length;
  const t = r * c;
  const arr = Array(t);
  const root = Array(t + 1);
  const rk = Array(t + 1).fill(0);
  const find = (a) => {
    let ra = root[a];
    if (ra == a) return a;
    return (root[a] = find(ra));
  };
  const union = (a, b) => {
    let ra = find(a);
    let rb = find(b);
    if (ra !== rb) {
      if (rk[ra] > rk[rb]) root[rb] = ra;
      else root[ra] = rb;
    }
  };
  let k = 0;
  const ans = Array(r)
    .fill(0)
    .map(() => Array(c));
  for (let i = 0; i < r; ++i) {
    for (let j = 0; j < c; ++j) {
      arr[k] = [matrix[i][j], i, j];
      root[k] = k;
      ++k;
    }
  }
  root[k] = k;
  arr.sort((a, b) => a[0] - b[0]);
  const X = Array(r)
    .fill(0)
    .map(() => [-Infinity, t]);
  const Y = Array(c)
    .fill(0)
    .map(() => [-Infinity, t]);
  for (let i = 0; i < t; ++i) {
    const [v, x, y] = arr[i];
    const id = x * c + y;
    const [xv, rx] = X[x],
      [yv, ry] = Y[y];
    if (v > xv) rk[id] = rk[find(rx)] + 1;
    else root[id] = rx;
    if (v > yv) rk[find(id)] = Math.max(rk[find(id)], rk[find(ry)] + 1);
    else union(id, ry);
    X[x] = [v, id];
    Y[y] = [v, id];
  }
  for (let i = 0; i < r; ++i) {
    for (let j = 0; j < c; ++j) {
      ans[i][j] = rk[find(i * c + j)];
    }
  }
  return ans;
};
