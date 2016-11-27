/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  ROTATE TO THE MAX
  https://www.codewars.com/kata/rotate-to-the-max/train/javascript

  Description:

  Task

  Given a number, return the maximum value by rearranging it's digits.

  Examples:

  (123) => 321 (786) => 876 ("001") => 100 (999) => 999 (10543) => 54310
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const rotateToMax = n => {
  return Number(n.toString().split('').sort().reverse().join(''));
};
