/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
    const res = []
    const map = {}
    for(const num of nums1) {
        if(map.hasOwnProperty(num)) {
            map[num] += 1
        } else {
            map[num] = 1
        }
    }
    
    for(const num of nums2) {
        if(map.hasOwnProperty(num) && map[num] > 0) {
        res.push(num)
        map[num] -= 1
        }
    }
    
    return res
};
