/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function(points, k) {
    let len = points.length, l = 0, r = len - 1
  while (l <= r) {
    let mid = helper(points, l, r)
    if (mid === k) break
    if (mid  < k) l = mid + 1
    else r = mid - 1
  }
  return points.slice(0, k)

  function helper(arr, l, r) {
    const pivot = arr[l]
    while(l < r) {
      while(l < r && cmp(arr[r], pivot) >= 0) r--
      arr[l] = arr[r]
      while(l < r && cmp(arr[l], pivot) <= 0) l++
      arr[r] = arr[l]
    }
    arr[l] = pivot
    return l
  }
  
  function cmp(a, b) {
    return a[0] * a[0] + a[1] * a[1] - b[0] * b[0] - b[1] * b[1]
  }
};