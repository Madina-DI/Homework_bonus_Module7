function myFunc(stringArg, objArg) {
    return objArg.hasOwnProperty(stringArg);
  }
  
  const myObj = {name: "Marta"};
  console.log(myFunc("name",myObj));