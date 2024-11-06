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

// error in accessing object property that does not exist

let user = {}; // a user without "address" property

alert(user.address.street); // Error!

// optional chaining

let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)

// for document based javascript

let html = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element

// it even works if user does not exists, it simplt returns undefined instead of error

let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

// optional chaining should not be over-used
// optional chaining short circuits the evaluation

let user = null;
let x = 0;

user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

alert(x); // 0, value not incremented

// optional chaining has no use on left side of assignment

let user = null;

user?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"

// symbol (unique identifier)

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

// they don't auto-convert into strings

let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

// we have to manually convert it into a string

let id = Symbol("id");
alert(id.toString()); // Symbol(id), now it works

// symbols can addd hidden properties to objects

let user = { // belongs to another code
  name: "John"
};

let id = Symbol("id");

user[id] = 1;

alert( user[id] ); // we can access the data using the symbol as the key

// conflicting id's if we use direct strings instead of symbols

let user = { name: "John" };

// Our script uses "id" property
user.id = "Our id value";

// ...Another script also wants "id" for its purposes...

user.id = "Their id value"

// Boom! overwritten by another script!

// we can use Symbol to avoid this conflict

// symbols are skipped in for...in loop

let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works

alert( "Direct: " + user[id] ); // Direct: 123

// object assign copies both string and symbolic properties

let id = Symbol("id");
let user = {
  [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] ); // 123

// global symbols (using symbol.for)

// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert( id === idAgain ); // true

// symbol.keyfor does not work for local symbols

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined, not global

alert( localSymbol.description ); // name

// object conversion

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

// filter anagrams using map

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // split the word by letters, sort them and join back
    let sorted = word.toLowerCase().split('').sort().join(''); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );

// spliting logic into multiple lines

let sorted = word // PAN
  .toLowerCase() // pan
  .split('') // ['p','a','n']
  .sort() // ['a','n','p']
  .join(''); // anp


// using array instead of map, beause keys are strings

function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );

// get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push

let map = new Map();let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
alert(visitedSet.has(john)); // true

// check if Mary visited?
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
alert(visitedSet.has(john)); // true

// check if Mary visited?
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically

alert(keys); // name, more

// store unread flags

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// two messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages has 2 elements

// ...let's read the first message again!
readMessages.add(messages[0]);
// readMessages still has 2 unique elements

// answer: was the message[0] read?
alert("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// two messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages has 2 elements

// ...let's read the first message again!
readMessages.add(messages[0]);
// readMessages still has 2 unique elements

// answer: was the message[0] read?
alert("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// now readMessages has 1 element (technically memory may be cleaned later)
// now readMessages has 1 element (technically memory may be cleaned later)

// Sum the properties

function sumSalaries(salaries) {

  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; // 650
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

// Array destructuring

// we have an array with a name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith

// using split

let [firstName, surname] = "John Smith".split(' ');
alert(firstName); // John
alert(surname);  // Smith

// Unwanted elements of the array can also be thrown away via an extra comma:

// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul

// Assign to anything at the left-side

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

alert(user.name); // John
alert(user.surname); // Smith

// destructuring objects

let user = {
  name: "John",
  age: 30
};

// loop over the keys-and-values
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}

// swapping variables trick

let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane (successfully swapped!)

// rest operator
// Usually, if the array is longer than the list at the left, the “extra” items are omitted.

let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar
// Further items aren't assigned anywhere

// using ...rest

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is an array of items, starting from the 3rd one
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2


