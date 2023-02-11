const reverseString = function(str) {
    if(str === ""){
        return "";
    }
    
    let rev_string = "";
    for (let i = str.length-1; i >= 0; i--){
        rev_string += str[i];
    }
    return rev_string;
};

// Do not edit below this line
module.exports = reverseString;
