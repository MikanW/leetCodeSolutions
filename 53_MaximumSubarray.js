/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var max = -Number.MAX_VALUE;
  var prev = 0;
  
  for(var i=0; i<nums.length; ++i) {
      prev = Math.max( (prev+nums[i]), nums[i]);
      max = Math.max( prev, max );
  }
  return max;
};