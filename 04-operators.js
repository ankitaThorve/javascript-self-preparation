// Assignment operator =
let x = 10; // assign the value 10 to x

// Addition operator +
let a = 2;
let b = 4;
let c = a + b; // 6

// Multiplication operator *
let q = 2;
let r = 10;
let p = q * r;

/*Types of JS Operators----
1. Arithmatic
2. Assignment
3. Comparison
4. Logical
*/

// String addition ---

let text1 = "hello";
let text2 = "world";
let text3 = text1 + " " + text2;

console.log(text3);

// concatinate string
let txt1 = "what a very ";
txt1 += "nice day"; // here + is concatination operator

console.log(txt1);

// add string and number
let e = 5 + 5;
console.log(e);
let f = "5" + 5;
console.log(f);
let g = "hello" + 5;
console.log(g);

//  Assignment Operators ---- += -= *= /= %= **=
let z = 10;
z += 5;
console.log(z);

// Arithmatic Operators ---------------------

/* 
+ addition
- substraction
* multiplication
/ division
** exponentiation
% modulus (division remainder)
++ increment
-- decrement
*/

let a1 = 100; // 100 is operand & + is operator
let b1 = 200;
let x1 = a1 + b1; // adding
console.log(x1);

let x2 = b1 - a1; // substracting
console.log(x2);

let x3 = a1 * b1; // multiplying
console.log(x3);

let x4 = b1 / a1; // dividing
console.log(x4);

let x5 = b1 % a1; // remainder
console.log(x5);

a1++;
let x6 = a1;
console.log(x6);

b1--;
let x7 = b1;
console.log(x7);
// document.getElementById("op").innerHTML = x7;

let z1 = a1 ** 2; // same result as Math.pow(a1**2)
console.log(z1);

let z2 = 5;
let z3 = Math.pow(z2, 2);
console.log(z3);

// Assignment Operators -------

/*
=
+=
-=
*=
**=
/=
%=
:
 */

//  Logical Assignment operators-------
/* 
&&=
||=
??= */

let q1 = 50;
let q2 = 10;

u1 = q1 += q2;
console.log(u1);

// u2 = q1 -= q2;
// console.log(u2);

// u1 = q1 *= q2;
// console.log(u1);

// u1 = q1 /= q2;
// console.log(u1);

// u1 = q1 %= q2;
// console.log(u1);

// console.log((q1 -= q2));

// String assignment operators ---------
let text11 = 'hie'
text11 += ' there'
console.log(text11)

// Logical AND Assignment---
let h = true
let k= h &&= 10
console.log(`Value of k: ${k}`)

// Logical OR Assignment---
let h1 = false
let k1= h1 ||= 10
console.log(`Value of k: ${k1}`)

// Nullish coalescing assignment operator----------
let h2;
h2 ??= 109
console.log(h2)

// Spread (...) operator----
let man = '12345678'
let min = Math.min(...man)
console.log(`Minimum: ${min}`)
let max = Math.max(...man)
console.log(`Maximum: ${max}`)

// Comparison operators -----
/*
== equal to
=== equal value and equal type
!= not equal to
!== not equal value or not equal type
> greater than
< less than
>= greater than or equal to
<= less than or equal to
*/

// strings compared alphabetically
console.log('a'<'b')
console.log('2'<'5')