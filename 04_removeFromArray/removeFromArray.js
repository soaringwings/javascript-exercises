const removeFromArray = function(array, ...removedValues) {
    for (const removedValue of removedValues) {
        array = array.filter(function(value) {
            return value !== removedValue;
        })
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;

