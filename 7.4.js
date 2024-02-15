function setFullName(fullName) {
    this.fullName = fullName;
  } 

  var person = {};

  var setPersonFullName = setFullName.bind(person);
  
  setPersonFullName("John Smith");

  console.log(person.fullName);