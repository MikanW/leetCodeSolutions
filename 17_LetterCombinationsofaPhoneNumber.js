/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === null || digits.length === 0) {
    return [];
  }

  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const ret = [];

  const go = (index, char) => {
    if (index == digits.length) {
      ret.push(char);
      return ret;
    }

    for (let c of map[digits[index]]) {
      go(index + 1, char + c);
    }
  };

  go(0, "");

  return ret;
};
