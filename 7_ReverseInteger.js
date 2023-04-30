/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let charArray = Math.abs(x).toString().split("");
  let reversed = charArray.reverse().join("");
  let result = parseInt(reversed);

  let max = Math.pow(2, 31) - 1;
  let min = Math.pow(2, 31) * -1;

  if (result < min || result > max) {
    return 0;
  }
  return x < 0 ? result * -1 : result;
};
