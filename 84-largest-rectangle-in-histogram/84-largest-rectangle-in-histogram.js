/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0)
  const st = [], n = heights.length
  let res = 0
  for(let i = 0; i <= n; i++) {
    while(st.length && heights[st[st.length - 1]] >= heights[i]) {
      const top = st.pop()
      const pre = st.length ? st[st.length - 1] : -1
      res = Math.max(res, heights[top] * (i - pre - 1))
    }
    st.push(i)
  }
  return res
};