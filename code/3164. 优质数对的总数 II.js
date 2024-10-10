/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    let count = {};
    let count1 = {};
    let res = 0, max1 = 0;
    for(let num of nums1){
        count[num] = (count[num] || 0) + 1;
        max1 = Math.max(max1, num);
    }
    for(let num of nums2){
        count1[num] = (count1[num] || 0) + 1;
    }
    for(let a in count1){
        let cnt = count[a];
        for(let b = a * k; b<= max1; b+=a * k){
            if(b in count){
                res += cnt * count[b];
            }
        }
    }
    return res;
};