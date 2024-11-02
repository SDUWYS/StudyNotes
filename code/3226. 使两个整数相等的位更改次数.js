/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function(n, k) {
    let res = 0;
    while(n > 0 || k > 0){
        if((n & 1) == 0 && (k & 1) == 1){
            return -1;
        }
        if((n & 1) == 1 && (k & 1) == 0){
            res++;
        }
        n >>=1;
        k >>=1;
    }
    return res;
    
};