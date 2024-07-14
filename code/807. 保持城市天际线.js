/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let maxRow = new Array(n).fill(0);
    let maxCol = new Array(m).fill(0);
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            maxRow[i] = Math.max(maxRow[i], grid[i][j]);
            maxCol[j] = Math.max(maxCol[j], grid[i][j]);
        }
    }
   let ans = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++) {
            ans += Math.min(maxRow[i], maxCol[j]) - grid[i][j];
        }
    }
    return ans;
};