/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    let n = matrix.length, m = matrix[0].length;
    let nums = new Array(m).fill(0);
    for(let i = 0; i<m; i++){
        for(let j = 0; j<n; j++){
            nums[i] = Math.max(nums[i], matrix[j][i]);
        }
    }
    for(let i =0; i<m; i++){
        for(let j = 0; j<n; j++){
            if(matrix[j][i] === -1){
                matrix[j][i] = nums[i];
            }
        }
    }

    return matrix;
};