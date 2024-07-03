/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let nums = x.toString();
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += parseInt(nums[i]);
    }
    if(x % sum === 0){
        return sum;
    }
    return -1;
};