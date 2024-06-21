/**
 * @param {number[]} temperatureA
 * @param {number[]} temperatureB
 * @return {number}
 */
var temperatureTrend = function(temperatureA, temperatureB) {
    const getTrend = (x, y) => {
        if (x === y) {
            return 0;
        }
        return x < y ? -1 : 1;
    }

    const n = temperatureA.length;
    let ans = 0, cur = 0;
    for (let i = 1; i < n; ++i) {
        const ta = getTrend(temperatureA[i - 1], temperatureA[i]);
        const tb = getTrend(temperatureB[i - 1], temperatureB[i]);
        if (ta === tb) {
        ++cur;
        ans = Math.max(ans, cur);
        } else {
        cur = 0;
        }
    }
    return ans;
};