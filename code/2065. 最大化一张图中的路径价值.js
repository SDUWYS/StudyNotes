/**
 * @param {number[]} values
 * @param {number[][]} edges
 * @param {number} maxTime
 * @return {number}
 */
var maximalPathQuality = function (values, edges, maxTime) {
  let n = values.length;
  const g = Array.from({ length: n }, () => []);
  for (const [x, y, t] of edges) {
    g[x].push([y, t]);
    g[y].push([x, t]);
  }
  let ans = 0;
  let visited = new Array(n).fill(false);
  visited[0] = true;
  const dfs = (cur, time, value) => {
    if (cur === 0) {
      ans = Math.max(ans, value);
    }
    g[cur].forEach(([next, t]) => {
      if (time + t <= maxTime) {
        if (!visited[next]) {
          visited[next] = true;
          dfs(next, time + t, value + values[next]);
          visited[next] = false;
        } else {
          dfs(next, time + t, value);
        }
      }
    });
  };
  dfs(0, 0, values[0])
  return ans;
};
