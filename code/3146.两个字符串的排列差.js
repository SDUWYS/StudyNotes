/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let res = 0;
    let sMap = new Map();
    let tMap = new Map();
    for(let i = 0; i < s.length; i++){
        sMap.set(s[i], i);
        tMap.set(t[i], i);
    }
    for(let i = 0; i < s.length; i++){
        res += Math.abs(sMap.get(s[i]) - tMap.get(s[i]));
    }
    return res;
};