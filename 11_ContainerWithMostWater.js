/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    if (area > max) {
      max = area;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};

// time limited exceeded
// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// var maxArea = function (height) {
//   let max = 0;
//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       let area = Math.min(height[i], height[j]) * (j - i);
//       if (area > max) {
//         max = area;
//       }
//     }
//   }
//   return max;
// };
