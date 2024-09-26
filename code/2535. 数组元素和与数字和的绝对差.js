/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let n = nums.length;
    let charSum = nums.reduce((a, b) => a + b);
    let digitSum = 0;
    for(let i = 0; i < n; i++){
        let temp = nums[i];
        while(temp){
            digitSum += temp % 10;
            temp = Math.floor(temp / 10);
        }
    }
    return Math.abs(charSum - digitSum);
};