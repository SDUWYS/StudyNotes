/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function(matrix, k) {
    let m = matrix.length, n = matrix[0].length;
    let pre = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    let res = [];
    for(let i = 1; i < m+1; i++){
        for(let j = 1; j < n+1; j++){
            pre[i][j] = pre[i -1][j] ^ pre[i][j - 1] ^ pre[i -1][j - 1] ^ matrix[i - 1][j - 1];
            res.push(pre[i][j]);
        }
    }
    res.sort((a,b) => b - a);
    return res[k -1];
};