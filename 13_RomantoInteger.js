/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let num = 0;
  
  const romans = {
      "I" : 1,
      "V" : 5,
      "X" : 10,
      "L" : 50,
      "C" : 100,
      "D" : 500,
      "M" : 1000
  };
  
  for( let i = 0; i<s.length; i+=1 ) {
      if ( romans[s[i]] < romans[s[i+1]] ) {
          num -= romans[s[i]];
      }
      else {
          num += romans[s[i]];
      }
  }
  return num;
};