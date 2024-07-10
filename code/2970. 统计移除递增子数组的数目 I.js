/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i; j < nums.length; j++) {
        if (isIncreasing(nums, i, j)) {
          res++;
        }
      }
    }
    return res;
  };
  
  function isIncreasing(nums, l, r) {
    for (let i = 1; i < nums.length; i++) {
      if (i >= l && i <= r + 1) {
        continue;
      }
      if (nums[i - 1] >= nums[i]) {
        return false;
      }
    }
    if (l - 1 >= 0 && r + 1 < nums.length && nums[l - 1] >= nums[r + 1]) {
      return false;
    }
    return true;
  }