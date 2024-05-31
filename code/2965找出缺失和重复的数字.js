/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  let n = grid.length;
  let count = new Array(n * n + 1).fill(0);
  count[0] = -1;    
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count[grid[i][j]]++;
    }
  }
  return [count.indexOf(2), count.indexOf(0)];
};
