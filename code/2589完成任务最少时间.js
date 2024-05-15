/**
 * @param {number[][]} tasks
 * @return {number}
 */
var findMinimumTime = function(tasks) {
    const n = tasks.length;
    tasks.sort((a, b) => a[1] - b[1]);
    const run = new Array(tasks[n-1][1] + 1).fill(0);
    let res = 0;

    for(let i = 0; i< n; i++){
        let  start = tasks[i][0], end = tasks[i][1], duration = tasks[i][2];
        duration -= run.slice(start, end + 1).reduce((a, b) => a + b, 0);
        res += Math.max(0, duration);

        for(let j = end; j >= start && duration > 0; j--){
            if(run[j] === 0){
                run[j] = 1;
                duration--;
            }
        }
    }
    return res;
};