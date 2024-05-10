/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
    let n = batteryPercentages.length;
    let ans = 0;
    for(let i = 0; i<n; i++){
        if(batteryPercentages[i] > 0){
            ans++;
            for(let j = i+1; j<n; j++){
                if(batteryPercentages[j] > 0){
                    batteryPercentages[j]--;
                }
            }
        }
    }
    return ans;
};