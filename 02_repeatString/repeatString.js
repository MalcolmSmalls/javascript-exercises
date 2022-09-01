const repeatString = function(repeatedPhrase, numOfRepeats) {
    if(numOfRepeats < 0){
        return 'ERROR'
    }else{
        return repeatedPhrase.repeat(numOfRepeats)
    }

};

// Do not edit below this line
module.exports = repeatString;
