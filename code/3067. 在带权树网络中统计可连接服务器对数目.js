/**
 * @param {number[][]} edges
 * @param {number} signalSpeed
 * @return {number[]}
 */
var countPairsOfConnectableServers = function(edges, signalSpeed) {
    let n = edges.length + 1;
    let graph = Array.from({length: n}, () => []);
    for(const [x, y, w] of edges){
        graph[x].push([y, w]);
        graph[y].push([x, w]);
    }

    const dfs = (p, root, curr) => {
        let res = 0;
        if(curr === 0){
            res++;
        }
        for(const [x, w] of graph[p]){
            if(x !== root){
                res += dfs(x, p, (curr + w) % signalSpeed);
            }
        }
        return res;
    }
    let res = Array(n).fill(0);
    for(let i = 0; i < n; i++){
        let pre = 0;
        for(const [x, w] of graph[i]){
            const cnt = dfs(x, i,  w % signalSpeed);
            res[i] += pre * cnt;
            pre += cnt;
        }
    }
    return res;
};