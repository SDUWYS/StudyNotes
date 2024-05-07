let addToArrayForm  = function(num, k){
    let res = [];
    let n = num.length;
    for(let i = n - 1; i>=0 || k>0; --i, k = Math.floor(k/10) ){
        if(i>=0){
            k = k + num[i];
        }
        res.push(k%10);
    }
    res.reverse();
    return res;
}