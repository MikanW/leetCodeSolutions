/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let map = new Map();

  for (let i = 0; i < chars.length; i++) {
    map.set(chars[i], i + 1);
  }
  let count = 0;
  let base = 0;
  let index = 0;
  let stack = columnTitle.split("");

  while (stack.length !== 0) {
    let currentChar = stack.pop();
    if (index === 0) {
      count += map.get(currentChar);
      base = 1;
    } else {
      base *= 26;
      count += base * map.get(currentChar);
    }
    index += 1;
  }
  return count;
};
