/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ret = nums.reduce((a, b) => {
    return a ^ b;
  });

  return ret;
};
