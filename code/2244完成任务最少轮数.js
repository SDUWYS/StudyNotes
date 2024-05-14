/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let map = new Map();

    for(let i = 0; i < tasks.length; i++){
        map.set(tasks[i], map.has(tasks[i]) ? map.get(tasks[i]) + 1 : 1);
    }
    let res = 0;
    for(let[k, v] of map){
        if(v === 1) return -1;
        res += Math.ceil(v / 3);
    }
    return res;
};