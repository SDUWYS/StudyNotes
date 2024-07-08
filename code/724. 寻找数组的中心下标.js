/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const sum = nums.reduce((a, b) => a + b);
    let temp = 0;
    for(let i = 0; i < nums.length; i++){
        if(2 * temp +  nums[i] === sum ){
            return i;
        }
        temp += nums[i];
    }
    return -1
};