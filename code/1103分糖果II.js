/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let ans = new Array(num_people).fill(0);
    let n = 0;
    while(candies > 0){
        for(let i = 0; i < num_people; i++){
            if(candies > 0){
                ans[i] += Math.min(num_people * n + i + 1, candies);
                candies -= num_people * n + i + 1;
            }
        }
        n++;
    }
    return ans;
};