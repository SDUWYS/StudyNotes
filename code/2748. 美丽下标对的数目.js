/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {
    let n = nums.length;
    let res = 0;
    for(let i = 0; i < n; i++){
        while(nums[i] >= 10){
            nums[i] = Math.floor(nums[i] / 10);
        }
        for(let j = i + 1; j < n; j++){
            if(gcd(nums[i], nums[j]%10) === 1){
                res++;
            }
        }
    }
    return res;

};
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}