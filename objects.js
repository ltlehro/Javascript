// Creating a new object

let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

// Literals and Properties

let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };

  // Multi-line property name

  let user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
  };

  // Square bracket notation

  let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

// Assigning key for runtime

let user = {
    name: "John",
    age: 30
  };
  
  let key = prompt("What do you want to know about the user?", "name");
  
  // access by variable
  alert( user[key] ); // John (if enter "name")

  // Computed property

  let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

// Adding prop on runtime

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;

// IN operator

let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

// another example

let user = { age: 30 };

let key = "age";
alert( key in user ); // true, property "age" exists

// for-in loop

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
  }

  // Object Order

  let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let code in codes) {
    alert(code); // 1, 41, 44, 49
  }

  // Converting phone codes to string for default order

  let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  
  for (let code in codes) {
    alert( +code ); // 49, 41, 44, 1
  }

  // Check if object contains props

  function isEmpty(obj) {
    for (let key in obj) {
      // if the loop has started, there is a property
      return false;
    }
    return true;
  }

  // Find sum of salaris stored in an object

  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum); // 390

// Multiply only numeric values by 2 

function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }




