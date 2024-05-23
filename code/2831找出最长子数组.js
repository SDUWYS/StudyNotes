/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function(nums, k) {
    let n = nums.length;
    let ans = 0;
    let map = new Map();
    for(let i = 0; i< n; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], []);
        }
        map.get(nums[i]).push(i);
    }

    for(let value of map.values()){
        for(let i = 0, j = 0; i< value.length; i++){
            while(value[i] - value[j] - (i - j)  > k){
                j++;
            }
             ans = Math.max(ans, i - j + 1);
        }
    }
    return ans;
};