/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[0] === 0) {
      nums.shift();
      nums.push(0);
    } else {
      break;
    }
  }
  return;
};
