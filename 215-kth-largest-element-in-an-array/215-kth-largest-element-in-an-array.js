/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// const findKthLargest = function(nums, k) {
//   if (!nums || k > nums.length) return 0;
// const larger = [];
// const smaller = [];
// const pivot = nums[parseInt(nums.length / 2)];
// let pivotCount = 0;
// for (let i = 0; i < nums.length; i++) {
//   const ele = nums[i];
//   if (ele > pivot) larger.push(ele);
//   else if (ele === pivot) pivotCount++;
//   else smaller.push(ele);
// }
// if (larger.length >= k) return findKthLargest(larger, k);
// else if (k - larger.length - pivotCount <= 0) return pivot;
// else return findKthLargest(smaller, k - larger.length - pivotCount);  
// };

//Another Solution JS 

const findKthLargest = function(nums, k) {
  const n = nums.length
  let l = 0, r = n - 1, t = n - k
  while(l < r) {
    const idx = partition(nums, l, r)
    if (idx === t) return nums[t]
    if (idx < t) l = idx + 1
    else r = idx - 1
  }
  return nums[l]
};

function partition(arr, l, r) {
  let tmp = l, pivot = arr[l]
  while(l < r) {
    while(l < r && arr[r] >= pivot) r--
    while(l < r && arr[l] <= pivot) l++
    swap(arr, l, r)
  }
  swap(arr, l, tmp)
  return l
}

function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}


