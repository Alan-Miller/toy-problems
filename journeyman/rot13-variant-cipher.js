/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  ROT13 VARIANT CIPHER
  https://www.codewars.com/kata/rot13-variant-cipher/train/javascript

  You have been recruited by an unknown organization for your cipher encrypting/decrypting skills.
  Being new to the organization they decide to test your skills.
  Your first test is to write an algorithm that encrypts the given string in the following steps.

  The first step of the encryption is a standard ROT13 cipher. This is a special case of the caesar cipher where the letter is encrypted with its key that is thirteen letters down the alphabet,
  i.e. A => N, B => O, C => P, etc..

  Part two of the encryption is to take the ROT13 output and replace each letter with its exact opposite. A => Z, B => Y, C => X.
  The return value of this should be the encrypted message.

  Do not worry about capitalization or punctuation. All encrypted messages should be lower case and punctuation free.
  As an example, the string "welcome to our organization" should return "qibkyai ty ysv yvgmzenmteyz".

  Good luck, and congratulations on the new position.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function encrypter(string) {
  return string.replace(/[a-z]/g, x => {
    const abc = 'abcdefghijklmnopqrstuvwxyz'
    let index = abc.indexOf(x) + 13
    const rot = index > 25 ? abc[index - 26] : abc[index]
    return abc.split('').reverse().join('').charAt(abc.indexOf(rot))
  })
}