/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longestStr = "";

  const findLongestPalindrome = function (str, left, right) {
    while (left >= 0 && right <= str.length && str[left] === str[right]) {
      left -= 1;
      right += 1;
    }
    return str.slice(left + 1, right);
  };

  for (let i = 0; i < s.length; i++) {
    current1 = findLongestPalindrome(s, i, i);
    current2 = findLongestPalindrome(s, i, i + 1);
    const currentLongStr =
      current1.length > current2.length ? current1 : current2;
    longestStr =
      currentLongStr.length > longestStr.length ? currentLongStr : longestStr;
  }
  return longestStr;
};
