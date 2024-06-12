/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
    let number = Math.floor(purchaseAmount / 10);
    let y = purchaseAmount%10;
    if(y>=5){
        return 100 - (number + 1) * 10;
    }
    return 100 - number*10;

};