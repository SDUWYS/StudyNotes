/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    let maxNum = Math.max(arr[0], arr[1]);
    if(k === 1){
        return maxNum;
    }
    let currSize = 1;
    for(let i = 2; i< arr.length; i++){
        if(arr[i] < maxNum){
            currSize++;
        }else{
            maxNum = arr[i];
            currSize = 1;
        }
        if(currSize === k){
            return maxNum;
        }
    }
    return maxNum;
};