/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    let len = s.length;
    let ans = 0;
    let chs = Array.from({length: 26}, () => []);
    let cnt = 0;

    for(let i = 0; i < len; i++){
        cnt++;
        if(i + 1 ==len || s[i] != s[i+1]){
            chs[s[i].charCodeAt(0) - 'a'.charCodeAt(0)].push(cnt);
            cnt = 0;
        }
    }

    for(let a of chs){
        if(a.length === 0){
            continue;
        }
        a.sort((a,b) => b - a);
        a.push(0);
        a.push(0);
        ans = Math.max(ans, a[0] -2, Math.min(a[0] - 1, a[1]), a[2]);
    }
    return ans ? ans : -1;
};