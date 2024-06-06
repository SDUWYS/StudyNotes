/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    let n = nums.length;
    let pre = 0;
    let ans = 0;
    for(let i = 0; i < n; i = i +2){
        if(pre === 0 || nums[i] + nums[i+1] === pre ){
            ans++;
            pre = nums[i] + nums[i+1];
        }else{
            break;
        }
    }
    return ans;

};