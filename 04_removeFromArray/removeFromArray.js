const removeFromArray = function() {
    const temp = Array.from(arguments);

    for(let i = 1; i < temp.length; i++){
        const index = arguments[0].indexOf(temp[i]);
        if( index === -1){
            continue;
        }
        if (arguments[0][index] !== temp[i]){
            continue;
        }
        arguments[0].splice(index, 1);
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
