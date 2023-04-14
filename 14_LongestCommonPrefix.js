/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix;
  
  if ( strs[0] === "" ){
      return "";
  }
  else{
      prefix = strs[0];   // prefixをstrs[0]の全長に初期値とする
  }
  
  // 次の文字列からチェックする
  for ( let i=1; i<strs.length; ++i) {
      
      if ( 0 === strs[i].length ){
          return "";
      }
      
      //　prefixチェック
      //　prefix全長が先頭から含まれていない限り、prefix最後尾の一文字削減し、再度チェックする
      while( 0 !== strs[i].indexOf( prefix ) ){  
          prefix = prefix.slice(0, prefix.length - 1);
          
          if( "" === prefix ){    // prefixがnull文字に削減される場合、共通prefix無しと判断し、""をリターンする
              return "";
          }
      }
  }
  return prefix;
};