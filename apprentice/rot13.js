/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  ROT13
  https://www.codewars.com/kata/rot13-2/train/javascript

  Description:

  Write function rot13 that encode given string using ROT13 cipher. Encode only lowercase characters ([a-z]).
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function rot13(s) {
  return s.replace(/[a-z]/g, function(x) {
  	return 'abcdefghijklmnopqrstuvwxyz'.charAt('nopqrstuvwxyzabcdefghijklm'.indexOf(x));
  });
}