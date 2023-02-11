const repeatString = function(str, num) {
    if(num < 0){
        return "ERROR";
    }

    let repeat = "";
    while (num > 0){
        repeat+=str;
        num--;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
