/**
 * @param {number[]} nums
 * @return {number}
 */
var countAlternatingSubarrays = function(nums) {
    let ans = 0, pre = -1, cur = 0;
    for(const a of nums){
        cur = pre !== a ? cur + 1 : 1;
        pre = a;
        ans += cur;
    }
    return ans;
};
