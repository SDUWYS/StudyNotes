/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let arr = new Array(n + 1).fill(0);
    for(let i = 0; i < trust.length; i++){
        arr[trust[i][0]]--;
        arr[trust[i][1]]++;
    }
    for(let i = 1; i <= n; i++){
        if(arr[i] == n - 1){
            return i;
        }
    }
    return -1;
};