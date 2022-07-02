/* FUNCTION USING BUILT IN REPEAT FUNCTION
const repeatString = function(string, num) {
    if (num >= 0) {
        let str = string.repeat(num);
        return str;
    } else if (num < 0) {
        return 'ERROR';
    } else if (string == '') {
        return '';
    }
}; */

// NOT USING BUILT IN REPEAT FUNCTION
const repeatString = function(string, num) {
    let newStr = '';
    
    if (num >= 0) {
        for (let i = 0; i < num; ++i) {
            newStr += string;
        }
        return newStr;
    } else {
        return 'ERROR';
    }
};


// Do not edit below this line
module.exports = repeatString;
