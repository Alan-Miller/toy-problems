/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  SHORT LONG SHORT
  https://www.codewars.com/kata/short-long-short/train/javascript

  Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length0).

  For example:

  solution("1", "22") // returns "1221"
  solution("22", "1") // returns "1221"
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function solution(a, b){
  return a.length > b.length ? b + a + b : a + b + a;
}