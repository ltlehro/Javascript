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

// advantage of using backticks is that they allow a string to span multiple lines

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines

//these two lines are equal, just written differently

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

alert(str1 == str2); // true

// Accessing characters

let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );

// iterate over characters using for..of

for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
  }

  // Strings can’t be changed in JavaScript. It is impossible to change a character
let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // doesn't work

// Methods toLowerCase() and toUpperCase() change the case

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
alert( 'Interface'[0].toLowerCase() ); // 'i'

// str.indexOf

let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive
alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

// find element at a position using indexOf

let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}

// more simpler algorithm

let str = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}

// with if test

let str = "Widget with id";

if (str.indexOf("Widget")) {
    alert("We found it"); // doesn't work!
}

// it returns index 0, but if considers 0 to be false

// we should actually check for -1, like this

if (str.indexOf("Widget") != -1) // works now

// includes, startsWith, endsWith

alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false

alert( "Widget".includes("id") ); // true

alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"

alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"

alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"

// getting a substring

let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

let str = "stringify";
alert( str.slice(2) ); // 'ringify', from the 2nd position till the end

let str = "stringify";

// start at the 4th position from the right, end at the 1st from the right

alert( str.slice(-4, -1) ); // 'gif'

let str = "stringify";

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// ...but not for slice:
alert( str.slice(2, 6) ); // "ring" (the same)
alert( str.slice(6, 2) ); // "" (an empty string)

//  strings algorithm

let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );

// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ


// function for converting first letter of string to uppercase

function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
alert( ucFirst("john") ); // John

// function to check for a particular substring in string

function checkSpam(str) {
let lowerStr = str.toLowerCase(); // for the search to be case-insensitive

return lowerStr.includes('javascript') || lowerStr.includes('dev');
}

alert( checkSpam('javascript fundamentals') );
alert( checkSpam('react dev') );
alert( checkSpam("innocent rabbit") );

// function to replace extra letters in a string to "..." using truncate

function truncate(str, maxlength) {
return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

// extract numeric value from a currency symbol value

function extractCurrencyValue(str) {
return +str.slice(1);
}

// declaring arrays

let arr = new Array();
let arr = [];

// initializing arrays

let fruits = ["Apple", "Orange", "Plum"];

// accessing array elements by index

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

// counting array elements using .length method

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits.length ); // 3

// accessing the whole array

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits ); // Apple,Orange,Plum

// arrays can store elements of any type

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello

// trailing comma style

let fruits = [
    "Apple",
    "Orange",
    "Plum",
  ];

// accessing the right array element using -1, as arrays start from index 0

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[fruits.length-1] ); // Plum

// using arr.at(i)

let fruits = ["Apple", "Orange", "Plum"];

// same as fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum

// array methods pop/push, shift/unshift

// pop extracts the last element of the array and returns it

let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.pop() ); // remove "Pear" and alert it

alert( fruits ); // Apple, Orange

/* fruits.pop() and fruits.at(-1) return the last element of
the array, but fruits.pop() also modifies the array by removing it */

// pushing an element onto the array (stack)

let fruits = ["Apple", "Orange"];

fruits.push("Pear");

alert( fruits ); // Apple, Orange, Pear

// shift (queue method) removes the first element (fifo) from the queue

let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.shift() ); // remove Apple and alert it

alert( fruits ); // Orange, Pear

// unshift adds the element to the beginning of the array

let fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear

// multiple elements can also be pushed and shifted from the arrays

let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );

// as arrays are also objects, they follow copy by reference

let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

alert( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

alert( fruits ); // Banana, Pear - 2 items now

/* ways to misuse an array

Add a non-numeric property like arr.test = 5.
Make holes, like: add arr[0] and then arr[1000] (and nothing between them)
Fill the array in the reverse order, like arr[1000], arr[999] and so on */

// accessing array elements using for loop

let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

// using for..of loop on arrays

let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}

// using for..in on arrays
// for..in iterates over all properties, not only the numeric ones
// for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower

let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}

// truncate array using .length

let arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
alert( arr ); // [1, 2]

arr.length = 5; // return length back
alert( arr[3] ); // undefined: the values do not return

// simplest way to clear the array is arr.length = 0

// second method for initialization

let arr = new Array(2); // will it create an array of [2] ?

alert( arr[0] ); // undefined! no elements.

alert( arr.length ); // length 2

// oops, that's how one can shoot themselves in the foot

// multi-dimensional arrays, arrays can store elements that are also arrays

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
alert( matrix[0][1] ); // 2, the second value of the first inner array

/*Arrays do not have Symbol.toPrimitive, neither a viable valueOf,
they implement only toString conversion, so here [] becomes an empty
string, [1] becomes "1" and [1,2] becomes "1,2" */

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"

// array [] gets converted to primitive for the purpose of comparison and becomes an empty string ''

alert( 0 == [] ); // true
alert('0' == [] ); // false

// after [] was converted to ''
alert( 0 == '' ); // true, as '' becomes converted to number 0

alert('0' == '' ); // false, no type conversion, different strings

// object referencing in arrays

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

alert( fruits.length ); // 4, because both variables reference to same object (array)

// pushing a function onto the array

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

/* we have a call of the function arr[2] as an object method.
Naturally, it receives this referencing the object arr and outputs the array */

arr[2](); // a,b,function(){...}

// creating a function that prompts for array elements and returns the array sum

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      // should we cancel?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );

// a maximal sub-array

function getMaxSubSum(arr) {
    let maxSum = 0; // if we take no elements, zero will be returned
  
    for (let i = 0; i < arr.length; i++) {  // O(n)
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) { // O(n)
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }

  // this method runs in O(n^2) because if we double the array size it will take 4x longer time
  
  alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  alert( getMaxSubSum([1, 2, 3]) ); // 6
  alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100

// fastest solution

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }

  // this algorithm requires exactly 1 array pass, so the time complexity is O(n)
  
  alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
  alert( getMaxSubSum([1, 2, 3]) ); // 6
  alert( getMaxSubSum([-1, -2, -3]) ); // 0

  // arr.splice method can do everything: insert, remove and replace elements

  let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert( arr ); // ["I", "JavaScript"]

// more complex example

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // now ["Let's", "dance", "right", "now"]

// check splices items

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

alert( removed ); // "I", "study" <-- array of removed elements

// insertion using slice method

let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"

// negative indexing

let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

alert( arr ); // 1,2,3,4,5

// arr.slice

let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arr.slice(-2) ); // s,t (copy from -2 till the end)

// arr.concat creates a new array that includes values from other arrays and additional items

let arr = [1, 2];

// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// for concatenating arrays with objects

let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

alert( arr.concat(arrayLike) ); // 1,2,[object Object]

// arr.forEach method for iteration

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

// indexOf and includes method

let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1
alert( arr.includes(1) ); // true

// lastIndexOf method checks for the index from the end

let fruits = ['Apple', 'Orange', 'Apple']

alert( fruits.indexOf('Apple') ); // 0 (first Apple)
alert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)

// find method finds an object with a specific condition

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John

// arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

// Find the index of the first John
alert(users.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
alert(users.findLastIndex(user => user.name == 'John')); // 3

// filter function

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2

// arr.map method calls the function for each element of the array and returns the array of results

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);

alert(lengths); // 5,7,6

// arr.sort

let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

alert( arr );  // 1, 15, 2

// items are sorted as strings by default

// to sort as numbers

function compareNumeric(a, b) {
  if (a > b) return 1; // checks if first number is greater than the later and returns true if it is
  if (a == b) return 0; // if both numbers are equal, then skip the execution
  if (a < b) return -1; // if first is smaller than the later, then dont swap
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr);  // 1, 2, 15

// for neater code, use arrow functions

arr.sort( (a, b) => a - b );

// using localeCompare

let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)

// arr.reverse

let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1

// split and join

let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}

// giving a numeric argument to split

let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

alert(arr); // Bilbo, Gandalf

// The call to split(s) with an empty s would split the string into an array of letters

let str = "test";

alert( str.split('') ); // t,e,s,t

// The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them

let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';'); // glue the array into a string using ;

alert( str ); // Bilbo;Gandalf;Nazgul











