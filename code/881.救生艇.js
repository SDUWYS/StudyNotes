/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let n = people.length;
    let ans = 0;
    people.sort((a, b) => a - b);
    for(let i = 0, j = n - 1; i <= j; j--){
        if(people[i] + people[j] <= limit){
            i++;
        }
        ans++;
    }
    return ans;
};