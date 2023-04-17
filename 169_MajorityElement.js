/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length <= 2) {
    return nums[0];
  }

  nums.sort();
  if (nums.length % 2 === 1) {
    return nums[Math.floor(nums.length / 2)];
  } else {
    return nums[nums.length / 2];
  }
};
