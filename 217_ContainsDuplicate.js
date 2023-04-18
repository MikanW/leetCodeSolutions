/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = [];

  for (let num of nums) {
    if (map[num] != undefined) {
      return true;
    } else {
      map[num] = 1;
    }
  }

  return false;
};

// 错误答案。原因：每个数字可能不止一位，全部连成一个字符串的话，只能判断1位数的情况。
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function (nums) {
//   nums.sort();
//   let str = nums.join("");
//   if (str.match(/([0-9])\1{1,}/g)) {
//     return true;
//   } else {
//     return false;
//   }
// };
