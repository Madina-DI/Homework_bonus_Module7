function printInfo() {
    console.log("Name:", this.name, "Age:", this.age);
  }
  
  var person = {
      name: "Andrei",
      age: 18,
  };
  
  printInfo.call(person);
  