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

console.log(typeof Infinity);

// Number Methods ---
// toString()
let g = 123;
console.log(g.toString() + "\n" + (100 + 23).toString());

// toExponential()
let k = 9.653;
console.log(k.toExponential());

// toFixed()
console.log(k.toFixed());

// toPrecision()
console.log(k.toPrecision(2));

// valueOf()
console.log(k.valueOf());

// Converting variables to numbers ----
console.log(`${Number(true)}\n${Number(false)}\n${Number("10")}\n${Number(
  "   10"
)}\n${Number("10.33")}\n${Number("10,33")}\n${Number("John")}
} `);

// parseInt()
// parseFloat()

// Number.isInteger()
console.log(Number.isInteger(10))
console.log(Number.isInteger(10.59))

console.log(Number.isFinite(10))

console.log(Number.isNaN(9))

console.log(Number.isSafeInteger(10))
console.log(Number.isSafeInteger(0))


// Number properties ---
console.log(Number.MAX_VALUE)
console.log(x.MAX_VALUE)

console.log(Number.MIN_VALUE)
console.log(x.MIN_VALUE)

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)