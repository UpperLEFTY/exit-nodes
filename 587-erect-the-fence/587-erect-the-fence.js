/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
const orientation = (t1, t2, t3) => {
  return (t2[1] - t1[1]) * (t3[0] - t2[0]) - (t2[0] - t1[0]) * (t3[1] - t2[1])
}
 trees.sort((a, b) => {
  return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
})
const stack = []
for (let i = 0; i < trees.length; i++) {
  while (
    stack.length >= 2 &&
    orientation(stack[stack.length - 2], stack[stack.length - 1], trees[i]) >
      0
  )
    stack.pop()
  stack.push(trees[i])
}
stack.pop()
for (let i = trees.length - 1; i >= 0; i--) {
  while (
    stack.length >= 2 &&
    orientation(stack[stack.length - 2], stack[stack.length - 1], trees[i]) >
      0
  )
    stack.pop()
  stack.push(trees[i])
}
return [...new Set(stack)]
}