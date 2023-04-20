/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  if (nums[0] !== 0) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] === undefined) {
      return nums[i] + 1;
    }
    if (nums[i + 1] !== nums[i] + 1) {
      return nums[i] + 1;
    }
  }
};
