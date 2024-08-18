/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absent = 0, late = 0;
    for(let char of s){
        if(char === 'A'){
            absent++;
            late = 0;
            if(absent >= 2) return false;
        }else if(char === 'L'){
            late++;
            if(late >= 3) return false;
        }else{
            late = 0;
        }
    }
    return true;
};