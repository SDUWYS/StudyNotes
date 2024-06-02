/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  let n = candyType.length;
  candyType.sort((a,b) => a - b);
  let eat = n / 2;
  let set = new Set();
  for (let i = 0; i < n; i++) {
    if(set.has(candyType[i])){
        continue;
    }else{
        set.add(candyType[i]);
    }
  }
  return eat > set.size ? set.size : eat;
};
