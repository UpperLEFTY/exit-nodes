/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
     const pq = new PriorityQueue((a, b) => a[2] < b[2])
  const visited = []
  for (let i = 0; i < heightMap.length; i++) {
    visited[i] = []
    for (let j = 0; j < heightMap[0].length; j++) {
      if (
        i > 0 &&
        i < heightMap.length - 1 &&
        j > 0 &&
        j < heightMap[0].length - 1
      )
        continue
      pq.push([i, j, heightMap[i][j]])
      visited[i][j] = true
    }
  }

  let max = -Infinity,
    count = 0
  while (!pq.isEmpty()) {
    const cur = pq.pop()
    if (cur[2] > max) max = cur[2]
    check(cur[0], cur[1])
  }
  function check(row, col) {
    const step = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]
    for (let i = 0; i < step.length; i++) {
      let newR = row + step[i][0],
        newC = col + step[i][1]
      if (
        newR < 0 ||
        newR >= heightMap.length ||
        newC < 0 ||
        newC >= heightMap[0].length
      )
        continue
      if (visited[newR][newC]) continue
      visited[newR][newC] = true
      const newVal = heightMap[newR][newC]
      if (newVal < max) {
        count += max - newVal
        check(newR, newC)
      } else {
        pq.push([newR, newC, newVal])
      }
    }
  }

  return count
}
class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this.heap = []
    this.top = 0
    this.comparator = comparator
  }
  size() {
    return this.heap.length
  }
  isEmpty() {
    return this.size() === 0
  }
  peek() {
    return this.heap[this.top]
  }
  push(...values) {
    values.forEach((value) => {
      this.heap.push(value)
      this.siftUp()
    })
    return this.size()
  }
  pop() {
    const poppedValue = this.peek()
    const bottom = this.size() - 1
    if (bottom > this.top) {
      this.swap(this.top, bottom)
    }
    this.heap.pop()
    this.siftDown()
    return poppedValue
  }
  replace(value) {
    const replacedValue = this.peek()
    this.heap[this.top] = value
    this.siftDown()
    return replacedValue
  }

  parent = (i) => ((i + 1) >>> 1) - 1
  left = (i) => (i << 1) + 1
  right = (i) => (i + 1) << 1
  greater = (i, j) => this.comparator(this.heap[i], this.heap[j])
  swap = (i, j) => ([this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]])
  siftUp = () => {
    let node = this.size() - 1
    while (node > this.top && this.greater(node, this.parent(node))) {
      this.swap(node, this.parent(node))
      node = this.parent(node)
    }
  }
  siftDown = () => {
    let node = this.top
    while (
      (this.left(node) < this.size() && this.greater(this.left(node), node)) ||
      (this.right(node) < this.size() && this.greater(this.right(node), node))
    ) {
      let maxChild =
        this.right(node) < this.size() &&
        this.greater(this.right(node), this.left(node))
          ? this.right(node)
          : this.left(node)
      this.swap(node, maxChild)
      node = maxChild
    }
  }
}

