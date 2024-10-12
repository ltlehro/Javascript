// Primitives as an object

let str = "Hello";

alert( str.toUpperCase() ); // HELLO

// ways to write a number

let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)

// e multiplies the number by 1 with the given zeroes count

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

// lets write 1 microsecond (one-millionth of a second)

let mсs = 0.000001;
let mcs = 1e-6; // five zeroes to the left from 1

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

// binary and octal form

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides

// toString(base)

let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

// use cases
// base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F
// base=2 is mostly for debugging bitwise operations, digits can be 0 or 1

// use two dots to call a method on primitives directly

alert( 123456..toString(36) ); // 2n9c

// toFixed always returns a string, remember to use unary plus

let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) ); // 0.3

// NaN is unique in that it does not equal anything, including itself

alert( NaN === NaN ); // false

// isNaN

alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

// isFinite

alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity

// parseInt and parseFloat

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

