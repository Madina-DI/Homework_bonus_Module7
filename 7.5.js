function ProcessNumbers(numbers) {
    const sortedArr = numbers.sort((firstNumber, secondNumber) => firstNumber - secondNumber); 
    let uniqueArray = [];
    for (let i = 0; i < sortedArr.length; i++) {
        if (i === 0 || sortedArr[i] !== sortedArr[i - 1]) {
          uniqueArray.push(sortedArr[i]);
        }
      }
    return(uniqueArray)
  }
  var numbers = [7, 3, 3, 5, 9, 6, 2, 4, 4, 8];
  
  
  console.log(ProcessNumbers(numbers))
  