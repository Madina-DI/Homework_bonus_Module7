function calculate(a, b, operator) {
    if (operator === "+") {
         return a+b;
    } else if (operator === "-") {
       return a-b;
    } else if (operator === "*") {
      return a*b;
    } else if (operator === "/") {
      return a/b;
    } else {
     return "Неверный оператор";
    }
  }
  
  var resultSum = [2, 3, "*"];
  var result = calculate.apply(null, resultSum);
  
  
  console.log (result)