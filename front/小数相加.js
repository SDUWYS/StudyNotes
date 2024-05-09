function twoSmallAdd(a, b){
    let res = a + b;
    console.log(res);
    console.log(res.toFixed(12));
    console.log(parseFloat(res.toFixed(12)));
    return parseFloat(res.toFixed(12));
}
twoSmallAdd(0.1, 0.2);