/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    let ans = 0;
    for(let i = 0; i <= limit; i++){
        for(let j = 0; j<= limit; j++){
            if(i + j > n){
                break;
            }
            if(n - i - j <= limit){
                ans ++;
            }
        }
    }

    return ans;
};