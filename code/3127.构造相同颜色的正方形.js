/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function(grid) {
    let n = grid.length;
    let m = grid[0].length

    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < m - 1; j++){
            let map = new Map();
            map.set('B', 0);
            map.set('W', 0)
            map.set(grid[i][j], 1)
            map.set(grid[i][j + 1], (map.get(grid[i][j + 1]) || 0) + 1)
            map.set(grid[i+1][j + 1], (map.get(grid[i+1][j + 1]) || 0) + 1)
            map.set(grid[i+1][j], (map.get(grid[i+1][j]) || 0) + 1)
            if(map.get('B') === 1 || map.get('W') === 1 || map.get('B') === 0 || map.get('W') === 0){
                return true
            }
        }
    }
    return false
};
const grid = [["B","W","B"],["B","W","W"],["B","W","B"]]
console.log(canMakeSquare(grid));
