/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function(nums) {
    let curGroupMax = 0;
    let lastCnt = 0;
    let lastGroupMax = 0;
    for(let num of nums){
        const cnt = countBit(num);
        if(cnt === lastCnt){
            curGroupMax = Math.max(curGroupMax, num);
        }else{
            lastCnt = cnt;
            lastGroupMax = curGroupMax;
            curGroupMax = num;
        }
        if(num < lastGroupMax){
            return false;
        }
    }
    return true;
};

function countBit(n) {
    let count = 0;
    while(n){
        n &= n - 1;
        count++;
    }
    return count;
}