/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) {
    return false;
  }
  currentNum = 1; // 3^0

  while (currentNum !== n) {
    if (currentNum > n) {
      return false;
    }
    currentNum = currentNum * 3;
  }
  return true;
};
