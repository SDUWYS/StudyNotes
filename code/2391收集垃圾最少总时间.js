/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    const distance = new Map();
    let res = 0, curDis = 0;
    for(let i = 0; i < garbage.length; i++){
        res += garbage[i].length;
        if(i>0){
            curDis = curDis + travel[i-1];
        }
        for(const c of garbage[i]){
            distance.set(c, curDis);
        }
    }

    for(const [k , v] of distance){
        res += v;
    }
    return res;
};