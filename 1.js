function func(obj){
    obj.person = "Moscow";
   }
   const person = {}
   const student = Object.create(person);
   
   student.ownCity = "Piter";
   func(student);
   console.log(student.person);