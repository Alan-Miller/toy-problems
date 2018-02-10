/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  WORKING WITH ARRAYS II (AND WHY YOUR CODE FAILS IN SOME KATAS)
  https://www.codewars.com/kata/working-with-arrays-ii-and-why-your-code-fails-in-some-katas/train/javascript
  
  In this kata the function returns an array like the one passed to it but with its nth element removed (with 0 <= n <= array.length - 1). The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

  Good luck!
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function removeNthElement(arr, n) {
  const arrCopy = arr.slice();
  arrCopy.splice(n, 1);
  return arrCopy;
}