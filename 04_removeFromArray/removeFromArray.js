const removeFromArray = function(array, ...removedItems) {
    newArr = []
    array.forEach(item => {
      if(removedItems.includes(item) === false){
        newArr.push(item)
      }
    })
    return newArr
  };

// Do not edit below this line
module.exports = removeFromArray;
