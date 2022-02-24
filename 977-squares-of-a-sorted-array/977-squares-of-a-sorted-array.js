/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    nums = nums.map(num => num * num);
    quickSort(nums, 0, nums.length - 1);
    return nums;
};

function quickSort(nums, left, right) {
    let index;
    if (nums.length > 1) {
        // index returned from partition
        index = partition(nums, left, right);
        // more elements on the left side of the pivot
        if (left < index - 1)
            quickSort(nums, left, index - 1);
        // more elements on the right side of the pivot
        if (index < right)
            quickSort(nums, index, right);
    }
    // you can return or not return, 
    // since we change nums, no need to return
    // return nums;
}

function partition(nums, start, end) {
    let l = start, r = end;
    let mid = Math.floor((start + end) / 2);
    let pivot = nums[mid];
    // Important: l <= r not l < r
    while (l <= r) {
        while(nums[l] < pivot)
            l++;
        while(nums[r] > pivot)
            r--;
        if (l <= r) {
            // swap
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }
    return l;
};