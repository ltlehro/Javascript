// postfx and prefix

let x = 1, y = 1;

alert( ++x ); // 2, prefix form returns the new value
alert( y++ ); // 1, postfix form returns the old value

alert( x ); // 2, incremented once
alert( y ); // 2, incremented once

let counter = 1;
alert( 2 * ++counter ); // 4

counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value

// Chaining Assignments

let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4

// Modify in Place

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14

// String Comparison

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

// Comparison of different types

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

// Strict Equality

alert( 0 === false ); // false, because the types are different
alert( null === undefined ); // false
alert( null == undefined ); // true, not a strict equality check

// Multiple if-else

if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}

// Conditional Operatoe

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

let result = (a + b < 4) ? 'Below' : 'Over';

let message1 = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

  // || OR operator

let hour1 = 12;
let isWeekend = true;

if (hour1 < 10 || hour1 > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}

// OR checks for first truthy value

alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

// Another Example

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

// && AND operator

let hour2 = 12;
let minute = 30;

if (hour2 == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

// ! NOT operator

alert( !true ); // false
alert( !0 ); // true

// !! can convert value to a boolean type

alert( !!"non-empty string" ); // true
alert( !!null ); // false

alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false

// Check the login

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}

// Nullish Coalescing Operator

let firstName1 = null;
let lastName1 = null;
let nickName1 = "Supercoder";

// shows the first defined value:
alert(firstName1 ?? lastName1 ?? nickName1 ?? "Anonymous"); // Supercoder

// Comparison with OR
let firstName2 = null;
let lastName2 = null;
let nickName2 = "Supercoder";

// shows the first truthy value:
alert(firstName2 || lastName2|| nickName2 || "Anonymous"); // Supercoder

// Another Example
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

// While Loop

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

// Do While

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

// For Loop

let i = 0;

for (i = 0; i < 3; i++) { // use an existing variable
  alert(i); // 0, 1, 2
}

alert(i); // 3, visible, because declared outside of the loop

// Breaking the loop

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );

// Continue Statement

for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}

// Decreasing Nesting

for (let i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i );
  }

}

// Breaking nested loop using label

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');

// Prime numbers using label

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}

// Switch Statement

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

// Without break statement (Would print all values)

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}

// Case Grouping

let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

// Case statement always checks for strict equality

let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' ); // as arg returns a string "3" so its not a number its a string
    break;
  default:
    alert( 'An unknown value' );
}

// Converting Switch into IF (Switch)

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

// Converting Switch into IF (IF)

if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}




