/**
 * @param {number[]} energyDrinkA
 * @param {number[]} energyDrinkB
 * @return {number}
 */
var maxEnergyBoost = function(energyDrinkA, energyDrinkB) {
    let n = energyDrinkA.length;
    let dp = Array.from({length: n + 1}, () => [0, 0]);
    for(let i = 1; i <= n; i++){
        dp[i][0] = dp[i - 1][0] + energyDrinkA[i - 1];
        dp[i][1] = dp[i - 1][1] + energyDrinkB[i - 1];
        if(i >= 2){
            dp[i][0] = Math.max(dp[i][0], dp[i - 2][0] + energyDrinkA[i - 1]);
            dp[i][1] = Math.max(dp[i][1], dp[i - 2][1] + energyDrinkB[i - 1]);
        }
    }
    return Math.max(dp[n][0], dp[n][1]);
    
};