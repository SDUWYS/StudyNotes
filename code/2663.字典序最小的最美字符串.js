/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestBeautifulString = function(s, k) {
    for (let i = s.length - 1; i >= 0; i--) {
        const blockedCharacters = new Set();
        for (let j = 1; j < 3; j++) {
            if (i - j >= 0) {
                blockedCharacters.add(s[i - j]);
            }
        }
        for (let j = 1; j < 4; j++) {
            if (s.charCodeAt(i) - 'a'.charCodeAt(0) + j + 1 <= k && !blockedCharacters.has(String.fromCharCode(s.charCodeAt(i) + j))) {
                return generate(s, i, j);
            }
        }
    }
    return "";
};

function generate(s, idx, offset) {
    const res = [...s];
    res[idx] = String.fromCharCode(res[idx].charCodeAt(0) + offset);
    for (let i = idx + 1; i < s.length; i++) {
        const blockedCharacters = new Set();
        for (let j = 1; j < 3; j++) {
            if (i - j >= 0) {
                blockedCharacters.add(res[i - j]);
            }
        }
        for (let j = 0; j < 3; j++) {
            if (!blockedCharacters.has(String.fromCharCode('a'.charCodeAt(0) + j))) {
                res[i] = String.fromCharCode('a'.charCodeAt(0) + j);
                break;
            }
        }
    }
    return res.join("");
}