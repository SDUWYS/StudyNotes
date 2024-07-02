/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumPrimeDifference = function (nums) {
    let n = nums.length
    let first = -1
    let res = 0
    for (let i = 0; i < n; i++) {
      if (isPrime(nums[i])) {
        if (first === -1) {
          first = i
        } else {
          res = Math.max(res, i - first)
        }
      }
    }
    return res
  }
  function isPrime (number) {
    if (number === 1) {
      return false
    }
    if (number === 2) {
      return true
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false
      }
    }
    return true
  }