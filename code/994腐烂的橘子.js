/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const R = grid.length, C = grid[0].length;
    let queue = [];
    let depth = new Map();
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] === 2) {
                queue.push(r*C + c);
                depth.set(r*C + c, 0);
            }
        }
    }

    let ans = 0;
    while(queue.length > 0){
        let code = queue.shift();
        let r = Math.floor(code / C);
        let c = code % C;
        for (let i = 0; i < 4; i++) {
            let nr = r + dr[i];
            let nc = c + dc[i];
            if (nr >= 0 && nr < R && nc >= 0 && nc < C && grid[nr][nc] === 1) {
                grid[nr][nc] = 2;
                queue.push(nr*C + nc);
                depth.set(nr*C + nc, depth.get(code) + 1);
                ans = depth.get(nr*C + nc);
            }
        }
    }

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] === 1) {
                return -1;
            }
        }
    }
    return ans;
};