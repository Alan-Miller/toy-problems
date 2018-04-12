/*
  Write a function that accepts an array of 24 numbers. 
  These numbers are tomorrow's prices for a given stock, one for each hour.
  Your function should determine the best time to buy and sell.
  HINT: You can't sell before you buy.
  Return an array with the buy time and sell time.
*/

// let prices = [34, 39, 35, 37, 2, 200, 1000, 23, 77, 500, 1, 39, 44, 21]
let prices = [1051, 1070, 2000, 77, 50, 949, 1000, 23, 1, 10]
const t = [10, 9, 8, 7, 6, 5, 5, 5, 7, 5, 8, 4, 4, 3, 2, 1, 1, 3, 8, 7, 7, 1, 7, 5]
// const t = [5, 5, 5, 7, 5, 8, 4, 4, 3, 2, 1, 1, 3, 8, 7, 7, 1, 7, 5, 7, 7, 10, 3, 1]

// REFACTORED SOLUTION
function ticker(t) {
  let buy, sell, low
  buy = sell = low = 0
  for (let i = 0; i < t.length; i++) {
    if (t[i] < t[low]) low = i 
    if (t[i] - t[low] > t[sell] - t[buy]) {
      buy = low
      sell = i
    }
  }
  console.log(t[buy], t[sell], t[low])
  return [buy, sell]
}
ticker(t)






// EARLY SOLUTION
// function ticker(p) {
//   let buy, sell, maybeBuy, maybeSell
//   buy = sell = maybeBuy = maybeSell = 0
  
//   for (let i = 0; i < prices.length; i++) {
//     maybeSell = i
//     if (prices[i] > prices[sell]) sell = i
//     if (prices[i] < prices[maybeBuy]) maybeBuy = i
//     if ((prices[maybeSell] - prices[maybeBuy]) > (prices[sell] - prices[buy])) {
//       buy = maybeBuy
//       sell = maybeSell
//     }
//   }
//   return [buy, sell]
// }
// ticker(prices)
