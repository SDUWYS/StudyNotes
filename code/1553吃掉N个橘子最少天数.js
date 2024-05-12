import {
    MinPriorityQueue,
  } from '@datastructures-js/priority-queue';
/**
 * @param {number} n
 * @return {number}
 */
var minDays = function(n) {
    const q = new MinPriorityQueue();
    q.enqueue([0, n], 0);
    const visited = new Set();
    let ans = 0;
    while (true && !q.isEmpty()) {
        const element = q.dequeue();
        const [days, rest] = element;
        console.log(days, rest);
        if (visited.has(rest)) {
            continue;
        }
        visited.add(rest);
        if (rest == 1) {
            ans = days + 1;
            break;
        }
        q.enqueue([days + rest % 2 + 1, Math.floor(rest / 2)], days + rest % 2 + 1);
        q.enqueue([days + rest % 3 + 1, Math.floor(rest / 3)], days + rest % 3 + 1);
    }
    return ans;
};
console.log(minDays(10));