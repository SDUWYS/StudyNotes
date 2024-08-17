/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumOperationsToMakeKPeriodic = function(word, k) {
    let n = word.length;
    let map = new Map();
    let res = Infinity;
    for(let i = 0; i < n; i+=k){
        let part = word.slice(i,i+k);
        if(!map.has(part)){
            map.set(part,0);
        }
        map.set(part,map.get(part)+1);
        res = Math.min(res, n/k - map.get(part));
    }
    return res;
};