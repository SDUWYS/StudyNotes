/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
    let res = 0, n = nums.length;
    nums.sort((a, b) => a - b);

    for(let i = 0, j = 0; i < n; i++){
        while(nums[i] - nums[j] > 2 * k) j++;
        res = Math.max(res, i - j + 1);
    }
    return res;

};