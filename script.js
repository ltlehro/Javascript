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