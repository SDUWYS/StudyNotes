/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let n = difficulty.length;
    let arr = [];
    for(let i = 0; i < n; i++){
        arr.push([difficulty[i], profit[i]]);
    }
    arr.sort((a, b) => a[0] - b[0]);
    let ans = 0;
    for(let i = 0; i< worker.length; i++){
        let j = 0, tmp = 0;
        while(j < n && worker[i] >= arr[j][0]){
            tmp = Math.max(tmp, arr[j][1]);
            j++;
        }
        ans += tmp;
    }
    return ans;
};