/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replaceAll(" ", "");
  alphas = s.match(/[a-z0-9]+/gi);
  let ret = true;

  if (alphas) {
    str = alphas.join();
    str = str.replaceAll(",", "").toLowerCase();

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) {
        ret = false;
        break;
      } else {
        left += 1;
        right -= 1;
      }
    }
  }
  return ret;
};
