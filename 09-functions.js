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
