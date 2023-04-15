/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let buy = 0;
  let sell = 1;

  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      max = Math.max(max, prices[sell] - prices[buy]);
    } else {
      buy = sell;
    }

    sell++;
  }
  return max;
};

// Old solution: time limit exceeded

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
//   let max = 0;

//   for ( let i=0; i<prices.length; i++ ) {
//     for ( let j=i+1; j<prices.length; j++ ) {
//       if ( prices[j] - prices[i] > max ) {
//         max = prices[j] - prices[i];
//       }
//     }
//   }
//   return max;
// };
