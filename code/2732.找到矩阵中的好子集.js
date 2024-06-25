/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var goodSubsetofBinaryMatrix = function(grid) {
    let ans = [];
    let mp = new Map();
    let m = grid.length;
    let n = grid[0].length;
    for (let j = 0; j < m; j++) {
        let st = 0;
        for (let i = 0; i < n; i++) {
            st |= (grid[j][i] << i);
        }
        mp.set(st, j);
    }

    if (mp.has(0)) {
        ans.push(mp.get(0));
        return ans;
    }

    for (let [x, i] of mp.entries()) {
        for (let [y, j] of mp.entries()) {
            if (!(x & y)) {
                return [Math.min(i, j), Math.max(i, j)];
            }
        }
    }

    return ans;
};