/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function(s) {
    let target = 'a';
    let indexOfFirstNonA = s.indexOf(s.split('').find(c => c !== target));
    if (indexOfFirstNonA === -1) {
        return s.substr(0, s.length - 1) + 'z';
    }
    let indexOfFirstA_AfterFirstNonA = s.indexOf('a', indexOfFirstNonA);
    if (indexOfFirstA_AfterFirstNonA === -1) {
        indexOfFirstA_AfterFirstNonA = s.length;
    }
    let res = '';
    for (let i = 0; i < s.length; ++i) {
        if (indexOfFirstNonA <= i && i < indexOfFirstA_AfterFirstNonA) {
            res += String.fromCharCode(s.charCodeAt(i) - 1);
        } else {
            res += s[i];
        }
    }
    return res;
};