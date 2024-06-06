/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    let n = s.length;
    let ans = 0;
    let sum = 0;
    for(let i = 0; i < n; i++){
        if(s[i] === '1'){
            sum++;
        }else{
            ans += sum;
        }
    }
    return ans;

};