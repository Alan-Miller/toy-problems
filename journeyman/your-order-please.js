/*———————————————————————————————————————————————————————————————*
    YOUR ORDER PLEASE
    https://www.codewars.com/kata/your-order-please/train/javascript
    
    Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

    Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

    If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

    For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
/*———————————————————————————————————————————————————————————————*/

var words = '3a is2 T4est Thi1s';

// TRY 1
function order(words) {
    const objArry = words.split(' ').map(x => ({
        orig: x,
        filt: +(x.split('').filter(c => +c)[0])
    }));

    var sortedObjArry = objArry.sort((a, b) => a.filt - b.filt);
    return sortedObjArry.map(obj => obj.orig).join(' ');
}

// TRY 2 (refactor of TRY 1)
function order(words) {
    return words.split(' ').map(word => ({
        orig: word,
        filt: +(word.split('').filter(char => +char)[0])
    })).sort((a, b) => a.filt - b.filt).map(obj => obj.orig).join(' ');
}

// TRY 3
function order(words) {
    return words.split(' ').sort((a, b) => a.replace(/\D/g, '') - b.replace(/\D/g, '')).join(' ');
}

order(words);