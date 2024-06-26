/**
 * @param {number[]} nums
 * @return {number}
 */
var specialPerm = function(nums) {
    const mod = 1e9 + 7;
    const n = nums.length;
    const f = new Array(1 << n).fill().map(() => new Array(n).fill(-1));
    
    const dfs = (state, i) => {
        if (f[state][i] !== -1) {
            return f[state][i];
        }
        if (state === (1 << i)) {
            return 1;
        }
        f[state][i] = 0;
        for (let j = 0; j < n; j++) {
            if (i === j || !(state >> j & 1)) {
                continue;
            }
            if (nums[i] % nums[j] !== 0 && nums[j] % nums[i] !== 0) {
                continue;
            }
            f[state][i] = (f[state][i] + dfs(state ^ (1 << i), j)) % mod;
        }
        return f[state][i];
    };

    let res = 0;
    for (let i = 0; i < n; i++) {
        res = (res + dfs((1 << n) - 1, i)) % mod;
    }
    return res;
};