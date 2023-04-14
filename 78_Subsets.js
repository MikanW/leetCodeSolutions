/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
  var genPowerSet = function(path, index) {
      powerSet.push(path);
      for(let i=index; i<nums.length; i++) {
          genPowerSet([...path, nums[i]], i+1);
      }
  };
  
  const powerSet = [];
  genPowerSet([], 0);
  
  return powerSet;
};