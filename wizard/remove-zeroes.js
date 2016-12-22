/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  REMOVE ZEROES
  https://www.codewars.com/kata/remove-zeros/train/javascript

  Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

  For example, the following array

  [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

  is transformed into

  [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

  Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

  You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function removeZeros(array) {

  for (var i = 0; i < array.length - 1; i++) {
    if ((array[i] == '0' || array[i] === 0) && shouldBeSentBack(i)) {
      moveItBack(i);
      i--;
    }
  }

  function shouldBeSentBack(index) {
    if (index === array.length - 1) return false;
    for (var i = index + 1; i <= array.length - 1; i++) {
      if (array[i] !== 0 && array[i] !== '0') return true;
    }
    return false;
  }

  function moveItBack(index) {
    var moveThis = array[index];
    for (var i = index; i < array.length - 1; i++) {
      array[i] = array[i + 1];
    }
    array[array.length - 1] = moveThis;
    return array;
  }

  return array;
}