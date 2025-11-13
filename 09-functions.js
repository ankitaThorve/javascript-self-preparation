// What are Functions?---
// Functions are fundamental building blocks in all programming.

// Functions enable better code organization, modularity, and efficiency.

// Functions are reusable block of code designed to perform a particular task.

// Functions execute when they are "called" or "invoked".

function myFunction(p1, p2) {
  return p1 * p2;
}
let result = myFunction(3, 4);
console.log(result);

// Convert Fahrenheit to Celsius:
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius(77);
console.log(value);

// Arrow Function
let myfun = (a, b) => a * b;
let val = myfun(2, 2);
console.log(val);

// Local Variables --------

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName

// Parameters vs Arguments ---
function greet(name, age) {
  //parameters
  return `hello ${name}!, You are ${age} years old. `;
}

let welcome = greet("ankita", 16); //arguments
console.log(welcome);

// Functions used as Variables ---
let temp = "The temperaturesis " + value + " Celsius.";
console.log(temp);

// Default parameter values --
function dePara(x, y = 10) {
  return x + y;
}
console.log(dePara(5));

// Rest Parameter (...)---
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 24.46, 87, 101);
console.log(x);

// find largest number ---
function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(findMax(5, 6, 7, 10, 4, 67));

// sum all input values ---
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumAll(2, 45, 61, 78, 109));

// Arrow functions ---
arrowFunc = (a, b) => a * b;
let result1 = arrowFunc(2, 3);
console.log(`The multiplication is: ${result1}.`);

// before arrow ---
let arrF1 = function (x, y) {
  return x * y;
};
let res1 = arrF1(1, 2);
console.log(`Using before arrow func: ${res1}`);

// with arrow function ----
let arrF2 = (o, p) => o * p;
let res2 = arrF2(1, 2);
console.log(`Using with arrow func: ${res2}`);

// Another before arrow func ---
let hello = function () {
  return "Hello World!!";
};
console.log(hello());

// Another with arrow func ---
let hello2 = () => {
  return "Hello World with arrow function!!";
};
console.log(hello2());

// Arrow Functions Return Value by Default ---- This works only if the function has only one statement.
let hello3 = () => "Hello world with return value by default";
console.log(hello3());

