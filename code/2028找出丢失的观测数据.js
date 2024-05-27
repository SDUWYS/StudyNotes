/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    let m = rolls.length;
    let sum = rolls.reduce((a , b) => a + b, 0);
    if(mean * (m + n) <= sum || mean * (m + n) > 6 * (m + n) || mean * (m + n) - sum > 6 * n|| mean * (m + n) - sum < n){
        return [];
    }
    let res = [];
    let target = mean * (m + n) - sum;
    let avg = Math.floor(target / n), remainder = target % n;
    for(let i = 0; i < n; i++){
        res.push(avg + (i < remainder ? 1 : 0));
    }
    return res;
};