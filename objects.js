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

// Object referencing or copying

let user = { name: "John" };

let admin = user; // copy the reference

// Changing name by reference

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference

// independent objects cannot be equal

let a = {};
let b = {}; // two independent objects

alert( a == b ); // false

// same objects can be equal 

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

// const objects can be modified because its still referencing to same object

const user = {
    name: "John"
  };
  
  user.name = "Pete"; // (*)
  
  alert(user.name); // Pete

// merging or cloning two objects

let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  
  alert( user.name ); // still John in the original object

  // using object.assign to copy props

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true

// object cloning using object.assign

let user = {
    name: "John",
    age: 30
  };
  
  let clone = Object.assign({}, user);
  
  alert(clone.name); // John
  alert(clone.age); // 30

  // Nested Cloning (error)

  let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
  
  alert( user.sizes === clone.sizes ); // true, same object
  
  // user and clone share sizes
  user.sizes.width = 60;    // change a property from one place
  alert(clone.sizes.width); // 60, get the result from the other one

  // Structured Clone (for individual nested properties)

  let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = structuredClone(user);
  
  alert( user.sizes === clone.sizes ); // false, different objects
  
  // user and clone are totally unrelated now
  user.sizes.width = 60;    // change a property from one place
  alert(clone.sizes.width); // 50, not related

  // Interlinked objects
  // resulting memory structure will be a interconnected tree

  function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });

  // removing relations from the tree

  delete family.father;
  delete family.mother.husband;

  // Object Methods

  user = {
    sayHi() { // same as "sayHi: function(){...}"
      alert("Hello");
    }
  };

  // This keyword, used to access the object in method

  let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      alert(this.name);
    }
  
  };
  
  user.sayHi(); // John

  // "this" is not bound, can be used in any functions that are not methods

  let user = { name: "John" };
  let admin = { name: "Admin" };

  function sayHi() {
    alert( this.name );
  }

  // use the same function in two objects
  user.f = sayHi;
  admin.f = sayHi;

  // these calls have different this
  // "this" inside the function is the object "before the dot"

  user.f(); // John  (this == user)
  admin.f(); // Admin  (this == admin)

  admin['f'](); // Admin (dot or square brackets access the method – doesn't matter

  // calling this without object prop will be undefined

  function sayHi() {
    alert(this);
  }
  
  sayHi(); // undefined

  // Arrow functions don't have their own "this"

  let user = {
    firstName: "Zayn",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
  };
  
  user.sayHi(); // Zayn

  // returning this from outer function

  function makeUser() {
    return {
      name: "Zayn",
      ref() {
        return this;
      }
    };
  }
  
  let user = makeUser();
  
  alert( user.ref().name ); // Zayn

  // creating a calculator using methods

  let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );\

  // Chaining (Ladder Problem)

  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
  
  ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

  // Constructor function
  // uses 'this' to initialize multiple objects
  // first letter is capital for constructor functions

  function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Jack");
  
  alert(user.name); // Jack
  alert(user.isAdmin); // false

  // logic behind constructor function

  function User(name) {

    // this = {};  (implicitly)
  
    // add properties to this

    this.name = name;
    this.isAdmin = false;
  
    // return this;  (implicitly)
  }

  // let user = new User("Jack") gives same result as

  let user = {
    name: "Jack",
    isAdmin: false
  };

  // create a function and immediately call it with new

  let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
};

// automate new object creation if not called with 'new'

function User(name) {
  if (!new.target) { // if you run me without new
    return new User(name); // ...I will add new for you
  }

  this.name = name;
}

let john = User("John"); // redirects call to new User
alert(john.name); // John

/* not a good thing to use everywhere, because
omitting new makes it a bit less obvious what’s going on.
With 'new' we all know that the new object is being created.*/

// constructors do not have a return statement because it returns object instead of this
// for instance 

function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // returns this object
}

alert( new BigUser().name );  // Godzilla, got that object

// omitting parantheses

let user = new User; // no parentheses
// same as
let user = new User();

// flexibility of constructor functions

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/

// two functions, one object

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

// constructor function calculator

function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// constructor function accumulator

function Accumulator(startingValue) {
  this.value= startingValue

  this.read= function() {
    this.value += +prompt('how much to add?', 0)
  }
}

let accumulator = new Accumulator(2);
accumulator.read()
accumulator.read()

alert(accumulator.value) // 4



