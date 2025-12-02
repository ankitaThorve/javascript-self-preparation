// Arrays -----
// An Array is an object type designed for storing data collections.
// Key characteristics of JavaScript arrays are:
// Elements: An array is a list of values, known as elements.
// Ordered: Array elements are ordered based on their index.
// Zero indexed: The first element is at index 0, the second at index 1, and so on.
// Dynamic size: Arrays can grow or shrink as elements are added or removed.
// Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).

// syntax -> const array_name = [item1, item2, ...]
// declare array with const keyword
const cars = ["saab", "volvo", "bmw"]; // create a js array
console.log(cars);

const bikes = []; // create an empty array
bikes[0] = "yamaha";
bikes[1] = "honda";
bikes[2] = "royal enfield";

console.log(bikes);

const company = new Array("google", "meta", "microsoft"); //using js new keyword
console.log(company);

// Accessing array elements ---- Array indexes start with 0.
let carIndex = cars[0];
console.log(`The first car is '${carIndex}'`);

// Changing an array element ---
company[0] = "jp morgan";
console.log(company);

// Converting an array to string ---
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// Arrays are Objects ----------
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// But, JavaScript arrays are best described as arrays.

// Arrays use numbers to access its "elements".

const person = { firstName: "john", lastName: "doe", age: 46 };
console.log(person.firstName); //Objects use names to access its "members"

// the length property --- The length property is always one more than the highest array index.
let length = fruits.length;
console.log(length);

console.log(fruits[0]); //frist array element
console.log(fruits[fruits.length - 1]); //last array element

fruits.push("Lemon");
console.log(fruits.toString());
fruits[fruits.length] = "Papaya";
console.log(fruits.toString());
fruits[9] = "Pomogranate";
console.log(fruits);

// JS new Array()----
const points = new Array(40, 100, 420);
// const point = [60]
const point = new Array(60);
console.log(point[0]);

// How to Recognize an Array
console.log(Array.isArray(point)); //Array.isArray()
console.log(fruits instanceof Array); // instanceof operator

// Nested Arrays and Objects ------
let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

for (let i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
  }
}

// console.log(x);

// Array Methods ----
let size = fruits.length;
console.log(size);

fruits.length = 5; //set length to array
console.log(fruits.toString());

let sec = fruits.at(2); //return indexed element | same as []
console.log(sec);

let join = fruits.join(" * "); //like toString(), but specify the separator
console.log(join);

console.log(fruits.pop()); //removes last element and returns the value that was "popped out"

let leng = fruits.push("Kiwi");
console.log(leng);
// console.log(fruits);
// restarted 01.11.2025
// back on 13.11.2025
// same on 28.11.2025
// 01.12.2025
fruits.shift(); //removes the first array element and "shifts" all other elements to a lower index
console.log(fruits);

let fShift = fruits.shift(); // returns the value that was "shifted out"
console.log(fShift);

fruits.unshift("guava"); //adds a new element to an array (at the beginning), and "unshifts" older elements
console.log(fruits.unshift("guava")); //returns the new array length

// Array length ---
fruits[fruits.length] = "grapes";
console.log(fruits);

// delete fruits[0]; //Using delete() leaves undefined holes in the array
console.log(fruits[0]);

// Merging Arrays (Concatenating) -----

const myGirl = ["Hema", "Ankita", "Mudra"];
const myBoy = ["Shubham", "Tushar", "Mahesh"];
const myChildren = myGirl.concat(myBoy);
console.log(myChildren);

// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.

const allBoys = myBoy.concat("Rugwed");
console.log(allBoys);

// console.log(fruits.copyWithin(1, 0)); //copies array elements to another position in an array

// Note
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
// The copyWithin() method does not change the length of the array.

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat(); //creates a new array with sub-array elements concatenated to a specified depth
console.log(newArr);

const newArr1 = newArr.flatMap((x) => [x * 10]); //first maps all elements of an array and then creates a new array by flattening the array
console.log(newArr1);

// Splicing and Slicing Arrays -------
fruits.splice(2, 0, "lemon", "kiwi"); //adds new items to an array
console.log(fruits);
const removed = fruits.splice(2, 2, "lemon", "kiwi");
console.log(removed);

fruits.splice(2, 0);
console.log(fruits);

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced);

const oneM = months.slice(1); //slices out a piece of an array into a new array
console.log(oneM);

const citrus = fruits.slice(1, 5); //selects elements from the start argument, and up to (but not including) the end argument
console.log(citrus);

const rest = fruits.slice(3); //slices out the rest of the array
console.log(rest);

// Automatic toString() ----
const myList = fruits.toString();
console.log(myList);
