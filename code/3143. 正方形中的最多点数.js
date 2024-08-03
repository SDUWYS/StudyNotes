/**
 * @param {number[][]} points
 * @param {string} s
 * @return {number}
 */
var maxPointsInsideSquare = function(points, s) {
    let n = points.length;
    let ans = 0;
    let map = new Map();
    let minLength = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i<n; i++){
        if(map.has(s[i])){
            let arr = map.get(s[i]);
            arr.push(Math.max(Math.abs(points[i][0]), Math.abs(points[i][1])));
            arr.sort((a, b) => a - b);
            arr.length = 2;
            minLength = Math.min(minLength, arr[1] - 1);
        }else{
            map.set(s[i], [Math.max(Math.abs(points[i][0]), Math.abs(points[i][1]))]);
        }
    }
    for(let i = 0; i<n; i++){
        let length = Math.max(Math.abs(points[i][0]), Math.abs(points[i][1]));
        if(length <= minLength){
            ans ++;
        }
    }
    return ans;
};