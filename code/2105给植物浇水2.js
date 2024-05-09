/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function (plants, capacityA, capacityB) {
  let n = plants.length;
  let vala = capacityA,
    valb = capacityB;
  let res = 0;
  let posa = 0,
    posb = n - 1;
  while (posa < posb) {
    if (vala < plants[posa]) {
      res++;
      vala = capacityA - plants[posa];
    } else {
      vala -= plants[posa];
    }
    posa++;
    if (valb < plants[posb]) {
      res++;
      valb = capacityB - plants[posb];
    } else {
      valb -= plants[posb];
    }
    posb--;
  }
  if (posa == posb) {
    if (vala < plants[posa] && vala >= valb) {
      res++;
    } else if (valb < plants[posb] && valb > vala) {
      res++;
    }
  }
  return res;
};
let plants = [2,2,5,2,2]
let capacityA = 5,capacityB = 5;
console.log(minimumRefill(plants,capacityA,capacityB))

