/**
 * @param {string} s
 * @return {number}
 */
    var longestAwesome = function(s) {
        let prefix = new Map([[0 ,-1]]);
        let ans = 0;
        let sequence = 0;
        for(let i = 0; i < s.length; i++){
            let digit = s[i] - '0';
            sequence ^= 1 << digit;
            if(prefix.has(sequence)){
                ans = Math.max(ans, i - prefix.get(sequence));
            }else {
                prefix.set(sequence, i);
            }
            for(let j = 0; j < 10; j++){
                if(prefix.has(sequence ^ (1 << j))){
                    ans = Math.max(ans, i - prefix.get(sequence ^ (1 << j)));
                }
            }

        }
        return ans;
    };