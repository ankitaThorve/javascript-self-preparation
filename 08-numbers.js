// Numbers in JS---
// Most programming languages have many number types:

// Whole numbers (integers):
// byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

// Real numbers (floating-point):
// float (32-bit), double (64-bit).

// Javascript numbers are always double (64-bit floating point).

let x = 0.2 + 0.1;
console.log(x);
let y = (0.2 * 10 + 0.1 * 10) / 10;
console.log(y);

// Numbers are added. Strings are concatenated.
console.log(10 + 20); //number
console.log("10" + "20"); //string

// NaN - Not a Number
let u = 100 / "apple";
console.log(u);
console.log(isNaN(u));

console.log(typeof NaN); //number

//Infinity ---
// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

let myNum = 2;
let txt = "";
while (myNum != Infinity) {
  myNum = myNum * myNum;
  txt = txt + myNum + "\n";
}
console.log(txt);

console.log(typeof Infinity)