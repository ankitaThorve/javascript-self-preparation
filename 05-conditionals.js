// if condition ------
if (new Date().getHours() > 18) {
  console.log("Good evening!");
}

let age = 8;
let text = "You can not drive";

if (age >= 18) {
  text = "You can drive";
}

console.log(text);

// Nested if --------------
let ageY = 16;
let country = "India";
let msg = "You can not drive";

// if (country == 'India') {
//   if (ageY >= 16) {
//     msg='You can drive!'
//   }
// }
// console.log(msg)

// with AND && operator-------

if (country == "India" && ageY >= 16) {
  msg = "You can drive!!!";
}
console.log(msg);

// if else statement ----
const hour = new Date().getHours();
let greetings;

if (hour < 18) {
  greetings = "Good day";
} else {
  greetings = "good evening";
}

console.log(greetings);

// else if statement ----
const time = new Date().getHours();
let greet;

if (time < 10) {
  greet = "Good morning";
} else if (time < 20) {
  greet = "Good day";
} else {
  greet = "Good evening";
}

console.log(greet);

let text2;
if (Math.random() < 0.5) {
  text2 = '<a href="#">Visit Google</a>';
} else {
  text2 = '<a href="#">Visit Youtube</a>';
}

console.log(text2);

// Ternary operator -----
// shorthand for if...else

let snip = age < 18 ? "Minor" : "Adult";
console.log(snip);

// ----
let price = 10;
let isMember = false;
let discount = isMember ? 0.2 : 0;
let total = 10 - price * discount;

console.log(total);

// switch statement ---
let day;
let date = new Date().getDay();

switch (date) {
  case 0:
    day = "Sunday";
    break;
  // case 1:
  //   day ='Monday'
  //   break;
  // case 2:
  //   day ='Tuesday'
  //   break;
  // case 3:
  //   day ='Wednesday'
  //   break;
  // case 4:
  //   day ='Thursday'
  //   break;
  // case 5:
  //   day ='Friday'
  //   break;
  case 6:
    day = "Saturday";
    break;

  default:
    day = "Looking forward to the weekend";
    break;
}

console.log(`Today is ${day}`);

// strict comparision ---
let x = "0";
switch (x) {
  case 0:
    light = "off";
    break;
  case 1:
    light = "on";
    break;
  default:
    light = "No value found";
    break;
}
console.log(light);

// Boolean ----
// true or false
/*
use cases
- true or false
- yes or no
- on or off
 */

let f = 5;
// console.log(f == 8);
// console.log(f != 8);
// console.log(f > 8);
// console.log(f < 8);

console.log(Boolean(3 > 1)); //Boolean function

console.log(10 < 7);

// EVERYTHING WITH A 'value' IS true -----
console.log(`every value is TRUE`);
console.log(Boolean(100));
console.log(Boolean(3.14));
console.log(Boolean(-15));
console.log(Boolean("hello"));
console.log(Boolean("false"));
console.log(Boolean(1 + 7 + 3.14));

// EVERYTHING WITHOUT A 'value' IS false -----
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));
console.log(Boolean(10 / "hallo"));

let j = false; // Boolean
console.log(typeof j);
let i = new Boolean(false); // Object
console.log(typeof i);

// Logical JS ------

console.log(6 < 10 && 3 > 1);
console.log(6 > 0 || -3 > 0);
console.log(!(5 == 8));

// Nullish Coalescing Operator (??) ----
let name = null;
let status = "missing";
let result = name ?? status;
console.log(`The name is ${result}`)