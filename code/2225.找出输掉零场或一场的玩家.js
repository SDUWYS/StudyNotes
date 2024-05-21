/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let map = new Map();
    for(let [winner, loser] of matches){
        if(!map.has(winner)){
            map.set(winner, 0);
        }
        map.set(loser, (map.get(loser) || 0) + 1);
    }
    let ans = [[], []];
    for(let [key, value] of map){
        if(value === 0){
            ans[0].push(key);
        }else if(value === 1){
            ans[1].push(key);
        }
    }
    ans[0].sort((a, b) => a - b);
    ans[1].sort((a, b) => a - b);
    return ans;
};