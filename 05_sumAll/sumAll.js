const sumAll = function(startingNum, sumUpToNum) {
    let total = 0
    if(typeof(startingNum) !== "number" || typeof(sumUpToNum) !== "number"){
        return 'ERROR'
    }else if(startingNum > sumUpToNum){
        for(i=sumUpToNum;i<=startingNum;i++){
            total += i} 
    }else if(startingNum < sumUpToNum && startingNum > 0){
        for(i=startingNum;i<=sumUpToNum;i++){
            total += i}   
    }else{
            return 'ERROR'
    }
        return total 
}

// Do not edit below this line
module.exports = sumAll;
