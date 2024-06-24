/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length;
    let res = new Array(n).fill(-1);
    let stk = [];
    for(let i = 0; i< n*2-1; i++){
        while(stk.length && nums[stk[stk.length-1]] < nums[i%n]){
            res[stk[stk.length-1]] = nums[i%n];
            stk.pop(); 
        }
        stk.push(i%n);
    }
    return res;
};