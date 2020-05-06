const removeFromArray = function() {
    let args = Array.from(arguments);

    // saves & removes the first element of the array (the starting array)
    let array = args.splice(0, 1)[0];
    
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (args[i] == array[j]) {
                array.splice(j, 1);
            }
        }
    }
    
    return array;
}

module.exports = removeFromArray
