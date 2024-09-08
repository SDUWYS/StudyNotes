/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length;
    let mid = -1;
    for(let i = 0; i < n; i++){
        if(nums[i] < 0){
            mid = i;
        }else{
            break;
        }
    }
    let ans = [];
    let left = mid, right = mid + 1;
    while(left >= 0 || right < n){
        if(left < 0){
            ans.push(nums[right] * nums[right]);
            right++;
        }else if(right >= n){
            ans.push(nums[left] * nums[left]);
            left--;
        }else{
            if(nums[left] * nums[left] < nums[right] * nums[right]){
                ans.push(nums[left] * nums[left]);
                left--;
            }else{
                ans.push(nums[right] * nums[right]);
                right++;
            }
        }
        
    }
    return ans;
};