/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let originalBits = n.toString(2).padStart(32, "0");
  let newBits = [];
  for (let i = 0; i < originalBits.length; i++) {
    newBits[originalBits.length - i] = originalBits[i];
  }
  return parseInt(newBits.join(""), 2);
};
