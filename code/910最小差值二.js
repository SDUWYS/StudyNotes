/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function(nums, k) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let ans = nums[n - 1] - nums[0];
    for(let i = 1; i < n; i++){
        let max = Math.max(nums[i - 1] + k, nums[n - 1] - k);
        let min = Math.min(nums[i] - k, nums[0] + k);
        ans = Math.min(ans, max - min);
    }
    return ans;
};