/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let map = new Map();
  let sum = n;

  while (sum != 1) {
    let newSum = 0;
    sum
      .toString()
      .split("")
      .forEach((a) => (newSum += a * a));

    if (map.has(newSum)) {
      return false;
    }
    map.set(newSum);
    sum = newSum;
  }
  return true;
};

// 重点在于只有两种情况。
// 要么等于1，要么会重复出现，所以需要一个检查重复的手段，比如map或set
