/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let n = num.length;
    while(num[n-1] == '0'){
        n --;
    }
    return num.slice(0,n);
};