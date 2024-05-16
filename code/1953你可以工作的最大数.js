/**
 * @param {number[]} milestones
 * @return {number}
 */
var numberOfWeeks = function(milestones) {
    milestones.sort((a,b)=>b-a);
    const longest = milestones[0];
    const rest = milestones.reduce((a,b)=>a+b,0)-longest;
    if(longest <= rest+1){
        return longest+rest;
    }else{
        return 2*rest + 1;
    }
};