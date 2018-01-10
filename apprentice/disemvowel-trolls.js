/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  DISEMVOWEL TROLLS
  https://www.codewars.com/kata/disemvowel-trolls/javascript

  Trolls are attacking your comment section!
  A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
  Your task is to write a function that takes a string and return a new string with all vowels removed.
  For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

  Note: for this kata y isn't considered a vowel.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* 
CLARIFY
  Write function that takes in string and returns same string but with vowels removed.
  
SAMPLE DATA AND SAMPLE RESULTS
  "ham"    -->    "hm"
  "It is raining"   -->  "t s rnng"
  "345"  --> "345"
  "" -->  ""

CODE CONSTRUCTS
  .split string into array of individual characters ("")  "ham" ->  ["h", "a", "m"]  
  .filter
  .replace
  Regular Expressions 

PSEUDO CODE
  fn (str) {
    split "" --> array
    filter out vowels --> rry
    join ""
  }
*/

function noTrolls(str) {
    var array = str.split("");
    var rry = array.filter(function(item) {
      return ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].indexOf(item) == -1;
    });
    var newStr = rry.join("");
    return newStr;
  }
  
  
  
  /*
    .replace and a Regular Expression
      With .replace, the first parameter is the thing to replace.
      All Regular Expressions start and end with a slash.
      The square brackets mean "look for any of these things".
      The "g" after the final slash is a global option. Without it, we are only checking for and replacing the first instance of any vowel we find. With it, we are checking for all instances.
      
      The second .replace parameter is what to replace the first parameter with. 
      Here, we replace any vowel we find with an empty string to remove it.
  */
  function noTrolls(str) {
    return str.replace(/[AEIOUaeiou]/g, "");
  }
  
  
  
  /*
    .replace, Regular Expression, and .includes (with arrow function and ternary)
    This one uses a much easier Regular Expression. We start and end with slashes like always, and we use the "g" option after to do a global search for all instances, and we use a period (.) which is a wildcard. What this says is "look at every single character in the string".
    For the second parameter, we use an arrow function to tell .replace what to replace each character in the string with. Here, our arrow function looks at each character (x), and it checks a string of vowels to see if it includes the character we are looking at. If so, the function returns an empty string to replace the character. Otherwise, it returns the character itself with no change.
  */
  function noTrolls(str) {
    return str.replace(/./g, x => "AEIOUaeiou".includes(x) ? "" : x);
  }
  
  
  
  /*
    Loop, if, and .replace
    First, a loop. Did you know you can loop through strings?
    Here is a long (but simple) if statement that looks for all vowels.
    If a vowel is found, we use .replace to replace that character.
    I added i-- to make sure our loop takes a step back each time it removes a vowel. I did this because removing a vowel shortens the string and could potentially cause our loop to skip over a vowel. For example, if two vowels are together and the first is removed, the second is now at the index where the first was, so if we don't make the loop go back one index, that second vowel will not be noticed by the loop.
  */
  function noTrolls(str) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] === 'a' || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U") {
        str = str.replace(str[i], "");
        i--;
      }
    }
    return str;
  }
  
  
  
  /*
    while loop, .includes, .replace
    Here I used ten while loops, one for each vowel (upper case and lower case). 
    A while loop continues to run code as long as the stuff in parentheses is still true. So the first loop will continue to replace "a" with "" as long as the string includes "a".
    A while loop is helpful because we need to replace all instances of each vowel. Without something like a loop, a simple .replace would just replace the first instance of that thing.
  */
  function noTrolls(str) {
    while (str.includes("a")) {
      str = str.replace("a", "");
    }
    while (str.includes("e")) {
      str = str.replace("e", "");
    }
    while (str.includes("i")) {
      str = str.replace("i", "");
    }
    while (str.includes("o")) {
      str = str.replace("o", "");
    }
    while (str.includes("u")) {
      str = str.replace("u", "");
    }
    while (str.includes("A")) {
      str = str.replace("A", "");
    }
    while (str.includes("E")) {
      str = str.replace("E", "");
    }
    while (str.includes("I")) {
      str = str.replace("I", "");
    }
    while (str.includes("O")) {
      str = str.replace("O", "");
    }
    while (str.includes("U")) {
      str = str.replace("U", "");
    }
    return str;
  }
  
  
  
  noTrolls("It is raining");