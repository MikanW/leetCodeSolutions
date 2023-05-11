/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let index1 = 0,
    index2 = 0;
  let mergedArray = [];

  while (index1 < nums1.length && index2 < nums2.length) {
    if (nums1[index1] < nums2[index2]) {
      mergedArray.push(nums1[index1]);
      index1++;
    } else {
      mergedArray.push(nums2[index2]);
      index2++;
    }
  }

  if (index1 < nums1.length) {
    for (let i = index1; i < nums1.length; i++) {
      mergedArray.push(nums1[i]);
    }
  }
  if (index2 < nums2.length) {
    for (let j = index2; j < nums2.length; j++) {
      mergedArray.push(nums2[j]);
    }
  }

  if (mergedArray.length % 2 === 0) {
    return (
      (mergedArray[mergedArray.length / 2 - 1] +
        mergedArray[mergedArray.length / 2]) /
      2
    );
  } else {
    return mergedArray[Math.floor(mergedArray.length / 2)];
  }
};
