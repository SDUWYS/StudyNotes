/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
    let dp0 = arr[0], dp1 = 0;
    let res = arr[0];
    for(let i = 0; i< arr.length; i++){
        dp0 = Math.max(dp[i-1][0], 0) + arr[i];
        dp1 = Math.max(dp1[i-1][1]+ arr[i], dp1[i-1][0]);
        res = Math.max(res, Math.max(dp0, dp1));
    }
    return res;
};