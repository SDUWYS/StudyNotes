/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
    let more = [], less = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[i][j] > 1) {
                for (let k = 0; k < grid[i][j] - 1; k++) {
                    more.push([i, j]);
                }
            } else if (grid[i][j] === 0) {
                less.push([i, j]);
            }
        }
    }

    let ans = Number.MAX_SAFE_INTEGER;
    do {
        let steps = 0;
        for (let i = 0; i < more.length; i++) {
            steps += Math.abs(less[i][0] - more[i][0]) + Math.abs(less[i][1] - more[i][1]);
        }
        ans = Math.min(ans, steps);
    } while (nextPermutation(more));

    return ans;
};

const isLess  = (a, b) => {
    return a[0] < b[0] || (a[0] == b[0] && a[1] < b[1]);
}

const nextPermutation = (arr) => {
    let p = -1;
    for (let i = 0; i < arr.length - 1; i++) {
        if (isLess(arr[i], arr[i + 1])) {
            p = i;
        }
    }
    if (p === -1) {
        return false;
    }
    let q = -1;
    for (let j = p + 1; j < arr.length; j++) {
        if (isLess(arr[p], arr[j])) {
            q = j;
        }
    }

    [arr[p], arr[q]] = [arr[q], arr[p]];
    let i = p + 1, j = arr.length - 1;
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    
    return true;
}