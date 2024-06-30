/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let n = nums.length;
  let count = 0;
  const back = (nums, index, sum, target) => {
    if (index === n) {
      if (sum === target) {
        count++;
      }
    } else {
      back(nums, index + 1, sum + nums[index], target);
      back(nums, index + 1, sum - nums[index], target);
    }
  };
  back(nums, 0, 0, target);
  return count;
};
