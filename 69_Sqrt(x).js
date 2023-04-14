/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let low = 0;
  let high = x;
  while( low <= high ) {
      const mid = Math.floor((high+low)/2); 
      if ( mid*mid <= x && (mid+1)*(mid+1) > x ) {
          return mid;
      }else if(mid*mid < x){
          low = mid+1;
      }else{
          high = mid-1;
      }
  }
};