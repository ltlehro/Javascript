let user = {
    name: "John",
    age: 30,
    key: null,
  };
  
  user.key = prompt("What do you want to know about the user?", "name");
  
  // access by variable
  alert( user.key ); // John (if enter "name")SS