/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let number = parseInt(s);
  if (isNaN(number)) {
    return 0;
  }
  if (number > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if (number < Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  }

  return number;
};
