/**
 * @param {string} s
 * @return {number}
 */
const inf = 0x3f3f3f3f;
var minimumSubstringsInPartition = function(s) {
    let n = s.length;
    let d = new Array(n + 1).fill(inf);
    d[0] = 1;

    for(let i = 1; i <= n; i++){
        let occ = new Map();
        let max = 0;
        for(let j = i; j > 0; j--){
            occ.set(s[j - 1], (occ.get(s[j - 1]) || 0) + 1);
            max = Math.max(max, occ.get(s[j - 1]));
            if(max * occ.size === i - j + 1 && d[j - 1] !== inf){
                d[i] = Math.min(d[i], d[j - 1] + 1);
            }
        }
    }
    return d[n];
};