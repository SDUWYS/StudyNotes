/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
    let stack = [];
    for(let i = 0; i < nums.length; i++){
        while(stack.length > 0 && stack[stack.length - 1] > nums[i] && stack.length + nums.length - i > k){
            stack.pop();
        }
        stack.push(nums[i]);
    }
    stack.length = k;
    return stack;
};