/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var maxScore = function(nums, x) {
    let n = nums.length;
    let dp = [-Infinity, -Infinity];
    dp[nums[0] % 2] = nums[0];
    let res = nums[0];
    for(let i = 1; i < n; i++){ 
        let party = nums[i] % 2;
        let cur = Math.max(dp[party] + nums[i], dp[1 - party] + nums[i] - x);
        res = Math.max(res, cur);
        dp[party] = Math.max(dp[party], cur);
    }
    return res;
};