/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let n = nums.length;
    let dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));
    let points = new Array(n + 2).fill(0);
    for(let i = 1; i <= n; i++){
        points[i] = nums[i - 1];
    }
    points[0] = points[n + 1] = 1;
    for(let i = n; i>=0; i--){
        for(let j = i+1; j<=n+1; j++){
            for(let k = i+1; k<j; k++){
                dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + points[i] * points[k] * points[j]);
            }
        }
    }
    return dp[0][n+1];

};