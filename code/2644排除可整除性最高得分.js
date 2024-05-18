/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    let max = 0, res = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < divisors.length; i++){
        let count = 0;
        for(let j = 0; j < nums.length; j++){
            if(nums[j] % divisors[i] === 0){
                count++;
            }
        }
        if(count > max){
            max = count;
            res = divisors[i];
        }else if(count === max){
            res = Math.min(divisors[i], res);
        }
    }
    return res;
};