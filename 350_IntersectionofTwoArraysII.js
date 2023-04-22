/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let ret = [];
  nums1.sort(function (a, b) {
    return a - b;
  });
  nums2.sort(function (a, b) {
    return a - b;
  });
  let current1 = 0,
    current2 = 0;

  while (current1 < nums1.length && current2 < nums2.length) {
    if (nums1[current1] === nums2[current2]) {
      ret.push(nums1[current1]);
      current1++;
      current2++;
    } else if (nums1[current1] > nums2[current2]) {
      current2++;
    } else {
      current1++;
    }
  }
  return ret;
};
