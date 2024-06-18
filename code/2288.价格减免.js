/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function(sentence, discount) {
    let words = sentence.split(' ');
    let n = words.length;
    let result = '';
    for(let i = 0; i < n; i++){
        let word = words[i];
        if(word.charAt(0) === '$' && isNumber(word.substring(1))){
            let price = parseInt(word.substring(1)) * (1 - discount / 100);
            words[i] = '$' + price.toFixed(2);
        }
    }
    result = words.join(' ');
    return result;
};

const isNumber = (s) => {
    return /^[0-9]+$/.test(s);
}