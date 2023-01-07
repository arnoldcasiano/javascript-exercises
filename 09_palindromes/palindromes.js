const palindromes = function (string) {
    // makes string an array
    let strArray = string.split('');
    // new array to add characters w/ out punctuation
    let newStrArray = []; 
    let punctuation = ['!', ',', ' ', '.'];

    strArray.forEach(char => {
        // if char is not included in punctuation, add that char to the new array
        if (!punctuation.includes(char)) {
            newStrArray.push(char);
        }
    });

    // temp string before lower casing all letters to determine if it's a palindrome 
    let tempStr = newStrArray.join('');
    let newStr = tempStr.toLocaleLowerCase();

    // reverse the newStr 
    let reversed = newStr
        .split('')
        .reverse()
        .join('');

    return newStr === reversed ? true : false;
};


// Do not edit below this line
module.exports = palindromes;
