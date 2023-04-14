/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
  const matchedBrackets = {
      ')' : '(',
      '}' : "{",
      ']' : '['
  }
  var stack = [];
  
  for (let i=0; i<s.length; i+=1 ) {
      
      if (stack.length >= 1 && stack[stack.length - 1] === matchedBrackets[s[i]]) {
          stack.pop();
      }
      else {
          stack.push(s[i]);
      }
  }
  
  return stack.length === 0 ? true : false;
};