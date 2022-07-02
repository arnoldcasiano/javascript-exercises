const removeFromArray = function(...values) {
    const array = values[0];
    const newArray = [];
    array.forEach(value => {
        if (!values.includes(value)) {
            newArray.push(value);
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
