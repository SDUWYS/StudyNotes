/**
 * @param {number[][]} items
 * @param {number} k
 * @return {number}
 */
var findMaximumElegance = function(items, k) {
    items.sort((a,b)=>b[0]-a[0]);
    let categories = new Set();
    let profit = 0, st = [];
    let res = 0;
    for(let i=0;i<items.length;i++){
        if(i<k){
            profit += items[i][0];
            if(!categories.has(items[i][1])){
                categories.add(items[i][1]);
            }else{
                st.push(items[i][0]);
            }
        }else {
            if(st.length > 0 && !categories.has(items[i][1])){
                profit += items[i][0] - st.pop();
                categories.add(items[i][1]);
            }
        }
        res = Math.max(res,profit + categories.size * categories.size);
    }
    return res;
};