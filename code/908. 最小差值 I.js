/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    let res = max - min - 2 * k;
    return res < 0 ? 0 : res;
};