const users = [
    { name: "John", age: 15, email: "john@example.com" },
    { name: "Alice", age: 20, email: "alice@example.com" },
    { name: "Bob", age: 17, email: "bob@example.com" }
  ];
  
  const usersAge = users.map(function(user) {
    return user.age < 18;
  });
  
  const userNames = users.map(function(user) {
    return user.name;
  });
  
  console.log("Пользователи с возрастом до 18 лет:", usersAge);
  console.log("Имена пользователей:", userNames);