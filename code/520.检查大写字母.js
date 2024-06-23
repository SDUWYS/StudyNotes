/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let n = word.length;
    if(n === 1) return true;
    if(n >= 2 && word[0] === word[0].toLowerCase() && word[1] === word[1].toUpperCase()){
        return false;
    }
    for(let i = 2; i < n; i++){
        if(word[i] === word[i].toUpperCase() ^ word[1] === word[1].toUpperCase()){
            return false;
        }
    }
    return true;
};