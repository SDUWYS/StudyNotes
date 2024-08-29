/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function(grid) {
    let n = grid.length;
    let m = grid[0].length;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(i !== n -1 && grid[i][j] !== grid[i+1][j]){
                return false;
            }else if(j !== m -1 && grid[i][j] !== grid[i][j+1]){
                return false;
            }
        }
    }
    return true;

};