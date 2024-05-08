/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 * 输入：num = [1,2,0,0], k = 34
 * 输出：[1,2,3,4]
 * 解释：1200 + 34 = 1234
 */
let addToArrayForm  = function(num, k){
    let res = [];
    let n = num.length;
    for(let i = n - 1; i>=0 || k>0; --i, k = Math.floor(k/10) ){
        if(i>=0){
            k = k + num[i];
        }
        res.push(k%10);
    }
    res.reverse();
    return res;
}