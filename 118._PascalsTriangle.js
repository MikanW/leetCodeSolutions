/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) {
    return [[1]];
  }
  if (numRows === 2) {
    return [[1], [1, 1]];
  }

  let ret = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    let currentArray = [];
    for (let j = 0; j < ret[i - 1].length - 1; j++) {
      currentArray.push(ret[i - 1][j] + ret[i - 1][j + 1]);
    }
    ret.push([1, ...currentArray, 1]);
  }
  return ret;
};
