var checkRecord = function(n) {
    const MOD = 1000000007;
    const dp = new Array(n + 1).fill(2).map(() => new Array(2).fill(0).map(() => new Array(3).fill(0))); // 长度，A 的数量，结尾连续 L 的数量
    dp[0][0][0] = 1;
    for (let i = 1; i <= n; i++) {
        // 以p结尾
        for(let j = 0; j < 2; j++){
            for(let k = 0; k < 3; k++){
                dp[i][j][0] = (dp[i][j][0] + dp[i - 1][j][k]) % MOD;
            }
        }

        // 以A结尾
        for(let k = 0; k < 3; k++){
            dp[i][1][0] = (dp[i][1][0] + dp[i - 1][0][k]) % MOD;
        }

        // 以L结尾
        for(let j = 0; j< 2; j++){
            for(let k = 0; k < 2; k++){
                dp[i][j][k + 1] = (dp[i][j][k + 1] + dp[i - 1][j][k]) % MOD;
            }
        }
    }

    let sum = 0;
    for(let j = 0; j < 2; j++){
        for(let k = 0; k < 3; k++){
            sum = (sum + dp[n][j][k]) % MOD;
        }
    }
    return sum;
};