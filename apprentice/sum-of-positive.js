/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  SUM OF POSITIVE
  https://www.codewars.com/kata/sum-of-positive/train/javascript

  Description:

  You get an array of numbers, return the sum of all of the positives ones.

  Example [1,-4,7,12] => 1 + 7 + 12 = 20

  Note: array may be empty, in this case return 0.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function positiveSum(arr) {
  arr = arr.filter(function(c) {
    return c >= 0;
  })
  return !arr.length ? 0 : arr.reduce(function(a, b) {
    return a + b;
  });
}
