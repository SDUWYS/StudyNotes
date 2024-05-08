/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]
 */let twoSum = function(nums, target){
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i];
        }else{
            map.set(nums[i], i);
        }
    }
}