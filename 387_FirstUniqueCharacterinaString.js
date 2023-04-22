/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let sCopy = s.split("").sort().join("");
  sCopy = sCopy.replace(/([a-z])\1{1,}/g, "");
  let index = Number.MAX_SAFE_INTEGER;
  for (let char of sCopy) {
    let currentIndex = s.indexOf(char);
    if (currentIndex < index) {
      index = currentIndex;
    }
  }
  return index < Number.MAX_SAFE_INTEGER ? index : -1;
};

// Time limit exceeded
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var firstUniqChar = function (s) {
//   for (let i = 0; i < s.length; i++) {
//     let uniqueFlag = true;
//     for (let j = 0; j < s.length; j++) {
//       if (s[i] === s[j] && i !== j) {
//         uniqueFlag = false;
//       }
//     }
//     if (uniqueFlag === true) {
//       return i;
//     }
//   }
//   return -1;
// };
