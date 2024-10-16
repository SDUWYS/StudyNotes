/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let res = Number.MAX_VALUE;
    for(let i = 0; i < n; i++){
        let left = i, right = n - 1 - i;
        if(left < right){
            let avg = (nums[left] + nums[right]) / 2;
            res = Math.min(res, avg);
        }
    }
    return res;
};