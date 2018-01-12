/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  FIZZ BUZZ
  https://www.codewars.com/kata/fizz-buzz/train/javascript

  Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1.

  Replace certain values however if any of the following conditions are met:

  If the value is a multiple of 3: use the value 'Fizz' instead
  If the value is a multiple of 5: use the value 'Buzz' instead
  If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Return an array
function fizzbuzz(n) {
  return Array.from(Array(n).keys())
    .map(num => num + 1)
    .map(num => (
      num % 15 === 0 ? 'FizzBuzz'
      : num % 3 === 0 ? 'Fizz'
      : num % 5 === 0 ? 'Buzz'
      : num
    ));
}